// Data sourced from:
// 1. "Baile De CamnorteÃ±os: Preservation of Cultural Heritage of Published Traditional Folk Dances" (Bautista & Bardon).
// 2. "Sayaw Cam NorteÃ±o: A Web-Based Platform..." (Brutas, EspaÃ±a, Labrador, 2026).
// Source book: Camarines Norte Folk Dances â€” An Instructional Materials for Teachers (Dr. Arnel P. Plantado).

export const DANCE_SUBTABS = [
  { id: "overview", label: "Overview" },
  { id: "background", label: "Background & Context" },
  { id: "performers", label: "Performers & Researchers" },
  { id: "costume", label: "Costume & Accessories" },
  { id: "music", label: "Music & Count" },
  { id: "steps", label: "Fundamental Steps" },
  { id: "literature", label: "Dance Literature" },
  { id: "video", label: "Video" },
];

export const DANCES = [
  {
    slug: "jota-camarines",
    name: "Jota Camarines",
    tagline: "A Spanish-inflected courtship of grace and refinement.",
    classification: "Marital / Courtship Dance",
    origin: "Daet, Camarines Norte",
    culture: "Lowland Christian",
    researcher: "Mr. Hermes F. Avellana",
    performer: "Men and Women",
    image: "/jota camarines.png",
    costumeImage: "/jotacamarines-costume.png",
    musicSheetImage: ["/jotacamarines-notepiece.png"],
    audio: "/jotaCamrinesMusic.wav",
    accent: "from-[#5a1622] to-[#8a2a3a]",
    description:
      "Jota Camarines is among the most recognized published folk dances of Camarines Norte. During the spanish regime, the Jota dances were among the most popular dances in the Philippines. They are gay and lively dances, undoubtedly adaptations from Spanish Jotas as performed by the early Spanish settlers in the Philippines. ",
    story:
      "This dance, as described, is from Camarines Norte and is usually performed by the rich people or what is called the elite.",
    literature: [
      {
        title: "Figure III",
        subtitle: "Music A",
        content: [
          "Partners face front",
          "a. Partners facing obliquely forward R, take four cross waltz steps forward, girl leading, boy following behind, arms in hayon-hayon position............................................4M",
          "b. Girl face about to face partner, do-si-do right with four cross waltz steps, hands doing a salok R and L alternately............................................4M",
          "c. Both face original position, repeat (a) and (b) this time boy leading, girl following............................................8M"
        ]
      },
      {
        title: "Figure IV",
        subtitle: "Music B",
        content: [
          "Partners join both hands facing each other.",
          "a. Take two cross waltz sideward R and L ............................................2M",
          "b. One waltz turn to partner's place release hands ............................................2M",
          "c. Repeat (a) and (b) to finish in proper places ............................................4M",
          "d. Take one mazurka step to the right (cts. 1,2,3), three-step turn R in place (cts. 1,2,3), girl hold skirt, boy hands on waist ............................................2M",
          "e. Repeat (d) three times more (L,R, L) ............................................6M"
        ]
      },
      {
        title: "Figure V",
        subtitle: "Music B",
        content: [
          "Partners hold in ballroom position.",
          "a. Execute six redoba steps R and L alternately turning clockwise ............................................6M",
          "b. Release hold. Take three-steps turn R to proper place, girl hold skirt, boy hands on waist (cts.1,2,3) pause (cts.1,2,3)........................................................2M ",
          "c. Join inside hands and repeat (a) facing audience, free hands in second position.........................................................6M ",
          "d. Three-step turn R to proper places and bow to partner.....................................2M "
        ]
      },
      {
        title: "WHOLE DANCE",
        subtitle: "Music A & B",
        content: [
          "Repeat the whole Dance - figure I, II, III, IV-V...........................................................80M "
        ]
      },
      {
              title: "EXTRO",
              subtitle: "",
              content: [
                "Repeat Introduction.........................................................................................................8M"
              ]
            }
    ],
    properties: {
      costume: {
        female: "Maria Clara gown",
        male: "Barong Tagalog with black pants",
      },
      accessories: [""],
      footwearFemale: "Sapatilla",
      footwearMale: "Black shoes",
      musicalCharacter: {
        structure: "The music is divided into two parts: A and B.",
        tempo: "3/4 time signature in jota rhythm",
        instruments: "Traditional rondalla: bandurria, laud, octavina, guitar, and double bass",
        count: "The count is one, two, three to a measure.",
        description: "As a traditional Jota adaptation, the music is characterized as gay and lively, reflecting the popular style of dances introduced by Spanish settlers during the colonial period in the Philippines."
      }
    },
    steps: [
        {
          name: "Cross step",
          description: "Step R (L) foot on second position (ct. 1), step or slide L (R) foot sideward right (left) across the R(L) in front (cts.2,3). Put the weigh on the L(R) foot at end of the slide in the third count. This is done in series, moving to one direction, to sideward right or left.",
          video: "https://drive.google.com/uc?export=download&id=1EGEBZP3_lFBDQc2t5wUxBv_3FWT4dIHV",
        thumbnail: "/thumbnails/1EGEBZP3_lFBDQc2t5wUxBv_3FWT4dIHV.jpg"
        },
        {
          name: "DO-SI-DO- (Dos-A Dos)",
          description: "The vis-à-vis (opposite) both a advance forward, pass each other's right ( or left) more backward without turning around pass each other's left (or right) side to proper places. This is foreign origin and is used in many Philippine dances.",
          video: "https://drive.google.com/uc?export=download&id=1yyQglHeKpiqdL1tdUep-2GJG7gcf7Bks",
        thumbnail: "/thumbnails/1yyQglHeKpiqdL1tdUep-2GJG7gcf7Bks.jpg"
        },
        {
          name: "MAZURKA",
          description: "Slide (L) foot in second (ct. 1), cut R (L) sideward with the L (R) foot (ct. 2), hop on the L (R) foot and of the L (R) foot (ct. 3). This step may be executed forward, obliquely forward, sideward or going around also with one foot leading.",
          video: "https://drive.google.com/uc?export=download&id=10wlLKfwOqF90tfSyE_Bb6fQTFx4V0IJW",
        thumbnail: "/thumbnails/10wlLKfwOqF90tfSyE_Bb6fQTFx4V0IJW.jpg"
        },
        {
          name: "Note",
          description: "Note: It is important that the cut be finished with an absolutely straight knee in order that the final action may bring out the knee bent position.",
          isNote: true
        },
        {
          name: "WALKING STEP",
          description: "Step R (L) foot forward (ct. 1), step L(R) foot (ct. 2).",
          video: "https://drive.google.com/uc?export=download&id=1u0K8TYqWxHfxXM8LiSrl4-eBVrBP8eVQ",
        thumbnail: "/thumbnails/1u0K8TYqWxHfxXM8LiSrl4-eBVrBP8eVQ.jpg"
        },
        {
          name: "SWAY BALANCE WITH A RAISE",
          description: "a. Step R (L) foot obliquely forward right (left) (cts. 1, 2), step L(R) across the R (L) foot in front ct. 3 .............................. 1M\n\nb. Step R (L) foot obliquely backward right (left) (ct. 1), raise L(R) Knee in front (cts. 2,3) Bend body slightly forward on ct. 1, and raise gradually upward to original position as (cts. 2,3). Open arms sideward at shoulder level on the first then counts (cts. 1,2,3), bend forearms forward and bring hands close to chest on the next three counts (cts. 1,2,3), or arms in fourth position R (L) arm high. If desired, forearm turns may be done on the second measure.",
          video: "https://drive.google.com/uc?export=download&id=1yVcrxuolQejqcOiopcVlQ-oQUADpg7nc",
        thumbnail: "/thumbnails/1yVcrxuolQejqcOiopcVlQ-oQUADpg7nc.jpg"
        },
        {
          name: "WALTZ TURN",
          description: "Same step as in waltz step but turning in place or moving.",
          video: "https://drive.google.com/uc?export=download&id=1qoEoKTHvp0L-F5sCE7XW4v4W5WuJIlUh",
        thumbnail: "/thumbnails/1qoEoKTHvp0L-F5sCE7XW4v4W5WuJIlUh.jpg"
        },
      ],
      contact: {
        name: "Dr. Arnel P. Plantado",
        facebook: "https://www.facebook.com/arnel.plantado",
        description: "For the complete performance footage and high-quality archival videos of this dance, please coordinate with our official cultural documentation partner.",
        picture: "/sirPlantado.jpg"
      }
    },
  {
    slug: "pantomina-de-camarines",
    name: "Pantomina De Camarines",
    tagline: "The wedding dance - a promise set to music.",
    classification: "Wedding Dance",
    origin: "Daet, Camarines Norte",
    culture: "Lowland Christian",
    researcher: "Mr. Hermes F. Avellana (reconstructed by Dr. Arnel P. Plantado)",
    performer: "Bride and Groom / Couples",
    image: "/pantomina.png",
    costumeImage: "/pantominacostume.png",
    musicSheetImage: ["/pantomina-notepiece.png", "/pantomina-notepiece-p2.png", "/pantomina-notepiece-p3.png"],
    audio: "/pantominaMusic.wav",
    accent: "from-[#7a2a3a] to-[#a8505e]",
    description:
      "Pantomina De Camarines is a popular dance being performed by the newlywed couple to gather some amount of money for them to start a new life as husband and wife. Relatives of the groom pin pesos bills on the bride's groom, and the relatives of the bride do the same as counterpart. God parents are also obliged to do the pinning. Visitors and guests can participate by showering coins in order that dancing became merrier and more alive. ",
    story:
      "Although some of the dance steps are common, the pantomina in the Bicol Region has slight variation on the hand movement. For example the dance steps may move to particular customs and beliefs of certain groups of people just like in Camarines Norte.",
    literature: [
      {
        title: "INTRODUCTION",
        subtitle: "Music- Introduction | 2/4 time signature",
        content: [
          "Partners facing each other",
          "a. Starting with the R foot, take eight running steps forward to meet at center of the stage ............................................2M",
          "b. Face the audience, join inside hands, Girl will turn at the arch of the boy (ct. 1,2) ............................................1M",
          "c. Bow to each other (ct. 2) pause (ct. 2) "
        ]
      },
      {
        title: "FIGURE I",
        subtitle: "Music A | 3/4 time signature",
        content: [
          "Girl faces audience, Boy away from audience",
          "a) Starting with the R foot, partners take four steps forward (cts. 1,2,1,2) Girl holding skirt manipulating while moving forward, boy's hand down at the side swinging gracefully, in time with the music. ............................................2M",
          "b) Execute two change steps R and L alternately (cts. 1,and 2, 1 and 2),girls hand hold skirt, boys at the back of the waist ............................................2M",
          "c) Turn right about, repeat (a) and (b) ............................................4M",
          "d) Partners face each other, starting with the right foot, take eight steps forward going to partners place, halfway around counterclockwise (8cts.), same movement of the arms in (a) ............................................4M",
          "e) Repeat (d), moving backward (retracing steps) to proper places ........................ 4M",
          "f) Starting with the R foot, take eight steps forward to partner place passing R to R shoulder (clockwise) ............................................4M",
          "g) Repeat (a-e). This time partners start facing opposite direction in (a)... 16M",
          "h) Repeat (f) to proper places"
        ]
      },
      {
        title: "FIGURE II",
        subtitle: "Music B | 3/4 time signature",
        content: [
          "Partners face each other",
          "a) Take one engaño with a waltz steps to the right (cts. 1,2,3; 1,2,3)arms in reverse T position with forearm turn, hands are loosely closed ................ 2M",
          "b) Repeat (a) - going to the left. (cts. 1,2,3;1,2,3) .............................................. 2M",
          "c) Repeat (a) and (b) four times more right and Left alternately ................ 8M",
          "d) Take two waltz steps forward to partners place (cts. 1,2,3;1,2,3) passing L to L shoulder. Arms at lateral position with forearm, turn ............................ 2M",
          "e) Execute two moderate waltz turn in place to face partner (cts. 1,2,3;1,2,3) same arm movements as (d) ........................................................................ 2M",
          "f)Repeat (a-e) Finishing in proper places ........................................................ 16M"
        ]
      },
      {
        title: "FIGURE III",
        subtitle: "Music C",
        content: [
          "Partners face each other",
          "a) Starting with the R foot, take four step-swing to meet at the center (cts. 1, 2,3;1, 2,3;1,23;1,2,3). Girl holds skirt, Boys hands at the back of the waist. ................................................. 4M",
          "b) Join inside hands, free hand of girl holding skirt, boy free hand at the back of waist, execute four step-swing steps forward (cts. same as in (a)) ............................................................ 4M ",
          "c) Execute six steps swing turning left same as (a) ....................................... 6M",
          "d) Starting with the R foot, take four steps backward (4cts.) pause (2 cts.) release hands..................................................................................................... 2M"
        ]
      },
      {
        title: "FIGURE IV",
        subtitle: "Music D| 3/4 time signature",
        content: [
          "Partners face each other and execute the movement simultaneously",
          "a)Girl: Turn right about and take four walking steps moving obliquely Forward right, holding skirt (4 cts), pause",
          "Boy: Take four walking steps moving obliquely forward right, following the girl (4 cts.), kneel on R (2 cts.) ....................................................................... 2M",
          "b) . Girl: Take six waltz steps sideward right and L, execute arms in lateral position with forearm turn R and L alternately and looking at partners over. R and L shoulders alternately.",
          "Boy: Behind the girl (half kneeling position), Execute six times arms In lateral position ending in elbow support (as if pleading) ................... 6M",
          "c) Girl repeat (a) moving obliquely forward left, same position the hands",
          "Boy: stand up and take three walking steps moving obliquely forward left (4cts.) kneel on L (2cts.) ............................................................................ 2M",
          "d) Girl repeat- (b) (same movement with arms)",
          "Boy repeat (b), finishing in standing position .............................................. 6M",
          "e)Repeat (a-d) .................................................................................................... 16M"
        ]
      },
      {
        title: "FIGURE V",
        subtitle: "Music C | 3/4 time signature",
        content: [
          "Throughout this figure, partners always face the same direction. Movements are done following an imaginary diamond.",
          "a) Girl leading and boy follows, take turn waltz steps forward, and girl holds skirt, boy's holds on waist. .................................................... 2M",
          "b) Girl: take one leap step moving to evade the boy and turn right (1M) and position as in (a)",
          "Boy: turn right in place salok with the L hand as if trying to touch the right ankle of the girl, left hand in fifth position.............................................. 2M ",
          "Note: Turning is executed at the first corner of the diamond",
          "c) Repeat (a) same hand position .................................................................. 2M",
          "d. Repeat (b) to the second corner of the diamond. ....................................... 2M",
          "e. Repeat (a) and (b) two times more. On the last turn partners finish with girl facing audience and boy facing away from the audience ...................... 8M"
        ]
      },
      {
        title: "WHOLE DANCE",
        subtitle: "Music A, B, C, and D",
        content: [
          "Repeat the whole dance (figures I, II, III IV, & V). ",
          "Note: In figure IV - repeat (a -d) 16M only"
        ]
      },
      {
        title: "FINALE",
        subtitle: "",
        content: [
          "Girl will turn at the arch of the boy then grab the hands of the girl on his chest as if trying to steal a kiss/freeze. "
        ]
      }
    ],
    properties: {
      costume: {
        female: ["Wedding gown (white) ", "Maria Clara (off white)"],
        male: ["Nero / Barong (white) ", "Barong Tagalog(off white)", "w/ White or black pants"],
      },
      accessories: ["Bouquet (female)", "White lace tiara", "Lace hand gloves", "Paracale gold Earrings, rings, necklace, bracelet", "Imitation of Gold jewelries"],
      footwearFemale: [" White shoes ", " Closed shoes "],
      footwearMale: ["White shoes ", " Black shoes"],
      musicalCharacter: {
        structure: "Divided into four distinct parts (A, B, C, and D), allowing for varied rhythmic shifts throughout the performance",
        tempo: ["2/4 Time: Used for lively, rhythmic transitions or entrance/exit figures.", " ", "3/4 Time: Used for the main body of the dance, employing a graceful (Waltz) tempo."],
        instruments: "Traditional rondalla: bandurria, laud, octavina, guitar, and double bass",
        count: ["2/4 Time: One, two or One and two to a measure.", "3/4 Time: One, two, three to a measure."],
        description: "The music of Pantomina De Camarines is a gentle, lilting melody that mirrors the dance's theme. It rises and falls like a conversation between the performers."
      },
    },
    steps: [
      {
        name: "RUNNING STEP",
        description: "Used in the Introduction to meet at the center (8 steps).",
        video: "https://drive.google.com/uc?export=download&id=1aR6rZum1w6XaFlQOV2KHCSK658m8ZpK8",
        thumbnail: "/thumbnails/1aR6rZum1w6XaFlQOV2KHCSK658m8ZpK8.jpg"
      },
      {
        name: "WALKING STEP",
        description: "Partners take four steps forward and backward while manipulating the skirt or placing hands at the waist.",
        video: "https://drive.google.com/uc?export=download&id=1u0K8TYqWxHfxXM8LiSrl4-eBVrBP8eVQ",
        thumbnail: "/thumbnails/1u0K8TYqWxHfxXM8LiSrl4-eBVrBP8eVQ.jpg"
      },
      {
        name: "CHANGE STEP",
        description: "Executed alternately (R and L) while moving forward or in place (counts: 1, and, 2).",
        video: "https://drive.google.com/uc?export=download&id=1amJEJaX4VosePEs1AQGpxO12_fEMUcAu",
        thumbnail: "/thumbnails/1amJEJaX4VosePEs1AQGpxO12_fEMUcAu.jpg"
      },
      {
        name: "CLOCKWISE CIRCLE",
        description: "Partners move toward each other, pause, then retreat - symbolizing the approach and blessing of marriage.",
        video: "https://drive.google.com/uc?export=download&id=17JZZTpzHhxtuTMMNLzFrc5N9-HCBBXif",
        thumbnail: "/thumbnails/17JZZTpzHhxtuTMMNLzFrc5N9-HCBBXif.jpg"
      },
      {
        name: "ENGAÑO WITH A WALTZ",
        description: "A combination step involving a side-step and a waltz step, performed with a forearm turn in reverse T-position.",
        video: "https://drive.google.com/uc?export=download&id=16x4ErkA4LvNmP4HeA8AulmdhNJxE140x",
        thumbnail: "/thumbnails/16x4ErkA4LvNmP4HeA8AulmdhNJxE140x.jpg"
      },
      {
        name: "WALTZ TURN",
        description: "Moderate turns executed in place to face the partner after passing.",
        video: "https://drive.google.com/uc?export=download&id=1qoEoKTHvp0L-F5sCE7XW4v4W5WuJIlUh",
        thumbnail: "/thumbnails/1qoEoKTHvp0L-F5sCE7XW4v4W5WuJIlUh.jpg"
      },
      {
        name: "LATERAL ARMS",
        description: "Arms held to one side (shoulder/waist level) during the waltz transitions.",
        video: "https://drive.google.com/uc?export=download&id=1wmzsqeWQJ2Jaej-gQGXCXcJfsF2HhL3B",
        thumbnail: "/thumbnails/1wmzsqeWQJ2Jaej-gQGXCXcJfsF2HhL3B.jpg"
      },
      {
        name: "STEP-SWING STEP",
        description: "A rhythmic step where one foot steps and the other swings across; used to meet at the center and move forward while joined.",
        video: "https://drive.google.com/uc?export=download&id=1JT_hA4NiVd4Sswu2qH84n7iHnqAKBSaT",
        thumbnail: "/thumbnails/1JT_hA4NiVd4Sswu2qH84n7iHnqAKBSaT.jpg"
      },
      {
        name: "SWING TURN",
        description: "A six-step sequence used to turn left while maintaining the step-swing rhythm.",
        video: "https://drive.google.com/uc?export=download&id=1d4AvFsbrSKvH5LNOxhfBdHNaNmzzGzD2",
        thumbnail: "/thumbnails/1d4AvFsbrSKvH5LNOxhfBdHNaNmzzGzD2.jpg"
      },
      {
        name: "KNEELING",
        description: "A graceful drop to one knee (R or L) used specifically by the Boy while following or pleading.",
        video: "https://drive.google.com/uc?export=download&id=1Sn2z2hluqK45er9VnjDEeYWR518V3Len",
        thumbnail: "/thumbnails/1Sn2z2hluqK45er9VnjDEeYWR518V3Len.jpg"
      },
      {
        name: "LEAP STEP",
        description: "A light, springing step used by the Girl to evade the Boy at the corners of the diamond.",
        video: "https://drive.google.com/uc?export=download&id=1DvXeGMjBdSEvexmTmsJKPv2Ma5lwpEd5",
        thumbnail: "/thumbnails/1DvXeGMjBdSEvexmTmsJKPv2Ma5lwpEd5.jpg"
      },
      {
        name: "SALOK",
        description: "A scooping arm movement where the Boy bends toward the Girl's ankle with the L hand.",
        video: "https://drive.google.com/uc?export=download&id=1SzeT3SXoh1RQp3Ow3WOhV2RLDBxqZIog",
        thumbnail: "/thumbnails/1SzeT3SXoh1RQp3Ow3WOhV2RLDBxqZIog.jpg"
      },
      {
        name: "ARCH TURN",
        description: "The Girl executes a final turn under the arch created by the Boy's arm.",
        video: "https://drive.google.com/uc?export=download&id=1qNcACv-5bMHuuVtAJMVvN4X_iD790kDc",
        thumbnail: "/thumbnails/1qNcACv-5bMHuuVtAJMVvN4X_iD790kDc.jpg"
      },
    ],
    contact: {
      name: "Dr. Arnel P. Plantado",
      facebook: "https://www.facebook.com/arnel.plantado",
      description: "For the complete performance footage and high-quality archival videos of this dance, please coordinate with our official cultural documentation partner.",
      picture: "/sirPlantado.jpg"
    }
  },
  {
    slug: "bulakenya",
    name: "Bulakenya",
    tagline: "Flirtation in the flick of a handkerchief.",
    classification: "Social Dance",
    origin: "Daet, Camarines Norte",
    culture: "Lowland Christian",
    researcher: "Mrs. Francisca R. Aquino",
    performer: "Men and Women",
    image: "/bulakenya.png",
    costumeImage: "/Buakenya Costume.png",
    musicSheetImage: ["/bulakenya-notepiece.png"],
    audio: "/BulakenyaMusic.mp3",
    accent: "from-[#6b1d2a] to-[#b76a52]",
    description:
      "Bulakenya is a marital dance from Camarines Norte, the following wife duties are ryhtmically portrayed: Placing the hat of the husband on his head before he goes out, wiping his forehead, combining and smoothing his hair,etc.",
    story:
      "The Bulakenya (Daetena) is a traditional marital dance hailing from the municipality of Daet, Camarines Norte. Officially documented by National Artist for Dance Mrs. Francisca Reyes-Aquino in her seminal work, Philippine National Dance (The Green Book), this dance is a significant cultural artifact of the Lowland Christian tradition.",
    literature: [
      {
        title: "Figure I",
        subtitle: "Music A",
        content: [
          "Boy is seated on a chair in the middle of the room or stage, profile to audience.",
          "Girl holds a \"buri\" hat in her right hand, left hand on waist. She starts from the right or left corner up stage going toward the boy by executing the following steps:",
          "a) Starting with the R foot, takes two close steps forward. Moves the hat sideward right and left ............................................2M",
          "b) Starting with the R foot, takes two waltz steps forward. Moves the hat as in (a) ............................................2M",
          "c) Repeats (a) and (b) three times more and finished about four feet in front of the boy ............................................12M"
        ]
      },
      {
        title: "Figure II",
        subtitle: "Music B",
        content: [
          "The boy is still seated watching the movements of the girl. Girl puts the hat on her head.",
          "a) Executes eight sway balance steps with a point, R and L alternately, starting with R arm in fifth position, L arm bent in front at shoulder level. Reverses the position of the arm every two measures ............................................16M"
        ]
      },
      {
        title: "Figure III",
        subtitle: "Music A",
        content: [
          "The boy is still seated. Girl takes off hat and holds it in her right hand.",
          "a) Takes one waltz step sideward R and one waltz step sideward L, arms in lateral position shoulder level moving sideward right and left ............................................2M",
          "b) Takes one waltz-turn right moving forward. Arms as in (a) ............................................2M",
          "c) Repeats (a) and (b) three times more moving around the chair counter clockwise. Finishes in front near chair and on the last measure puts hat on boy's head ........................................2M"
        ]
      },
      {
        title: "Figure IV",
        subtitle: "Music B",
        content: [
          "The boy is still seated. Girl goes through the motion of:",
          "a) Fixing the hat and fitting nicely on the head of the boy .........4M",
          "b) Going away from and toward the boy to see if it is well place .........4M",
          "c)  Repeat (a) and (b) ......................................................8M",
          "Use waltz, close, or plain walking steps in (b)."
        ]
      },
      {
        title: "Figure V",
        subtitle: "Music A",
        content: [
          "Boy takes off the hat and holds it in the right hand. Uses it for fanning as if feeling warm",
          "Girl takes the handkerchief from boy's pocket and dries forehead and neck, going from right to left side of the chair .............................16M",
          "All these motions should be done rhythmically"
        ]
      },
      {
        title: "Figure VI",
        subtitle: "Music B",
        content: [
          "a) Girl takes a comb from the boy's pocket and goes through the motion of combing and parting his hair. She waltzes right to left of the chair. Once in a while she dances away to better view her work .......14M",
          "Boy shows expression of satisfaction. He holds his head still while the girl combs his hair. ",
          "b) Boy stands up (last 2 M) and puts on the hat. Girl sit down on the chair .........2M"
        ]
      },
      {
        title: "Figure VII",
        subtitle: "Music A",
        content: [
          "a) Girl looks at the boy while he is dancing. Boy repeats the steps of the girl in figure III, omitting the last waltz-turn .........14M",
          "b) Girl stands up at the last two measures. Boy takes two waltz steps forward (R,L), finishing about four feet in front of the girl "
       ]
      },
      {
        title: "Figure VIII",
        subtitle: "Music B",
        content: [
          "Partners take eight sway-balances. Steps with a point, R and L alternately, moving little by little counter clockwise. Arms in fourth position, R (L) arms high alternately ..............................................16M",
       ]
      },
      {
        title: "Figure IX",
        subtitle: "Music B (Play once more at a faster tempo)",
        content: [
          "Execute waltz, chasing each other, girl leading. Finish bowing to audience. Boy takes off hat while bowing ..............................8M "
       ]
      }
    ],
    properties: {
      costume: {
        female: "Patadyong or Balintawak",
        male: "Barong Tagalog with white trousers",
      },
      accessories: ["Handkerchief (female)", "comb (male)", "buri/hat (male)"],
      footwearFemale: "Abaca Slippers",
      footwearMale: "Black Leather shoes",
      musicalCharacter: {
        structure: "Divided into parts A and B",
        tempo: "Moderate 3/4 time (Waltz tempo)",
        instruments: "Traditional rondalla: bandurria, laud, octavina, guitar, and double bass",
        count: "one, two, three to a measure",
        description: "The music of Bulakenya is a gentle, lilting melody that mirrors the dance's theme. It rises and falls like a conversation between the performers."
      },
    },
    steps: [
      {
        name: "CHASING STEP",
        description: "Step R(L) forward, (ct.1), step L close to R(L) in third in rear or first position (ct. and) this step as executed, with one foot leading in all directions. The steps are small. There are two chasing steps in a measure.",
        video: "https://drive.google.com/uc?export=download&id=1zwhuM5bHW2ZUv4NMfYdOtQiBEwCLiBC6",
        thumbnail: "/thumbnails/1zwhuM5bHW2ZUv4NMfYdOtQiBEwCLiBC6.jpg"
      },
      {
        name: "CLOSE STEP",
        description: "Step R (L) foot in fourth in front (ct. 1) close L (R) to R (L) foot in third in rear or in first position (ct. 1). This may be executed in any direction.",
        video: "https://drive.google.com/uc?export=download&id=1BoaG0AeNQqKn5IpDYyhGmsIozxfACwVv",
        thumbnail: "/thumbnails/1BoaG0AeNQqKn5IpDYyhGmsIozxfACwVv.jpg"
      },
      {
        name: "SWAY BALANCE WITH A POINT",
        description: "step R(L) obliquely forward right (cts. 1,2) cross step L(R ) across the R(L) foot (ct. 3), step R(L) obliquely backward R(L) (ct. 1). Point L(R) in fourth in front (cts. 2, 3)",
        video: "https://drive.google.com/uc?export=download&id=1KW_4__BaA8Fq43kztu4gR7V_yHhUy4M6",
        thumbnail: "/thumbnails/1KW_4__BaA8Fq43kztu4gR7V_yHhUy4M6.jpg"
      },
      {
        name: "WALKING STEP",
        description: "Step R (L) foot forward (ct. 1), step L(R) foot (ct. 2).",
        video: "https://drive.google.com/uc?export=download&id=1u0K8TYqWxHfxXM8LiSrl4-eBVrBP8eVQ",
        thumbnail: "/thumbnails/1u0K8TYqWxHfxXM8LiSrl4-eBVrBP8eVQ.jpg"
      },
      {
        name: "WALTZ STEP",
        description: "step R (L) foot in place R (ct.1), close L ( R ) to R(L) (ct.2)Step R (L) in place (ct. 3).",
        video: "https://drive.google.com/uc?export=download&id=1qoEoKTHvp0L-F5sCE7XW4v4W5WuJIlUh",
        thumbnail: "/thumbnails/1qoEoKTHvp0L-F5sCE7XW4v4W5WuJIlUh.jpg"
      },
      {
        name: "WALTZ TURN",
        description: "Same step as in waltz step but turning in place or moving.",
        video: "https://drive.google.com/uc?export=download&id=1qoEoKTHvp0L-F5sCE7XW4v4W5WuJIlUh",
        thumbnail: "/thumbnails/1qoEoKTHvp0L-F5sCE7XW4v4W5WuJIlUh.jpg"
      },
    ],
    contact: {
      name: "Dr. Arnel P. Plantado",
      facebook: "https://www.facebook.com/arnel.plantado",
      description: "For the complete performance footage and high-quality archival videos of this dance, please coordinate with our official cultural documentation partner.",
      picture: "/sirPlantado.jpg"
    }
  },
  {
    slug: "pabirik",
    name: "Pabirik",
    tagline: "The rhythm of the gold-panners of Paracale.",
    classification: "Occupational / Comic Dance",
    origin: "Paracale, Camarines Norte",
    culture: "Lowland Christian",
    researcher: "Mrs. Francisca R. Aquino",
    performer: "Men and Women",
    image: "/pabirik.png",
    costumeImage: "https://media.base44.com/images/public/69e1d16049c5d21cd426e575/feba32679_pabirik.png",
    musicSheetImage: ["/pabirik-notepiece.png"],
    audio: "/pabirikMusic.wav",
    accent: "from-[#7a4a1e] to-[#c9924a]",
    description:
      "Pabirik is an occupational dance from Camarines Norte. It depicts in pantomime the different stages of panning gold. Literally, pabirik means to turn. The name of this dance is derived from the pabirik movement of the container used in panning gold.",
    story:
      "Camarines Norte has always been famous for its gold mines as far back as the Spanish regime when the main occupation of the people of this region was panning gold. Men, women, and children are engaged in this occupation. They are seen in the river, where the water is so deep, with their shallow basin or pan made of wood or zinc.",
    literature: [
      {
        title: "INTRODUCTION",
        subtitle: "Music Introduction",
        content: [
          "Dancers sit in a semi-squat position facing audience ready for work. Put down pan in front and take the two pieces of stone. Place one stone at right side just in front of right foot and the other near it, ready for use ............................................ 2M"
        ]
      },
      {
        title: "FIGURE I",
        subtitle: "Music A (Play two times)",
        content: [
          "a. Dancers go through the motions of taking particles of rock and placing it on the big stone (2M). Take the other stone with the R hand (2M) ............................................ 4M",
          "b. Pound on the first and third beats of every measure. Pound hard in order to crush imaginary particles of rock ............................................ 12M",
          "c. Put down stone and repeat (a) and (b) ............................................ 16M"
        ]
      },
      {
        title: "FIGURE II",
        subtitle: "Music B (Play once)",
        content: [
          "Put down stone held by R hand and hold the other one with L hand.",
          "a. Dancers go through the motion of taking with R hand a handful of imaginary crushed rock and putting it on top of stone held by L hand ............................................ 2M",
          "b. Pick up the other stone with R hand and go through the motion of rubbing two stones together as if trying to pulverize rock ............................................ 4M",
          "c. Put down stone held by R hand, repeat (a) and (b) ............................................ 4M",
          "d. Repeat all (a-c) ............................................ 8M"
        ]
      },
      {
        title: "FIGURE III",
        subtitle: "Music B (Play once)",
        content: [
          "a) Put down the two stones. Go through the motion of taking with hands pulverized rock (1M), put in pan (1M) ............................................ 2M"
        ]
      },
      {
        title: "FIGURE IV",
        subtitle: "Music B (Play once)",
        content: [
        "Hold pan with L hand only.",
        "a. Go through the motion of picking up nuggets with R hand(1,2,3) ... 1M",
        "b. Hold it up at right side and look at it (cts. 1,2,3) and at left side (cts. 1,2,3,) Pause (cts. 1,2,3) ...................................................................... 3M",
        "c. Repeat (a) and (b), three more times. Stand pick up stones and put them in pan on the last measure......................................................................... 12M",
        "d. Repeat all (a-c) in standing position .................................................................. 16M"
        ]
      },
      {
        title: "FIGURE V",
        subtitle: "Music B (Play once)",
        content: [
          "Face audience and join inside hands, outside holding pans which are placed at the waits.",
          "Sixteen waltz steps, forward R and backward L alternately. Swing joined hands forward-upward and downward-backward alternately..................... 16M"
        ]
      },
      {
        title: "FIGURE VII",
        subtitle: "Music (Play two times)",
        content: [
          "Partners face each other. Hold pan with two hands in front at waist level",
          "a. Starting with R foot, take three steps forward to meet at Center (cts. 1, 2, 3) point L in front (cts. 1,2,3) ................................................................ 2M",
          "b. Starting with L foot, repeat (a) moving backward ............................................. 2M",
         "c. Repeat (a) and (b) seven more times ..................................................................... 28M"
        ]
      },
      {
        title: "SALUDO",
        subtitle: "Music Finale",
        content: [
          "Three-steps turn right in place and bow to partner or audience. Hold pan with two hands in front at waist level .............................................................. 2M"
        ]
      }
    ],
    properties: {
      costume: {
        female: "Patadyong and blouses or Kimonas",
        male: "Working costume - rolled sleeves, colored trousers",
      },
      accessories: ["Large handkerchief or clothing (Female head dress)", "Pouch for gold nuggets", "Shallow basin or pan (wood or zinc)", "Buri hat (Male head dress)", "Two pieces of big flat stones"],
      footwearFemale: "Barefoot",
      footwearMale: "Barefoot",
      musicalCharacter: {
        structure: "Divided into two parts: A and B.",
        tempo: "Moderate, consistent with a 3/4 time signature.",
        instruments: "The music features the popular Bicol folk song, ''Ano daw itong sa gugon''. This is traditionally performed by a rondalla ensemble to provide the necessary string-based melodic texture for the Bicolano folk song.",
        count: "One, two, three to a measure.",
        description: "The music tells the story of gold panning. It starts with a famous Bicol folk song to set the scene. The second part has a steady rhythm that follows the circular motion of the miners turning their pans."
      },
    },
    steps: [
      {
        name: "SEMI-SQUAT POSITION",
        description: "Dancers sit in a semi-squat position facing the audience, ready for work.",
        video: "https://drive.google.com/uc?export=download&id=1ObLlSBXly911sm5wG2FsyS7W1xCkrsep",
        thumbnail: "/thumbnails/1ObLlSBXly911sm5wG2FsyS7W1xCkrsep.jpg"
      },
      {
        name: "STONE PLACEMENT",
        description: "The motion of taking particles of rock and placing them onto a big stone using both hands.",
        video: "https://drive.google.com/uc?export=download&id=1LzTmAddLpCpvl8CjcQdCeuWW2J6BCGVg",
        thumbnail: "/thumbnails/1LzTmAddLpCpvl8CjcQdCeuWW2J6BCGVg.jpg"
      },
      {
        name: "RIGHT-HAND LEAD & CRUSHING/POUNDING",
        description: "Specifically taking a second stone with the R hand to prepare for the crushing motion. Using one stone to pound on another on the first and third beats of every measure to crush rock.",
        video: "https://drive.google.com/uc?export=download&id=1m3_cDthbHWYB0D6hOIzunNRHxXo8Gu7i",
        thumbnail: "/thumbnails/1m3_cDthbHWYB0D6hOIzunNRHxXo8Gu7i.jpg"
      },
      {
        name: "HAND-TO-HAND TRANSFER & RUBBING (PULVERIZING)",
        description: "The motion of taking a handful of crushed rock with the R hand and putting it on top of a stone held by the L hand. Picking up a second stone and rubbing two stones together in a circular or back-and-forth motion to pulverize the rock.",
        video: "https://drive.google.com/uc?export=download&id=1Y7HgLsk0l8aoOyxylthb-a_PtFYV2nn2",
        thumbnail: "/thumbnails/1Y7HgLsk0l8aoOyxylthb-a_PtFYV2nn2.jpg"
      },
      {
        name: "PAN ROTATION",
        description: "Holding the pan with both hands and rotating it clockwise or counter-clockwise.",
        video: "https://drive.google.com/uc?export=download&id=1rFnr4oWFrC9DSW87Ebq35mVSkR9KECfG",
        thumbnail: "/thumbnails/1rFnr4oWFrC9DSW87Ebq35mVSkR9KECfG.jpg"
      },
      {
        name: "WINNOWING",
        description: "A specific lateral or circular shaking motion of the pan used to separate earth and sand from impurities, similar to winnowing rice.",
        video: "https://drive.google.com/uc?export=download&id=1S2p-F9EnW_zxKOit3Uy_3PtnQdJ3A-lp",
        thumbnail: "/thumbnails/1S2p-F9EnW_zxKOit3Uy_3PtnQdJ3A-lp.jpg"
      },
      {
        name: "NUGGET PICKING & EXAMINATION POSE",
        description: "The motion of picking up nuggets from the pan using the R hand (counts 1, 2, 3). Holding the nugget up at the right side, then the left side, to inspect it (3M).",
        video: "https://drive.google.com/uc?export=download&id=1jbyPl1-saezWe-SIE_i4u_xFehbr5mQ3",
        thumbnail: "/thumbnails/1jbyPl1-saezWe-SIE_i4u_xFehbr5mQ3.jpg"
      },
      {
        name: "BAGGING",
        description: "Taking the found nuggets or stones and putting them into a bag or pan on the final measure.",
        video: "https://drive.google.com/uc?export=download&id=1PlpuUePkz-FO9FFD88VNajfjg3M2okcH",
        thumbnail: "/thumbnails/1PlpuUePkz-FO9FFD88VNajfjg3M2okcH.jpg"
      },
      {
        name: "REVEALING THE FIND",
        description: "Picking up an imaginary nugget and showing it to a partner with a joyful expression (as if saying 'Really found gold!').",
        video: "https://drive.google.com/uc?export=download&id=1z5TwIkmibKTObnnWIxBHWmulcZQXs4NA",
        thumbnail: "/thumbnails/1z5TwIkmibKTObnnWIxBHWmulcZQXs4NA.jpg"
      },
      {
        name: "PARTNER INTERACTION",
        description: "Facing each other while performing the found gold sequence.",
        video: "https://drive.google.com/uc?export=download&id=18H1QCzamnyS2GqG-KSre0HoLOK1svQ-s",
        thumbnail: "/thumbnails/18H1QCzamnyS2GqG-KSre0HoLOK1svQ-s.jpg"
      },
    ],
    contact: {
      name: "Dr. Arnel P. Plantado",
      facebook: "https://www.facebook.com/arnel.plantado",
      description: "For the complete performance footage and high-quality archival videos of this dance, please coordinate with our official cultural documentation partner.",
      picture: "/sirPlantado.jpg"
    }
  },
  {
    slug: "pinuhag",
    name: "Pinuhag",
    tagline: "A mountain song of honey, torches, and bamboo.",
    classification: "Occupational Dance",
    origin: "Basud, Camarines Norte",
    culture: "Upland Christian",
    researcher: "Mrs. Francisca R. Aquino",
    performer: "Men",
    image: "/pinuhag.png",
    costumeImage: "/pinuhag costume.png",
    musicSheetImage: ["/pinuhag-notepiece.png"],
    audio: "/PinuhagMusic.mp3",
    accent: "from-[#3d2a14] to-[#a67237]",
    description:
      "Pinuhag is an occupational and comic dance from Camarines Norte that depicts the movements of a honey gatherer who is bitten by wild bees in the forest. The gatherer collects honey in the evening. To guide him, he holds a lighted torch and a bamboo pole about two meters long and one and one-half to two inches in diameter. As he roams around looking for beehives he accidentally pokes one. The bees come out and chase him.",
    story:
      "The dancer demonstrates how he evades the bees and how he suffers from their bites by scratching the different parts of his body, rolling, stamping, jumping and doing all sorts of antics.",
    literature: [
      {
        title: "Part One",
        content: [
          "The dancer enters cautiously with light walking steps, trying not to make any noise. He holds the lighted torch with the L hand and the pole with the R hand. He walks around the room in any direction as if looking for beehives.",
          "He stops here and there trying to investigate if there is a sign of bees around. He holds the torch high and sometimes lowers it as if to have a better view of the place. At times he uses his bamboo to clear his way."
        ]
      },
      {
        title: "Part Two",
        content: [
          "He turns around and feigns accidentally hitting a beehive with his bamboo pole. He looks scared and appears as though he were being chased by angry bees. He puts out the torch and places it on the floor together with the bamboo pole.",
          "He runs around feigning evasion of the bees that are now trying to bite him. He bends his trunk, stamps his feet, and squats. He drives away the bees with his L and R hand alternately and with both hands together.",
          "He scratches his head, back, neck, nose, ears, arms, legs, and other parts of the body. He jumps high in the air several times as if suffering from excruciating pain.",
          "To avoid being bitten any further he rolls on the floor or does any other stunt to battle the bees.",
          "The dancer ends the dance running around, picking up his torch and bamboo pole with the L hand and scratching his head and looking very tired and in pain. Then he stops or goes out to end the dance."
        ]
      }
    ],
    properties: {
      costume: {
        male: "Working costume, rolled trousers, simple upper garment",
      },
      accessories: ["Torch (lit or unlit prop)", "Bamboo pole or stick"],
      footwearMale: "Barefoot ",
      musicalCharacter: {
        structure: "Divided into two parts: A and B.",
        tempo: "Lively and upbeat; the music must be energetic and erratic to match the comic nature of the honey gatherer's frantic movements.",
        instruments: "Traditional rondalla ensemble (typically including bandurria, laud, octavina, guitar, and double bass).s",
        count: ["Basic Rhythm: One, two or one, and, two to a measure.", "Part A: One, and, ah, two, and to a measure.", "Part B: One, and, ah, two, ah to a measure."],
        description: "The music is highly narrative and thematic, specifically arranged to mirror the bee attack sequence. It is energetic and percussive, providing the necessary rhythmic drive for the dancer to execute the sudden movements required by the choreography including the scratching, rolling, stamping, and jumping antics as the gatherer evades the wild bees."
      },
    },
    steps: [
      {
        name: "LIGHT WALKING STEP & LIGHTED TORCH HOLD",
        description: "Entering cautiously and moving in any direction while trying to remain silent. Holding a torch in the L hand and a bamboo pole in the R hand while investigating the area.",
        video: "https://drive.google.com/uc?export=download&id=1ItI1Rs5d-bg91Pd1jCAhXTnlVCOCv7Zc",
        thumbnail: "/thumbnails/1ItI1Rs5d-bg91Pd1jCAhXTnlVCOCv7Zc.jpg"
      },
      {
        name: "FEIGNING IMPACT",
        description: "The motion of accidentally hitting a beehive with the bamboo pole.",
        video: "https://drive.google.com/uc?export=download&id=1RMDgvpLbszvOr1LVXZ_0nuUdeIQfPW2h",
        thumbnail: "/thumbnails/1RMDgvpLbszvOr1LVXZ_0nuUdeIQfPW2h.jpg"
      },
      {
        name: "BEE EVASION",
        description: "Running around while bending the trunk, stamping feet, and squatting to avoid imaginary bees.",
        video: "https://drive.google.com/uc?export=download&id=1qE7Zen9Ogave9AqNUDzpKKLG7mdp4Hgm",
        thumbnail: "/thumbnails/1qE7Zen9Ogave9AqNUDzpKKLG7mdp4Hgm.jpg"
      },
      {
        name: "BEE BATTLE",
        description: "Driving away bees by swinging the L and R hands alternately or both hands together.",
        video: "https://drive.google.com/uc?export=download&id=1xQJFlENaIDeZ1WZiLMslYBnz7nJpAWMn",
        thumbnail: "/thumbnails/1xQJFlENaIDeZ1WZiLMslYBnz7nJpAWMn.jpg"
      },
      {
        name: "EXCRUCIATING PAIN ACTION",
        description: "Scratching various body parts (head, back, neck, nose, etc.) and jumping high in the air as if suffering from stings.",
        video: "https://drive.google.com/uc?export=download&id=1bORq3yYBZ3WBF_rN8lpRzSB_c0pg_2oc",
        thumbnail: "/thumbnails/1bORq3yYBZ3WBF_rN8lpRzSB_c0pg_2oc.jpg"
      },
      {
        name: "ROLLING STUNT",
        description: "Rolling on the floor to avoid further bites.",
        video: "https://drive.google.com/uc?export=download&id=1PlzOXPUxomUUSJAFOwdsW1obJn27Zgbe",
        thumbnail: "/thumbnails/1PlzOXPUxomUUSJAFOwdsW1obJn27Zgbe.jpg"
      },
      {
        name: "EXHAUSTION POSE",
        description: "Ending the dance by scratching the head, looking tired, and appearing in pain.",
        video: "https://drive.google.com/uc?export=download&id=1nFyidbeG0Y3JQ-_rZ81Lz_iR6sLscRY3",
        thumbnail: "/thumbnails/1nFyidbeG0Y3JQ-_rZ81Lz_iR6sLscRY3.jpg"
      },
    ],
    contact: {
      name: "Dr. Arnel P. Plantado",
      facebook: "https://www.facebook.com/arnel.plantado",
      description: "For the complete performance footage and high-quality archival videos of this dance, please coordinate with our official cultural documentation partner.",
      picture: "/sirPlantado.jpg"
    }
  },
];

export const getDanceBySlug = (slug) => DANCES.find((d) => d.slug === slug);
