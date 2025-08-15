#!/bin/bash

chopt_cmd="wine CHOpt.exe"
yaml_file="gh3_songs.yml"

rm -rf paths
rm -f final_output.txt

original_dir=$(pwd)

# Check if yq is installed
if ! command -v yq &> /dev/null; then
    echo "yq is required but not installed. Please install yq (https://mikefarah.gitbook.io/yq/)"
    exit 1
fi

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null || ! command -v identify &> /dev/null; then
    echo "ImageMagick is required but not installed. Please install ImageMagick (https://imagemagick.org/)"
    exit 1
fi

find . -type f -name "*.mid.qb.xen" | while read -r chart_file; do
    chart_base=$(basename "$chart_file")
    shortname="${chart_base%.mid.qb.xen}"

    # Grab title and artist from YAML
    title=$(yq e ".${shortname}.title" "$yaml_file")
    artist=$(yq e ".${shortname}.artist" "$yaml_file")

    echo "Processing: $shortname -> Title: $title | Artist: $artist"

    clean_title=$(echo "$shortname" | iconv -f utf-8 -t ascii//TRANSLIT | \
                  sed -e 's/[^[:alnum:]?[:space:]]//g' -e 's/ /_/g' | tr '[:upper:]' '[:lower:]')

    guitar_output="${clean_title}_guitar.png"

    # Run CHOpt
    chopt_output=$($chopt_cmd -f "$chart_file" --engine gh3 -o "$guitar_output")

    # Extract clean gpath
    guitar_path=$(echo "$chopt_output" | \
    grep -v "Optimising" | \
    sed -e 's/\r//g' -e 's/ ([^(]*)//g' | \
    awk '/^Total score:/ {next} !/^Path:|^No SP score:/ {
        gsub(/: /, "/", $0);
        gsub(/: /, ",", $0);
        gsub("/ ", "/", $0);
        gsub(/\n/, "", $0);
        gsub(/^[ \t]+|[ \t]+$/, "");
        if (NR > 1 && items) printf ", ";
        printf "%s", $0;
        items=1
    } END {if (NR > 0) printf "\n"}')

    # Extract clean gscore
    guitar_score=$(echo "$chopt_output" | awk '/^Total score:/ {print $NF; exit}' | tr -d '\r')

    guitar_path_image="'$guitar_output'"

    title_artist="$title by $artist"

    # --- Image Modification: Add white bar + title and artist text with custom font ---
    width=$(identify -format "%w" "$guitar_output")
    font_path="./Bordello.otf"

    if [ ! -f "$font_path" ]; then
        echo "Font file '$font_path' not found. Please place Bordello.otf in the script directory."
        exit 1
    fi

    # Prepare combined text (title + artist) on two lines
    label_text="$title\n$artist"

    magick "$guitar_output" \
        \( -size ${width}x100 xc:white \) \
        -gravity north -composite \
        -gravity north \
        -font "$font_path" -fill black -pointsize 36 \
        -annotate +0+10 "$label_text" \
        "$guitar_output"

    # Final JSON-like output
    template='{ value : "'"$title_artist"'", 
        data : {
        shortname : "'"$shortname"'",
        title : "'"$title"'",
        artist : "'"$artist"'",
        gpath : "'"$guitar_path"'",
        gscore : "'"$guitar_score"'",
        g_image : "'"${guitar_path_image}"'"
    }},'

    echo "$template" >> "$original_dir/final_output.txt"
done

# Move PNGs to paths folder
mkdir -p "$original_dir/paths"
find . -type f -name "*.png" -exec mv {} "$original_dir/paths" \;

echo "Done."
