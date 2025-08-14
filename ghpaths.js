const songs = [
{ value : "Minus Celsius", 
        data : {
        shortname : "minuscelsius",
        title : "Minus Celsius",
        artist : "Backyard Babies",
        gpath : "2/3rd RBO, 2/4.4 beats after 1st GYO, 2/NN, 1/NN, 2/4th R",
        gscore : "282181",
        g_image : "'minuscelsius_guitar.png'"
    }},
{ value : "Sleeping Giant", 
        data : {
        shortname : "dlc13",
        title : "Sleeping Giant",
        artist : "Mastodon",
        gpath : "3/2nd G, 3/1st RYB, 2/1st GRY, 4/1st RYB, 2/5th Y, 2/NN",
        gscore : "491747",
        g_image : "'dlc13_guitar.png'"
    }},
{ value : "Jukebox Hero", 
        data : {
        shortname : "dlc24",
        title : "Jukebox Hero",
        artist : "Foreigner",
        gpath : "3/2nd O, 3/4th G, 2/0.4 beats after 1st G",
        gscore : "245381",
        g_image : "'dlc24_guitar.png'"
    }},
{ value : "Violet Hill", 
        data : {
        shortname : "dlc71",
        title : "Violet Hill",
        artist : "Coldplay",
        gpath : "4/1st RY, 2/1st G, 2/1st YO",
        gscore : "161370",
        g_image : "'dlc71_guitar.png'"
    }},
{ value : "(We Are) The Road Crew", 
        data : {
        shortname : "dlc46",
        title : "(We Are) The Road Crew",
        artist : "Motörhead",
        gpath : "2/25th R, 3/5th B, 2/After 0.72 beats",
        gscore : "260259",
        g_image : "'dlc46_guitar.png'"
    }},
{ value : "Suicide & Redemption J.H.", 
        data : {
        shortname : "dlc92",
        title : "Suicide & Redemption J.H.",
        artist : "Metallica",
        gpath : "2/38th R, 2/1st YO, 2/9th YB, 2/3rd O, 2/40th R, 2/36th R, 3/2nd GR",
        gscore : "719143",
        g_image : "'dlc92_guitar.png'"
    }},
{ value : "Famous for Nothing", 
        data : {
        shortname : "dlc38",
        title : "Famous for Nothing",
        artist : "Dropkick Murphys",
        gpath : "2/2nd YBO, 3/2nd YBO, 3/2nd RB",
        gscore : "458910",
        g_image : "'dlc38_guitar.png'"
    }},
{ value : "Pink", 
        data : {
        shortname : "pink",
        title : "Pink",
        artist : "Aerosmith",
        gpath : "3/1st O, 2/7.7 beats after NN, 3/NN",
        gscore : "264986",
        g_image : "'pink_guitar.png'"
    }},
{ value : "She Sells Sanctuary", 
        data : {
        shortname : "shesellssanctuary",
        title : "She Sells Sanctuary",
        artist : "The Cult",
        gpath : "2/15th YB, 2/1st RYB, 2/4th Y, 2/6th RY, 2/NN, 2/1st RYB",
        gscore : "384406",
        g_image : "'shesellssanctuary_guitar.png'"
    }},
{ value : "Excuse Me Mr.", 
        data : {
        shortname : "dlc29",
        title : "Excuse Me Mr.",
        artist : "No Doubt",
        gpath : "2/6th RY, 2/5th RY, 4/8th RB",
        gscore : "353576",
        g_image : "'dlc29_guitar.png'"
    }},
{ value : "Through the Fire and Flames", 
        data : {
        shortname : "thrufireandflames",
        title : "Through the Fire and Flames",
        artist : "DragonForce",
        gpath : "3/19th Y, 2/2nd RY, 2/1.4 beats after 2nd GRY, 1/NN, 2/8th B, 2/9th R, 1/17th R, 3/2nd G, 2/NN, 3/3rd O, 4/1st YB",
        gscore : "990070",
        g_image : "'thrufireandflames_guitar.png'"
    }},
{ value : "Stricken", 
        data : {
        shortname : "stricken",
        title : "Stricken",
        artist : "Disturbed",
        gpath : "2/NN, 2/2nd GRB, 3/NN, 2/1st GYB, 2/NN",
        gscore : "540492",
        g_image : "'stricken_guitar.png'"
    }},
{ value : "Tom Morello Guitar Battle", 
        data : {
        shortname : "dlc1",
        title : "Tom Morello Guitar Battle",
        artist : "Tom Morello",
        gpath : "2/1st G, 2/5th Y, 2/NN, 2/NN, 3/NN, 1/NN",
        gscore : "440516",
        g_image : "'dlc1_guitar.png'"
    }},
{ value : "The Number of the Beast", 
        data : {
        shortname : "numberofthebeast",
        title : "The Number of the Beast",
        artist : "Iron Maiden",
        gpath : "2/7th YB, 2/2nd RBO, 2/12th RBO, 3/34th RBO",
        gscore : "627092",
        g_image : "'numberofthebeast_guitar.png'"
    }},
{ value : "My Apocalypse", 
        data : {
        shortname : "dlc83",
        title : "My Apocalypse",
        artist : "Metallica",
        gpath : "3/2nd G, 2/3rd RYB, 2/3rd G, 2/2.7 beats after 2nd R, 3/9th G",
        gscore : "558429",
        g_image : "'dlc83_guitar.png'"
    }},
{ value : "All Day and All of the Night", 
        data : {
        shortname : "alldayandallofthenight",
        title : "All Day and All of the Night",
        artist : "The Kinks",
        gpath : "3/NN, 1/5th R, 3/11th YO",
        gscore : "247872",
        g_image : "'alldayandallofthenight_guitar.png'"
    }},
{ value : "Impulse", 
        data : {
        shortname : "impulse",
        title : "Impulse",
        artist : "An Endless Sporadic",
        gpath : "2/10th R, 3/2nd G, 2/3rd O, 3/After 0 beats",
        gscore : "337766",
        g_image : "'impulse_guitar.png'"
    }},
{ value : "Super Massive Black Hole", 
        data : {
        shortname : "dlc35",
        title : "Super Massive Black Hole",
        artist : "Muse",
        gpath : "3/NN, 2/2nd G, 2/5th B, 2/NN",
        gscore : "177674",
        g_image : "'dlc35_guitar.png'"
    }},
{ value : "The Metal", 
        data : {
        shortname : "themetal",
        title : "The Metal",
        artist : "Tenacious D",
        gpath : "2/20th GR, 2/1st RYB, 2/2nd GR, 2/1st G",
        gscore : "288066",
        g_image : "'themetal_guitar.png'"
    }},
{ value : "Nothing for Me Here", 
        data : {
        shortname : "nothingformehere",
        title : "Nothing for Me Here",
        artist : "Dope",
        gpath : "2/1st YO, 2/10th RY, 3/3rd BO, 2/8th R",
        gscore : "287279",
        g_image : "'nothingformehere_guitar.png'"
    }},
{ value : "Bulls on Parade", 
        data : {
        shortname : "bullsonparade",
        title : "Bulls on Parade",
        artist : "Rage Against the Machine",
        gpath : "3/After 0 beats, 2/After 0.51 beats, 3/NN",
        gscore : "289899",
        g_image : "'bullsonparade_guitar.png'"
    }},
{ value : "The Pretender", 
        data : {
        shortname : "dlc4",
        title : "The Pretender",
        artist : "Foo Fighters",
        gpath : "2/9th GY, 3/16th GY, 3/9th GY, 2/NN, 3/15th GY, 2/NN",
        gscore : "614123",
        g_image : "'dlc4_guitar.png'"
    }},
{ value : "The Day That Never Comes", 
        data : {
        shortname : "dlc86",
        title : "The Day That Never Comes",
        artist : "Metallica",
        gpath : "3/7th BO, 2/3rd RYB, 2/0.72 beats after 4th RO, 1/38th G, 2/2nd Y, 2/1st YB, 4/NN, 2/0.4 beats after 4th YB",
        gscore : "626942",
        g_image : "'dlc86_guitar.png'"
    }},
{ value : "Personality Crisis", 
        data : {
        shortname : "personalityCrisis",
        title : "Personality Crisis",
        artist : "New York Dolls",
        gpath : "",
        gscore : "",
        g_image : "'personalitycrisis_guitar.png'"
    }},
{ value : "Go That Far", 
        data : {
        shortname : "gothatfar",
        title : "Go That Far",
        artist : "Bret Michaels Band",
        gpath : "2/2nd B, 2/3.2 beats after 5th O, 3/11th Y",
        gscore : "218716",
        g_image : "'gothatfar_guitar.png'"
    }},
{ value : "Cliffs of Dover", 
        data : {
        shortname : "cliffsofdover",
        title : "Cliffs of Dover",
        artist : "Eric Johnson",
        gpath : "2/7th R, 2/7th Y, 2/6th R, 2/10th Y, 2/2nd R, 2/NN, 2/16th R",
        gscore : "323382",
        g_image : "'cliffsofdover_guitar.png'"
    }},
{ value : "Don't Speak", 
        data : {
        shortname : "dlc30",
        title : "Don't Speak",
        artist : "No Doubt",
        gpath : "3/NN, 3/NN, 2/4th R, 2/1st RB",
        gscore : "421934",
        g_image : "'dlc30_guitar.png'"
    }},
{ value : "In Love", 
        data : {
        shortname : "inlove",
        title : "In Love",
        artist : "Scouts of St. Sebastian",
        gpath : "2/NN, 4/17th RYB, 2/9th O",
        gscore : "282998",
        g_image : "'inlove_guitar.png'"
    }},
{ value : "Radio Song", 
        data : {
        shortname : "radiosong",
        title : "Radio Song",
        artist : "Superbus",
        gpath : "2/7th RB, 2/1st RO, 2/After 0 beats, 2/9th Y",
        gscore : "198951",
        g_image : "'radiosong_guitar.png'"
    }},
{ value : "Putting Holes In Happiness", 
        data : {
        shortname : "dlc16",
        title : "Putting Holes In Happiness",
        artist : "Marilyn Manson",
        gpath : "2/NN, 2/10th G, 3/5th GB",
        gscore : "325862",
        g_image : "'dlc16_guitar.png'"
    }},
{ value : "Top Gun Anthem", 
        data : {
        shortname : "dlc74",
        title : "Top Gun Anthem",
        artist : "",
        gpath : "2/NN, 2/1st GRB, 2/9th B, 2/NN",
        gscore : "218647",
        g_image : "'dlc74_guitar.png'"
    }},
{ value : "Antisocial", 
        data : {
        shortname : "dlc9",
        title : "Antisocial",
        artist : "Trust",
        gpath : "2/7th R, 3/19th R, 3/3rd B, 2/9th R, 2/20th G",
        gscore : "409230",
        g_image : "'dlc9_guitar.png'"
    }},
{ value : "Take This Life", 
        data : {
        shortname : "takethislife",
        title : "Take This Life",
        artist : "In Flames",
        gpath : "2/NN, 2/1st YB, 3/12th G, 3/0.72 beats after 2nd RYB, 3/1st GY",
        gscore : "566374",
        g_image : "'takethislife_guitar.png'"
    }},
{ value : "No Surprize", 
        data : {
        shortname : "nosurprize",
        title : "No Surprize",
        artist : "Aerosmith",
        gpath : "1/13th GR, 2/1st GR, 2/1st RY, 1/3rd RB, 2/24th BO",
        gscore : "366760",
        g_image : "'nosurprize_guitar.png'"
    }},
{ value : "Shoot the Runner", 
        data : {
        shortname : "dlc68",
        title : "Shoot the Runner",
        artist : "Kasabian",
        gpath : "2/10th Y, 3/1.6 beats after 7th R, 3/NN",
        gscore : "179192",
        g_image : "'dlc68_guitar.png'"
    }},
{ value : "I'm in the Band", 
        data : {
        shortname : "imintheband",
        title : "I'm in the Band",
        artist : "The Hellacopters",
        gpath : "2/NN, 3/4th B, 2/0.72 beats after 1st GY, 2/20th RB",
        gscore : "310439",
        g_image : "'imintheband_guitar.png'"
    }},
{ value : "Beyond Beautiful", 
        data : {
        shortname : "BeyondBeautiful",
        title : "Beyond Beautiful",
        artist : "Aerosmith",
        gpath : "",
        gscore : "",
        g_image : "'beyondbeautiful_guitar.png'"
    }},
{ value : "Sabotage", 
        data : {
        shortname : "sabotage",
        title : "Sabotage",
        artist : "Beastie Boys",
        gpath : "2/NN, 2/3rd R, 3/28th GY",
        gscore : "306258",
        g_image : "'sabotage_guitar.png'"
    }},
{ value : "The Unforgiven III", 
        data : {
        shortname : "dlc90",
        title : "The Unforgiven III",
        artist : "Metallica",
        gpath : "3/1st R, 2/3rd R, 2/9th R, 2/1.3 beats after 3rd RY, 2/1st BO, 2/13th Y",
        gscore : "434577",
        g_image : "'dlc90_guitar.png'"
    }},
{ value : "Black Sunshine", 
        data : {
        shortname : "blacksunshine",
        title : "Black Sunshine",
        artist : "White Zombie",
        gpath : "2/NN, 2/5 beats after 1st RYB, 2/0.75 beats after 1st O, 3/13th G, 2/7th B",
        gscore : "291022",
        g_image : "'blacksunshine_guitar.png'"
    }},
{ value : "Hier kommt Alex", 
        data : {
        shortname : "hierkommtalex",
        title : "Hier kommt Alex",
        artist : "Die Toten Hosen",
        gpath : "2/4th YB, 3/0.68 beats after 1st GR, 2/2nd RY, 3/NN",
        gscore : "465758",
        g_image : "'hierkommtalex_guitar.png'"
    }},
{ value : "Anarchy in the U.K.", 
        data : {
        shortname : "anarchyintheuk",
        title : "Anarchy in the U.K.",
        artist : "Sex Pistols",
        gpath : "2/0.52 beats after 21st RY, 2/2nd GY, 2/16th RB, 2/3rd O",
        gscore : "333732",
        g_image : "'anarchyintheuk_guitar.png'"
    }},
{ value : "Reptilia", 
        data : {
        shortname : "reptilia",
        title : "Reptilia",
        artist : "The Strokes",
        gpath : "3/NN, 2/21st Y, 2/23rd Y",
        gscore : "230980",
        g_image : "'reptilia_guitar.png'"
    }},
{ value : "Ernten Was Wir Säen", 
        data : {
        shortname : "dlc26",
        title : "Ernten Was Wir Säen",
        artist : "Die Fantastischen Vier",
        gpath : "2/9th B, 2/1st GY, 3/NN, 2/1st O, 3/NN, 2/2nd BO, 2/1st GY, 3/1st GB, 4/2nd B, 2/NN",
        gscore : "763837",
        g_image : "'dlc26_guitar.png'"
    }},
{ value : "Dream Police", 
        data : {
        shortname : "dreampolice",
        title : "Dream Police",
        artist : "Cheap Trick",
        gpath : "2/4th GY, 2/2nd R, 3/After 0 beats, 3/3rd GY",
        gscore : "275463",
        g_image : "'dreampolice_guitar.png'"
    }},
{ value : "Pretty Handsome Awkward", 
        data : {
        shortname : "dlc11",
        title : "Pretty Handsome Awkward",
        artist : "The Used",
        gpath : "2/NN, 2/NN, 2/After 0 beats, 2/After 0.36 beats, 2/2nd GY",
        gscore : "308872",
        g_image : "'dlc11_guitar.png'"
    }},
{ value : "God Put A Smile Upon Your Face", 
        data : {
        shortname : "dlc73",
        title : "God Put A Smile Upon Your Face",
        artist : "Coldplay",
        gpath : "3/1st GYB, 2/1st YB, 2/1st YBO, 2/4th YBO",
        gscore : "346480",
        g_image : "'dlc73_guitar.png'"
    }},
{ value : "Surfing With The Alien", 
        data : {
        shortname : "dlc62",
        title : "Surfing With The Alien",
        artist : "Joe Satriani",
        gpath : "3/1st B, 2/NN, 2/11th B, 2/5th Y, 2/NN, 2/8th Y",
        gscore : "338071",
        g_image : "'dlc62_guitar.png'"
    }},
{ value : "Love in an Elevator", 
        data : {
        shortname : "loveinanelevator",
        title : "Love in an Elevator",
        artist : "Aerosmith",
        gpath : "2/NN, 2/3rd B, 2/7th B, 4/32nd YB",
        gscore : "446528",
        g_image : "'loveinanelevator_guitar.png'"
    }},
{ value : "Dream On", 
        data : {
        shortname : "dlc37",
        title : "Dream On",
        artist : "Aerosmith",
        gpath : "2/NN, 2/After 1.7 beats, 2/After 0 beats, 2/After 0 beats, 2/4th RO",
        gscore : "235127",
        g_image : "'dlc37_guitar.png'"
    }},
{ value : "Mama Kin", 
        data : {
        shortname : "mamakin",
        title : "Mama Kin",
        artist : "Aerosmith",
        gpath : "3/2nd RB, 2/2nd GY, 2/0.56 beats after 7th YB, 2/3rd R",
        gscore : "421023",
        g_image : "'mamakin_guitar.png'"
    }},
{ value : "Kings and Queens (Credits)", 
        data : {
        shortname : "KingsAndQueensCredits",
        title : "Kings and Queens (Credits)",
        artist : "Aerosmith",
        gpath : "",
        gscore : "",
        g_image : "'kingsandqueenscredits_guitar.png'"
    }},
{ value : "Nine Lives", 
        data : {
        shortname : "dlc49",
        title : "Nine Lives",
        artist : "Def Leppard",
        gpath : "2/7th R, 2/After 0.52 beats, 2/NN, 2/NN",
        gscore : "241444",
        g_image : "'dlc49_guitar.png'"
    }},
{ value : "Rock and Roll All Nite", 
        data : {
        shortname : "rocknrollallnite",
        title : "Rock and Roll All Nite",
        artist : "Kiss",
        gpath : "2/3.6 beats after 1st GR, 2/After 2.6 beats, 2/NN, 3/9th Y, 1/0.8 beats after 1st B",
        gscore : "237362",
        g_image : "'rocknrollallnite_guitar.png'"
    }},
{ value : "Can't Be Saved", 
        data : {
        shortname : "cantbesaved",
        title : "Can't Be Saved",
        artist : "Senses Fail",
        gpath : "2/NN, 2/NN, 2/5th YO, 2/1st YBO",
        gscore : "294110",
        g_image : "'cantbesaved_guitar.png'"
    }},
{ value : "Metal Heavy Lady", 
        data : {
        shortname : "metalheavylady",
        title : "Metal Heavy Lady",
        artist : "Lions",
        gpath : "2/NN, 2/0.72 beats after 1st GY, 2/NN, 3/NN",
        gscore : "194010",
        g_image : "'metalheavylady_guitar.png'"
    }},
{ value : "Black Magic Woman", 
        data : {
        shortname : "blackmagicwoman",
        title : "Black Magic Woman",
        artist : "Santana",
        gpath : "3/NN, 2/1st R, 2/NN, 3/13 beats after NN, 2/NN, 1/3rd Y",
        gscore : "266509",
        g_image : "'blackmagicwoman_guitar.png'"
    }},
{ value : "Before I Forget", 
        data : {
        shortname : "beforeiforget",
        title : "Before I Forget",
        artist : "Slipknot",
        gpath : "2/NN, 2/2nd G, 3/NN, 3/16th Y, 2/1st YBO, 2/6th B",
        gscore : "568198",
        g_image : "'beforeiforget_guitar.png'"
    }},
{ value : "All My Life", 
        data : {
        shortname : "dlc3",
        title : "All My Life",
        artist : "Foo Fighters",
        gpath : "3/0.68 beats after 2nd RYO, 2/6th RB, 2/40th RB, 1/2nd RBO, 2/NN",
        gscore : "603928",
        g_image : "'dlc3_guitar.png'"
    }},
{ value : "Operation Ground and Pound", 
        data : {
        shortname : "dlc81",
        title : "Operation Ground and Pound",
        artist : "DragonForce",
        gpath : "3/NN, 1/1st O, 2/2nd YO, 1/6th R, 2/7th R, 2/2nd O, 2/1st R, 2/13th B, 2/1st R, 2/After 7.5 beats, 2/After 1.6 beats, 2/1st O",
        gscore : "907686",
        g_image : "'dlc81_guitar.png'"
    }},
{ value : "Kings and Queens", 
        data : {
        shortname : "KingsAndQueens",
        title : "Kings and Queens",
        artist : "Aerosmith",
        gpath : "",
        gscore : "",
        g_image : "'kingsandqueens_guitar.png'"
    }},
{ value : "The Seeker", 
        data : {
        shortname : "theseeker",
        title : "The Seeker",
        artist : "The Who",
        gpath : "2/After 0 beats, 3/1st RY, 3/3rd YO, 2/6th GY",
        gscore : "343516",
        g_image : "'theseeker_guitar.png'"
    }},
{ value : "Photograph (Live)", 
        data : {
        shortname : "dlc50",
        title : "Photograph (Live)",
        artist : "Def Leppard",
        gpath : "3/8th O, 2/NN, 2/0.64 beats after 1st B, 2/3rd R, 2/1st GB",
        gscore : "322351",
        g_image : "'dlc50_guitar.png'"
    }},
{ value : "Almost Easy", 
        data : {
        shortname : "dlc32",
        title : "Almost Easy",
        artist : "Avenged Sevenfold",
        gpath : "2/3rd G, 2/40th G, 2/NN, 2/3rd B, 2/7th RB",
        gscore : "408422",
        g_image : "'dlc32_guitar.png'"
    }},
{ value : "Sunshine of Your Love", 
        data : {
        shortname : "sunshineofyourlove",
        title : "Sunshine of Your Love",
        artist : "Cream",
        gpath : "3/1st RYO, 2/1st G, 3/2nd B, 2/36th RB",
        gscore : "268107",
        g_image : "'sunshineofyourlove_guitar.png'"
    }},
{ value : "Train Kept A-Rollin'", 
        data : {
        shortname : "trainkeptarollin",
        title : "Train Kept A-Rollin'",
        artist : "Aerosmith",
        gpath : "2/2nd RB, 2/NN, 2/12th R, 3/12th GY, 2/1st YB, 2/3rd RY",
        gscore : "464723",
        g_image : "'trainkeptarollin_guitar.png'"
    }},
{ value : "Slither", 
        data : {
        shortname : "dlc6",
        title : "Slither",
        artist : "Velvet Revolver",
        gpath : "2/NN, 2/1st RY, 2/NN, 2/16th B, 3/9th Y",
        gscore : "339469",
        g_image : "'dlc6_guitar.png'"
    }},
{ value : "All Nightmare Long", 
        data : {
        shortname : "dlc84",
        title : "All Nightmare Long",
        artist : "Metallica",
        gpath : "2/2nd G, 3/39th O, 3/1st O, 2/3rd RO, 2/3rd G, 3/30th Y, 2/5th YB",
        gscore : "910502",
        g_image : "'dlc84_guitar.png'"
    }},
{ value : "Rag Doll", 
        data : {
        shortname : "ragdoll",
        title : "Rag Doll",
        artist : "Aerosmith",
        gpath : "3/1st YB, 2/2nd RY, 3/1st RY",
        gscore : "305982",
        g_image : "'ragdoll_guitar.png'"
    }},
{ value : "Sweet Emotion", 
        data : {
        shortname : "sweetemotion",
        title : "Sweet Emotion",
        artist : "Aerosmith",
        gpath : "3/NN, 3/NN, 2/5th O, 2/4th BO, 2/1.1 beats after 6th O",
        gscore : "346445",
        g_image : "'sweetemotion_guitar.png'"
    }},
{ value : "Halo Theme MJOLNIR Mix", 
        data : {
        shortname : "dlc19",
        title : "Halo Theme MJOLNIR Mix",
        artist : "O'Donnell/Salvatori/ Vai",
        gpath : "2/13th Y, 2/0.72 beats after 9th R, 2/NN",
        gscore : "183676",
        g_image : "'dlc19_guitar.png'"
    }},
{ value : "Lay Down", 
        data : {
        shortname : "laydown",
        title : "Lay Down",
        artist : "Priestess",
        gpath : "2/NN, 2/3rd YO, 2/1st YO, 3/NN",
        gscore : "301326",
        g_image : "'laydown_guitar.png'"
    }},
{ value : "Walk This Way", 
        data : {
        shortname : "walkthisway",
        title : "Walk This Way",
        artist : "Aerosmith",
        gpath : "2/9th Y, 2/1st RB, 2/NN, 2/3rd Y, 2/2nd GY, 2/10th B",
        gscore : "356170",
        g_image : "'walkthisway_guitar.png'"
    }},
{ value : "Don't Hold Back", 
        data : {
        shortname : "dontholdback",
        title : "Don't Hold Back",
        artist : "The Sleeping",
        gpath : "2/NN, 3/1st GRY, 2/13th B, 2/9th O",
        gscore : "335834",
        g_image : "'dontholdback_guitar.png'"
    }},
{ value : "Rats in the Cellar", 
        data : {
        shortname : "ratsinthecellar",
        title : "Rats in the Cellar",
        artist : "Aerosmith",
        gpath : "1/1st YB, 2/NN, 2/6th R, 2/5th Y, 3/1.2 beats after 6th YB",
        gscore : "364568",
        g_image : "'ratsinthecellar_guitar.png'"
    }},
{ value : "Cult of Personality", 
        data : {
        shortname : "cultofpersonality",
        title : "Cult of Personality",
        artist : "Living Colour",
        gpath : "2/NN, 2/1st GY, 2/NN, 3/13th G, 2/13th Y",
        gscore : "368614",
        g_image : "'cultofpersonality_guitar.png'"
    }},
{ value : "Carcinogen Crush", 
        data : {
        shortname : "dlc14",
        title : "Carcinogen Crush",
        artist : "AFI",
        gpath : "2/0.68 beats after 4th B, 2/NN, 2/1st RB",
        gscore : "298133",
        g_image : "'dlc14_guitar.png'"
    }},
{ value : "Even Flow", 
        data : {
        shortname : "evenflow",
        title : "Even Flow",
        artist : "Pearl Jam",
        gpath : "2/23rd R, 2/NN, 2/NN, 4/After 0.6 beats, 2/2nd G, 2/1st R",
        gscore : "365808",
        g_image : "'evenflow_guitar.png'"
    }},
{ value : "The End of the Line", 
        data : {
        shortname : "dlc89",
        title : "The End of the Line",
        artist : "Metallica",
        gpath : "2/2nd G, 2/10th G, 2/5th Y, 3/30th G, 2/1st Y, 3/3rd Y, 2/1st Y, 2/3rd RYO",
        gscore : "729670",
        g_image : "'dlc89_guitar.png'"
    }},
{ value : "This is a Call", 
        data : {
        shortname : "dlc5",
        title : "This is a Call",
        artist : "Foo Fighters",
        gpath : "2/17th GYB, 2/0.64 beats after 25th GYB, 2/7th GYB, 2/2nd RY",
        gscore : "474955",
        g_image : "'dlc5_guitar.png'"
    }},
{ value : "Hit Me With Your Best Shot", 
        data : {
        shortname : "hitmewithyourbestshot",
        title : "Hit Me With Your Best Shot",
        artist : "Pat Benatar",
        gpath : "2/NN, 3/3rd GY, 2/NN, 3/NN, 2/2nd RB",
        gscore : "208792",
        g_image : "'hitmewithyourbestshot_guitar.png'"
    }},
{ value : "Broken, Beat & Scarred", 
        data : {
        shortname : "dlc87",
        title : "Broken, Beat & Scarred",
        artist : "Metallica",
        gpath : "3/1st GR, 2/4th G, 2/11th Y, 3/13th G, 4/1st GY, 2/NN",
        gscore : "631322",
        g_image : "'dlc87_guitar.png'"
    }},
{ value : "Welcome to the Jungle", 
        data : {
        shortname : "welcometothejungle",
        title : "Welcome to the Jungle",
        artist : "Guns N' Roses",
        gpath : "2/5th YB, 2/1st YO, 2/7th G, 3/After 0.6 beats, 2/3rd Y, 2/NN",
        gscore : "361446",
        g_image : "'welcometothejungle_guitar.png'"
    }},
{ value : "Toys in the Attic", 
        data : {
        shortname : "toysintheattic",
        title : "Toys in the Attic",
        artist : "Aerosmith",
        gpath : "3/1st YO, 1/1st RY, 2/3 beats after 1st G, 2/1st RB",
        gscore : "248770",
        g_image : "'toysintheattic_guitar.png'"
    }},
{ value : "Livin' on the Edge", 
        data : {
        shortname : "livinontheedge",
        title : "Livin' on the Edge",
        artist : "Aerosmith",
        gpath : "3/1st B, 2/NN, 3/2nd RY, 3/NN, 1/1.8 beats after 1st GR",
        gscore : "347256",
        g_image : "'livinontheedge_guitar.png'"
    }},
{ value : "The Way It Ends", 
        data : {
        shortname : "thewayitends",
        title : "The Way It Ends",
        artist : "Prototype",
        gpath : "1/1st GRB, 2/7 beats after 1st GBO, 2/1st RYB, 2/1st G, 2/2nd G, 2/7th B, 2/2nd O, 2/3rd RY",
        gscore : "627982",
        g_image : "'thewayitends_guitar.png'"
    }},
{ value : "Miss Murder", 
        data : {
        shortname : "missmurder",
        title : "Miss Murder",
        artist : "AFI",
        gpath : "3/NN, 3/NN, 3/2nd YBO",
        gscore : "321438",
        g_image : "'missmurder_guitar.png'"
    }},
{ value : "Uncle Salty", 
        data : {
        shortname : "UncleSalty",
        title : "Uncle Salty",
        artist : "Aerosmith",
        gpath : "",
        gscore : "",
        g_image : "'unclesalty_guitar.png'"
    }},
{ value : "Sunday Morning", 
        data : {
        shortname : "dlc31",
        title : "Sunday Morning",
        artist : "No Doubt",
        gpath : "3/0.36 beats after 2nd G, 2/After 0.68 beats, 2/1st O, 1/2nd R, 1/3rd RB, 2/4th BO",
        gscore : "282117",
        g_image : "'dlc31_guitar.png'"
    }},
{ value : "3's & 7's", 
        data : {
        shortname : "threesandsevens",
        title : "3's & 7's",
        artist : "Queens of the Stone Age",
        gpath : "2/1st GYB, 3/2nd G, 3/1st RB, 2/5th R",
        gscore : "408032",
        g_image : "'threesandsevens_guitar.png'"
    }},
{ value : "I Hate Myself for Loving You", 
        data : {
        shortname : "ihatemyselfforlovingyou",
        title : "I Hate Myself for Loving You",
        artist : "Joan Jett & the Blackhearts",
        gpath : "3/4th YO, 2/2nd G, 2/NN, 2/3rd R",
        gscore : "206992",
        g_image : "'ihatemyselfforlovingyou_guitar.png'"
    }},
{ value : "Ruby", 
        data : {
        shortname : "ruby",
        title : "Ruby",
        artist : "Kaiser Chiefs",
        gpath : "2/NN, 3/1st GYB, 3/NN",
        gscore : "206510",
        g_image : "'ruby_guitar.png'"
    }},
{ value : "Messages", 
        data : {
        shortname : "dlc8",
        title : "Messages",
        artist : "Velvet Revolver",
        gpath : "3/NN, 3/NN, 2/NN, 2/NN",
        gscore : "236332",
        g_image : "'dlc8_guitar.png'"
    }},
{ value : "Sex Type Thing", 
        data : {
        shortname : "sextypething",
        title : "Sex Type Thing",
        artist : "Stone Temple Pilots",
        gpath : "3/3rd GB, 2/2nd GB, 3/NN, 2/1st RO",
        gscore : "327140",
        g_image : "'sextypething_guitar.png'"
    }},
{ value : "My Curse", 
        data : {
        shortname : "mycurse",
        title : "My Curse",
        artist : "Killswitch Engage",
        gpath : "2/NN, 2/12th G, 3/After 0.24 beats, 2/NN, 2/3rd R, 1/After 7.4 beats, 2/NN",
        gscore : "398122",
        g_image : "'mycurse_guitar.png'"
    }},
{ value : "Combination", 
        data : {
        shortname : "combination",
        title : "Combination",
        artist : "Aerosmith",
        gpath : "2/4th R, 2/2nd B, 2/4th YB, 2/11th RY",
        gscore : "362287",
        g_image : "'combination_guitar.png'"
    }},
{ value : "The Devil Went Down To Georgia", 
        data : {
        shortname : "dlc17",
        title : "The Devil Went Down To Georgia",
        artist : "Charlie Daniels Band",
        gpath : "2/1st G, 2/NN, 2/NN, 2/NN, 2/0.48 beats after 13th Y, 2/4th R, 2/NN, 3/6th B, 2/10th R",
        gscore : "891629",
        g_image : "'dlc17_guitar.png'"
    }},
{ value : "I Am Murloc", 
        data : {
        shortname : "dlc75",
        title : "I Am Murloc",
        artist : "L70ETC",
        gpath : "2/NN, 1/1st RB, 2/6th G, 3/5th G, 2/0.2 beats after 1st RB",
        gscore : "271225",
        g_image : "'dlc75_guitar.png'"
    }},
{ value : "Pandora's Box", 
        data : {
        shortname : "pandorasbox",
        title : "Pandora's Box",
        artist : "Aerosmith",
        gpath : "3/2nd GR, 2/0.56 beats after 1st RYO, 2/After 0.6 beats, 2/NN, 2/8th G, 2/23rd Y",
        gscore : "368571",
        g_image : "'pandorasbox_guitar.png'"
    }},
{ value : "King of Rock", 
        data : {
        shortname : "kingofrock",
        title : "King of Rock",
        artist : "Run-D.M.C.",
        gpath : "2/4th Y, 2/12th Y, 2/2nd B, 2/3rd R",
        gscore : "242842",
        g_image : "'kingofrock_guitar.png'"
    }},
{ value : "Cat Scratch Fever", 
        data : {
        shortname : "CatScratchFever",
        title : "Cat Scratch Fever",
        artist : "Ted Nugent",
        gpath : "",
        gscore : "",
        g_image : "'catscratchfever_guitar.png'"
    }},
{ value : "Walk This Way", 
        data : {
        shortname : "walkthiswayrundmc",
        title : "Walk This Way",
        artist : "Run-D.M.C. ft. Aerosmith",
        gpath : "3/NN, 3/After 0 beats, 2/1st GB, 2/1st O, 4/NN",
        gscore : "413801",
        g_image : "'walkthiswayrundmc_guitar.png'"
    }},
{ value : "Monsters", 
        data : {
        shortname : "monsters",
        title : "Monsters",
        artist : "Matchbook Romance",
        gpath : "3/1st RBO, 3/NN, 2/10th R, 3/NN",
        gscore : "453858",
        g_image : "'monsters_guitar.png'"
    }},
{ value : "Cherub Rock", 
        data : {
        shortname : "cherubrock",
        title : "Cherub Rock",
        artist : "The Smashing Pumpkins",
        gpath : "3/4th YB, 2/2nd YO, 2/NN, 2/NN, 2/8th RBO",
        gscore : "531754",
        g_image : "'cherubrock_guitar.png'"
    }},
{ value : "Raining Blood", 
        data : {
        shortname : "rainingblood",
        title : "Raining Blood",
        artist : "Slayer",
        gpath : "3/2nd YB, 2/1st RBO, 2/24th R",
        gscore : "356447",
        g_image : "'rainingblood_guitar.png'"
    }},
{ value : "Talk Talkin'", 
        data : {
        shortname : "talktalking",
        title : "Talk Talkin'",
        artist : "Aerosmith",
        gpath : "2/2nd R, 2/4th R, 2/NN",
        gscore : "209973",
        g_image : "'talktalking_guitar.png'"
    }},
{ value : "Problems (Live at Brixton)", 
        data : {
        shortname : "dlc69",
        title : "Problems (Live at Brixton)",
        artist : "The Sex Pistols",
        gpath : "3/NN, 2/12th GY, 3/1st G, 2/2nd GRY, 2/69th GRY",
        gscore : "626477",
        g_image : "'dlc69_guitar.png'"
    }},
{ value : "No More Sorrow", 
        data : {
        shortname : "dlc12",
        title : "No More Sorrow",
        artist : "Linkin Park",
        gpath : "3/NN, 2/3rd BO, 3/22nd YO",
        gscore : "526549",
        g_image : "'dlc12_guitar.png'"
    }},
{ value : "Peace Of Mind", 
        data : {
        shortname : "dlc25",
        title : "Peace Of Mind",
        artist : "Boston",
        gpath : "2/3rd RYB, 2/8.2 beats after NN, 2/1st RYO, 2/3rd YO, 2/15th Y",
        gscore : "420263",
        g_image : "'dlc25_guitar.png'"
    }},
{ value : "I Predict a Riot", 
        data : {
        shortname : "dlc70",
        title : "I Predict a Riot",
        artist : "Kaiser Chiefs",
        gpath : "1/2nd Y, 1/3.2 beats after 2nd Y, 1/NN, 3/1st RBO, 2/NN, 1/2nd RO",
        gscore : "315023",
        g_image : "'dlc70_guitar.png'"
    }},
{ value : "Motörhead", 
        data : {
        shortname : "dlc47",
        title : "Motörhead",
        artist : "Motörhead",
        gpath : "2/12th GYB, 2/3rd R, 4/1st RYB, 2/NN",
        gscore : "408330",
        g_image : "'dlc47_guitar.png'"
    }},
{ value : "La Grange", 
        data : {
        shortname : "lagrange",
        title : "La Grange",
        artist : "ZZ Top",
        gpath : "2/NN, 3/6th R, 3/NN, 2/NN",
        gscore : "256620",
        g_image : "'lagrange_guitar.png'"
    }},
{ value : "One", 
        data : {
        shortname : "one",
        title : "One",
        artist : "Metallica",
        gpath : "3/1st O, 2/2nd B, 3/NN, 3/NN, 3/1st R, 2/1st GYB, 2/7th YBO",
        gscore : "662009",
        g_image : "'one_guitar.png'"
    }},
{ value : "Prayer of the Refugee", 
        data : {
        shortname : "prayeroftherefugee",
        title : "Prayer of the Refugee",
        artist : "Rise Against",
        gpath : "2/8th RB, 2/NN, 2/2nd GB, 3/NN",
        gscore : "370006",
        g_image : "'prayeroftherefugee_guitar.png'"
    }},
{ value : "(F)lannigan's Ball", 
        data : {
        shortname : "dlc39",
        title : "(F)lannigan's Ball",
        artist : "Dropkick Murphys",
        gpath : "2/41st RBO, 2/24th RB, 2/3rd RB, 2/0.56 beats after 3rd GY",
        gscore : "650156",
        g_image : "'dlc39_guitar.png'"
    }},
{ value : "Paint It Black", 
        data : {
        shortname : "paintitblack",
        title : "Paint It Black",
        artist : "The Rolling Stones",
        gpath : "2/30th G, 3/9th R, 2/10th R, 2/NN",
        gscore : "315738",
        g_image : "'paintitblack_guitar.png'"
    }},
{ value : "Suicide & Redemption K.H.", 
        data : {
        shortname : "dlc93",
        title : "Suicide & Redemption K.H.",
        artist : "Metallica",
        gpath : "2/38th R, 2/1st YO, 2/9th YB, 2/3rd O, 2/38th R, 2/38th R, 3/2nd GR",
        gscore : "712675",
        g_image : "'dlc93_guitar.png'"
    }},
{ value : "F.C.P.R.E.M.I.X.", 
        data : {
        shortname : "fcpremix",
        title : "F.C.P.R.E.M.I.X.",
        artist : "The Fall of Troy",
        gpath : "2/10th Y, 3/5th G, 3/1st RBO, 2/4th RY, 2/2nd B",
        gscore : "393069",
        g_image : "'fcpremix_guitar.png'"
    }},
{ value : "Cities on Flame with Rock and Roll", 
        data : {
        shortname : "citiesonflame",
        title : "Cities on Flame with Rock and Roll",
        artist : "Blue Öyster Cult",
        gpath : "3/3rd R, 2/NN, 2/4th R, 2/NN, 2/NN",
        gscore : "256694",
        g_image : "'citiesonflame_guitar.png'"
    }},
{ value : "Revolution Deathsquad", 
        data : {
        shortname : "dlc82",
        title : "Revolution Deathsquad",
        artist : "DragonForce",
        gpath : "2/0.68 beats after 16th Y, 3/5th R, 2/3rd YO, 2/15th R, 3/3rd Y, 2/0.76 beats after 48th O, 3/58th R, 3/5th R",
        gscore : "910054",
        g_image : "'dlc82_guitar.png'"
    }},
{ value : "Avalancha", 
        data : {
        shortname : "avalancha",
        title : "Avalancha",
        artist : "Héroes del Silencio",
        gpath : "1/1st B, 2/2nd R, 2/NN, 2/1st RBO, 1/2.8 beats after 16th R, 2/9th B, 2/NN",
        gscore : "431640",
        g_image : "'avalancha_guitar.png'"
    }},
{ value : "Hole in the Earth", 
        data : {
        shortname : "dlc28",
        title : "Hole in the Earth",
        artist : "Deftones",
        gpath : "2/9th B, 1/4th GY, 2/NN, 2/30th R, 2/8th R",
        gscore : "371755",
        g_image : "'dlc28_guitar.png'"
    }},
{ value : "All the Young Dudes", 
        data : {
        shortname : "alltheyoungdudes",
        title : "All the Young Dudes",
        artist : "Mott the Hoople",
        gpath : "2/NN, 2/2nd RB, 2/1st RO, 2/NN, 3/NN, 2/NN",
        gscore : "306213",
        g_image : "'alltheyoungdudes_guitar.png'"
    }},
{ value : "Joe Perry Guitar Battle", 
        data : {
        shortname : "joeperryguitarbattle",
        title : "Joe Perry Guitar Battle",
        artist : "Joe Perry",
        gpath : "2/5th Y, 2/5th O, 2/1st GY, 3/5th R",
        gscore : "372258",
        g_image : "'joeperryguitarbattle_guitar.png'"
    }},
{ value : "Make It", 
        data : {
        shortname : "MakeIt",
        title : "Make It",
        artist : "Aerosmith",
        gpath : "",
        gscore : "",
        g_image : "'makeit_guitar.png'"
    }},
{ value : "The End Begins (To Rock)", 
        data : {
        shortname : "dlc61",
        title : "The End Begins (To Rock)",
        artist : "God of War II",
        gpath : "3/5th B, 2/2nd R, 1/33rd R",
        gscore : "268696",
        g_image : "'dlc61_guitar.png'"
    }},
{ value : "Nobody's Fault", 
        data : {
        shortname : "nobodysfault",
        title : "Nobody's Fault",
        artist : "Aerosmith",
        gpath : "1/35th R, 2/1.6 beats after 4th R, 2/NN, 2/6th R, 2/11th G",
        gscore : "300272",
        g_image : "'nobodysfault_guitar.png'"
    }},
{ value : "Draw the Line", 
        data : {
        shortname : "drawtheline",
        title : "Draw the Line",
        artist : "Aerosmith",
        gpath : "3/2nd B, 2/0.64 beats after 3rd BO, 2/0.68 beats after 2nd GR",
        gscore : "226293",
        g_image : "'drawtheline_guitar.png'"
    }},
{ value : "Stockholm Syndrome", 
        data : {
        shortname : "dlc34",
        title : "Stockholm Syndrome",
        artist : "Muse",
        gpath : "2/41st B, 2/1st RB, 2/9th RB, 2/NN, 3/1st YO",
        gscore : "685750",
        g_image : "'dlc34_guitar.png'"
    }},
{ value : "Rock of Ages (Live)", 
        data : {
        shortname : "dlc51",
        title : "Rock of Ages (Live)",
        artist : "Def Leppard",
        gpath : "2/2nd R, 3/NN, 2/5th O, 3/3.1 beats after 1st B, 1/1st G",
        gscore : "364085",
        g_image : "'dlc51_guitar.png'"
    }},
{ value : "Soothsayer", 
        data : {
        shortname : "dlc66",
        title : "Soothsayer",
        artist : "Buckethead",
        gpath : "2/2nd O, 3/NN, 2/2nd R, 3/1st GR, 2/5th O, 2/NN, 2/2nd B, 3/1st G",
        gscore : "710354",
        g_image : "'dlc66_guitar.png'"
    }},
{ value : "Rock You Like a Hurricane", 
        data : {
        shortname : "rockulikeahurricane",
        title : "Rock You Like a Hurricane",
        artist : "Scorpions",
        gpath : "2/1st GY, 2/3rd GY, 2/12th B",
        gscore : "308307",
        g_image : "'rockulikeahurricane_guitar.png'"
    }},
{ value : "Generation Rock", 
        data : {
        shortname : "generationrock",
        title : "Generation Rock",
        artist : "Revolverheld",
        gpath : "2/NN, 3/1.3 beats after 1st O, 3/1st BO, 2/17th RY",
        gscore : "280482",
        g_image : "'generationrock_guitar.png'"
    }},
{ value : "Hard to Handle", 
        data : {
        shortname : "hardtohandle",
        title : "Hard to Handle",
        artist : "The Black Crowes",
        gpath : "3/1st GR, 3/NN, 2/NN",
        gscore : "238597",
        g_image : "'hardtohandle_guitar.png'"
    }},
{ value : "Exo-Politics", 
        data : {
        shortname : "dlc33",
        title : "Exo-Politics",
        artist : "Muse",
        gpath : "5/4th R, 2/10th R, 2/NN",
        gscore : "263498",
        g_image : "'dlc33_guitar.png'"
    }},
{ value : "Holiday in Cambodia", 
        data : {
        shortname : "holidayincambodia",
        title : "Holiday in Cambodia",
        artist : "Dead Kennedys",
        gpath : "2/1st GB, 2/1.2 beats after 4th O, 3/1st YO, 3/1st GY, 2/6th RB",
        gscore : "504904",
        g_image : "'holidayincambodia_guitar.png'"
    }},
{ value : "Down 'n' Dirty", 
        data : {
        shortname : "downndirty",
        title : "Down 'n' Dirty",
        artist : "L.A. Slum Lords",
        gpath : "2/4th GR, 2/1st B, 2/NN, 2/4th BO",
        gscore : "430273",
        g_image : "'downndirty_guitar.png'"
    }},
{ value : "Complete Control", 
        data : {
        shortname : "completecontrol",
        title : "Complete Control",
        artist : "The Clash",
        gpath : "2/NN, 2/1.9 beats after 2nd B, 1/3.6 beats after 1st RB, 1/3rd GY, 2/2nd Y",
        gscore : "249848",
        g_image : "'completecontrol_guitar.png'"
    }},
{ value : "Slow Ride", 
        data : {
        shortname : "slowride",
        title : "Slow Ride",
        artist : "Foghat",
        gpath : "2/2nd GR, 2/NN, 3/NN, 2/NN",
        gscore : "221845",
        g_image : "'slowride_guitar.png'"
    }},
{ value : "School's Out", 
        data : {
        shortname : "schoolsout",
        title : "School's Out",
        artist : "Alice Cooper",
        gpath : "2/NN, 2/2nd Y, 3/1st Y",
        gscore : "163101",
        g_image : "'schoolsout_guitar.png'"
    }},
{ value : "So Payaso", 
        data : {
        shortname : "dlc18",
        title : "So Payaso",
        artist : "Extremoduro",
        gpath : "3/NN, 3/1st BO, 2/4th GY, 3/NN",
        gscore : "342626",
        g_image : "'dlc18_guitar.png'"
    }},
{ value : "Bright Light Fright", 
        data : {
        shortname : "brightlightfright",
        title : "Bright Light Fright",
        artist : "Aerosmith",
        gpath : "2/6th RB, 2/5th YB, 3/10th BO",
        gscore : "215345",
        g_image : "'brightlightfright_guitar.png'"
    }},
{ value : "She Builds Quick Machines", 
        data : {
        shortname : "dlc7",
        title : "She Builds Quick Machines",
        artist : "Velvet Revolver",
        gpath : "3/5th YB, 2/6th YB, 2/2.8 beats after 1st RO, 3/4th RY",
        gscore : "356352",
        g_image : "'dlc7_guitar.png'"
    }},
{ value : "That Was Just Your Life", 
        data : {
        shortname : "dlc85",
        title : "That Was Just Your Life",
        artist : "Metallica",
        gpath : "2/3rd R, 3/55th GR, 4/20th GR, 2/NN, 3/NN, 2/1st GYB",
        gscore : "671795",
        g_image : "'dlc85_guitar.png'"
    }},
{ value : "She Bangs the Drums", 
        data : {
        shortname : "shebangsadrum",
        title : "She Bangs the Drums",
        artist : "The Stone Roses",
        gpath : "2/2nd B, 2/4th YO, 2/NN, 2/2nd YO, 2/2nd B",
        gscore : "311816",
        g_image : "'shebangsadrum_guitar.png'"
    }},
{ value : "Back in the Saddle", 
        data : {
        shortname : "backinthesaddle",
        title : "Back in the Saddle",
        artist : "Aerosmith",
        gpath : "2/NN, 3/4th GY, 2/1.7 beats after 2nd B, 2/35th B",
        gscore : "331047",
        g_image : "'backinthesaddle_guitar.png'"
    }},
{ value : "Mauvais Garçon", 
        data : {
        shortname : "mauvaisgarcon",
        title : "Mauvais Garçon",
        artist : "Naast",
        gpath : "3/5th YBO, 2/10th YO, 2/1st YO",
        gscore : "429648",
        g_image : "'mauvaisgarcon_guitar.png'"
    }},
{ value : "Shakin' My Cage", 
        data : {
        shortname : "shakinmycage",
        title : "Shakin' My Cage",
        artist : "Joe Perry Project",
        gpath : "2/2nd GY, 2/19th G, 2/NN, 2/3rd Y, 2/1st YO",
        gscore : "343138",
        g_image : "'shakinmycage_guitar.png'"
    }},
{ value : "Same Old Song and Dance", 
        data : {
        shortname : "sameoldsonganddance",
        title : "Same Old Song and Dance",
        artist : "Aerosmith",
        gpath : "2/1st Y, 3/9th G, 2/1st GR",
        gscore : "218035",
        g_image : "'sameoldsonganddance_guitar.png'"
    }},
{ value : "The Judas Kiss", 
        data : {
        shortname : "dlc88",
        title : "The Judas Kiss",
        artist : "Metallica",
        gpath : "2/5th G, 3/4th R, 3/24th G, 2/3rd R, 2/2nd B, 2/After 0 beats, 2/NN, 3/14th G, 2/1st G",
        gscore : "740487",
        g_image : "'dlc88_guitar.png'"
    }},
{ value : "Pride and Joy", 
        data : {
        shortname : "pridenjoy",
        title : "Pride and Joy",
        artist : "Stevie Ray Vaughan",
        gpath : "2/NN, 2/5th YB, 2/NN, 2/2nd GB, 3/2nd RY",
        gscore : "371194",
        g_image : "'pridenjoy_guitar.png'"
    }},
{ value : "Tina", 
        data : {
        shortname : "dlc15",
        title : "Tina",
        artist : "Flyleaf",
        gpath : "3/10th BO, 3/1st GR",
        gscore : "181521",
        g_image : "'dlc15_guitar.png'"
    }},
{ value : "Barracuda", 
        data : {
        shortname : "barracuda",
        title : "Barracuda",
        artist : "Heart",
        gpath : "3/2nd RY, 2/7th R, 2/1st GY, 2/0.96 beats after 1st RB",
        gscore : "288146",
        g_image : "'barracuda_guitar.png'"
    }},
{ value : "My Name Is Jonas", 
        data : {
        shortname : "mynameisjonas",
        title : "My Name Is Jonas",
        artist : "Weezer",
        gpath : "2/NN, 2/NN, 2/NN, 2/5th R",
        gscore : "362062",
        g_image : "'mynameisjonas_guitar.png'"
    }},
{ value : "Mercy", 
        data : {
        shortname : "mercy",
        title : "Mercy",
        artist : "Joe Perry Project",
        gpath : "2/13th YB, 2/2nd R, 3/3rd RY, 2/NN, 3/3rd B",
        gscore : "420924",
        g_image : "'mercy_guitar.png'"
    }},
{ value : "Johnny, I Hardly Knew Ya", 
        data : {
        shortname : "dlc40",
        title : "Johnny, I Hardly Knew Ya",
        artist : "Dropkick Murphys",
        gpath : "4/2nd RYB, 3/1st RBO, 2/5th RYB, 3/NN",
        gscore : "498082",
        g_image : "'dlc40_guitar.png'"
    }},
{ value : "Talk Dirty to Me", 
        data : {
        shortname : "talkdirtytome",
        title : "Talk Dirty to Me",
        artist : "Poison",
        gpath : "2/10th GR, 2/4th BO, 2/1st GY, 3/0.56 beats after 1st RB, 1/5th BO",
        gscore : "346439",
        g_image : "'talkdirtytome_guitar.png'"
    }},
{ value : "Cyanide", 
        data : {
        shortname : "dlc91",
        title : "Cyanide",
        artist : "Metallica",
        gpath : "2/3rd BO, 2/4th BO, 2/5th GY, 3/After 3.6 beats, 3/12th RYB",
        gscore : "761558",
        g_image : "'dlc91_guitar.png'"
    }},
{ value : "When You Were Young", 
        data : {
        shortname : "whenyouwereyoung",
        title : "When You Were Young",
        artist : "The Killers",
        gpath : "2/1st GY, 3/1st GB, 3/NN, 2/After 2 beats",
        gscore : "287158",
        g_image : "'whenyouwereyoung_guitar.png'"
    }},
{ value : "Kool Thing", 
        data : {
        shortname : "koolthing",
        title : "Kool Thing",
        artist : "Sonic Youth",
        gpath : "2/7th GYB, 2/5th G, 3/After 0 beats, 2/NN",
        gscore : "329316",
        g_image : "'koolthing_guitar.png'"
    }},
{ value : "Movin' Out", 
        data : {
        shortname : "movinout",
        title : "Movin' Out",
        artist : "Aerosmith",
        gpath : "3/2nd R, 2/26th O, 3/20th R, 2/42nd Y",
        gscore : "380852",
        g_image : "'movinout_guitar.png'"
    }},
{ value : "Dream On", 
        data : {
        shortname : "dreamon",
        title : "Dream On",
        artist : "Aerosmith",
        gpath : "2/NN, 2/After 1.7 beats, 2/After 0 beats, 2/After 0 beats, 2/4th RO",
        gscore : "239403",
        g_image : "'dreamon_guitar.png'"
    }},
{ value : "The Arsonist", 
        data : {
        shortname : "dlc27",
        title : "The Arsonist",
        artist : "Thrice",
        gpath : "2/7th G, 2/1.4 beats after NN, 3/1st YB",
        gscore : "348965",
        g_image : "'dlc27_guitar.png'"
    }},
{ value : "Any Way You Want It", 
        data : {
        shortname : "dlc10",
        title : "Any Way You Want It",
        artist : "Journey",
        gpath : "3/NN, 2/1.8 beats after 5th G, 3/2nd O",
        gscore : "264717",
        g_image : "'dlc10_guitar.png'"
    }},
{ value : "Let the Music Do the Talking", 
        data : {
        shortname : "letthemusicdothetalking",
        title : "Let the Music Do the Talking",
        artist : "Aerosmith",
        gpath : "3/1st GY, 2/5th B, 2/1st GR, 1/2nd GY, 2/2nd G",
        gscore : "323590",
        g_image : "'letthemusicdothetalking_guitar.png'"
    }},
{ value : "Stay Clean", 
        data : {
        shortname : "dlc45",
        title : "Stay Clean",
        artist : "Motörhead",
        gpath : "2/2nd YO, 3/2nd GYB, 3/1st BO",
        gscore : "299314",
        g_image : "'dlc45_guitar.png'"
    }},
{ value : "Yellow", 
        data : {
        shortname : "dlc72",
        title : "Yellow",
        artist : "Coldplay",
        gpath : "3/NN, 3/8th RB, 3/9th GY",
        gscore : "404950",
        g_image : "'dlc72_guitar.png'"
    }},
{ value : "Knights of Cydonia", 
        data : {
        shortname : "knightsofcydonia",
        title : "Knights of Cydonia",
        artist : "Muse",
        gpath : "2/23rd Y, 3/1st B, 2/NN, 2/63rd R",
        gscore : "513356",
        g_image : "'knightsofcydonia_guitar.png'"
    }},
{ value : "Always on the Run", 
        data : {
        shortname : "alwaysontherun",
        title : "Always on the Run",
        artist : "Lenny Kravitz",
        gpath : "2/5th BO, 3/7th O, 3/31st G",
        gscore : "302112",
        g_image : "'alwaysontherun_guitar.png'"
    }},
{ value : "Suck My Kiss", 
        data : {
        shortname : "suckmykiss",
        title : "Suck My Kiss",
        artist : "Red Hot Chili Peppers",
        gpath : "3/2nd GB, 3/10th G, 3/1st YO",
        gscore : "265203",
        g_image : "'suckmykiss_guitar.png'"
    }},
{ value : "Mississippi Queen", 
        data : {
        shortname : "mississippiqueen",
        title : "Mississippi Queen",
        artist : "Mountain",
        gpath : "2/2nd O, 2/2nd O, 2/1st RB",
        gscore : "129837",
        g_image : "'mississippiqueen_guitar.png'"
    }},
{ value : "Helicopter", 
        data : {
        shortname : "helicopter",
        title : "Helicopter",
        artist : "Bloc Party",
        gpath : "2/1st RB, 3/NN, 5/NN",
        gscore : "352706",
        g_image : "'helicopter_guitar.png'"
    }},
{ value : "Paranoid", 
        data : {
        shortname : "paranoid",
        title : "Paranoid",
        artist : "Black Sabbath",
        gpath : "2/4th RB, 1/NN, 3/1st GRY, 2/4th RB",
        gscore : "350544",
        g_image : "'paranoid_guitar.png'"
    }},
{ value : "For the Love of God", 
        data : {
        shortname : "dlc63",
        title : "For the Love of God",
        artist : "Steve Vai",
        gpath : "1/6th Y, 2/3rd Y, 2/17th O, 2/NN, 2/2nd B",
        gscore : "395058",
        g_image : "'dlc63_guitar.png'"
    }},
{ value : "Story of My Life", 
        data : {
        shortname : "storyofmylife",
        title : "Story of My Life",
        artist : "Social Distortion",
        gpath : "3/5th Y, 1/1.2 beats after 6th YO, 1/7 beats after 1st Y, 1/NN, 1/4th Y, 1/0.88 beats after 1st RB, 1/1.3 beats after 1st YB, 1/1.5 beats after 2nd RYB, 2/2.1 beats after 3rd O, 2/9th GY, 1/2nd GR",
        gscore : "463834",
        g_image : "'storyofmylife_guitar.png'"
    }},
{ value : "We Three Kings", 
        data : {
        shortname : "dlc36",
        title : "We Three Kings",
        artist : "Steve Ouimette",
        gpath : "3/After 0 beats, 1/11th GR, 2/NN, 3/4th Y",
        gscore : "343380",
        g_image : "'dlc36_guitar.png'"
    }},
{ value : "Slash Guitar Battle", 
        data : {
        shortname : "dlc2",
        title : "Slash Guitar Battle",
        artist : "Slash",
        gpath : "2/10th R, 2/2nd R, 2/6th Y, 2/18th B, 4/1st O",
        gscore : "469339",
        g_image : "'dlc2_guitar.png'"
    }},
{ value : "Closer", 
        data : {
        shortname : "closer",
        title : "Closer",
        artist : "Lacuna Coil",
        gpath : "3/NN, 3/NN, 2/10th G",
        gscore : "277546",
        g_image : "'closer_guitar.png'"
    }},
{ value : "Heroes of Our Time", 
        data : {
        shortname : "dlc80",
        title : "Heroes of Our Time",
        artist : "DragonForce",
        gpath : "2/NN, 2/1st O, 2/2.6 beats after 3rd RYB, 2/4th R, 2/6th G, 2/NN, 3/10th Y, 2/NN, 4/NN, 1/NN",
        gscore : "780734",
        g_image : "'dlc80_guitar.png'"
    }},
{ value : "In the Belly of a Shark", 
        data : {
        shortname : "bellyofashark",
        title : "In the Belly of a Shark",
        artist : "Gallows",
        gpath : "2/3rd RYB, 2/1st YO, 2/3rd Y, 2/18th GY",
        gscore : "335070",
        g_image : "'bellyofashark_guitar.png'"
    }},

];