import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import puppeteer from "puppeteer";

// --- Config ---
const YAML_FILE = "./gh3song_leaderboards.yml";
const OUTPUT_DIR = path.join(process.cwd(), "leaderboards");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// --- Helper function to scrape a single leaderboard ---
async function scrapeLeaderboard(baseUrl) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const allData = [];

  // Loop over the first 2 pages
  for (let pageNum = 1; pageNum <= 2; pageNum++) {
    const url = pageNum === 1 ? baseUrl : `${baseUrl}&page=${pageNum}`;
    const page = await browser.newPage();

    try {
      console.log(`Scraping ${url}...`);
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForSelector("table", { timeout: 15000 });
    } catch (err) {
      console.error(`Timeout loading ${url}:`, err);
      await page.close();
      continue; // skip to next page instead of failing
    }

    const data = await page.evaluate(() => {
      const rows = Array.from(document.querySelectorAll("table tr")).slice(1);
      return rows
        .map((row) => {
          const cols = row.querySelectorAll("td");
          if (!cols || cols.length < 11) return null;
          const rankText = cols[0].innerText.trim();
          if (!/^\d/.test(rankText)) return null;
          return {
            rank: rankText,
            player: cols[1].innerText.trim(),
            score: cols[3].innerText.trim(),
            Percent: cols[7].innerText.trim(),
            platform: cols[2].innerText.trim(),
          };
        })
        .filter(Boolean);
    });

    allData.push(...data);
    await page.close();
  }

  await browser.close();
  return allData;
}

// --- Helper function with retries ---
async function scrapeWithRetry(url, maxRetries = 3) {
  let attempt = 0;
  while (attempt < maxRetries) {
    attempt++;
    console.log(`Scraping ${url} (Attempt ${attempt})...`);
    try {
      const data = await scrapeLeaderboard(url);
      if (data.length > 0) {
        return data;
      }
      console.warn(`No entries found on attempt ${attempt}.`);
    } catch (err) {
      console.error(`Error scraping ${url} (Attempt ${attempt}):`, err.message);
    }
  }
  console.error(`Failed to scrape ${url} after ${maxRetries} attempts.`);
  return null; // signal failure
}

// --- Main function ---
async function main() {
  console.log("Reading YAML file...");
  const fileContents = fs.readFileSync(YAML_FILE, "utf8");
  const leaderboardsYAML = yaml.load(fileContents);

  for (const [shortname, info] of Object.entries(leaderboardsYAML)) {
    if (!info.leaderboards) {
      console.log(`Skipping ${shortname}, no leaderboard URL found.`);
      continue;
    }

    console.log(`Scraping ${shortname} from ${info.leaderboards}...`);
    const leaderboard = await scrapeWithRetry(info.leaderboards, 3);

    if (leaderboard && leaderboard.length > 0) {
      const outPath = path.join(
        OUTPUT_DIR,
        `${shortname}_all_leaderboards.json`
      );
      fs.writeFileSync(
        outPath,
        JSON.stringify({ entries: leaderboard }, null, 2)
      );
      console.log(`Saved ${outPath} with ${leaderboard.length} entries.`);
    } else {
      console.warn(
        `⚠️ Skipping save for ${shortname}, scraping failed after retries.`
      );
    }
  }

  console.log("Done!");
}

main();