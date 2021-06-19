import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brainography';
  data: any;

  response = {
    "data": {
        "status": "success",
        "dataMap": {
          "page1": {
              "name": "Darshak Doshi"
          },
          "page2": {
              "name": "Darshak Doshi"
          },
          "page3": {
              "personal": {
                  "name": "Darshak Doshi",
                  "photo": "",
                  "guardian": "",
                  "gender": "Male",
                  "dob": "31/12/1992",
                  "contact": "9999900000",
                  "email": "darshak@theintellify.com",
                  "address": "",
                  "eval": "BOG0001"
              },
              "company": {
                  "name": "Kamlesh Sheth",
                  "contact": null,
                  "email": null,
                  "address": null,
                  "eval": "BOG0001"
              }
          },
          "page5": {
              "music_rank": "1",
              "music_perc": "19.53",
              "linguistic_rank": "2",
              "linguistic_perc": "17.97",
              "gms_rank": "3",
              "gms_perc": "17.19",
              "fms_rank": "4",
              "fms_perc": "17.19",
              "twod_rank": "5",
              "twod_perc": "14.06",
              "minute_rank": "6",
              "minute_perc": "14.06",
              "auditory_rank": "1",
              "auditory_perc": "37.50",
              "kinesthetic_rank": "2",
              "kinesthetic_perc": "34.38",
              "visual_rank": "3",
              "visual_perc": "28.12"
          },
          "page7": {
              "ssc_perc": "40",
              "ssc_arch": "",
              "cbse_perc": "60",
              "cbse_arch": "",
              "icse_perc": "100",
              "icse_arch": "",
              "ib_perc": "80",
              "ib_arch": ""
          },
          "page10_11": {
              "section1": {
                  "rank": "1",
                  "title": "YOU HAVE A POWERFUL IMAGINATION & EXCELLENT MEMO PROCEMS",
                  "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/passion/3d.png",
                  "para1": "Your strength is in your imagination of moving visuals (video). You learn more easily when presented with visual information, who grasps a concept all at once and see the whole before acknowledging the details.",
                  "para2": "You see the task as a whole, rather than a product of several steps. Hence, you are able to work on complex tasks and may be classified as systems thinkers. You have vivid imaginations and are often good at coming up with unusual or unexpected ways to solve problems. You enjoy fast moving video games, thrillers, cosmos etc.",
                  "para3": "You can be good at creativity, chemistry, computer graphics, computer-assisted design, visual problem-solving, visual estimation planning and research. Also in STEM (science, technology, engineering, and math) based careers, specifically drawn to, Animation, Al, engineering or astronomy. You may be drawn to careers such as working in video, television, drafting, architecture, artistry, airline piloting, air traffic control, construction, design fields (fashion, interior, jewellery etc.), planning (project, financial, movies etc.)",
                  "interests": "Designing;Painting;STEM Education;Graphics Designing;Best from Waste;Robotics;Learn Coding;Mobile Gaming;Chemical Experiments Music Composing;3D Modelling;Artificial Intelligence;Creative Writing;Astronomy;Modern Art;Astrology;Doodle Art;Spiritual Reading;Animation Sculpting;Painting;Cosmology;Rubik Cube"
              },
              "section2": {
                  "rank": "2",
                  "title": "YOU HAVE A GOOD UNDERSTANDING OF SOUND PATTERNS & MUSIC",
                  "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/passion/music.png",
                  "para1": "Your strength is your ability to be aural (auditory-musical-rhythmic). You can perceive sound in terms of its frequency, amplitude and timbre. You have an inbuilt understanding of melody, rhythm, pitch, and harmony. You are highly emotional and you can feel the pain of others.",
                  "para2": "You like to be surrounded by music and can appreciate different types of music and sounds. You may often be found humming or drumming out beats with your hands. You have good auditory memory and may respond well to jingles, rap and rhymes to help memorize. You may be Music Festival Background avid collector of music and musical instruments.",
                  "para3": "You may sing or play music professionally solo or in a group, band, choir, or orchestra. You can do tutoring in music, voice, or instruments. You may prefer working in music retail stores, composing music, song writing, music ministry in churches or community choirs, music reviewer, piano tuner, recording engineer etc. In medical and allied professions you can choose audiologist, speech language pathologist or technician, music therapist, and recreation therapist. You like working in video, social media, radio, television, film industry etc.",
                  "interests": "DJ'ing;Playing Musical Instruments;Singing/Rapping/Yodelling;Voice over/dubbing;Music/Melody Writing/Composing;Live/Karaoke performance;Sound mixing/Recording;Song Sequencing;Acting;Social Service;Nursing;Volunteering"
              },
              "section3": {
                  "rank": "3",
                  "title": "YOU HAVE A VERY GOOD UNDERSTANDING OF SPOKEN LANGUAGES",
                  "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/passion/linguistic.png",
                  "para1": "Your strength is your communication and correspondence. You express yourself well. You are also a good listener with a well-developed memory for the material you have read and recall of spoken information. You like quizzes that require the ability to quickly and accurately respond to spoken or written instructions.",
                  "para2": "You may have fascination for learning new languages, memorizing tongue twisters, reading and exploring ways to creatively use language. Although linguistic ability is not a synonym for intelligence or grammar, you can still easily outsmart by using language power. You enjoy crosswords, scrabble and different word games.",
                  "para3": "You may like jobs which includes language arts, public speaking, drama, and debate. You will be attracted towards different styles of writing such as, content writing, blog writing, script writing, translation, song writing, dialogue writing, language based jokes and stories etc. You may be drawn to choose careers such as language teacher, professional writer, news correspondent, poet, attorney, publicist, journalism, advertising agent, psychologist, speech pathologist, anchor, motivational speaker, etc.",
                  "interests": "Story Telling;Poem Writing Anchoring;Dubbing /Voicing;Singing/Rapping/Yodelling;Giving Speech;Language Learning;Phone Counselling Therapy;Live Commentary;Blog/Article/Script Writing;Public Speaking;Diary Writing;Dialogue/Lyrics Writing;News Reading;Jingle making;Translating"
              },
              "section4": {
                  "rank": "1",
                  "title": "YOU ARE PRECISE WITH YOUR FINGERS & FACIAL EXPRESSIONS",
                  "para_1": "Your strength is in your precise control over your fine and micro muscular movements. You like to explore all the finger based activities. You can easily perform delicate and feather touch tasks as well as tasks which require strong gripping.",
                  "para_2": "Along with profound dexterity, you also have an excellent hand-eye co- ordination and a very good control over your facial expressions. You learn from experience or from your own mistakes. You always have an urge to keep your fingers busy by scribbling or tapping a rhythm on desk by fingers while concentrating in a lecture.",
                  "para_3": "With strong Fine Motors, there are lot of possibilities. You can excel in various fields which are directly involved with facial expressions or your fingers. You can become a sports person. You may try carom, dart, snooker or all the racket based sports or become a bowler (spinner/ swinger). You can explore any musical instrument which requires fingers to play or be an artist of any form. You can also build your career in all the general precision based tasks such as repairing, surgery. non- fire based cooking, acting etc.",
                  "interests": "Drawing/Colouring;Calligraphy;Stitching/Sewing/Knitting;Rangoli Making;Ikebana;Mehandi Designing;Tattoo Making;Hair Styling;Finger based sports;Magic Tricks;Body Massage;Classical Dancing;Rock Climbing;Acting;Facial Make Up;Yoga;Non Fire based Cooking;Playing Musical Instruments;Juggling",
                  "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/passion/fms.png"
              },
              "section5": {
                  "rank": "1",
                  "title": "YOU HAVE UNTIRING STAMINA & ENDURANCE",
                  "para_1": "Your strength is in your pro-activeness. Body movement serves as an aid to your memory and you remember movements from others as well as your own. You may seek out touching and manipulating objects when learning about them.",
                  "para_2": "You have an urge to release energy by doing physical work. You enjoy creating work by practically doing it. You enjoy taking things apart and constructing things. Sitting at one place for long is a concern for you and may constantly move your legs to pay attention. Your mind goes to sleep if forced to sit without moving.",
                  "para_3": "You may be drawn to careers that involve physical interaction. In health professions, these can include physiotherapy, occupational therapy, and recreation therapy. In the arts, this can include being an dancer or artist In sports professions you may choose professional athlete, athletic coach, personal trainer, aerobics instructor etc. In trade industry you may like woodworking, mechanic, factory work, operations etc. In general, fire-fighting, police, military, forestetc.",
                  "interests": "Running;Field, Track & Court based Sports;Adventure & Extreme Sports;Kite flying;Martial Arts;Kick-Boxing;Dancing;Swimming;Aerobics;Trekking;Playing Percussion Instruments",
                  "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/passion/gms.png"
              },
              "section6": {
                  "rank": "1",
                  "title": "YOU HAVE EXCELLENT PHOTOGRAPHIC MEMORY & AESTHETIC SENSE",
                  "para_1": "Your strength is in thinking in pictures rather than in words. You are a whole-picture thinker who can grasp a concept all at once and see the whole before acknowledging the details. You also have a very good sense of mirror imaging (Reverse imaging).",
                  "para_2": "You pay meticulous attention to objects. You think in colourful, pictorial IPF and high-resolution images of individual objects. Your 2D abilities involve in understanding the outside world, and processing the information by memorizing with reasoning in the mind. You can identify landmark and navigate easily.",
                  "para_3": "You enjoy jigsaw puzzles, mazes, maps, and building blocks. Your excellent photographic memory results into your inclination towards the fields of drafting, architecture, photography, cartography, design fields (fashion, interior, jewellery etc.), fashion merchandising, and visual advertising. You have an eye of a born Artist. You can explore art in different mediums such as canvas, wood, stone, glass, ice etc. You can also peruse career as a makeup artist, hair stylist, wardrobe stylist, brand manager etc.",
                  "interests": "Photography;Drawing/Sketching/Painting;Shooting/Archery;Sketching;Styling;Fashion Designing;Prosthetic Designing;Painting Glass/Wood/Wall';Archery;Modern Art;Abstract Painting;Sculpturing- Stone/ Ice Art;Slingshot Shooting;Make Up Art",
                  "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/passion/2d.png"
              },
              "section7": {
                  "rank": "1",
                  "title": "YOU ARE ATTRACTED TO NUMBERS & LOGICAL PATTERNS",
                  "para_1": "Your strength is in math, logic, seeing patterns, and problem-solving. You like to find logical methods to answer questions, classify and categorize and you work best in structured and organized environments. You are comfortable working with the abstract.",
                  "para_2": "You like to progress by making an agenda or list, setting numerical goals, ranking brainstorming ideas, putting steps into a sequence, keeping track of the progress, and constructing data reports. You often also enjoy troubleshooting problems using logic, analysis, and math.",
                  "para_3": "As a mathematically and logically talented person you may be drawn to careers such as computer programmer, computer technician, systems analyst, network analyst, database designer and engineer. Professions that deal with numbers will appeal to you such as an accountant, auditor, financial and investment consultant, bookkeeper, mathematician, and statistician. You may also enjoy drafting, architecture, physics, astronomy, and other areas of science. In medical and allied professions, you may be drawn to medical technology and medical specialties.",
                  "interests": "Chess;Sudoku;STEM Education;Vedic Mathematics;Logical Reasoning Games;Logical Debating;Logical Puzzle solving;Physics Projects;Selling anything online;Business Strategy Games;Numerical Games;Foreign languages;Concept Making;Programming Mobile Apps",
                  "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/passion/logic.png"
              },
              "section8": {
                  "rank": "1",
                  "title": "YOU ARE HIGHLY VIGILANT & YOU LOVE NATURE",
                  "para_1": "Your strength is in the profoundness of your 5 senses and sharp observation. Your sharp sense of observation helps you to focus and concentrate on immediate tasks in hands very clearly. You are good at editing, auditing. proof reading, fault finding, speed judgement, and trajectory. You have affinity towards nature more than others.",
                  "para_2": "You have ability to understand nature, plants, animals, environment etc. You can effectively identify, observe, categorize, and understand their distinguishing features. This intelligence can help you to use elements and patterns in the natural world to create products or solve problems.",
                  "para_3": "You will enjoy all the jobs which requires- relating, discovering, uncovering, observing, digging (literally and metaphorically), collecting, sorting, comparing and displaying. You may be interested in careers dealing with nature such as astronomer, meteorologist, palaeontologist, geologist, ecologist, environmentalist, biologist, animal trainer, zookeeper, veterinarian, botanist, forest ranger, gardener, farmer, landscaper, nature photographer. If not nature related, you may opt for editor, auditor, legal, nutritionist, chef, travel guide etc.",
                  "interests": "Planting/Farming;Gardening/Horticulture;Plant Nursery;Rain Water Harvesting;Meditation;Tour Guiding;Cooking/Catering;Nature Photography;Swimming;Fishing;Ice Cream Making;Editing Videos/Text/Music;Making Aquarium;Scuba Diving;Perfume Making;Food Tasting",
                  "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/passion/minute.png"
              }
          },
          "page12": {
              "heart": "52.08",
              "Mind": "47.92",
              "indoor": "50.00",
              "outdoor": "50.00",
              "individual": "26.83",
              "team": "73.17",
              "physically": "50.00",
              "mentally": "46.00"
          },
          "page13": {
              "hobby_1": "56",
              "hobby_2": "50",
              "hobby_3": "54",
              "hobby_4": "53",
              "hobby_5": "56",
              "hobby_6": "69",
              "hobby_7": "61",
              "hobby_8": "61",
              "hobby_9": "66",
              "hobby_10": "64",
              "hobby_11": "50",
              "hobby_12": "52",
              "hobby_13": "52",
              "hobby_14": "56",
              "hobby_15": "52",
              "hobby_16": "55",
              "hobby_17": "50",
              "hobby_18": "48",
              "hobby_19": "55",
              "hobby_20": "52",
              "hobby_21": "56",
              "hobby_22": "51",
              "hobby_23": "57",
              "hobby_24": "62",
              "hobby_25": "55",
              "hobby_26": "36",
              "hobby_27": "71",
              "hobby_28": "58",
              "hobby_29": "55",
              "hobby_30": "55",
              "hobby_31": "46",
              "hobby_32": "49",
              "hobby_33": "47",
              "hobby_34": "47",
              "hobby_35": "47",
              "hobby_36": "42",
              "hobby_37": "45",
              "hobby_38": "44",
              "hobby_39": "65",
              "hobby_40": "44",
              "hobby_41": "45",
              "hobby_42": "52"
          },
          "page16": {
              "human_biology": {
                  "hb_1": "63",
                  "hb_2": "70",
                  "hb_3": "63",
                  "hb_4": "65",
                  "hb_5": "76",
                  "hb_6": "68",
                  "hb_7": "63",
                  "hb_8": "75",
                  "hb_9": "65",
                  "hb_10": "68",
                  "hb_11": "63"
              },
              "specialisation": {
                  "sp_1": "63",
                  "sp_2": "63",
                  "sp_3": "65",
                  "sp_4": "71",
                  "sp_5": "63",
                  "sp_6": "61",
                  "sp_7": "62",
                  "sp_8": "63",
                  "sp_9": "63",
                  "sp_10": "64",
                  "sp_11": "65",
                  "sp_12": "62",
                  "sp_13": "63",
                  "sp_14": "60",
                  "sp_15": "68",
                  "sp_16": "70",
                  "sp_17": "64",
                  "sp_18": "61",
                  "sp_19": "61",
                  "sp_20": "65",
                  "sp_21": "68",
                  "sp_22": "64",
                  "sp_23": "63",
                  "sp_24": "64",
                  "sp_25": "64",
                  "sp_26": "63",
                  "sp_27": "63",
                  "sp_28": "70",
                  "sp_29": "69",
                  "sp_30": "70",
                  "sp_31": "62",
                  "sp_32": "64",
                  "sp_33": "64",
                  "sp_34": "69",
                  "sp_35": "64",
                  "sp_36": "61",
                  "sp_37": "61",
                  "sp_38": "61",
                  "sp_39": "63",
                  "sp_40": "60",
                  "sp_41": "63",
                  "sp_42": "68",
                  "sp_43": "61",
                  "sp_44": "70"
              },
              "plant_biology": {
                  "pb_1": "63",
                  "pb_2": "61",
                  "pb_3": "63",
                  "pb_4": "63",
                  "pb_5": "65",
                  "pb_6": "63",
                  "pb_7": "63",
                  "pb_8": "64"
              },
              "animal_biology": {
                  "ab_1": "65",
                  "ab_2": "64",
                  "ab_3": "63",
                  "ab_4": "65",
                  "ab_5": "63"
              }
          },
          "page17": {
              "chemical_engineering": {
                  "ch_1": "77",
                  "ch_2": "61",
                  "ch_3": "77",
                  "ch_4": "68",
                  "ch_5": "63"
              },
              "civil_engineering": {
                  "cv_1": "63",
                  "cv_2": "63",
                  "cv_3": "63",
                  "cv_4": "63",
                  "cv_5": "63",
                  "cv_6": "61",
                  "cv_7": "63"
              },
              "mechanical_engineering": {
                  "me_1": "72",
                  "me_2": "63",
                  "me_3": "69",
                  "me_4": "62",
                  "me_5": "77",
                  "me_6": "63"
              },
              "electrical_electronics_engineering": {
                  "ee_1": "68",
                  "ee_2": "70",
                  "ee_3": "70",
                  "ee_4": "63"
              },
              "interdisciplinary": {
                  "id_1": "77",
                  "id_2": "65",
                  "id_3": "75",
                  "id_4": "61",
                  "id_5": "63",
                  "id_6": "70",
                  "id_7": "70",
                  "id_8": "75",
                  "id_9": "63",
                  "id_10": "77",
                  "id_11": "63",
                  "id_12": "77",
                  "id_13": "77",
                  "id_14": "77",
                  "id_15": "68",
                  "id_16": "77"
              },
              "building_services_engineering": {
                  "bs_1": "63",
                  "bs_2": "70",
                  "bs_3": "63",
                  "bs_4": "63"
              },
              "non_engineering": {
                  "ne_1": "63",
                  "ne_2": "79",
                  "ne_3": "75",
                  "ne_4": "72",
                  "ne_5": "75",
                  "ne_6": "71",
                  "ne_7": "63",
                  "ne_8": "62",
                  "ne_9": "70"
              }
          },
          "page18": {
              "general_management": {
                  "gm_1": "70",
                  "gm_2": "70",
                  "gm_3": "70",
                  "gm_4": "70",
                  "gm_5": "62",
                  "gm_6": "69",
                  "gm_7": "70"
              },
              "product_marketing": {
                  "pm_1": "62",
                  "pm_2": "63",
                  "pm_3": "71"
              },
              "sales_services": {
                  "ss_1": "71",
                  "ss_2": "78"
              },
              "hr": {
                  "hr_1": "79",
                  "hr_2": "63",
                  "hr_3": "80"
              },
              "event_management": {
                  "em_1": "78",
                  "em_2": "77",
                  "em_3": "78",
                  "em_4": "63",
                  "em_5": "62",
                  "em_6": "80",
                  "em_7": "63",
                  "em_8": "64"
              },
              "economics": {
                  "ec_1": "71",
                  "ec_2": "70",
                  "ec_3": "77",
                  "ec_4": "75"
              },
              "actual_science": {
                  "as_1": "68",
                  "as_2": "70"
              },
              "ca": {
                  "ca_1": "70",
                  "ca_2": "71"
              },
              "cs": {
                  "cs_1": "63",
                  "cs_2": "78",
                  "cs_3": "78",
                  "cs_4": "77",
                  "cs_5": "70"
              },
              "finance": {
                  "fi_1": "71",
                  "fi_2": "62",
                  "fi_3": "70",
                  "fi_4": "70",
                  "fi_5": "77",
                  "fi_6": "70"
              },
              "bank": {
                  "bo_1": "79",
                  "bo_2": "76",
                  "bo_3": "63",
                  "bo_4": "78",
                  "bo_5": "77",
                  "bo_6": "79"
              },
              "cma": {
                  "cma_1": "70",
                  "cma_2": "63",
                  "cma_3": "70"
              },
              "statistician": {
                  "st_1": "70"
              }
          },
          "page19": {
              "education": {
                  "ed_1": "63",
                  "ed_2": "63",
                  "ed_3": "64",
                  "ed_4": "64",
                  "ed_5": "63",
                  "ed_6": "63"
              },
              "music": {
                  "mu_1": "70",
                  "mu_2": "71",
                  "mu_3": "73",
                  "mu_4": "65",
                  "mu_5": "74",
                  "mu_6": "63",
                  "mu_7": "82",
                  "mu_8": "63",
                  "mu_9": "73",
                  "mu_10": "70",
                  "mu_11": "74",
                  "mu_12": "80"
              },
              "sports_adventure": {
                  "sp_1": "70",
                  "sp_2": "70",
                  "sp_3": "74",
                  "sp_4": "63",
                  "sp_5": "70",
                  "sp_6": "62",
                  "sp_7": "62",
                  "sp_8": "77"
              },
              "performing_arts": {
                  "pa_1": "71",
                  "pa_2": "69",
                  "pa_3": "65",
                  "pa_4": "73"
              },
              "artist": {
                  "at_1": "69",
                  "at_2": "69",
                  "at_3": "81",
                  "at_4": "65"
              },
              "language_literature": {
                  "ll_1": "70",
                  "ll_2": "72",
                  "ll_3": "63",
                  "ll_4": "67",
                  "ll_5": "67",
                  "ll_6": "81"
              },
              "journalism_mass_communication": {
                  "jm_1": "71",
                  "jm_2": "61",
                  "jm_3": "73",
                  "jm_4": "66",
                  "jm_5": "70",
                  "jm_6": "70"
              },
              "law_affairs": {
                  "lp_1": "64",
                  "lp_2": "64",
                  "lp_3": "63",
                  "lp_4": "62",
                  "lp_5": "78"
              },
              "language_literatures": {
                  "ph_1": "62",
                  "ph_2": "64",
                  "ph_3": "71",
                  "ph_4": "63"
              },
              "service_industry": {
                  "si_1": "80",
                  "si_2": "77"
              }
          },
          "page14": {
              "bio_sci": "64",
              "math_sci": "68",
              "com": "71",
              "arts": "68"
          },
          "page20": {
              "bo": "25.80",
              "emp": "24.20",
              "self_emp": "24.42",
              "inv": "25.58"
          },
          "page21": {
              "admin": "18.72%",
              "planning": "22.83% + R",
              "execution": "20.09%",
              "correspondence": "21.92%",
              "exploration": "16.44%",
              "iq": "35.38",
              "eq": "31.54",
              "aq": "30.77",
              "cq": "36.54"
          },
          "page22": {
              "outer": "4",
              "outer_sub": "1"
          },
          "page23":[
          {
              "title": "DOVE(EXTREME)",
              "para_1": "Dove (Extreme) conjures the vision of a gentle, friendly, peaceful & people oriented person. They are great team players, love to help others succeed, make friends and network easily and give more than they receive. They are shy, sensitive, patient, loyal and compassionate who like to listen more than they talk. Good at co-operation & collaboration, they have a measured steady approach to life.\r",
              "para_2": "On the downside they have assertiveness issues, are averse to risk-taking, can get pulled into other people’s goals, avoid confrontation and put other’s needs before themselves. Dove (Extreme) have difficulty in asking back the things given to others. They need a harmonious and predictable culture in which their role is clearly defined. They dislike change & surprises and seek approvals from others.\r",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/dove.png",
              "image_caption": "EXTREMELY STEADY",
              "common_characteristic": [
                  "Socially-oriented, loyal, consistent, affable, gentle, shy, honest, modest, friendly, patient & cautious.",
                  "Emphasizes on harmony. Will always want to adopt role of peace maker.",
                  "Open to learning. Follows directions/instructions & guidance. Strong implementation skills.",
                  "A great team player. Happy to fulfil support roles & follow plans as part of a team.",
                  "Motivated by shared goals & community services. Sympathetic to people around them.",
                  "Good at building relationships and networking. Un-demanding & persistent approach.",
                  "High power of concentration. Can work steadily at a task. Reliable to accomplish the targets.",
                  "Excellent at copying, imitating & integration learning. Responsive & adaptable to routine tasks.\r"
              ],
              "challenges": [
                  "Not a natural goal setter. Chosen goals are often biased on the perception of others than self.",
                  "Lacks assertiveness. Faces difficulty in handling conflicts, confrontations, competitions & risks.",
                  "Commonly controlled by emotions & tend to worry about unreasonable issues.",
                  "Unable to perform under unpredictable or pressure situations. Needs calm & positive environment.",
                  "Demands stability & security. Feels uneasy with frequent changes. Takes long time to adjust change.",
                  "Requires repetitive learning. Looks for approvals from others before they build up their own confidence.",
                  "Feels hesitancy in asking favours or asking back things borrowed by others.",
                  "Tendencies of “Quid pro quo” & “Tit- for- Tat” or holding a grudge are seen commonly."
              ],
              "remedies": [
                  "Avoid excessive emotions and questions in decision making. Focus on facts of the task at hand.",
                  "Put your needs first before you worry about the needs of others. Introspect your necessities.",
                  "Have a Role-model in your life & stay in the company of people like whom you want to become.",
                  "Follow your heart & mind. Don’t be easily influenced by others in setting up your goals.",
                  "Do not trade or postpone your priorities to accommodate others or make someone happy."
              ]
          },
          {
              "title": "EAGLE(EXTREME)",
              "para_1": "Eagle (Extreme) conjures the vision of an independent, highly focused and motivated person. They are bold, confident, assertive, decisive, firm, & ambitious. They are goal oriented & natural achievers. They are high risk takers who display courage & see failure as a challenge to bounce back, surprising others around them. Dominant by nature they love to control & lead rather than follow.",
              "para_2": "On downside, they often get stimulated by a challenge where they tend to make decisions on impulse, sometimes losing the sight of the big picture. They get bored with details which affect their planning. Eagle (Extreme) are egocentric and dislike command & criticism. They can be blunt or stubborn & insensitive to the emotions of others. They demand respect, privacy and positive reciprocation.\r",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/eagle.png",
              "image_caption": "EXTREMELY DOMINANT",
              "common_characteristic": [
                  "Courageous & confident. Willing to take challenges. Will march forward once the goal is identified.",
                  "Strong will power & execution ability. Self- dependent, prefer doing things their own way.",
                  "Sense of competition is very strong, and so is the obvious desire to succeed. Like to be in command.",
                  "Self- motivated & persistent to achieve their targets. Does not give up easily in pursuit of the goal.",
                  "High risk takers and not afraid of failure. View failures as a challenge to revive & bounce back.",
                  "Highly pro- active. Able to perform a series of tasks at once. Compatible to a fast-paced environment.",
                  "Rigorous when it comes to making progress. Does not hesitate to make personal sacrifices.",
                  "A natural leader, motivated by power, success & recognition. Always prefer to dominate the situation."
                  ],
              "challenges":[
                  "Lacks patience to get into the details of the subject, resulting in misjudgement or inadequate planning.",
                  "Accepts challenges blindly if provoked. Tends to miss out the broader picture behind the instigation.",
                  "Tend to listen only what they want to hear. Does not tolerate anyone pointing out their mistakes.",
                  "Can be over- confident & obstinate. Difficult to be taught since they feel like they know everything.",
                  "At times highly temperamental, hot tempered & aggressive. More rigid or less expressive.",
                  "Does not like ambiguous expressions. Expect others to be more concise, clear & to the point.",
                  "Often tend to be inflexible to collaborate. Will issue instructions rather than ask for co-operation.",
                  "May choose a goal or accept a challenge just for the thrill to win, which further escalates the ego."
                  ],
              "remedies":[
                  "Refrain from taking impulsive decisions. Take time to plan properly. Always maintain a To- do- List.",
                  "Keep reviewing your 'Big picture'. Don't hesitate to change your track, narrative or strategy if required.",
                  "Learn to be patient & welcome suggestions. Consider other people's feelings. Practice meditation.",
                  "Don't compel others to become disinterested in you. Let them win for a change. Be compassionate.",
                  "Don't consider accepting mistakes as a defeat. Before accepting challenges always check the motives."
                  ]
          },
          {
              "title": "EAGLE(PROMINANT)",
              "para_1": "Eagle (Prominent) conjures the vision of an independent, highly focused and motivated person. They are bold, confident, assertive, decisive, firm, & ambitious. They are driven by a strong sense of competition and obvious desire to succeed at any cost. They display high potential and enormous determination to achieve their target. Dominant by nature they love to control & lead rather than follow. ",
              "para_2": "On downside, they often get stimulated by challenge where they tend to make decisions on impulse, sometimes losing the sight of the big picture. They get bored with details which affect their planning. Eagle (Extreme) are high on self-respect and prefer to interact with people only if the benefit is clear. They demand respect, privacy and positive reciprocation & value results more than people's feelings.\r",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/eagle.png",
              "image_caption": "PROMINENTLY DOMINANT",
              "common_characteristic": [
                  "Firm & confident. Willing to accept challenges. Will march forward once the goal is identified.",
                  "Highly focused on the task, once the doubts or benefits are clear. Strong will power & execution ability.",
                  "Love to learn & explore new ideas and master new skills & talents in pursuit of achieving their goals.",
                  "Highly proactive, autonomous & inquisitive. They have an insatiable thirst for knowledge & competency.",
                  "Self- motivated & persistent to achieve their targets. Strive for excellence, won't settle for anything less.",
                  "High risk takers and not afraid of failure. View failures as a challenge to revive & bounce back.",
                  "Rigorous when it comes to making progress. Does not hesitate to make personal sacrifices.",
                  "A natural leader, motivated by power, success & recognition. Always prefer to dominate the situation."
                  ],
              "challenges": [
                  "Lacks patience to get into the details of the subject, resulting in misjudgement or inadequate planning.",
                  "Found running in their own independent race. Tends to miss out the broader picture in the long run.",
                  "Does not tolerate anyone suggesting or pointing out their mistakes. They feel like they know everything.",
                  "Highly judgemental & emotionally volatile. Frequent mood swings. Can be over- confident & obstinate.",
                  "Doesn't like commands & orders. At times becomes temperamental, hot tempered, aggressive & rigid.",
                  "Does not like ambiguous expressions. Expect others to be more concise, clear & 'Up to the point'.",
                  "Often tend to be inflexible to collaborate. Will issue instructions rather than ask for co-operation.",
                  "May choose a goal or accept a challenge just for the thrill to win, which further escalates their ego."
                  ],
              "remedies": [
                  "Refrain from taking impulsive decisions. Buy time to give your reply. Always maintain a 'To- do- List'.",
                  "Keep reviewing your 'Big picture'. Don't hesitate to change your track, narrative or strategy if required.",
                  "Learn to be patient & welcome suggestions. Consider other people's feelings. Practice meditation.",
                  "Don't compel others to become disinterested in you. Let them win for a change. Be compassionate.",
                  "Don't consider accepting mistakes as a defeat. Before accepting challenges always check the motives."
                  ]
          },
          {
              "title": "EAGLE(MODERATE)",
              "para_1": "Eagle (Moderate) conjures the vision of an independent, highly focused and motivated person. They are bold, confident, assertive & ambitious. They are meticulous in evaluating critically from all views & angles before taking the final decision. They are goal oriented individuals, driven by a strong sense of competition. Dominant by nature they love to control & lead rather than follow.",
              "para_2": "On downside, they may come across as being insensitive and inflexible to people's feelings and the one who like to talk more than listen. They often get engrossed in seeking details sometimes losing the sight of the big picture. Eagle (Moderate) are high on self-respect and they cannot tolerate people who criticize or compare them with others. They demand respect, privacy and positive reciprocation.",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/eagle.png",
              "image_caption": "MODERATELY DOMINANT",
              "common_characteristic":[
                  "Firm & confident. Willing to accept challenges. Will march forward once the goal is identified.",
                  "Highly meticulous & inquisitive. They have an insatiable thirst for knowledge & getting into details.",
                  "Like to clear their doubts or benefits before venturing into tasks. Always follows a system or a process.",
                  "Love to learn & explore new ideas and master new skills & talents in pursuit of achieving their goals.",
                  "Highly clinical & driven. Adept at problem solving with creativity and finding 'Out of the Box' solutions.",
                  "Self- motivated & persistent to achieve their targets. View failure as a challenge to revive & bounce back.",
                  "Rigorous at making progress. Will always evaluate themselves critically before taking the next step.",
                  "A natural leader, motivated by power, success & recognition. Always prefer to dominate the situation."
                  ],
              "challenges": [
                  "Gets too involved in collecting & aligning the details. Tends to miss out focus on the broader picture.",
                  "Does not tolerate anyone suggesting or pointing out their mistakes. They feel like they know everything.",
                  "Over introspective, often plagued by self- doubts, especially when self- respect is at stake.",
                  "Can be overconfident & obstinate.  Will look to give excuses or manipulate if their faults are pointed out.",
                  "Doesn't like commands & orders. At times becomes temperamental, hot tempered, aggressive & rigid.",
                  "Does not like ambiguous expressions. Expect others to be more concise, clear & 'Up to the point'.",
                  "Often tend to be inflexible to collaborate. Will issue instructions rather than ask for co-operation.",
                  "May choose a goal or accept a challenge just for the thrill to win, which further escalates their ego."
                  ],
              "remedies": [
                  "Don't get bogged down in details. Focus on your 'Big Picture'. Always maintain a 'To- do- List'.",
                  "Don't hesitate to change your plan or track if required. Consider it as a strategy & not your defeat.",
                  "Learn to be patient & welcome suggestions. Consider other people's feelings. Practice meditation.",
                  "Don't compel others to become disinterested in you. Let them win for a change. Be compassionate.",
                  "Don't consider accepting mistakes as a vanquish. Avoid arrogance. Let the righteousness prevail."
                  ]
          },
          {
              "title": "EAGLE(MARGINAL)",
              "para_1": "Eagle (Marginal) conjures the vision of a highly focused and motivated person. They are driven by a strong sense of competition and obvious desire to succeed. They display high potential and enormous determination to achieve their target. They will act upon an identified goal & have long term vision. They take calculative risks & dare to dream big. Dominant by nature they love to lead rather than follow.",
              "para_2": "On downside, they tend to listen only what they want to hear and are 'Difficult to be taught', since they feel like they know everything. They often display 'Tit for Tat' tendency. Eagle (Marginal) are high on self-respect and have difficulty in asking back the things given to others. They cannot tolerate people who criticize or compare them with others. They demand respect, privacy & positive reciprocation.\r",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/eagle.png",
              "image_caption": "MARGINALLY DOMINANT",
              "common_characteristic":[
                  "Adept at problem solving, efficient to find a solution long before others even identify the problem.",
                  "Willing to accept changes but will march forward once the goal is identified. Strong execution ability.",
                  "Love to learn & explore new ideas and master new skills & talents in pursuit of achieving their goals.",
                  "Highly clinical & driven. They have an insatiable thirst for knowledge, to find out how? and why?.",
                  "Like to clear their doubts or benefits beforehand. Always like to secure personal safety & security.",
                  "They demand freedom to do their own thing. Respect others based on their ability, not their status.",
                  "Rigorous at making progress. View failures & setbacks as a challenge to revive & bounce back.",
                  "A natural leader, motivated by power, success & recognition. Always prefer to dominate the situation."
                  ],
              "challenges": [
                  "Very alert when safeguarding their own security but tend to miss out the broader picture in a longer run.",
                  "Does not like others to point out their mistakes. Will give excuses or manipulate if faults are exposed.",
                  "Tendencies of Quid pro quo & Tit-for-Tat or holding a grudge are seen commonly.",
                  "Over introspective, often plagued by self- doubts, especially when self- respect is at stake.",
                  "Doesn't like commands & orders. At times becomes temperamental, hot tempered, aggressive & rigid.",
                  "Does not like ambiguous expressions. Expect others to be more concise, clear & 'Up to the point'.",
                  "While they don't actively seek conflict, neither will they shy away from a robust discussion or debate.",
                  "May choose a goal or accept a challenge just for the thrill to win, which further escalates their ego."
                  ],
              "remedies":[
                  "Don't overlook the 'Big Picture' in process of prioritizing your security first. Keep reviewing the final goal.",
                  "Programme your goal setting potential in a professional manner. Always maintain a 'To- do- List'.",
                  "Learn to be patient & welcome suggestions. Consider other people's feelings. Practice meditation.",
                  "Don't compel others to become disinterested in you. Let them win for a change. Be compassionate.",
                  "Don't consider accepting mistakes as a vanquish. Avoid arrogance. Let the righteousness prevail."
                  ]
          },
          {
              "title": "PEACOCK(EXTREME)",
              "para_1": "Peacock (Extreme) conjures the vision of an enthusiastic, optimistic and passionate person. They are people-oriented, warm, outgoing, flamboyant, humorous, dramatic, persuasive & animated. They are prolific at collaboration, co-operation & management. They thrive in an upbeat & innovative culture in which new ideas & positive feedback flows freely. They can adapt or adjust to any given situation.\r",
              "para_2": "On the downside they are mediocre with details or time management. While they like to be the centre of attention they often talk more than required. They are good at goal visualisation but may lose interest when faced with roadblocks in goal achievement. Peacock (Extreme) feel uncomfortable to perform under pressure, strict rules or limited flexibility. They are averse to criticism & comparison. \r",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/peacock.png",
              "image_caption": "EXTREMELY INFLUENTIAL",
              "common_characteristic":[
                  "Enthusiastic, influential, optimistic, passionate, happy, peaceful, honest, loyal & people-oriented.",
                  "Extremely flexible and has infinite potential for development. Ability to learn new things at any age.",
                  "Excellent communication & people skill. Exuberant, innovative & entertaining. Life of the party.",
                  "Practical & hard-working. Act with impulsive energy. Tend to notice & seize opportunities.",
                  "Big dreamers. Continually seeks new opportunities and experiences following their passions.",
                  "Direct, easy-going & trusting. Enjoy the journey as much as the results. Sociable & gregarious.",
                  "Very malleable. Ability to absorb information from people & multiple sources, and reflect on it.",
                  "Creative & good sense of humour. Inclined towards music and arts. Enjoy being the centre of attraction."
                  ],
              "challenges":[
                  "Impulsive & irrational approach to life. Unable to resist pressure. Likely to give up soon.",
                  "Like to focus on 'big picture' but often get lost in the details because of lack of planning.",
                  "Don't like structure. Gets bored by details and easily lose interest or get distracted.",
                  "Highly emotional & sensitive. Gets hurt very easily. Takes things personally too often.",
                  "Very talkative but not good listener. Defensive & conservative of own ideas. Fears to lose face.",
                  "Becomes judgemental about people & situations too fast. Need to explain the pros & cons of things.",
                  "Impatient & emotionally erratic. Extreme mood swings. Can easily change their minds.",
                  "Needs very good guidance & mentoring in order to exercise their true potential."
                  ],
              "remedies":[
                  "While focusing on the 'big picture', be diligent & attentive to notice small incremental changes.",
                  "Break down the ultimate goal into smaller & more manageable targets. Focus on one task at a time.",
                  "Prioritize your time & energy. Maintain a 'To-do-list'. Learn micro-managing your finances.",
                  "Be open to the opportunities around. Avoid being too judgemental, without investigating the facts.",
                  "Don't get obsessed with Selling your ideas & arguments and anticipating applause & recognition."
                  ]
          },
          {
              "title": "PEACOCK(PROMINANT)",
              "para_1": "Peacock (Prominent) conjures the vision of an enthusiastic, optimistic & passionate person. They are people-oriented, warm, outgoing, dramatic, persuasive & animated. They are good at networking, collaboration & management. They love to help others, make friends & selflessly give more than they receive. They possess super learning ability & can easily adapt or adjust to any given situation.\r",
              "para_2": "On the downside they often talk more than required. They are mediocre with details or time management. They are good at goal visualisation but may lose interest when faced with unexpected pressure or roadblocks in goal achievement. Peacock (Prominent) need a harmonious & predictable culture for performance. They are averse to criticism & comparison & have a tendency of \u201cTit for Tat'.\r",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/peacock.png",
              "image_caption": "PROMINENTLY INFLUENTIAL",
              "common_characteristic":[
                  "Enthusiastic, influential, optimistic, affable, cautious, happy, peaceful, honest, loyal & people-oriented.",
                  "Extremely flexible and has infinite potential for development. Ability to learn new things at any age.",
                  "Excellent communication & people skill. Exuberant, innovative & entertaining. Life of the party.",
                  "Practical & hard-working. Act with tremendous energy. Tend to notice & seize opportunities.",
                  "Big dreamers. Open to learning. Follows instructions & guidance. Strong implementation skills.",
                  "Direct, easy-going & trusting. Emphasizes on harmony. Will always want to adopt role of peace maker.",
                  "Very malleable. Ability to absorb information from people & multiple sources, and reflect on it.",
                  "Creative & good sense of humour. Inclined towards music and arts. Enjoy being the centre of attraction."
                  ],
              "challenges":[
                  "Impulsive & irrational approach to life. Likely to give up in pressure situations.",
                  "Like to focus on 'big picture' but often get lost in the details because of lack of planning.",
                  "Don't like structure. Get bored by details & easily lose interest if the routine is disturbed.",
                  "Highly emotional & sensitive. Gets hurt very easily. Takes things personally too often.",
                  "Very talkative but not good listener. Defensive & conservative of own ideas. Fear to lose face.",
                  "Quite quick in being judgemental about people & situations. Need to explain the pros & cons of things.",
                  "Tendencies of Tit- for- Tat or holding a grudge. Difficulty in handling conflicts, confrontations & risks.",
                  "Needs very good guidance, hand-holding & repetitive learning in order to exercise their true potential."
                  ],
              "remedies":[
                  "While focusing on the 'big picture', be diligent & attentive to notice small incremental changes.",
                  "Break down the ultimate goal into smaller & more manageable targets. Focus on one task at a time.",
                  "Prioritize your time & energy. Maintain a 'To-do-list'. Learn micro-managing your finances.",
                  "Be open to the opportunities around. Avoid being too judgemental, without investigating the facts.",
                  "Have a Role-model in your life & stay in the company of people like whom you want to become."
              ]
          },
          {
              "title": "PEACOCK(MODERATE)",
              "para_1": "Peacock (Moderate) conjures the vision of an enthusiastic, optimistic & passionate person. They are people-oriented, flamboyant, dramatic, persuasive & animated. They are good at administration & management. They are prolific at integrating all aspects of information & evaluate every minute detail critically before they execute their tasks. They are good negotiators & possess good sense of humour.",
              "para_2": "On the downside they are mediocre with time management. They often talk more than required. Their excessive critical evaluation creates more than two aims at the same time creating confusion for self- decisions. Peacock (Moderate) are likely to change their mind repeatedly. They need a structured environment with clearly defined processes to proceed. They are averse to criticism & comparison.",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/peacock.png",
              "image_caption": "MODERATELY INFLUENTIAL",
              "common_characteristic":[
                  "Enthusiastic, influential, optimistic, wise, meticulous, logical, cautious, honest, loyal & people-oriented.",
                  "Extremely flexible and has infinite potential for development. Will follow systems & clear processes.",
                  "Excellent communication & people skill. Keeps evaluating critically. Exuberant, innovative & outspoken.",
                  "Practical & hard-working. Tend to notice & seize opportunities. Adept at fault- finding & fault- fixing.",
                  "Big dreamers. Motivated by knowledge & expertise. Strong implementation skills for accurate results.",
                  "Direct, easy-going & trusting. Emphasizes on harmony. Have a good environment adaptability.",
                  "Very malleable. Ability to absorb information from people & multiple sources, and reflect on it.",
                  "Creative & good sense of humour. Inclined towards music and arts. Enjoy being the centre of attraction."
                  ],
              "challenges":[
                  "Complexity while making a decision. Unable to take chances or risks due to constant critical evaluation.",
                  "Confusion to single out. Often gets stuck at crossroads, especially when making a judgement for self.",
                  "Impulsive & irrational approach. Not a natural goal setter. Tend to be bull-headed if logic dictates so.",
                  "Like to focus on 'big picture' but often get lost in accumulating details or of lack of planning.",
                  "Highly emotional & sensitive. Gets hurt very easily. Takes things personally too often.",
                  "Very talkative but not good listener. Defensive & conservative of own ideas. Fear to lose face.",
                  "Quite quick in being judgemental about people & situations. Tend to see fault in self.",
                  "Tend to exhaust precious time in perfecting irreverent jobs, missing out focus on more significant ones."
                  ],
              "remedies":[
                  "When you have multiple options, use 'Strike out' method to zero down on 'Best & Final' alternative.",
                  "Break down the ultimate goal into smaller & more manageable targets. Focus on one task at a time.",
                  "Prioritize your time & energy. Maintain a 'To-do-list'. Analyse your mistakes & rectify it in next attempt.",
                  "Be open to the opportunities around. Avoid being too judgemental, without investigating the facts.",
                  "Don't get bogged down by failures. Analyse your mistakes & use this knowledge for the next attempt."
                  ]
          },
          {
              "title": "PEACOCK(MARGINAL)",
              "para_1": "Peacock (Marginal) conjures the vision of an enthusiastic, optimistic and passionate person. They are people-oriented, flamboyant, dramatic, persuasive & animated. They are good at administration & management. They are self-starters & love to control & lead rather than follow. They are good at negotiation & networking. They are high on self-discipline but also possess good sense of humour. \r",
              "para_2": "On the downside they are mediocre with time management. While they like to be the centre of attention they often talk more than required. Peacock (Marginal) dislike commands & orders. They are high on self- respect & cannot tolerate people who criticize or compare them with others. They like to focus on the big picture, but often get lost in the details because of lack of planning.",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/peacock.png",
              "image_caption": "MARGINALLY INFLUENTIAL",
              "common_characteristic": [
                  "Enthusiastic, influential, courageous, confident, strong-willed, firm, honest, loyal & people-oriented.",
                  "Has infinite potential for development. Self- dependent, prefer doing things their own way.",
                  "Excellent communication & people skill. Exuberant, rational & outspoken. Like to be in command.",
                  "Practical & hard-working. Willing to take challenges. Compatible to a fast-paced environment.",
                  "Big dreamers. Motivated by knowledge & expertise. Strong implementation skills.",
                  "Does not hesitate to make personal sacrifices. Self- motivated & persistent to achieve their targets.",
                  "Very malleable. Ability to absorb information from people & multiple sources, and reflect on it.",
                  "Creative & good sense of humour. Inclined towards music & arts. Enjoy being the centre of attraction."
                  ],
              "challenges":[
                  "Impulsive & irrational approach. Tend to be bull-headed if logic dictates so. More rigid, less expressive.",
                  "Tend to listen only what they want to hear. Does not tolerate anyone pointing out their mistakes.",
                  "Don't like commands. Will issue instructions rather than ask for co-operation.",
                  "Like to focus on 'big picture' but often get lost in accumulating details or of lack of planning.",
                  "Highly emotional & sensitive. Often takes things personally. Expect others to be clear & 'to the point'.",
                  "Very talkative but also a good listener. Defensive & conservative of own ideas.",
                  "Quick in being judgemental about people & situations. Tend to see faults in others. Short-tempered.",
                  "Accepts challenges blindly if provoked. Tends to miss out the broader picture behind the instigation."
                  ],
              "remedies":[
                  "Refrain from taking impulsive decisions. Take time to plan properly. Always maintain a 'To- do- List'.",
                  "Keep reviewing your 'Big picture'. Don't hesitate to change your track, narrative or strategy if required.",
                  "Break down the ultimate goal into smaller & more manageable targets. Focus on one task at a time.",
                  "Be open to suggestions from others. Avoid being too judgemental, without investigating the facts.",
                  "Don't compel others to become disinterested in you. Let them win for a change. Be compassionate."
                  ]
          },
          {
              "title": "OWL(EXTREME)",
              "para_1": "Owl (Extreme) conjures the vision of a wise, meticulous and a logical person. Curious by nature and motivated by knowledge & logic, they are perceived as methodical, mathematically minded, prudent & perfectionist. They are good at administration and possess a tendency to evaluate every minute detail critically before they execute their task. They are clinical, analytical, conservative, reserved & cautious. \r",
              "para_2": "On the downside, due to their perfectionist attitude they often become inflexible, taking forever to plan rather than execute. They need a structured environment with clearly defined processes to proceed. Owl (Extreme) cannot tolerate people who criticize or compare them with others. Their excessive critical evaluation creates more than two aims at the same time creating confusion for self- decisions.",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/owl.png",
              "image_caption": "EXTREMELY COMPLIANT",
              "common_characteristic": [
                  "Well-organized & systematic. Will thrive in solving complex problems through careful analysis.",
                  "Will follow systems & clear processes. Like rules & procedures. Will prefer to discuss & sort things out.",
                  "Highly perfectionist & methodical approach. Choose to finish harder tasks first than the easier ones.",
                  "Keep evaluating critically. Will constantly keep assessing things that can go wrong, minimising risks.",
                  "Like to get to the root of the problems in a constant pursuit of excellence & producing accurate results.",
                  "Try to maintain balance by perseverance, diligence & penchant for structure. Always careful & cautious.",
                  "Quick-witted & outspoken. Highly objective as they present ideas with concrete facts & logic.",
                  "Motivated by knowledge & expertise. Painstakingly detail oriented. Adept at fault- finding & fault- fixing."
                  ],
              "challenges":[
                  "Over- analytical. While being obsessive to focus too much on details, may lose sight of the 'Big picture'.",
                  "Take too long to plan, trying to address every trivial issue, resulting in very less time for action later.",
                  "Complexity while making a decision. Unable to take chances or risks due to constant critical evaluation.",
                  "Confusion to single out. Often gets stuck at crossroads, especially when making a judgement for self.",
                  "Difficulty in stepping out of comfort zone. Often tend to be bull headed & unbending if logic dictates so.",
                  "Tend to exhaust precious time in perfecting irreverent jobs, missing out focus on more significant ones.",
                  "Love self-discipline & perfection but also expects the same from others. Tend to see faults in others.",
                  "Prefer logic over feelings. Difficulty in changing opinions, even if they experience conflict of conscious."
                  ],
              "remedies":[
                  "While focusing on the details, always keep an eye on your goal. Never lose sight of your 'Big Picture'.",
                  "Don't be influenced by others misgivings and fear. Keep trying something new. Don't be afraid of losing.",
                  "Start implementing the course of action once you have your plan. Perfect it on the way, simultaneously.",
                  "When you have multiple options, use 'Strike out' method to zero down on 'Best & Final' alternative.",
                  "Don't get bogged down by failures. Analyse your mistakes & use this knowledge for the next attempt."
                  ]
          },
          {
              "title": "OWL(PROMINANT)",
              "para_1": "Owl (Prominent) conjures the vision of a wise, meticulous and a logical person. Curious by nature and motivated by knowledge & logic, they are perceived as methodical, mathematically minded, prudent & perfectionist. They are good at administration and they thrive in complex challenges, if given freedom to work in their own set methods. They are analytical, conservative, reserved and cautious.",
              "para_2": "On the downside, due to their perfectionist attitude they often become inflexible, taking forever to plan rather than execute. They need a clearly defined processes to proceed. Putting logic before feelings, they prefer to interact with people only if benefit is clear. Owl (Prominent) elicit attention from others. They are high on self- respect and cannot tolerate people who criticize or compare them with others. ",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/owl.png",
              "image_caption": "PROMINENTLY COMPLIANT",
              "common_characteristic":[
                  "Well-organized & systematic. Will thrive in solving complex problems through careful analysis.",
                  "Can be nurtured & moulded to be confident to reach majestic levels. Infinite learning potential.",
                  "High on self- discipline. Will follow systems & clear processes. Quite practical & hardworking.",
                  "Highly perfectionist & methodical approach. Ability to absorb information from various sources & reflect.",
                  "Like to get to the root of the problems in a constant pursuit of excellence & producing accurate results.",
                  "Try to maintain balance by perseverance, diligence & penchant for structure. Always careful & cautious.",
                  "Quick-witted, outspoken & bi-polar, but very objective as they present ideas with concrete facts & logic.",
                  "Motivated by knowledge & expertise. Painstakingly detail oriented. Would always like to lead & control."
                  ],
              "challenges":[
                  "Over- analytical. While being obsessive to focus too much on details, may lose sight of the 'Big picture'.",
                  "Take too long to plan, trying to address every trivial issue, resulting in very less time for action later.",
                  "Decision making is influenced by temperaments. Quick in being judgemental about people & situations.",
                  "High on self- respect. Defensive & conservative of own ideas. Often impatient & emotionally erratic.",
                  "Difficulty in trusting others or stepping out of comfort zone. Often tend to be bull headed & unbending.",
                  "Tend to exhaust precious time in perfecting irreverent jobs, missing out focus on more significant ones.",
                  "Love self-discipline & perfection but also expects the same from others. Tend to see faults in others.",
                  "Prefer logic over feelings. Difficulty in changing opinions, even if they experience conflict of conscious."
                  ],
              "remedies":[
                  "While focusing on the details, always keep an eye on your goal. Never lose sight of your 'Big Picture'.",
                  "Don't be influenced by others misgivings and fear. Keep trying something new. Don't be afraid of losing.",
                  "Start implementing the course of action once you have your plan. Perfect it on the way, simultaneously.",
                  "Follow the company of people who are superior to you in all sense & like whom you wish to become.",
                  "Analyse your mistakes & improve in next attempt. Learn to control your emotions by doing meditation."
                  ]
          },
          {
              "title": "OWL(MODERATE)",
              "para_1": "Owl (Moderate) conjures the vision of a wise, bold, confident & independent person. Inquisitive by nature and motivated by knowledge & logic, they are perceived as logical, mathematically minded, methodical, prudent & perfectionist. They are self-starters who love to control & lead rather than follow. They are high risk takers who display courage. They are assertive but reserved & cautious.\r",
              "para_2": "On the downside, due to their perfectionist attitude they often become inflexible, taking forever to plan rather than execute. They have difficulty in changing their minds once they decide on something, even if they have an inner conflict. Owl (Moderate) are high on self- respect & cannot tolerate people who criticize or compare them with others. They demand respect, privacy & positive reciprocation.\r",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/owl.png",
              "image_caption": "MODERATELY COMPLIANT",
              "common_characteristic":[
                  "Well-organized & systematic. Will thrive in solving complex problems through careful analysis.",
                  "High on will power & self-expectations. Does not give up easily. Self-motivated & task oriented.",
                  "Highly perfectionist & methodical approach. Choose to finish harder tasks first than the easier ones.",
                  "Sense of competition is very strong, and so is the obvious desire to succeed. Like to be in command.",
                  "Like to get to the root of the problems in a constant pursuit of excellence & producing accurate results.",
                  "Try to maintain balance by perseverance, diligence & penchant for structure. Always careful & cautious.",
                  "Quick-witted & outspoken. Highly objective as they present ideas with concrete facts & logic.",
                  "Motivated by knowledge & expertise. Painstakingly detail oriented. Prefer doing things their own way."
                  ],
              "challenges":[
                  "Over- analytical. While being obsessive to focus too much on details, may lose sight of the 'Big picture'.",
                  "Take too long to plan, trying to address every trivial issue, resulting in very less time for action later.",
                  "Does not tolerate anyone pointing out their mistakes. Tendency to get into excessive self-indulgence.",
                  "Will issue instructions rather than ask for co-operation. Often tend to be bull headed & unbending.",
                  "Rarely open to inputs from others & rigid on their own ideas. Tend to listen only what they want to hear.",
                  "Tend to exhaust precious time in perfecting irreverent jobs, missing out focus on more significant ones.",
                  "Love self-discipline & perfection but also expects the same from others. Tend to see faults in others.",
                  "Prefer logic over feelings. Difficulty in changing opinions, even if they experience conflict of conscious."
                  ],
              "remedies":[
                  "While focusing on the details, always keep an eye on your goal. Never lose sight of your 'Big Picture'.",
                  "Learn to be patient & welcome suggestions. Don't consider accepting mistakes as a setback or defeat.",
                  "Start implementing the course of action once you have your plan. Perfect it on the way, simultaneously.",
                  "Don't hesitate to change your track, narrative or strategy if required. Always maintain a 'To- do- List'.",
                  "Don't compel others to become disinterested in you. Let them win for a change. Be compassionate."
                  ]
          },
          {
              "title": "OWL(MARGINAL)",
              "para_1": "Owl (Marginal) conjures the vision of a wise, gentle, meticulous and a logical person. Motivated by knowledge & logic, they possess super-learning ability & an optimistic attitude. They are perceived as methodical, mathematically minded, prudent & perfectionist. They are dynamic and task oriented who love to get into minute details. They are analytical, moderated, conservative, reserved and cautious.\r",
              "para_2": "On the downside, due to their perfectionist attitude they often become inflexible, taking forever to plan rather than execute. They need a clearly defined processes to proceed. They are not great risk- takers. Owl (Marginal) have a tendency of \u201cTit for Tat\u201d. They have difficulty in handling criticism & comparison. They are often slow at making decisions and may seek approvals from others for self- decisions.\r",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/owl.png",
              "image_caption": "MARGINALLY COMPLIANT",
              "common_characteristic":[
                  "Like to be well-organized & systematic. Will thrive in solving complex problems after careful analysis.",
                  "Open to learning. Follows instructions & guidance. Strong implementation skills once the doubt is clear.",
                  "Highly perfectionist & methodical approach. Choose to finish harder tasks first than the easier ones.",
                  "Good at building relationships and networking. Will accommodate & follow plans as part of a team.",
                  "Like to get to the root of the problems in a constant pursuit of excellence & producing accurate results.",
                  "Try to maintain balance by perseverance, diligence & penchant for structure. Always careful & cautious.",
                  "Strong sense of competition. Highly objective as they present ideas with concrete facts & logic.",
                  "Motivated by knowledge & expertise. Painstakingly detail oriented. High on imitation based learning."
                  ],
              "challenges":[
                  "Over-analytical. While being obsessive to focus too much on details, may lose sight of the 'Big picture'.",
                  "Not a natural goal setter. Commonly controlled by emotions & tend to worry about unreasonable issues.",
                  "Take too long to plan, trying to address every trivial issue, resulting in very less time for action later.",
                  "Requires repetitive learning. Looks for approvals from others before they build up their own confidence.",
                  "Tendencies of Quid pro quo & Tit-for-Tat or holding a grudge are seen. Low on assertiveness.",
                  "Tend to exhaust precious time in perfecting irreverent jobs, missing out focus on more significant ones.",
                  "Love self-discipline & perfection but also expects the same from others. Tend to see faults in others.",
                  "Prefer logic over feelings. Difficulty in changing opinions, even if they experience conflict of conscious."
                  ],
              "remedies":[
                  "While focusing on the details, always keep an eye on your goal. Never lose sight of your 'Big Picture'.",
                  "Clear your self- doubts. Do not hesitate to ask for help if you are clueless or stuck with something.",
                  "Start implementing the course of action once you have your plan. Perfect it on the way, simultaneously.",
                  "Always maintain a 'To- do- List'. Programme your goal setting potential in a professional manner.",
                  "Don't compel others to become disinterested in you by expecting too much perfection from them."
                  ]
          },
          {
              "title": "DOVE(PROMINANT)",
              "para_1": "Dove (Prominent) conjures the vision of a gentle, friendly, peaceful & people oriented person. They display their dynamic talents in a relaxed, positive and harmonious atmosphere. They possess super-learning ability & an optimistic attitude. They love to help others succeed, make friends and network easily and give more than they receive. They have a measured steady approach to life.\r",
              "para_2": "On the downside Dove (Prominent) need a harmonious and predictable culture in which their role is clearly defined. High on self-respect, they prefer to interact with people only if their benefit is clear. They have assertiveness issues & are averse to risk-taking. Although they are great team players but they love to be the centre of attraction. They have difficulty in handling criticism & comparison.\r",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/dove.png",
              "image_caption": "PROMINENTLY STEADY",
              "common_characteristic":[
                  "Socially-oriented, loyal, consistent, affable, gentle, shy, sensitive, honest, friendly, patient & cautious.",
                  "Emphasizes on harmony. Will always want to adopt role of peace maker.",
                  "Open to learning. Can work steadily at a task. Strong implementation skills.",
                  "A great team player. Follows plans as part of a team. Would like to lead after gaining experience.",
                  "Motivated by shared goals & community services. Sympathetic to people around them.",
                  "Good at building relationships & networking. Practical & direct, objects ambiguity in others.",
                  "Ability to enlighten people's heart and gain respect. Compliant towards rules, regulations & authority.",
                  "Excellent at imitation & integration learning. Persistent approach. Like to utilize time optimally."
                  ],
              "challenges":[
                  "Controlled by emotions & mood swings. Tend to worry about unreasonable issues.",
                  "Chosen goals are often biased on the current mood. Highly judgemental about people & situations.",
                  "Lacks assertiveness. Can easily be affected by situations (Tensed, Cheerful, Afflicted, Amicable etc.)",
                  "Hates to perform under unpredictable or pressure situations. Needs calm & positive environment.",
                  "Demands stability & security. Feels uneasy with frequent changes. Takes long time to adjust change.",
                  "Requires repetitive learning. Takes a while before it clicks what are the actual priorities.",
                  "Feels hesitancy in asking favours or asking back things borrowed by others.",
                  "Needs acknowledgement & self-respect. Avoids to interact with people if there is no benefit."
                  ],
              "remedies":[
                  "Avoid excessive emotions and questions in decision making. Decide only when the mood is right.",
                  "Prioritize your needs first before you worry about the needs of others. Introspect your necessities.",
                  "Avoid company of losers & always stay connected with people like whom you want to become.",
                  "Follow your heart & mind. Don't be easily influenced by others in setting up your goals.",
                  "Clear your self- doubts. Do not hesitate to ask for help if you are clueless or stuck with something."
                  ]
          },
          {
              "title": "DOVE(MODERATE)",
              "para_1": "Dove (Moderate) conjures the vision of a friendly & people oriented person. They display their dynamic talents in a relaxed & positive atmosphere. They possess super-learning ability & they critically evaluate themselves before they react. They are creative with excellent managerial skills who seek harmony & stability. They like to follow a process & have a measured steady approach to life.\r",
              "para_2": "On the downside Dove (Moderate) need a harmonious and predictable culture to perform in which their role is clearly defined. They tend to resist change. Although they love self-discipline & perfection they also expect the same from others. They are great team players but may lose interest if not acknowledged positively for their inputs & efforts. They have difficulty in handling criticism & comparison. \r",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/dove.png",
              "image_caption": "MODERATELY STEADY",
              "common_characteristic":[
                  "Socially-oriented, loyal, affable, gentle, sensitive, honest, friendly, patient & cautious.",
                  "Emphasizes on harmony. Avoids criticizing & comparing others. Dislikes conflicts & confrontations.",
                  "Open to learning & strong implementation. Will go into details & evaluate critically when it comes to self.",
                  "An excellent team player to follow the plans but will enjoy to lead & control after gaining experience.",
                  "Motivated by shared goals & community services. Sympathetic to people around them.",
                  "Good at building relationships and networking. Bonded by common interests & emotions.",
                  "High on self- respect & self- introspection. Compliant towards rules, regulations & authority.",
                  "Excellent at imitation & integration learning. Thinking creatively, tend to be different from the league."
                  ],
              "challenges":[
                  "Controlled by emotions & over critical thinking. Tend to worry about unreasonable issues.",
                  "Often gets into intense arguments, perceived to be rebellious & eccentric.",
                  "Difficulty in stepping out of the comfort zone. Takes too long to plan and not enough time to act.",
                  "Hates to perform under unpredictable or pressure situations. Needs calm & positive environment.",
                  "Demands stability & security. Feels uneasy with frequent changes. Takes long time to adjust change.",
                  "Requires repetitive learning. Takes a while before it clicks what are the actual priorities.",
                  "Feels hesitancy in asking favours or asking back things borrowed by others.",
                  "Needs acknowledgement & self-respect. Avoids to interact with people if there is no benefit."
                  ],
              "remedies":[
                  "Don't get stuck in collecting details & over- analysing. Focus on 'Big Picture', and keep moving.",
                  "Don't get bogged down trying to perfect tasks on hand. Once you have a plan, start acting upon it.",
                  "Avoid company of losers & always stay connected with people like whom you want to become.",
                  "Follow your heart & mind. Don't be easily influenced by others in setting up your goals.",
                  "Try to get out of your comfort zones. Do not hesitate to ask for help if you are stuck with something."
                  ]
          },
          {
              "title": "DOVE(MARGINAL)",
              "para_1": "Dove (Marginal) conjures the vision of a friendly & people oriented person. They display their dynamic talents in a positive and harmonious atmosphere. They are self- starters and possess super-learning ability along with optimistic attitude. High on self-discipline & self-respect, they have a good leadership quality. They tend to be self- cognitive & have a measured steady approach to life.\r",
              "para_2": "On the downside Dove (Marginal) need a predictable culture in which their role is clearly defined. They dislike commands & orders. They can be good team players but would rather prefer to lead the team. They pay attention to the facts and fiercely object if communicated with exaggeration or anything which is out of the context, often rigid on their own ideas. They hate criticism & comparison. ",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/outer_personality/dove.png",
              "image_caption": "MARGINALLY STEADY",
              "common_characteristic":[
                  "Socially-oriented, loyal, self- motivated, competitive, sensitive, honest, friendly, patient & cautious.",
                  "Avoids criticizing & comparing others and expects the same. Dislikes conflicts & confrontations.",
                  "Open to learning & strong implementation. High will power & self- expectation. Does not give up easily.",
                  "An excellent team player to follow the plans but will enjoy to lead & control after gaining experience.",
                  "Motivated by shared goals & community services. Sympathetic to people around them.",
                  "Initiator in building relationships and networking. Bonded by common interests & emotions.",
                  "High on self- respect & self- introspection. Undeviating focus towards tasks on hand.",
                  "Excellent at imitation & integration learning. Thinking creatively, tend to be different from the league."
                  ],
              "challenges":[
                  "Controlled by emotions & rigidity. Tend to be easily stressed out by unwanted or petty issues.",
                  "Goals are more likely to be based on what other people think, while trying to safeguard self- respect.",
                  "Have the tendency of valuing results over people. Have difficulty on trusting abilities of others.",
                  "Hates to perform under unfavourable conditions. Highly competitive, can be a hard task master on self.",
                  "Demands stability & security. Feels bored with routine tasks. Takes own time to adjust change.",
                  "Requires to be reminded. Takes a while before it clicks what are the actual priorities.",
                  "Feels hesitancy in asking favours or asking back things borrowed by others.",
                  "Avoids to interact with people when privacy or ego is at stake. Tend to be subjective towards others."
                  ],
              "remedies":[
                  "Always maintain a 'To- Do List'. Focus on 'Big Picture', to ensure you are in right direction.",
                  "Don't be over- inquisitive. Once you have a plan, start acting on it. Address the quires simultaneously.",
                  "Avoid company of losers & always stay connected with people like whom you want to become.",
                  "Follow your heart & mind. Don't be easily influenced by how others think while setting up your goals.",
                  "Do not hesitate to change your plan or ask for help if you are stuck with something."
                  ]
          }
          ],
          "page25": {
              "strategist": "44.76",
              "samaritan": "45.80",
              "indulgent": "52.38",
              "jubilant": "55.24",
              "administrator": "56.34",
              "socializer": "57.38",
              "benevolent": "40.80",
              "empiric": "43.66",
              "theorist": "47.62",
              "optimist": "48.66",
              "exponent": "51.34",
              "explorer": "54.20",
              "challenger": "59.20",
              "energizer": "60.24",
              "pragmatist": "39.76",
              "improviser": "42.62",
              "winner": "energizer"
              },
          "page26_29":[
              {
              "personality": "energizer",
              "main_title": "ENERGIZER (ANTICIPATORS FAMILY)",
              "intro_title": "ENERGIZER INTRODUCTION",
              "intro_para": "ENERGIZERS, as the title delineates are snappy, peppy & zippy. They are true-spirited, dashing & full of life. More than just people-oriented, they are the life of the events and can certainly be felt in the crowd. Their energy & enthusiasm often propel them into the spotlight. Falling under the rare ANTICIPATORS family, they are insightful, creative & quick to pick up on trends. ENERGIZERS are very imaginative, open-minded and they love to help other people explore their creative potential. They are agile & expressive communicators, using their wit, humor & proficiency in the language to create engaging stories. They are co-operative & approachable and can befriend anyone they wish. Along with these amazing qualities, ENERGIZERS also have some problem areas. They often get entangled in excessive thinking, sometimes making serious errors in judgment. Although they are strong in their intuition to perceive the truth, they may jump to wrong conclusions when applying judgment to their perceptions. ENERGIZERS lack focus on details when developing an idea. While they experience life with intensity & flair, they have little patience for the mundane and often neglect stability & security. However, being zestful by nature, ENERGIZERS love life, seeing it as a special gift, and strive to make the most out of it.\r",
              "pros": "Exceptionally energetic, enthusiastic, imaginative & charismatic. Inculcate positive energy into surroundings.;Empowering, encouraging, co-operative & friendly. Easily approachable & can get along with anyone.;Outstanding communicator. Socially-oriented. Spontaneous but feels completely natural & unforced.;Highly sympathetic. Always thinks of doing well to others. Excellent in role of a peacemaker.;Resourceful entertainer. Energetic, lively & truly free-spirited. Popular & life of the party & events.",
              "cons": "Over altruistic. Tendency to put the needs of others above their own which may create turmoil in personal life.;Highly impatient. Face difficulty in focusing. Gets distracted easily. Lose patience quickly in routine or repetitive jobs.;Too idealistic. At times idealism & kindness become more of a liability than an asset. Gets disheartened if not appreciated or recognized.;Extremely sensitive & emotional. Gets hurt very easily. Vulnerable to emotional manipulation.;Average practical skills. Dislike getting into details. Low on micro-management. Need approvals in technical matters.",
              "child_title": "ENERGIZER CHILD",
              "child_para": "ENERGIZERS are the most enthusiastic and voraciously curious kids, overflowing with ideas and energy. They having an adventurous spirit, always excited by new experiences. Having difficulty sitting idle, they are either engrossed in their fantasy world or engaged in physical activity. Friends are always on the priority list of ENERGIZERS. They are bright students but struggle with technical subjects. Applying logic to mathematical formulas requires lots of effort. But apart from academics, they are always keen to learn & participate in extra-curricular activities, either in sports or creative fields such as singing, dancing & arts. ENERGIZERS care for others and wilfully share their things but they also expect them to appreciate & recognize their efforts. They are on the sensitive side as children. Also, they often have trouble with self-discipline and can procrastinate, leaving important tasks till the last minute. Nevertheless, ENERGIZERS are the most adorable kids, loved for their zing & pro-activeness. \r",
              "adult_title": "ENERGIZER ADULT",
              "adult_para": "ENERGIZERS grow up to become the most resourceful & influential personalities. They are genuinely warm and place great importance on their inter-personal relationships. Their wit & positive energy leaves a lasting impression on everyone who comes in contact with them. ENERGIZERS strive on basic idealism to always do well to others. They are adept at making impressive and appropriate conversations with persons of all age groups. They are also very creative and have a strong artistic side. ENERGIZERS are seen as spiritually inclined individuals, curious to find the deeper meanings of life and their existence. They look for an authentic experience and consider the pursuit of happiness to be the highest priority in life. Still & all, the ideal goal of ENERGIZERS is to constantly release their energies. They quickly lose their patience if they are compelled to do something which is not of their liking. They have a hard time focusing on detailed, maintenance-type tasks. ENERGIZERS are emotional to a fault. They want to be well-liked and often try to adapt to what they think other people want. Occasional outbursts are inevitable if insulted, abused, or criticized. ENERGIZERS focus on possibilities and tend to be on a continuous quest to adapt their lives & values to achieve inner peace. Luckily, they never fall short of well-wishers who stand by them and love them for their true altruistic spirit and helping nature. \r",
              "friend_title": "ENERGIZER FRIEND",
              "friend_para": "ENERGIZERS are the most supportive, happy, warm, sincere & irresistible people to not to have them as friends. They are people-oriented to the core and are always inter-personally involved, hence they have a very long list of friends. ENERGIZERS have an ability to perceive the temperaments and their communication can lure even the most reserved persons to correspond. Known for their idealism & altruistic spirit, they are always looked upon by their friends in their turbulent times. ENERGIZERS are among the top lists of invitees for parties & events for obvious reasons. Much to the expectations of their friends, they rarely disappoint. They dazzle with their infectious energy, amusing & enthralling with their spontaneity, shaking up things, ensuring everyone in the jamboree has a ball. ENERGIZERS love to explore possibilities, and nothing deflates them faster than talking about dry facts or harsh realities. Their bubbly, energetic style may not mesh well with everyone, but they are always respected by their friends for their openness, sincerity, & their wild bursts of energy that never fail to entertain.   \r",
              "lifepartner_title": "ENERGIZER LIFE-PARTNER",
              "lifepartner_para": "Personal relationships of ENERGIZERS are like roller-coaster rides. Their multi-facet life may be all about passions, emotions, adventures, or explorations, but never a dull moment. ENERGIZERS like to showcase their love & affection and find joy in bringing a smile to the face of their partners. They make sincere efforts in planning special moments and love to gift surprises, especially in their dating phase. ENERGIZERS are very encouraging partners. They are open to hearing new thoughts & ideas from their partner and support them to fulfill their aspirations. They dislike conflicts and are likely to withdraw rather than engage in an event of disagreement. ENERGIZERS never stop experimenting & exploring, be it in their physical relationship or drive to express their feelings. They go all in, with their gusto, but get easily hurt if they don’t sense equal reciprocation from their partners. ENERGIZERS are ignorant to understand that, not everyone is equipped with the same amount of energy & enthusiasm like they do. They also tend to blame themselves if things do not work out well mutually. Come what may, ENERGIZERS manage the adverse situations with their strong sense of adaptability and unshaken devotion for their relationships. For everything they do, comes from their mysterious idealism, deep emotions, and original ways to compromise.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ENFP_energizer_1.png",
              "parent_title": "ENERGIZER PARENT",
              "parent_para": "ENERGIZERS look forward to parenting as an opportunity to resuscitate their childhood. They enjoy every moment, observing & living while their children learn and grow. They are naturally warm and emotionally aware, attentive to their children’s emotional needs. ENERGIZERS are ideal parents who would like to support their children’s perspectives and wholeheartedly give their best to fulfill their dreams. They encourage them to be independent, often twisting their arms, pushing them out of their comfort zones to try out new things in life. ENERGIZERS can be very passionate in their ideas about teaching moral values & acceptable behavior, but they are not often strong disciplinarians. They frequently find themselves in the dilemma where sometimes they want to be their child's best friend, and at other times they will play the parental authoritarian. Their leniency and open-minded nature may work well to bring out the creativity in their kids, but it also backfires when kids overstep and take this freedom for granted. ENERGIZERS are unable to find the heart to come down hard on their kids. They stay dependent on their partners to deal with the situation. Balancing out such odd situations holds the key to avoid conflicts and maintain harmony within their family. ENERGIZERS are kind-hearted parents who strive strenuously to meet the shortcomings & support their children.\r",
              "employee_title": "ENERGIZER EMPLOYEE",
              "employee_para": "ENERGIZERS are often found shuffling their jobs, just because they always keep bumping into something more fascinating. And if they finally settle down, they do it because they liked the people more than their tasks. ENERGIZERS are extremely people-oriented, and at their best when they are into careers that deal with human interactions. Made-to-order for the service industry, they get easily bored working simply with machines & systems. ENERGIZERS love to explore new ideas. Their forte lies in their creativity and innovative ideas but can be demoralized if their superiors are unable to recognize their talent. They are good listeners but hate to follow the hierarchy. ENERGIZERS are likely to yield better results if given the freedom to perform tasks their own way. They feel uncomfortable working with deadlines or under stringent rules & regulations. They strongly advocate for ideas they believe in it. This can translate well into roles that require discussions or brainstorming sessions with their co-workers. As employees ENERGIZERS are skillful, energetic & future-oriented with a strong foot-hold in human service. They thrive when helping others or working towards a cause they value.\r",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ENFP_energizer_2.png",
              "boss_title": "ENERGIZER BOSS",
              "boss_para": "ENERGIZERS are the most lenient bosses. The methods they apply to manage their team rarely align with the ones thought in the business management schools. They do not believe in serpentine systems of punishments & rewards to get their job done by their subordinates. Instead, they rely upon their idealistic principles to build trust & confidence to get the best out of their employees. ENERGIZERS are charming, ingenuous, risk-taking, sensitive & people-oriented bosses with multi-tasking capabilities. They are adept at bringing people together and inspiring them, radiating their positive energy that inspires people to want to work hard. Although they achieve fair enough by the practice of motivation, sometimes things may fall apart in absence of proper hierarchy, deadlines, and poorly defined job roles. ENERGIZERS lack micro-management & discipline. They may also possess a tendency to over-analyze their plans and prolong the implementation of well-designed ideas. However, ENERGIZERS are quick to pick up trends and good at trouble-shooting. They apply their instincts to smooth out things by sensing the pulse of the situation and invigorating morale utilizing their verbal diplomacy. ENERGIZERS always dream big and the organizations they create are distant, cutting-edge, and vibrant.\r"
              },
              {
              "personality": "socializer",
              "main_title": "SOCIALIZER (ANTICIPATORS FAMILY)",
              "intro_title": "SOCIALIZER INTRODUCTION",
              "intro_para": "SOCIALIZERS are socially-oriented personalities. They focus on interpersonal relationship and reaching out to others come naturally to them. Driven by a deep sense of altruism and empathy, their basic idealistic belief is to always do well to others. Falling under the rare ANTICIPATORS family they are guided by sensitivity and excitement. SOCIALIZERS have a unique ability to understand what others feel instinctively without conscious reasoning. Having an intuitive sense of the emotions of others, they communicate with confidence and straight from the heart. They strive to promote well-being & harmonious environments by emphasizing values. SOCIALIZERS tend to be optimistic, engaging & charismatic individuals. All these qualities make SOCIALIZERS a truly born leader. They are prolific & persuasive in resolving conflicts by acting as a catalyst, often supporting diverse points of view to result in win-win situations. They are very effective in influencing people to participate for a cause but on the downside, SOCIALIZERS often get too involved, trying to sort out things when not required. The tendency to view other people's problems as their own may harbor anxieties, affecting their health & personal life. However, SOCIALIZERS play a pivotal role to maintain harmony & balance in society. ",
              "pros": "Charismatic & socially-oriented. Extraordinary people skills. Highly perceptive about people's thoughts & motives.;Idealistic, loyal, honest, tolerant & reliable. Eminently good at creating trust & harmony.;Motivational, inspirational & Fun to be with. Lively sense of humor, dramatic, energetic & optimistic.;Diplomatic, congenial & brilliant in planning. Exceptional organizational capabilities. A visionary leader.;Passionate communicator. Affinity of understanding emotions & making connections straight from the heart.",
              "cons": "Too selfless. May sacrifice more than expected for welfare of others. Negligence towards their own needs.;Over sensitive. Takes petty issues at heart. Tendency to over-reach or blame themselves.;Decisions are based more upon intuition, rather than facts, system-based or logical analysis.;Difficulty in sitting idle. Gets bored easily. Restless when awaiting results. Often victims of anxieties.;Over commitments.  Acts first, thinks later. Tendency to pull out of commitments after reviewing.",
              "child_title": "SOCIALIZER CHILD",
              "child_para": "SOCIALIZER kids are naturally enthusiastic & empathetic. They are warm, obedient, friendly & futuristic in their thinking. They are the most popular participants in school & they enjoy exhibiting what they know. They are truthful & sincere to follow the values of loving, sharing & caring. SOCIALIZERS are very talkative & incredibly friendly, having a long list of companions for chatting. They are fun-loving, good at mimicking, and adventure-freaks. Academically, they may face difficulty with numbers & technical subjects but are good at sports, arts & creativity. SOCIALIZERS are highly emotional beings right from their childhood. They love to make others happy and strive for harmony. Although such holistic nature may register them in the good books of their teachers & classmates, they are highly vulnerable to manipulation for their selfless behavior. While they easily fall for flattery, negative words have a deep impact on them. Nevertheless, SOCIALIZERS are always remembered for their helping & lively nature.",
              "adult_title": "SOCIALIZER ADULT",
              "adult_para": "SOCIALIZERS grow up to become passionate & charismatic individuals who are full of life. They inspire people around them leading by example, spreading joy, harmony, and validating positive energies to build prosperous societies. Because of their love for people and formidable social intelligence, they develop extensive networks of friends, acquaintances & social connections. They are often spotted taking responsibilities for a noble cause with enthusiasm. SOCIALIZERS are expert communicators. They are quick to assess the pulse of the situation, mirroring emotions, expressions & body language of the people around and by imagining themselves in their place. Hence, their words are perceived with enormous weightage & tranquility. They are looked upon to be exceptional negotiators who can manipulate a situation in favor of a genuine cause, owing to their smart vocabulary and perfect timing of dialogue delivery. SOCIALIZERS have few weaknesses, and the most disquieting among all is their extreme sensitivity. They easily take everything personally and tend to get demoralized or demotivated when they do not receive the appreciation they deserve. Also, hard logic, impersonal reasoning, technical application & data-based conclusions can be difficult and undesirable. Come what may, SOCIALIZERS rarely dither from perusing their ideology to make their societies a better place. \r",
              "friend_title": "SOCIALIZER FRIEND",
              "friend_para": "SOCIALIZERS are happy to be happy, by making others happier. Nothing excites them more than socializing with people within their circle. They have an interminable list of friends in their life. SOCIALIZERS love to interact and draw their energies from long conversations & discussions with their friends on multifarious topics, even if they are not well versed on the subject. They are very proactive to indulge in get-to-gathers, events & reunions where they often invest their time & energy to help the organizers. SOCIALIZERS are fun-loving, cheerful, warm & considerate, always radiating joy & excitement wherever they are present. They tend to anticipate the needs of their friends and are excellent at helping them solve personal problems. SOCIALIZERS may feel dejected if they don't find equal reciprocation from their friends. Their sensitive nature often brings them displeasure if their efforts are ignored. Management of self-emotions holds the key for the SOCIALIZERS to overcome their distress. Regardless of how the thrill of helping others makes them most desirable as friends. \r",
              "lifepartner_title": "SOCIALIZER LIFE-PARTNER",
              "lifepartner_para": "SOCIALIZERS dream of an ideal partner, anxious to build a life-long relationship. They are intensely & enthusiastically involved in their personal relationships which is evident right from their dating phase. They are committed & trustworthy individuals who spare no efforts to be accepted as dedicated partners. Being sensitive to the emotions & reactions of their mates, SOCIALIZERS do everything that pleases them. They encourage their partners to develop & explore their potential to fulfill their dreams & aspirations. SOCIALIZERS are very conscious of their partner's physical & emotional needs and look forward to intimacy as an opportunity to express love & caring. SOCIALIZERS believe in mutual happiness for which they sometimes sacrifice their own needs. They avoid conflicts and often surrender in an argument or try to brush issues under the rug rather than confront them head-on. Such gestures may sometimes cause turmoil in the life of SOCIALIZERS. Firstly, because they do not readily share their feelings, but bottle them up inside. Secondly, evading today's problems for tomorrow may build up tensions to the extent that they become too complicated & inextricable to be resolved later. SOCIALIZERS are prone to emotional breakdowns if their feelings are hurt. Howsoever, with their perseverance & instincts to \u2018move on', they always look to balance out the shortcomings.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ENFJ_socializer_1.png",
              "parent_title": "SOCIALIZER PARENT",
              "parent_para": "SOCIALIZERS take their parenting roles very seriously. They have very definite value systems and well-defined ideas about what is right and what is wrong. They strive to teach their children those moral values, in a warm and supportive way. SOCIALIZERS are very encouraging parents. Rather than learning only from theoretical perspectives, they motivate their kids to try things out and get firsthand experience. They are excited to discover the passion of their kids, more than they discovered their own. SOCIALIZERS tend to wholeheartedly accept, appreciate & respect the preferences made by their children. They invest their time & resources to nurture their likings but also thrust upon the necessity for them to develop their rational thinking & social behavior. SOCIALIZERS cannot tolerate situations when their kids fail to be fair or reasonable with others. They may take it personally, feeling that they have failed to inculcate the right ideology into their minds. Such occasions may lead to random conflicts, especially when their children reach puberty and demand more space for that age. Discounting such odd situations, SOCIALIZERS set the best example of an ideal parent, and as time passes their kids commemorate the love & affection they received in their childhood. \r",
              "employee_title": "SOCIALIZER EMPLOYEE",
              "employee_para": "SOCIALIZERS are creative & innovative personalities who bring a spirit of exploration & openness to a workplace. They thrive in supportive environments where they are presented with sufficient diverse challenges to stimulate their creativity. The primary aim of a SOCIALIZER is helping other people become better at what they do, be it a customer or a co-worker. They are highly intuitive in identifying the needs of their clients and like to go the extra mile to fulfill their requirements. SOCIALIZERS may prove to be timid in individual tasks or routine technical jobs. They feel out of place in a system-oriented assignment. They are extremely people-oriented and love to work in a team. They are collaborative & inspirational team members who excel in the service industry. SOCIALIZERS are not particularly driven by money or status. They find motivation in appreciation more than remuneration. The best reward for the SOCIALIZER soul is gratitude. They become very sensitive if their efforts are not recognized. They are also vulnerable to manipulation due to their over altruistic nature. But the idealistic roots of a SOCIALIZER keep them moving, often bearing the burden of themselves and others.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ENFJ_socializer_2.png",
              "boss_title": "SOCIALIZER BOSS",
              "boss_para": "SOCIALIZERS are goal-oriented bosses. They are enthusiastic, supportive, action-oriented, and very clear in terms of targets and methods to achieve them. They rarely use enforcements or strict regimes, instead, they rely more on motivation & rewarding tactics to get the best out of their employees. SOCIALIZERS are natural leaders who are best at recognizing the skills of their subordinates and delegating the right job to the right person. They have excellent verbal communication skills and perceptions about people's thoughts and motives. They are charismatic & insightful and are capable of overcoming challenges by their exceptional organizational capabilities. SOCIALIZERS are very much rooted in their idealism and truly believe in brightening the lives of honest contributors in their organization. In events of conflicts & disagreements, they always look for a peaceful solution. This is where they sometimes utilize manipulative alternatives, but all for the benefit of solving the purpose and bring win-win situations. SOCIALIZERS may not be experts in handling technical applications, but they are skilled to get the job done with alternate methods. Although they might not be conventional, their methods are highly effective. They are the most admired bosses due to their lenient nature."
              },
              {
              "personality": "samaritan",
              "main_title": "SAMARITAN (ANTICIPATORS FAMILY)",
              "intro_title": "SAMARITAN INTRODUCTION",
              "intro_para": "As the title suggests, SAMARITANS believe in helping others as their way of life. They have a natural sense of idealism and once they start believing in a certain idea they will strive relentlessly to stick it out. Falling under the rare ANTICIPATORS family, they are mystical, yet very inspiring & vigorous idealists. They are very creative, imaginative & strong-willed but they seldomly use their skills for personal benefits. SAMARITANS are passionate about creating a solution that can make a difference in people's life. They devote their time & resources for a good cause and never hesitate to volunteer themselves for a humanitarian cause, be it a rescue operation in an event of a crisis or philanthropic gesture in natural calamities. Although they may get their deserved acclamation & recognition in society for their efforts, their hardships may sometimes result in an adverse effect on their personal life. SAMARITANS struggle to find a balance between their zeal for idealism and the daily needs of personal life. Their passion to follow their principles often invite difference of opinion or conflicts within their family members. Nevertheless, as the flag-bearers of morality & virtue SAMARITANS play an important role in a society to maintain a healthy balance. \r",
              "pros": "Idealistic & visionary. Driven by purpose & extremely sensitive to the needs of others.;Introspective & imaginative. Prolific in building harmony & defusing conflicts by excellent counseling skills.;Strong-willed, decisive & equanimous. Natural leaders. Highly creative, conceptual & future-oriented.;High moral values & principles. Altruistic & compassionate. Relentlessly strive for a better tomorrow.;Innovative & unique solution provider for people welfare & service. Volunteers for a humanitarian cause.",
              "cons": "Vulnerable to emotional manipulation. Taken for granted for their sympathetic & altruistic nature.;Inadequate technical & analytical skills. Sluggish in money management.;Extremely reserved & tightly wound up. Having difficulty in trusting new people.;Over-sensitive to criticism. Highly irritative when counter-questioned.;Unable to maintain balance in personal life. Exhaust themselves in pursuing their passion.",
              "child_title": "SAMARITAN CHILD",
              "child_para": "SAMARITAN kids are reserved & sensitive. They live in their own inner world of fantasies. They imagine themselves as super-heroes just like the other kids of their age do, but the impact of super-hero characters leaves deep footprints in their minds.  When it comes to academics SAMARITANS are smart & creative. They are prolific in writing & listening skills but technical subjects require repetitive learning, which may often cause anxieties. At times they get so caught up in their thoughts that they lose track of the time and pulling out in a different direction becomes difficult. SAMARITANS are not very enterprising & may shy away from participating in team activities but due to their helping nature, they earn lots of friends & sympathizers. As they grow up they start seeking purpose in everything. This is when SAMARITANS stumble upon their passion to get into the heart of evolution and discover their thirst for idealism. Their affection to search the meaning of everything that touches the heart begins to surface.\r",
              "adult_title": "SAMARITAN ADULT",
              "adult_para": "A single belief may bring a huge relevance in one's life, for SAMARITANS it's simply the purpose of their life. Once they are firm on a particular idea, they use their imagination & creativity to plan a road-map which they follow with passion & conviction. SAMARITANS are visionaries, they may have multiple plans & ideas, but all their strategies are based on single agenda- \u2018Welfare of humanity'. They are guided by strongly held fundamentals & personal values. They are insightful thinkers who can effectively see through situations & design practical strategies for action. They possess strong will-power to undertake herculean tasks and profound courage to overcome obstacles. SAMARITANS speak straight from the heart with compassion & persuasion. Although they may not sound logical or may not use technical jargon in their conversation, their communication is very effective to make asomatous connections. SAMARITANS are filled with love & sympathy, having a genuine concern for others, but on the downside, they are often taken for granted for their altruistic nature. They are most vulnerable to manipulative tactics and often fall victim to rivalry & criticism. Also, while they are busy projecting their focus on a big picture, they often overlook minute details. However, due to their strong will-power & firm conviction to follow their deeply held principles, SAMARITANS always find alternatives to peruse their ideas.  ",
              "friend_title": "SAMARITAN FRIEND",
              "friend_para": "SAMARITANS have a soft heart for all the living creatures on the planet, but they stay a bit reserved when it comes to interaction with them. They find it difficult to trust people easily, also they struggle to open up & share their ideological views in public. Even when they find someone eligible to be trusted as a true friend, they refrain from readily sharing their ideas, not unless they are convinced about their intentions.  SAMARITANS like to befriend people who share common goals, passions & beliefs. Once the connections are made they see the best in the person and always give more than they take. They love to engage in sessions where they can explore life-enriching ideas, philosophies & mutual ideologies. SAMARITANS are extremely empathetic & non-judgmental towards their friends. They go out of their way, often pushing aside their own needs, to extend their support. They are naturally empowered with a strong intuitive sense to know the feelings of their friends, long before their friends know themselves. A true relationship with a SAMARITAN is invariably on an emotional level.",
              "lifepartner_title": "SAMARITAN LIFE-PARTNER",
              "lifepartner_para": "SAMARITANS prefer honesty & genuineness over beauty & aesthetics when looking for a life partner. They are often picky and may turn down proposals if the authenticity is not evident in the behavior of a person. However, they never hesitate to make a sincere approach if they sense the possibility of developing a meaningful relationship. Once SAMARITANS take the final step into a committed relationship, they stay loyal & dedicated towards their partners. They make every effort to maintain harmony, showering their unconditional love & affection to keep their relationship meaningful. SAMARITANS are broad-minded & inspiring, as they encourage their partners to fulfill their dreams & aspirations. They tend to be ideal companions who value the needs & emotions of their partners. They are very expressive in intimacy & view their connections beyond the physical liaisons to a rather spiritually-eternal bonding. SAMARITANS are very sensitive and they expect their partners to be equally insightful & committed. They are happiest when they share their innermost thoughts & feelings with their partners. SAMARITANS dislike conflicts, but are unwilling to go along with an idea that does not feel authentic to them. They can't stand lies and are unforgiving if their emotions are hurt. SAMARITANS are desirable soul-mates as long as their partners respect their deeply held values & ethics.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/INFJ_samaritan_1.png",
              "parent_title": "SAMARITAN PARENT",
              "parent_para": "SAMARITANS are supreme personalities when it comes to relationships, be it a partner, a friend, or a parent. They display enormous dedication & devotion towards parenting, showering their unconditional love & affection. They are keen to impart moral values which highlight the distinction between right or wrong behavior to their kids. SAMARITANS firmly believe that children should be thought morality & ethics right from an early age so that over the period they can congregate will & courage to stand up for their cause. They also equally support their kids in their individual interests. SAMARITANS are zealously tuned to the emotions & sensibility of their children. They intuitively sense the mood of their children just by their expressions. They constantly put efforts to create nurturing atmosphere and keep providing doses of encouragement & appreciation when required. SAMARITANS invest their resources to help their children devise their identity, but they often go too far with their expectations. It's disheartening for them if their children choose beliefs that do not coincide with their principles. This could create a rift, resulting in conflicts, especially when kids are in their adolescence. Discounting such situations, the over-all parenthood of SAMARITANS is pretty much ideal & balanced. ",
              "employee_title": "SAMARITAN EMPLOYEE",
              "employee_para": "SAMARITANS can work in almost any field with adorable efficiency, as long as the work assigned to them is given with a purpose that makes sense to them. They tend to avoid meaningless tasks or jobs which do not fall in line with their ideology. SAMARITANS generally dislike working for companies that deal with materialistic products or organizations which compromises on ethics for profitability. They derive job satisfaction if their occupation serves not only the employees, or the company, but also counter-productive to serve mankind in its entirety. They thrive in workplaces that diligently work towards establishing environments that support co-operation & tolerance. SAMARITANS prefer to work individually, but due to their empathetic & altruistic nature, they are always available as helping hands to their co-workers. They guidelines if they are not designed keeping sensitivity in mind. SAMARITANS bargain for equal growth opportunities for everyone. Intensively sensitive to the well-being of others, they often sacrifice their personal needs to promote equal & fair deals for everyone. SAMARITANS play a pivotal role in creating a work environment that maintains professional integrity. ",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/INFJ_samaritan_2.png",
              "boss_title": "SAMARITAN BOSS",
              "boss_para": "SAMARITANS are rare personalities who have an equality complex. They use their powers responsibly and avoid manipulative tactics for getting the job done by their employees. This by any means, does not indicate that they are low on leadership. They judge the situations on their merit and take decisions based on ethics. SAMARITANS are highly focused when it comes to achieving their goals. They don't believe in applying domineering methods to achieve the desired results, instead, they resort to their communication skills to encourage & motivate their subordinates. SAMARITANS constantly strive to turn their lofty ideas into reality. They are highly organized and expect their co-workers to complete their assignments systematically. In conflict situations, they seek equanimous resolutions. SAMARITANS have a very holistic & compassionate style of defusing conflicts at the workplace. Their communication is simple, non-technical but highly insightful & convincing. The only situation that upsets SAMARITANS is when people choose immoral means to gain the advantage. They are highly intolerant to vulgar, corrupt & nefarious motives. People with high standards of work ethics, reliability & conviction will find an equally rewarding boss in a SAMARITAN. Their organizations are comprehensively future-oriented."
              },
              {
              "personality": "optimist",
              "main_title": "OPTIMIST (ANTICIPATORS FAMILY)",
              "intro_title": "OPTIMIST INTRODUCTION",
              "intro_para": "OPTIMISTS are among the most open-minded & imaginative idealists, guided by their core values & beliefs. Curious & restless, they enjoy entertaining new ideas & possibilities. Falling under the rare ANTICIPATORS family they are quite meticulous about things, always looking for reasons to remain positive. OPTIMISTS have an experimental attitude towards life. They love to explore ideas, lifestyles & cultures, seeking a deeper understanding of themselves and the people around them. They are creative individuals from within, which is quite evident in their communication, where they deliberately make use of exuberant phrases, idioms & metaphors. OPTIMISTS enjoy examining various means for self-expression. Generally, they prefer to stay reserved & shy, but since they are firmly guided by a set of principles they often revolt if things go against their fundamentals. OPTIMISTS hate to dominate or be dominated. They advocate democracy, peace & harmony, but in pursuit, they sometimes get carried away with their enthusiasm and often invite criticism. In events of conflicts, they might seem overly emotional or even irrational, since OPTIMISTS think more from their hearts rather than their heads. However, this also makes them good mediators to help people involved in a conflict.\r",
              "pros": "Virtuous, compassionate, loyal & devoted with strong sense of idealism & future-orientation.;Flexible, accommodating, & nonjudgmental. Highly sympathetic to the needs of others.;Excellent communication skills. Good listeners & gifted writers. Talent for self-expression.;Highly creative in music, arts or literature. Can create from both perspectives, conventional & abstract.;Passionate, dedicated & courageous in accomplishing their beliefs & idealistic ideas.",
              "cons": "Distinctly shy, reserved & private. Dislike anyone invading their privacy.;Over sympathetic & altruistic. Vulnerable to emotional manipulation & to be taken for granted.;Emotional to the core. Prone to anxieties, outbursts & fear of failure.;Limited mathematical, logical, factual & technical application. Highly Philosophical & hypothetical approach.;Difficulty in handling criticism & comparison. Takes things personally. Tendency to blames others.",
              "child_title": "OPTIMIST CHILD",
              "child_para": "OPTIMIST kids are highly imaginative & have a sharp memory recall. They have a strong word-vocabulary and are good at expressing their thoughts, but they usually prefer to stay reserved & private in the classroom. They are solitary learners and they do best when they're left alone. They may require repetitive learning in technical & analytical subjects but OPTIMIST children have a special affection for creativity. They love to express their talent through music, arts, or literature. They are among the most positive and affirming members of the classroom. OPTIMISTS often get engrossed in deep thoughts, building layers of fantasies, that they lose the connection with their senses. At times they are required to be alerted to come back to the real world. They are seen as sensitive souls and are often more on the quiet side as children. They grow up to choose a stream that gives them the freedom to express themselves & their creative skills along with their idealistic principles. ",
              "adult_title": "OPTIMIST ADULT",
              "adult_para": "OPTIMISTS mature to become kind-hearted & emotional individuals. They stay calm, reflective & spiritual, and draw their energies from their inner-self. They may seem offbeat & unconventional but they value authenticity and tend to be original from all aspects. Their passionate & philosophical nature on the surface is deeply rooted in the realm of idealism. OPTIMISTS possess a great sense of appreciation for art, beauty, feelings & creativity. They view things from idiosyncratic perspectives which may not seem to be conventional to others, but they manage to create something extraordinary or abstract that attracts lots of attention & appreciation. OPTIMISTS need to have some kind of emotional connection before they indulge in any activity. Once they identify the subject of their interest they dedicate their time & energy to materialize the project. On the downside, OPTIMISTS struggle with technical applications. Their understanding of logical, factual & financial analysis is limited, hence they sometimes get entangled in non-practical tasks which may bring a lot of distress & frustration in their life. Also being private, they may not readily share their feelings or emotions with others, but bottle them up inside. However, being creative problem-solvers, OPTIMISTS proficiently manage to mold & shape their surroundings to find practical solutions to their problems.\r",
              "friend_title": "OPTIMIST FRIEND",
              "friend_para": "The best company OPTIMISTS enjoy is with themselves. Socializing happens only in their spare time and that too within a small group of people. They find it difficult to let someone peep into their personal life, not until they develop an emotional bonding with them. OPTIMISTS typically only have a few close friendships, but these relationships tend to be long-lasting. Their relations are based on mutual understanding, trust & principles. They are very sensitive towards the needs of their friends and often go the extra mile to support them in their turbulent times. OPTIMISTS are incredible listeners. They are always attentive when their friend needs to vent or chat about something that is bothering them. They are adept at understanding other's emotions but find it burdensome when it comes to revealing their own. Being very conscious they dislike being under any obligations. Nevertheless, OPTIMISTS are appreciated for their admirable altruistic & idealistic qualities and their friendship grows stronger and deeper with time.\r",
              "lifepartner_title": "OPTIMIST LIFE-PARTNER",
              "lifepartner_para": "OPTIMISTS live in a parallel world of their own. They fantasize about every aspect of how their ideal world should be. When it comes to selecting a life-partner OPTIMISTS may take ages to figure out their ideal match, but not long before they realize that finding a perfect soul-mate is an illusionary goal and fantasies are distant apart from reality. Nevertheless, OPTIMISTS try to make the best out of the settlement and look forward to a healthy and fulfilling relationship. Moving forward, they demonstrate to be caring & generous partners. OPTIMISTS tend to be open-minded and accepting their partner's behavior & preferences. They respect their partner's privacy & individuality and encourage them to explore their interests & ideas. They are passionate and imaginative in their physical relations and they ensure that the needs of their partners are satisfied. OPTIMISTS may wholeheartedly contribute to becoming an ideal partner, but they expect equal reciprocation in return. They are likely to become emotionally disturbed if their core values are violated.  It can get even worse since OPTIMISTS are reserved and they don't share their feelings easily. Finding ways to balance out such situations holds the key to stability in their personal life. OPTIMISTS value a partner who is committed and loving, yet provides them with the support they need to independently explore the mysteries of life.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/INFP_optimist_1.png",
              "parent_title": "OPTIMIST PARENT",
              "parent_para": "As parents, OPTIMISTS are caring, supportive & adaptable. They teach moral values to their children, including honesty, compassion & caring for others. They use their sensitivity to communicate in ways that resonates with their children. OPTIMISTS seek to foster deep connections with their children through time spent together playing & bonding. They are good listeners who try to understand their children's feelings and never stop encouraging their children to learn and grow. OPTIMISTS provide their children a lot of latitude & freedom to develop their own personalities and pursue their interests. They strive to serve as good role models for their kids and in the process they may prevent display of negative emotions & frustrations in front of their children. Although the intention of OPTIMISTS is to help their children feel safe & cared for, but this may often result in an adverse effect. Their children may face difficulties getting acquainted with the real world when they start stepping out of their comfort zones. They may even become rebellious, especially in their teenage, and may choose beliefs that do not coincide with the principles of OPTIMISTS. This could create a rift, resulting in conflicts. Discounting such situations, the over-all parenthood of OPTIMISTS is pretty much ideal & balanced. ",
              "employee_title": "OPTIMIST EMPLOYEE",
              "employee_para": "OPTIMISTS often find themselves in a wrong job. They seek stress-free working environments and meaningful assignments. They are not particularly driven by money or status, but they prefer jobs which align with their personal values and include human interactions. Such perfect arrangements of jobs which suits the nature of OPTIMISTS are limited. The closest match is service industry, particularly customer-care division where they can enjoy freedom & express themselves. Opportunity to win peoples heart serves their purpose. OPTIMISTS are eager to venture into complex issues to be able to apply their creative problem-solving abilities. They possess a strong work ethic and readily accept responsibilities for things that need to be done. They always come up with original ideas to improve circumstances for people. OPTIMISTS generally prefer to work alone, but also enjoy participating in teams, as long as the team members proffer equal contribution. They hate to dictate terms and expect the same in reciprocation. OPTIMISTS are persuaded by tasks where they can quench their thirst of implementing their idealism. Conflict or competition is the last thing on their mind.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/INFP_optimist_2.png",
              "boss_title": "OPTIMIST BOSS",
              "boss_para": "OPTIMISTS are visionaries. They are good at long-term planning and setting targets. They ponder & evaluate all the uncertainties before plotting their strategies to deliver the desired results. They motivate their employees through encouragement and positive vision. OPTIMISTS see the best in their subordinates, and are good at inspiring them to use their talents. They rhapsodize in creating an ideal work environment which is pleasant, friendly & flexible. OPTIMISTS are deeply idealistic and display their determination when working for a cause that is important to them, but on the downside, they sometimes entertain too many of these ideals. Consequently, unrealistic strategic plans based on misjudgment of risks verses benefits often forces them to revise the initial plan. OPTIMISTS are mediocre in technical application & micro-management. So, while focusing on the long-term vision, they tend to neglect small incremental changes. They may not adhere strictly to deadlines and schedules. OPTIMISTS have a tendency to respond emotionally and they never hesitate to take blame on themselves for the setbacks. They apply their relentless determination and problem-solving abilities in challenging situations to improvise and achieve their purpose. This makes them natural leaders."
              },
              {
              "personality": "administrator",
              "main_title": "ADMINISTRATOR (INQUISATORS FAMILY)",
              "intro_title": "ADMINISTRATOR INTRODUCTION",
              "intro_para": "ADMINISTRATORS are born leaders. Being self-confident, strong-willed, energetic & efficiently accurate in their analysis, no goals are unachievable for these determined & intellectual minds. They are well-served by their quickness to grasp complexities, and their ability to absorb a large amount of impersonal information. Falling under INQUISITORS family, they are intensively introspective, cogitative & ingenious. ADMINISTRATORS are highly career-focused and fit into the corporate world quite naturally. They have a strong ability to organize people and generate systems that can efficiently run an organization. Constantly scanning for potential problems and finding innovative solutions, they always see things from a long-range perspective. ADMINISTRATORS are never afraid to take unpopular decisions and display courage in impossible situations, all under calculative risks. Their communication is direct and to-the-point. They dislike seeing mistakes repeated, and have no patience with inefficiency. Although ADMINISTRATORS are looked upon as dominant, unforgiving & sometimes ruthless, they remain the driving force behind large institutions and successful business empires. ADMINISTRATORS are among the favorites of authors & content writers who look for a subject that is larger than life.",
              "pros": "Natural leaders. Efficient, energetic, charismatic, dynamic & inspiring. Larger than life image.;Determined & unwavering. Strong-willed minds who love challenge & battle of wits. Once they make a decision, they don't buckle under pressure.;Highly skilled theoretical strategist. Sharp thinkers & remarkable problem solvers.;Excellent verbal communication skills. Clear, concise & direct-to-the-point. Speak with decisiveness & authority.;Charismatic & Inspiring. Cornerstones for building successful organizations. Motivate others to follow their foot-steps.",
              "cons": "Arrogant & stubborn. Try to win every single debate. Dominant when pushing their vision.;Intolerant & impatient. Difficulty in handling slow & timid persons. Intolerant towards inefficiency & unprofessionalism.;Dislike routine & routine tasks. Cannot work under command of others for too long.;Overly critical & analytical. Look for perfection to the extent of being hubristic. Ruthless & unforgiving.;Poor emotional management.  Lack of sensitivity, feelings & display of emotions. Disregards them as discrepancies & waste of time.",
              "child_title": "ADMINISTRATOR CHILD",
              "child_para": "ADMINISTRATOR children gain maturity at a very early age and are perceived to be older by three to four years of their actual biological age. They are fiercely independent, logical & ambitious right from their childhood. They are driven by intellectual curiosity and a need to master everything they try.  ADMINISTRATOR kids may score above average and be among top rankers in school. Their classmates perceive them as smart & cunning since they can outsmart others in any given situation. Uncomfortable with the world of feelings & emotions, they hate to cry and will do whatever possible to not seem vulnerable. ADMINISTRATORS are self-motivated individuals who grow up to become 'controllers' no matter which stream they select as their career. Even if they are born in economically poor families or troublesome backgrounds, they refuse to be bogged down. ADMINISTRATOR children always crave a challenge and enjoy the pride of accomplishing something on their own.\r",
              "adult_title": "ADMINISTRATOR ADULT",
              "adult_para": "ADMINISTRATORS grow up to become charismatic & diplomatic individuals. They typically have a clear vision for the future, and intuitively understand how to manipulate people & systems towards their goals. They trust their abilities and make their own decisions. Once they decide, they never give up, no matter how difficult & unfavorable the circumstances are. ADMINISTRATORS set an example of exemplary planners, who decipher every dimension of the given situation, before navigating through challenging issues to achieve the desired results. Having excellent verbal communication skills, they are stimulated by having a lively, challenging conversation. They size people & situations up very quickly. ADMINISTRATORS deliberately invest in human resources and tend to have an idea for how a person will fit into their grand scheme from the moment they are introduced. They have a tremendous amount of personal power and are quick to verbalize their opinions and decisions. ADMINISTRATORS are not naturally tuned into other people's feelings and have difficulty seeing things from outside their perspective. They are intolerant to incompetency and hardly live any room for error. Although ADMINISTRATORS are tremendously forceful personalities, they contribute significantly to society by building colossal corporations that not only benefit people but the nation in its entirety.\r",
              "friend_title": "ADMINISTRATOR FRIEND",
              "friend_para": "ADMINISTRATORS view friendships as serious investments. They like to befriend individuals who share their values & principles. Although they interact with a lot of people but may have a very small circle of close friends. They tend to be energetic & sociable, keenly interested in the ideas, theories & perspectives of their friends. ADMINISTRATORS are less of an adventure & rip-roaring-event type. Instead, they would love to meet friends over a weekend-dinner and engage in sessions where they can explore life-enriching ideas, philosophies & mutual ideologies. They tend to be direct & challenging when interacting, putting their friends on the defensive, just for livening up conversations and stimulating learning. ADMINISTRATORS are deeply loyal to the people they care about and will go to great lengths to help them solve problems. They rarely seek any emotional support from a friend, on the contrary, they welcome critical evaluations. They put a lot of effort & enthusiasm into their relationships to keep them meaningful. ADMINISTRATORS make stimulating, interesting, and dynamic friends and peers. \r",
              "lifepartner_title": "ADMINISTRATOR LIFE-PARTNER",
              "lifepartner_para": "For ADMINISTRATORS, personal relationships are all about creating strong bonds that last for a lifetime. Dating, falling in love, or starting a relationship, they view everything as a goal and will engage in equal planning & dedication, as they do with all the other aspects of their life. ADMINISTRATORS never fall for a superficial person who doesn't show any particular interest in their ideas. If they are genuinely interested in a prospective partner, they will never shy away from taking the first step towards proposing. They try to impress their partners with surprises & fancy dinners, especially in their dating phase, to keep things interesting. ADMINISTRATORS struggle to handle emotional expressions, hence romance is a serious business for them. Once into a committed relationship they recognize & adapt to the needs of their partners with a strong sense of responsibility. They apply all the tricks-in-the-trade, to keep their association interesting and always try something new to amuse their partners. ADMINISTRATORS are dynamic when it comes to physical relations. They love to explore & express themselves in exciting ways and indulge in proactive participation. On the weaker side, they are less sensitive towards the feeling of their partners. Their occasional intolerant nature often gets converted into ruthless behavior. The best way to put an argument to rest with an ADMINISTRATOR is to replace emotions with logic.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ENTJ_administrator_1.png",
              "parent_title": "ADMINISTRATOR PARENT",
              "parent_para": "No sooner ADMINISTRATORS realize that parenting is a whole new ball game, they exert their serious concern and strategically map out a plan to apply themselves efficiently. They take it as a challenge, understand their role, and try to fit in with utmost sincerity. They make every effort to provide resources to their kids and ensure that they constantly develop & learn most optimally. ADMINISTRATORS strongly believe that along with academics children should also develop their sense of responsibility, rational thinking & sense of behavior. They expect their kids to honor their parents and follow the rules & procedures which are set forth for the household. They are generally strict, but may often loosen up, as long as kids respect their authority. Although ADMINISTRATORS are sincere parents, display of love, affection & feelings does not come as easy as it should be. They tend to be inadequate in providing the emotional well-being of their children, which can create a gap in their relationships in later stages of life. Emotional conflicts with rebellious teenagers may sometimes find an enormous source of tension within the family. This by no means indicates that ADMINISTRATORS are bad parents. They strive for the well-being of their children and aspire that they continue their legacy.",
              "employee_title": "ADMINISTRATOR EMPLOYEE",
              "employee_para": "ADMINISTRATORS are employees not often by choice. They handle their tasks intellectually and try to meet their goals with the highest standards of excellence. They are good at synthesizing information and can incorporate many ideas into a single plan of action. ADMINISTRATORS are dynamic when they communicate and are up-to-the-point when they discuss or debate their points. They are strategic thinkers with an intuitive sense of \u2018what needs to be done' and \u2018how it should be done'. ADMINISTRATORS enjoy working with a team, provided that their subordinates are competent & productive. They typically have a clear vision of how systems can be improved, but are also willing to consider their teammate's ideas openly. They may have power struggles with subordinates who question their ability. ADMINISTRATORS feel at home when they are at the workplace and the corporate world seems like their natural habitat. They are driven by opportunities for growth and professional interaction is the only thing they find sociable. Verbal or physical display of emotions is a rare possibility for these practical work machines. ADMINISTRATORS are often the cornerstones of successful organizations.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ENTJ_administrator_2.png",
              "boss_title": "ADMINISTRATOR BOSS",
              "boss_para": "This position is best suited for ADMINISTRATOR personalities. Their vision, strategic planning & determination make them the most admirable and respected leaders of an organization. They are masters in the art of managing a huge workforce and efficiently getting the job done by them. They follow very high standards, leading by example, and never hesitate to come down hard on the one who fails to comply with order & structure. ADMINISTRATORS are visionaries who can formulate a precise strategy to accomplish their vision. Although their strong willpower and motivational speeches may prove to be inspiring to many, sometimes their ruthless & insensitive approach becomes a little overbearing for timid subordinates. Employees who fail to \u2018walk the talk' have a tough time under ADMINISTRATOR boss. They tend to be very diplomatic in events of disagreements or conflicts. Non-professional social interactions at the workplace are considered hindrances and emotional aspects are viewed as discrepancies. They follow a result-oriented theory, \u2018Either perform or perish'. Nevertheless, ADMINISTRATORS play a very important role in building a nation by creating a lot of job opportunities. Their lives are nothing less than inspiring stories and they leave a legacy to be followed."
              },
              {
              "personality": "challanger",
              "main_title": "CHALLANGER (INQUISATORS FAMILY)",
              "intro_title": "CHALLANGER INTRODUCTION",
              "intro_para": "CHALLENGERS are fearless speakers. Being fluent conversationalists with sophisticated vocabulary and vast accumulated data, they are true debating champions. While they take a break from their routine, they utilize the time to sharpen their knowledge to achieve an upper hand in the next round of the verbal contest. Falling under INQUISATORS family, they are intensively introspective, cogitative & ingenious. CHALLENGERS can intuitively comprehend people & systems and are mentally quick & accurate to size up a situation. They live in the world of possibilities and become excited about concepts, challenges & difficulties. They are prolific at improvising, can quickly come up with a creative solution that others perceive as impossible to solve. They value knowledge and spend much of their lives seeking a higher understanding. CHALLENGERS love debating, often switching sides, just for the love of the debate. They are good at winning arguments but poor at building consensus. Being impulsive by nature, they tend to neglect the inputs of others, may even become overly harsh & aggressive. Hence, they are often perceived to be insensitive, uncompassionate & rude. However, CHALLENGERS are worthy in demanding situations. Their opponents struggle to match their spontaneity & confidence. They are born winners. ",
              "pros": "Bold, fearless & undeterred by doubts. High risk-taking ability, see 'problems' as opportunities.;Visionary, inventive, enterprising & resourceful. Fascination for learning new & abstract subjects.;Quick-witted. Enormously flexible & fast-paced minds. Headstrong at debating & brainstorming, can switch arguments in a split of a second.;Highly innovative & analytical. Can analyze problems from multiple dimensions & provide relative solutions.;Nonjudgmental, open-minded, adaptable & diverse. Does not take anything personally in the event of disagreement.",
              "cons": "Wavering mind. Difficult to focus on one task, jumps enthusiastically from idea to idea.;Good at making money. Bad at spending it. Tend to neglect following through on the plans.;Hate routine, monotonous & traditional paths. Prefer to explore the unknown. Gets bored very fast.;Becomes irritative when the communication is not clear & specific. Dislikes beating around the bush.;Becomes over argumentative & insensitive in pursuit of winning a debate to the extent of being intolerable.",
              "child_title": "CHALLANGER CHILD",
              "child_para": "CHALLENGERS are bright-eyed & bushy-tailed kids, highly voguish among their friends, teachers & neighborhoods. Their outgoing nature, sarcastic playfulness & notorious friskiness earns them a lot of popularity. They are driven by their imagination & curiosity towards anything new, different & exciting. As students CHALLENGERS are bright & intelligent. They are oriented towards always doing the unique, which may mean taking risks and outwitting parental, school & societal authority. They enjoy creating projects & following interests that are unusual & different. Verbally quick & impulsive behavior of CHALLENGER kids may receive applause in situations where it works the best, but often it becomes an irritation if the argument is stretched till it reaches tolerant levels. Their debating nature is entertaining to some but unpleasant & nasty to others. Nevertheless, for all the obvious reasons CHALLENGERS develop good communication & people skills that help them in the long run. ",
              "adult_title": "CHALLANGER ADULT",
              "adult_para": "CHALLENGERS grow up to become highly resourceful & charismatic individuals. They never miss an opportunity to gain knowledge. Understanding new concepts no matter how abstract they are happens out of their fascination to just keep themselves updated. Nothing is as amusing to CHALLENGERS as starting a conversation, taking a stance, and opposing an idea. They love flexing their mental muscles and enjoy debating. They have a propensity to argue infinitely, even on the concept which they disagree with from within. Their meticulously flexible mind can shift from one stance to another, in a fraction of a second, tearing down the posture of their opponents. CHALLENGER'S enthusiasm for innovation is infectious, and they are good at getting other people on board with their schemes. Their ability to intuitively understand people & situations puts them at a distinct advantage in their lives. CHALLENGERS get easily bored if they don't get to utilize their creativity & verbal skills. They hate to follow traditional methods or day-to-day routine. They are often seen as insensitive & ambiguous when things don't turn out the way they want. Adding to their weaknesses, they are poor in time-management and getting into details. They also have a hard time prioritizing tasks and may tend to procrastinate. For CHALLENGERS, the problem & the solution lies in differentiating between the \u2018Possible' & the \u2018Probable'. ",
              "friend_title": "CHALLANGER FRIEND",
              "friend_para": "CHALLENGERS are flexible & easy-going, who genuinely enjoy interacting with others. Due to their out-going nature & witty sense of humor, they never run short of friends. CHALLENGERS love to engage in casual interactive sessions, whether it's an argument over an irrelevant subject or discussions on matters that never find conclusions. Highlights of their friendly sessions generally comprise endless debates on senseless topics, where holding ground against CHALLENGERS is quite a challenge for the rest. Debating is their second nature and no matter how ferocious it turns out to be, they never take it personally. Their idea is always to enjoy each other's company. CHALLENGERS are always willing to offer help to their friends when needed. Their friends also look upon them as their final resort, in their difficult times. They can be trusted to handle most of the issues but may lack the ability to sympathize. They are clueless when someone in the doldrums approaches them with emotional outbursts. CHALLENGERS are generally go-with-the-flow people, usually happy to live and let live. ",
              "lifepartner_title": "CHALLANGER LIFE-PARTNER",
              "lifepartner_para": "CHALLENGERS are anything but dull as romantic partners. They are naturally very active & assertive in every aspect of their lives, including in their personal relationships. They make every effort to keep their association delightful & meaningful by experimenting & exploring new ideas. CHALLENGERS are bold & straightforward and quite capable of making the first move. Dating is usually pre-planned with enthusiasm & creativity, rooted in the idea of fun & teasing to bring playfulness. They enjoy surprising their partners & find pleasure in testing their temperaments. CHALLENGERS aren't particularly romantic by nature, but they are good at pretty much anything they put their minds to. They have an ongoing interest in improving themselves and their relationships. They believe in giving their partners freedom and encourage them to pursue their ambitions & aspirations. CHALLENGERS love to explore the unknown without pre-conceived limitations, which is also evident in their physical relations. They enjoy spontaneity rather than fixed schedules and fully embrace new ideas & adventures. The only challenge they face is when it comes to handling upsetting sensitive elements in their relationships. CHALLENGERS are less equipped to tackle emotional confrontations. However, their fundamental quality to view their weaknesses as an opportunity to improve, and a sense of progression makes them a fantastic companion.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ENTP_challanger_1.png",
              "parent_title": "CHALLANGER PARENT",
              "parent_para": "Parenting is a delightful problem for CHALLENGERS and they take it very seriously. They approach parenthood with a fun-loving attitude, but also a serious goal to transform their children into independent & logical thinkers. They put effort to turn every interaction into a learning opportunity. CHALLENGERS encourage their kids to be individualistic, voice their preferences, and share their opinions to grow up to become intelligent, rational & impartial adults. They are devoted parents who believe in giving their children a variety of experiences to help their young minds expand & grow. Although CHALLENGERS exhibit a lot of interest in being around, they are often inconsistent in spending quality time with their kids. They are a bit scattered at times, caught-up with over-commitments to be fulfilled at the same time, forced to give excuses for why they cannot be around. CHALLENGERS also have a hard time responding when their child is in a state of emotional distress. While they favor logic over emotions, this becomes a bit more of a juggle where they rely on their partners to stick it out. CHALLENGERS strive hard to overcome the challenges of parenting & manage to provide the resources, encouraging their kids to become knowledgeable & charismatic individuals.",
              "employee_title": "CHALLANGER EMPLOYEE",
              "employee_para": "CHALLENGERS have no boundaries. They can work in any field as long as they get the freedom to flex their mental muscle and utilize their skills. They thrive in working environments where innovative solutions are required to resolve challenging problems. CHALLENGERS believe in their abilities and once they formulate the course of action, they leave no stone unturned to accomplish their tasks. They find established procedures & traditional methods uninspiring and hate doing the same thing twice. CHALLENGERS have outstanding communication skills and expect their superiors to hear out their ideas. If their opinions are disregarded, they are always ready to debate the pros & cons of the given subject. They hate routine & monotonous guidelines and tend to be more productive if given the freedom to work in methods that suits them the best. CHALLENGERS enjoy interacting with their colleagues and love to amuse them with their wit and humor. They want to be seen as experts and value work that allows them to constantly improve their knowledge and skills. CHALLENGERS tend to be the cornerstones of successful organizations, trusted to fix a problem that no other employee can fix.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ENTP_challanger_2.png",
              "boss_title": "CHALLANGER BOSS",
              "boss_para": "CHALLENGERS are non-domineering bosses. Their ability to delegate the tasks & communicate with in-depth precision, allows them to be natural leaders without the need to control people. They try to give their employees the same independence & freedom they would like to have as their work style preference. Always open to new ideas & innovations, CHALLENGERS are highly flexible and open-minded. Although it's a fair deal for the employees, they are anticipated to deliver more than expected. CHALLENGERS have benchmarking tendencies. Their confidence & passion for setting records is infectious and often extend to their employees. While they are attentive to the perspectives of others, they also tend to debate about their viewpoints. They are prolific at fault-finding & fault-fixing and always look forward to analyzing & improvise. CHALLENGERS do not consider the personal or human element in decision making. Giving liberties to their employees for an emotional cause is where they are unable to apply their due-diligences. Also, while they are very much focused on the \u2018Big Picture', they tend to neglect small details. All in all, CHALLENGERS make a reasonable boss and may achieve fair enough if they stick to a single project until it is finished. That's their challenge and also the solution."
              },
              {
              "personality": "strategist",
              "main_title": "STRATEGIST (INQUISATORS FAMILY)",
              "intro_title": "STRATEGIST INTRODUCTION",
              "intro_para": "STRATEGISTS are rare personalities. A unique combination of rational & logical thinking combined with vivid imagination & creativity makes them perfect strategizers. They possess a very high level of energy & variety. Falling under INQUISITORS family, they are intensively introspective, cogitative & ingenious. STRATEGISTS are analytical problem-solvers, eager to improvise the processes by applying their intellect & perception. They firmly believe that if efforts and intelligence are applied judiciously, nothing is impossible to be achieved. They are ambitious, self-confident & deliberate thinkers. The work style preferences of STRATEGISTS may seem to be mysterious, but they use their insights & logic very consciously to come up with new & innovative ideas. They value knowledge & competence and typically have high standards in these regards. STRATEGISTS speak to-the-point with sophisticated vocabulary. They appreciate clarity & efficiency and disregard inadequacy & sloppiness. This tendency may cause them to dismiss other's input too quickly, and to become generally arrogant or elitist. However, they typically don't dwell long upon their shortcomings and work nimbly towards self-improvement. STRATEGISTS stay calm & composed with their strategies. They display the true qualities of a natural leader.",
              "pros": "Outstanding strategizer. Intelligent, analytical & imaginative. Always ready with back-up plans.;Innovative, creative & unique methodology. Analytical problem-solvers. Result-oriented & determined.;Extremely rational. Believe in freedom & equality. Advocate justice, truth & morality.;Infinite quest for knowledge & understanding. Ability to absorb complex theoretical & logical information.;Highly Future-oriented. Focuses on the big picture. Can easily visualize what others can't.",
              "cons": "Superiority complex. Arrogant to intellectually inferior persons. Impatient with timid people.;Lacks social skills. Need-based interpersonal relationships. Difficulty in handling emotional encounters.;Overly critical & analytical. Look for perfection to the extent of being hubristic.;Less sympathetic and rarely romantic. Distinctly practical approach towards life. Struggle in personal life due to misplaced priorities.;Procrastination. Leaving important tasks till the last minute. Thinking on more than one subject at the same time.",
              "child_title": "STRATEGIST CHILD",
              "child_para": "STRATEGIST kids are most intense & inquisitive due to their thirst for knowledge. They are analytical & watchful, driven by their own perspective, how things are or could be. They can absorb complex theoretical & logical information which make them appear more mature or grown-up than their biological age. STRATEGIST children are often seen as loners in school. They tend to spend time focusing on their own thoughts unless they find someone worth socializing with. They are naturally less sensitive towards emotional aspects of life and find gossiping as an act of foolishness. STRATEGISTS are often singled out as \u201cabnormal\u201d by other children. Although they stay reserved & private, their minds are constantly engaged with rich imaginations & complex thoughts. They have an advanced vocabulary and can comprehend things faster than their peers. STRATEGISTS grow up to become highly intellectual individuals who enjoy outsmarting their opponents to administer their supremacy.",
              "adult_title": "STRATEGIST ADULT",
              "adult_para": "STRATEGISTS thrive on logical reasoning. They are high on confidence, rational thinking & honesty. They tend to be quick-witted, insightful, determined & result-oriented with a perfectionist attitude. They never miss an opportunity to enhance their knowledge and are always ready for an intellectual conversation, debate, or challenge. STRATEGISTS are very thoughtful to figure out the subject of their interest. They apply their creativity & logic, and their sincere dedication, often shedding long hours, to accomplish and their goals. They are always prepared for uncertainties with multiple back-ups plans, depending upon the situations that could possibly arise. STRATEGISTS are highly selective about their relationships. They are impatient with people who demonstrate less ability to think logically & rationally. They are often perceived to be hubristic, especially when they reject opinions of others whom they believe to be cognitively inferior. STRATEGISTS are very clear in their thought process and their arguments are very rational, but in practice, they completely miss out on the emotional aspects. They often dismiss highly emotional persons as absurd or inferior thinkers. Nevertheless, discounting a few of such weaknesses, STRATEGISTS, with their strong willpower and high analytical ability, are capable to tackle any challenge life throws towards them. They are born winners.",
              "friend_title": "STRATEGIST FRIEND",
              "friend_para": "Befriending a STRATEGIST does not come easy. They value honesty & integrity in a person who can also match their intellectual level. They prefer companions who are more rational than emotional. People who are unable to match their preferences are seen as boring. Mild sarcasm is natural in STRATEGISTS, and sometimes a wicked sense of humor. They find a perfect friend in a person who can comprehend \u2018between the lines' and reciprocate in equal proportions. They may have limited best buddies in their lives but when they consider someone as their friend, it means a lot to them, and never take their relations lightly. STRATEGISTS are fiercely loyal people who will always stand by their friends and help them achieve their goals. They respect their sense of privacy & freedom when dealing with their friends but also expect the same in return. STRATEGISTS never crave social outings or midnight parties. Instead, they prefer meaningful conversations with their close friends, meeting over weekend-dinner, enjoying light music in the background. These are the moments they cherish.",
              "lifepartner_title": "STRATIGEST LIFE-PARTNER",
              "lifepartner_para": "STRATEGISTS are oblivious to romance & clueless about dating. They are very picky and find it difficult to choose the right partner who can match their way of thinking. They may search the manuals to understand the method and can be almost scientific when choosing a partner. STRATEGISTS can technically design to fall in love if convinced that a relationship has the potential. But, once they enter into a committed relationship they seek strong, deep, and long-term association. Their relations are truly based on truth & morality. STRATEGISTS are responsible spouses who stay loyal & devoted towards their partners, providing them complete freedom to peruse their aspirations. Although they usually struggle to find words to convey their affection, they are very attentive to the needs of their partners, both physically & psychologically. The only challenge they face is when it comes to poignantly sensitive elements in their relationships. STRATEGISTS face difficulty in handling emotional outbursts and find the process too messy. Emotional stress is unbearable for them, and they prefer to distance themselves away from the situation. They are accustomed to their inner world which is so logically perfect, expecting the same in reality causes distress. Trying to apply strategic thinking to tackle illogical or personal issues leaves them baffling. Leaving this aside, STRATEGISTS tick all the right boxes as a desirable life partner. ",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/INTJ_stratigest_1.png",
              "parent_title": "STRATEGISTPARENT",
              "parent_para": "STRATEGISTS have a tough time dealing with persons having under-developed logical intelligence and children fall into this category by default. They find parenting a challenging job, but luckily their instincts of dedicating themselves to a long-term project comes in handy. Not long before, STRATEGISTS realize that their children will need emotional support & guidance, they focus on increasing their emotional intelligence and display of love and affection to their children. They take their parenting responsibilities very seriously and work towards creating nurturing atmosphere providing all the support, confidence & resources to their children to help them built their self-esteem and discover their passions. They enjoy getting involved with their kids by playing games & watching cartoons or even helping them finishing their school projects. STRATEGISTS strongly believe that young minds should be thought to be practical so that they learn from their own mistakes. This results in being liberal parents, allowing their kids to be adventurous, developing their critical thinking, and be competent, enough to tackle complex situations life throws at them. STRAEGISTS may be low on their emotional quotients, but they never fail to accept their moral responsibilities towards their family. ",
              "employee_title": "STRATEGIST EMPLOYEE",
              "employee_para": "STRATEGISTS are dedicated employees who believe in their company policies and code of conduct. They handle their tasks intellectually and try to meet their goals with the highest standards of excellence. They excel at creating & implementing innovative solutions to analytical problems and are often the cornerstones of successful organizations. STRATEGISTS are at their best when working independently and given complete responsibility for the end-result. They are compatible with abstraction and theory but thrive on turning their ideas into reality. They get frustrated if they are pushed into jobs that limit their potential and freedom. STRATEGISTS enjoy working individually or with a small team, provided that their subordinates are parallelly competent, intelligent & productive, and share similar views and values. They tend to underperform if made to work in a team having members who are less capable, or less adaptable to logically efficient methods and procedures. They expect their superiors to be rational, straightforward, and lead by example. STRATEGISTS value the trust and respect more than their pay scales and impressing their bosses by alternate methods is the last thing on their minds.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/INTJ_stratigest_2.png",
              "boss_title": "STRATEGIST BOSS",
              "boss_para": "STRATEGISTS might not always choose to undertake management positions, although they are quite profound in leadership roles. They prefer to control things remotely until they see a real need to take over the administration. They are prolific at conceptualizing their objectives and effectively improvising their plans to reach the desired goals. STRATEGISTS are born 'controllers'. They often break protocols and a chain of hierarchy to empower a logically correct idea, even if it comes from a fresher or a novice. For them, solutions are more important than designations and they deliberately reward quality & aptitude. STRATEGISTS are result-oriented superiors who value knowledge & efficiency and promote freedom & flexibility. They tend to be very diplomatic in events of disagreements or conflicts. They apply logic & reasoning, eliminating the emotional ingredients out of the equation, to resolve the issue with limited conversations. They often become drained with constant social interactions and prefer to speak up to the point, focusing on only what needs to be done. Bribing a STRATEGIST boss by tactics of flattery or emotional persuasion to make up for poor performance is equivalent to losing the job. They might not always be well-liked as a boss but are respected & trusted for being supreme strategists."
              },
              {
              "personality": "theorist",
              "main_title": "THEORIST (INQUISATORS FAMILY)",
              "intro_title": "THEORIST INTRODUCTION",
              "intro_para": "THEORISTS are masters of logical thinking. They are known for their outstanding theories based on pure logic. They love to analyze and see logical patterns in everything. Falling under INQUISITORS family, they are highly introspective, abstract & objective thinkers. THEORISTS are quiet, reserved, thoughtful & philosophical, fascinated by logical analysis, systems & design. They enjoy spending time alone, in their rich inner world, thinking about how things work, and searching for the reasons behind everything they see. THEORISTS are the only limited-edition personalities who can effectively use their creativity to apply their logic. They are often so deeply engrossed in a thought, that they seem detached and oblivious to the world around them, perceived to be private & disinterested. THEORISTS typically do not have a wide social circle and prefer to engage with a select group of people. They are very precise and \u2018to-the-point in their communication. On the weaker side, they are not naturally well-equipped to meet the emotional needs of others. Also, they are prone to lose their inhibitions due to constant critical evaluations in their minds. However, once they clear their self-doubts, their wisdom & theoretical instincts produce great results which are responsible for many scientific discoveries worldwide.",
              "pros": "Simple & straightforward. Limited daily needs. Easy to live with. Undemanding in personal relationships.;Powerful intellect & stimulating imagination. \u2018Out of the box' solution providers. Actively focused on future potential & possibility.;Creative, flexible, analytical & abstract thinkers. Enjoy solving complex problems & theories.;Honest, rational, original & open-minded. Relentless pursuit of truth & objectivity. Always \u2018walk the talk.';High standards & excellence. Always learn from mistakes, avoid making the same mistakes again in the future.",
              "cons": "Highly Insensitive. Unable to display timely sympathy & empathy in perplexing emotional situations.;Absent-minded. Often lose track of the time when engrossed in thoughts. Often misses meals & neglects sleep which affects health.;Private personalities, seemed withdrawn. Engaged in their inner world of ideas.;Prone to self-doubt. Shy in social settings. Difficult to get to know. At times very blunt.;Disregards rules & guidelines. Focused on the \u2018Big Picture'. Hates to go into details. Weak in micro-management.",
              "child_title": "THEORIST CHILD",
              "child_para": "THEORIST kids are reserved & limited. They are strong-willed & abstract thinkers right from their childhood. They may have difficulty in overcoming their self-doubts since they evaluate everything critically. THEORISTS are skeptical of established theories until they figure out the core logic behind them. As they grow up, they become more profound in joining the loose ends and start finding meanings in substances, not soon before their theoretical instincts take over and they start viewing the entire universe as some kind of big inter-related entity. THEORISTS see ideas everywhere, hence they struggle to focus on their studies. Although highly intelligent, they are less bothered about grades or what their teachers think of them. Their classmates may find them un-involved in team activities. THEORIST kids are often mistaken to be autistic or Asperger, but eventually, as they grow up, people recognize the brilliance of THEORISTS, who end up being responsible for a lot of scientific breakthroughs in the world.\r",
              "adult_title": "THEORIST ADULT",
              "adult_para": "THEORISTS have great analytical power. They are always preoccupied with a theory, inquiring into the mysteries of the universe in all its complexity. They try to understand any given situation by comparison. They usually display complex characters, tend to be restless & temperamental due to their unconventional thought patterns. THEORISTS are less interested in day-to-day routine activities. They are always attracted to something different from the league. They are out-of-the-box solution providers, who see everything in terms of how it could be improved, or what it could be turned into. THEORISTS do not like to lead or control people. They're tolerant & flexible in most situations unless their firmly held beliefs or convictions are challenged. They feel uncomfortable in emotional settings. THEORISTS sound offbeat & unconventional when socializing, usually not in-tune with the feelings of the people. They base decisions on objective information rather than subjective feelings. They tend to counter even casual conversations with their intellectual vigor and may tend to be sarcastic to inconsistencies or illogical statements. For THEORISTS, everything starts with the question \u2018why?' Once it's answered satisfactorily from their logical perspective, they are likely to participate further. They are creative geniuses who travel to great mental lengths to devise ingenious solutions for complex problems.",
              "friend_title": "THEORIST FRIEND",
              "friend_para": "THEORISTS find a true friend in persons who share their common interests. They are timorous when it comes to meeting new people, but once they find someone who understands their liking of ideas & concepts, the connection is spontaneous. Although they have a small circle of good friends, they hold in great esteem & affection. THEORISTS enjoy theorizing, debating, and challenging their friends with thought-provoking questions. They dislike illogical gossip and may shy away from discussing topics on superficial matters, especially if they find it clingy or overbearing. For THEORISTS status & possessions do not matter in friendships. They stay rational and respect true knowledge or theoretically correct arguments, even in a situation where their own analysis are challenged. They can handle defeat but cannot handle a lie. THEORISTS are fiercely loyal and always willing to provide help & support to their friends but find themselves inept when it comes to underpinning emotional matters. They enjoy relations where stimulating innovative ideas are debated in a friendly way, devoid of emotional baggage.\r",
              "lifepartner_title": "THEORIST LIFE-PARTNER",
              "lifepartner_para": "THEORISTS tend to be very particular about their choice of partner. They desire an intelligent person who can match their thought process. Being reserved, they initially struggle to make the first move, but no sooner they receive a vital hint from their potential partners, they waste no time to reciprocate. Once in a committed relationship, THEORISTS tend to be loyal & faithful, someone who takes the association seriously. They are usually pretty easy to live with, and not overly demanding of their partners. They like to keep their external daily needs to a minimum so that they can focus more on their brainpower internally. THEORISTS expect their partners to appreciate their ingenuity and respect their need for space to be able to explore their inner thoughts. In return, they also tend to be tolerant of their partner's individual preferences. This makes them very straight-forward, honest & uncomplicated lovers. THEORISTS make every effort to be passionate & romantic partners. They are very playful and never run short of ideas when it comes to intimate situations, but struggle dismally with the emotional nitty-gritty & their applications. THEORISTS face a tough time trying to find a logical solution to emotional problems. Discounting this patch, the overall relationships are rich, rewarding & satisfying.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/INTP_theorist_1.png",
              "parent_title": "THEORIST PARENT",
              "parent_para": "THEORISTS take their parenting role very seriously and tend to put forth the most effective methods in helping their children grow into independent & wise adults. Not long before they realize that parenting is a very dicey subject for them, they are often seen scratching their heads, especially when emotions get mixed up with innocence, topped up with moral responsibilities. But sooner or later THEORISTS accept this sweet challenge and resort to their logic to find ideal solutions. They encourage their children to be rational & tolerant. They respect their children's opinions & wishes and allow them to have a voice & presence in the family. THEORISTS direct their upbringing to give an insight to their kids about life beyond the traditional cycle of job, marriage & retirement. Their suggestions are very practical, up-to-the-point, and sometimes blunt. They inspire their kids to recognize their passion and strive hard to convert it into a profession. Although THEORISTS are deeply caring & supportive parents, they are less sensitive to emotions and may struggle to meet the emotional needs of their children. Also, since they themself tend to be scattered & disorganized, they depend on their partners for providing structures & schedules. However, the overall parenting of THEORISTS is ideal & satisfactory. \r",
              "employee_title": "THEORIST EMPLOYEE",
              "employee_para": "THEORISTS prove to be valuable assets in the workplace. They have a great deal of insight and are quick to grasp complex abstract thoughts. They tend to provide \u2018out of the box' solutions to intricate problems through their creativity and forward-thinking. Getting the job done by THEORISTS might be a challenge if the method is too stereotypical or traditional. Their approach might seem to be unconventional or rather mysterious to others, but they are very conscious & logical in deploying systematic intellectual precision & expertise to complete their tasks. THEORISTS are at their best when left alone to work with their brilliance and figure out how to solve the problem. Their comfortability in working alone or with a team is never targeted towards liking or disliking of their co-workers but depends upon their methods. THEORISTS rarely socialize with their colleagues but are happy to share their new & exciting ideas. They are not the social type, and they would rather work on their own timetable.  They often gain a reputation in the workplace as a \u2018Logical Guru' for obvious reasons. THEORISTS can generate & analyze theories and logically prove or disprove them at their will.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/INTP_theorist_2.png",
              "boss_title": "THEORIST BOSS",
              "boss_para": "THEORISTS enjoy leadership roles, not because they like to control people. They see it as a freedom to explore and implement their nonconventional ideas & theories. They thrive on mastering & manipulating systems, always open to conscious thought and logical recommendation. Although THEORISTS are perceived to be flexible & rewarding, working with them does not come easy, as they demand very high standards and they expect others to understand their ideas instantly. They value honesty, integrity, knowledge & competence. THEORISTS love to measure their progress in graphs & patterns, constantly monitoring flaws & inconsistencies. They communicate only those elements deemed essential and their dialogues are less of motivations and more of thought-provoking ideas. The best way to impress a THEORIST boss is to provide a regular boost of innovative ideas along with improvements in the current approach. Non-professional social interactions at the workplace are considered hindrances and emotional aspects are viewed as discrepancies. They favor a calm atmosphere and view conflicts as a waste of time & energy. THEORIST are persuaded by fact-based ideas and the organization they develop emphasize purpose, long-term vision & constant improvisation."
              },
              {
              "personality": "jubilant",
              "main_title": "JUBILANT (PARTICIPATORS FAMILY)",
              "intro_title": "JUBILANT INTRODUCTION",
              "intro_para": "JUBILANTS are boisterous, free-spirited, and highly social individuals. Always excited to get engaged with people around, they draw their energies by capturing the attention of the crowd. They are quick-witted, playful & scintillating entertainers. Falling under PARTICIPATORS family, they are highly observant, practical & pro-active. Stimulated by new experiences, JUBILANTS have an infectious enthusiasm for life. They live in the moment and are perceived to be warm & lively. Having strong interpersonal skills, they have a natural ability to comprehend & adopt what attracts others. JUBILANTS are endowed with striking observations which help them to align themselves with the newest trends, be it in style, a design, a fashion, or the latest gadget. While they are flashy & showy they are also very practical & down-to-earth. JUBILANTS are emotional to the core, very kind-hearted, and sensitive to the needs of others. Although they are likable for being generous & responsive to offer their help, this also makes them vulnerable to be manipulated. They are often taken for granted for their altruistic nature. Another challenge faced by JUBILANTS is that they are weak in picking up alternate options, which deprive them to think in terms of long-term planning. They let things come as they come and prefer to \u2018go with the flow'.",
              "pros": "Energetic, enthusiastic, optimistic & spontaneous. Always step out of their comfort zones to explore & experience new things.;Out-going, responsive & socially-oriented. Great people skills. Work towards benefits of others.;Highly practical, observant & responsive. Capable of generating practical solutions to immediate problems. Excellent trouble-shooters.;Vivacious imagination & splendid creativity. Exceptionally developed aesthetic sense in either one or multiple streams. Eye for beauty.;Humorous & entertaining nature. Enjoy making people happy. Love being center of attention.",
              "cons": "Extremely extrovert nature. Constantly looking for excitement. Gets bored & frustrated very easily. Have tough time sitting idle.;Overly sensitive & emotional. Can get hurt very easily. Vulnerable to emotional manipulation.;Conflict reluctant. Difficult in handling unpleasant situations. Tend to ignore and avoid disputes & squabbles entirely.;Mediocre long-term planners. Like to live in the present. Sluggish attitude when it comes step-by step ground work for future.;Intensely bold, blunt & up-front. Perceived to be rude, shallow and materialistic person.",
              "child_title": "JUBILANT CHILD",
              "child_para": "JUBILANTS are highly impulsive & talkative kids. Having a long list of best friends, they never run out of pals for chatting. They are popular among their schoolmates for their sense of excitement & funny behavior. JUBILANTS dislike being lectured for long, especially in technical subjects. Sitting in one place for long seems so aggravating, they are often misdiagnosed with ADD or ADHD. They can find rules and a rigid schedule very frustrating. They are more practical learners who prefer to learn through hands-on experience. They show ebullient interest in extra-curricular activities such as sports, arts, dance, or music. JUBILANTS are active participants in school events, exhibitions, cultural activities, or annual day functions, where they profusely dedicate their time & energy. They are always ready to volunteer if they sense thrill & excitement. JUBILANTS children are the quintessential entertainers, remembered by their teachers & school mates for their humor, fun-loving nature & kindness.",
              "adult_title": "JUBILANT ADULT",
              "adult_para": "JUBILANTS are optimistic, convivial & congenial individuals. They adopt & reflect the world around them. They thrive on social interactions and excel if granted their creative freedom. They are lively & fun, relishing excitement & drama in their lives and enjoying being the center of attention.  JUBILANTS take great pleasure in objects of aesthetic beauty and possess an excellent sense of space & function. They like to keep themselves updated with contemporary styles which reflect in their dressings, accessories & lifestyle. JUBILANTS are light-hearted, cheerful, and humorous persons, but the most significant aspect is, they relate to everything on an emotional level. Since they think more by their heart than their brain, they are programmed to do always well to others. They are reluctant to criticize others and avoid unnecessary conflicts, but they often become victims of criticism themselves. JUBILANTS have difficulty in handling emotional disturbance. They either react with anger & indignation or just simply cut-off with everyone, confining themselves in solidarity. Also, they fail to watch out for the pitfalls associated with living life entirely at the moment. They fail to comprehend future hypotheses and \u2018big picture' projections which makes them poor long-term planners. For JUBILANTS, the key to the success lies in cumulating their impulses and applying their natural ability to find practical solutions. \r",
              "friend_title": "JUBILANT FRIEND",
              "friend_para": "Having a JUBILANT friend is like enjoying a roller-coaster ride, intimidating but concurrently filled with fun, adventure & laughter. Their vividly imaginative mind keeps experimenting with new ideas, to keep life interesting for themselves and the people around them. JUBILANTS thrive on social interactions and usually have plenty of friends with whom they share every facet of their lives. Driven by exploration, which brings delight & opportunity to have fun, they initiate group gatherings, fun-activities & events. For JUBILANTS action is the key, but at times they step too far while trying to pull others into partaking. If they fail to find buyers for their ideas, they take it personally too often and get offended very easily. They are even likely to make a very strong & stubborn judgment against the person who crosses them, messing up their friendship. JUBILANTS are often misunderstood for being direct & open, as such expressions give an impression of being shallow & materialistic. Only the people who know them for long enough can substantiate their big hearts and feeling of love & compassion for their friends. ",
              "lifepartner_title": "JUBILANT LIFE-PARTNER",
              "lifepartner_para": "JUBILANTS love to be in love, often unaware of the excess baggage that comes along with it. They always long to please their partners with fun, humor & affection, which is evident right from their dating phase. JUBILANTS stay very open-minded, just so that their partners get to know their true conscience. They prefer to be with someone well-versed with their sense of adventure, not just to appreciate it, but also willing to participate in their audacious streaks. Once into a committed relationship, JUBILANTS tend to be very loyal partners. While being passionate about their likings, they also encourage their partners to pursue their aspirations & dreams. They enjoy family life and prioritize their responsibilities towards their loved ones. JUBILANTS are earthy & sensual when it comes to an intimate relationship, and they ensure the needs of their partners are satisfied, both emotionally & physically. They may tick all the right boxes as an ideal partner but they tend to miss out on a few, the most eminent being a poor long-term planner. JUBILANTS take things on a day-to-day basis, and are uncomfortable thinking too much about the future, or making plans far in advance. Also, they say things in a very direct, abrupt manner, and can sometimes even unintentionally seem quite harsh. JUBILANTS either overcome these potential weaknesses with the help of the right partner or face hardships later in their life.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ESFP_jubilant_1.png",
              "parent_title": "JUBILANT PARENT",
              "parent_para": "JUBILANTS have congenial affection towards children & animals. Being naturally playful, they find parenting a very appealing & nostalgic experience. They amalgamate fun, compassion & emotions along with practicality to impart real-world experience & knowledge to their kids. JUBILANTS hardly look upon structures or discipline to nurture their children. On the contrary, they encourage them to explore things in their own way. They loathe being authoritarian and leave all the regulatory and reprimanding tasks for their partners. In a way, JUBILANTS do understand the need for an orderly environment for the child to grow up, but they rather resort to encouragement & emotional support to influence their kids to accept the routine. They have a strong opinion about how they want to raise their children. This often leads to arguments and sometimes exerting a source of tension with their partners, especially when the child underperforms in his/her studies. However, since JUBILANTS tend to avoid negativity they make every effort to avert conflicts and skillfully craft solutions based on mutual understanding. As time passes by, JUBILANTS are fondly remembered as fun-loving & affectionate parents by their children.",
              "employee_title": "JUBILANT EMPLOYEE",
              "employee_para": "JUBILANTS keep hunting for desirable placements until they are convinced about the ideal workplace and suitable job role. For them, the working environment matters the most. They prefer a lively, socially interactive work environment where they are free to be spontaneous & have fun with their co-workers. JUBILANTS enjoy collaborating & cooperating with their colleagues closely in projects and in jobs that require teamwork. They may experience friction with teammates that insist on being very task-focused and don't leave room for fun. JUBILANTS hate conflicts and are skilled to avert them by inducing light-hearted humor into tense situations. They get easily bored working individually either with a system or machinery. JUBILANTS are stressed by strict rules or excessive bureaucracy at work and want the flexibility to address situations as they arise. They hate to work under a structure, schedule, or routine. They are at their best when they can work on practical problems, without having to be too serious about the task at hand. JUBILANTS value freedom & independence more than the safety & security at the job. They are fun-loving team members who bring a sense of humor to the workplace.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ESFP_jubilant_2.png",
              "boss_title": "JUBILANT BOSS",
              "boss_para": "JUBILANTS are gregarious & accommodating bosses. They are always keen to develop warm & friendly working environments, focusing heavily on client satisfaction. Highly attentive to facts & details, they are prolific in generating practical solutions to immediate problems. JUBILANTS are quick to notice the moods of their subordinates and are always available to hear them out. Being flexible & diverse they easily engage themselves in situations and stage pro-active roles when needed. JUBILANTS dislike arguments & interpersonal confrontations. They prefer to resolve conflicts through dialogue & discussions. They are brilliant negotiators & trouble-shooters. On the downside to the JUBILANT bosses are not very competent in terms of long-term planning. They are sluggish when it comes to investing their time & energy to layout steps keeping the future trends in their vision. Also, being conflict-averse, they may shy away from making unpopular decisions in favor of keeping things cheerful and light. However, JUBILANTS compensate for this shortfall by applying their problem-solving ability and ingeniously circumventing the obstacles as they keep coming on a day-to-day basis. They are programmed to function comfortably in hectic situations and juggle several projects simultaneously."
              },
              {
              "personality": "explorer",
              "main_title": "EXPLORER (PARTICIPATORS FAMILY)",
              "intro_title": "EXPLORER INTRODUCTION",
              "intro_para": "EXPLORERS are highly action-oriented, quick-witted & blunt, who live in the moment and manage to make things up as they go. Endowed with unflattering energy, they conquer obstacles & impediments with ease. Falling under PARTICIPATORS family, they are highly observant and practical to the core. EXPLORERS have an extensive urge to negate boredom, which forces them to keep themselves engaged in some activity or the other. They are straight-forward risk-takers, willing to plunge right into things and get their hands dirty. They never hesitate to leap into conversations even if they are not familiar with the subject or the people. Logically minded EXPLORERS enjoy pushing boundaries and exploring new things. They can sell anyone on any idea. They have a strong flair for drama and style. EXPLORERS very good at social interactions and networking capabilities, but at times they simply go overboard. Their interactions are mostly unstructured as if they do it just to stimulate their reasoning mind. They can sometimes be hurtful to others without being aware of it. Also, they often get so engrossed in addressing a subject that they miss the \u2018big picture. However, their presence of mind and out-of-the-box thinking ability undeniably distinguish EXPLORERS from the rest.\r",
              "pros": "Dynamic & full of life. Living in the moment & constantly improvising with innovative ideas.;Logical & spontaneous. Process information expeditiously. Quick to analyze and come to a conclusion.;Bold, daring, adventurous & mentally tough. Comfortable with taking risks. Skilled to handle emergency situations.;Excellent people skills. Splendid in social interactions & networking. Brilliant in collaboration & teamwork.;Sharp observation & explicit perception. Can read people & situations very well. Excellent memory for details.",
              "cons": "Short-term gain personality. Good at managing tasks on hands but long-term planners.;Erratic emotional management. Insensitive to the emotions of others & having trouble expressing their own.;Impatient & restless. Ventures into unknown without anticipating the long-term consequences.;Judgmental & confrontational. Categorize people and situations based on their perception & stand firmly by their decisions.;Ostentatious & excessively flamboyant. Crave for being center of attraction. May behave irrationally.",
              "child_title": "EXPLORER CHILD",
              "child_para": "EXPLORER kids are fun-loving, naughty & full of energy, always eager to push the limits. They love to probe into things, either by discussion or by practically endeavoring, using their senses of touch, taste, see & smell. EXPLORERS are brilliant with numbers & technical aspects when it comes to academics. They have a very good eye for details but may face difficulty focusing in lectures since they have a hard time sitting still. They learn better in an active, hands-on environment. Besides studies, EXPLORERS show keen interests in hobbies or sports both indoor & outdoor. Their charm & energy attracts a lot of friends, but being very blunt & even outrageous with words, they may sometimes unintentionally hurt other's feelings. However, there is no dull moment when they are around and they easily persuade other children to join them in their adventures, often chosen as leaders by their peers. EXPLORER kids are always remembered by their school mates & teachers for their bold & charming nature.\r",
              "adult_title": "EXPLORER ADULT",
              "adult_para": "EXPLORERS grow up to become prominent personalities. They are invigoratingly exuberant with an earthy sense of humor and dazzling spontaneity. They have an uncanny ability to perceive people's attitudes & motivations. EXPLORERS enjoy socializing and like to be surrounded by people, whether it's an event, get-to-gather, or a party. They are programmed to converse on contrasting subjects and skilled to rectify their dialogues instantly if they feel they have overstepped when presenting a half-baked theory. Putting their reputation on-line and standing by their stance is their way of life. EXPLORERS are habitual to venturing into unexplored territories. Owing to their sharp observation and unerring perception, they have a distinctive ability to notice minute changes that signals them the notions of people. EXPLORERS are tacticians who can exquisitely function in adverse situations, prolific in discovering inventive solutions to immediate problems. They are excellent & clear-headed when dealing with emergency-situations. On the downside, EXPLORERS are often too blunt and insensitive to the feelings and emotions of others. Also, they're not usually good long-term planners, maybe very good with money, but highly risky with it as well. Getting impatient pretty soon, EXPLORERS are difficult people to confine. Recognizing their talents & operating within those realms is the key to their success.",
              "friend_title": "EXPLORER FRIEND",
              "friend_para": "Spending time with EXPLORER friend could be the best prescription as a stress-buster. While being fast-paced, enthusiastic & engaging, they are also bestowed with a wicked sense of humor, which makes a complete package. EXPLORERS love to venture into enthralling ideas, and practically apply them when they are in the company of their friends. Whether it's a get-to-gather, celebration or sports, they are the life of all the events. EXPLORERS may have a long list of friends, but making new ones is a never-ending and life-long process. They are tremendously loyal & supportive towards their peers. They are skilled to discuss almost all the subjects and are pretty straightforward & blunt in giving their opinions. EXPLORERS constantly make an effort to get engaged with their friends in some activity or other. They never get bogged down if there is no one to buy into their idea. They instantaneously develop another idea or look for a different crowd. EXPLORERS are master-blenders for preparing a concoction of reality and fiction.",
              "lifepartner_title": "EXPLORER LIFE-PARTNER",
              "lifepartner_para": "EXPLORER'S personal relationships are far from boring. They're very sensual & earthy, living fast-paced lives, where their focus is on the present moment. They are quick decision-makers and trust themselves to make the right call, hence selecting their partner does not come as a challenging task. The dating phase of EXPLORERS is full of playfulness & surprises, rarely ever planned. Their whimsical sense of humor & zeal adds to the thrill. EXPLORERS make every effort to continue this momentum further as they enter a committed relationship. While they encourage their partners to actively participate, in various activities, they are also mindful of their preferences. Although EXPLORERS prefer to keep things fun & action-packed, they struggle with their commitments. They don't prefer making plans far in advance for their future. This remains a huge concern for their partners and can be the reason for occasional conflicts & confrontations. Also, EXPLORERS are not naturally in tune with other's feelings and may neglect giving affirmation & gratitude to their partners. They are attentive to their partner's physical needs but tend to neglect deeper emotional connections. EXPLORERS see from the perspective of solving the purpose, while they ignore creating a purposeful life. Nevertheless, they can improve dramatically, owing to their impeccable perception, with a little extra support from their partners.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ESTP_explorer_1.png",
              "parent_title": "EXPLORER PARENT",
              "parent_para": "EXPLORER personality is best suited for parenting roles. They love to interact with their children and look forward to spending time with them. They have a special bonding with their children through a shared appreciation for fun activities, energy & enthusiasm. EXPLORERS never miss a chance to hustle & bustle, read stories, hands-on hobbies & other adventures that kids enjoy. Being naturally playful, they enjoy exploring the world through their children's eyes, which results in an ideal parent-child relationship. While they make all the possible efforts to be ideal parents, they often fall short in fulfilling the other facets of conventional parenting. Since EXPLORERS themselves don't like to be bonded by rules & regulations, they neglect to teach discipline & time-management to their kids. Another significant complication arises when it comes to establishing emotional bonding with their children. EXPLORERS view emotions as an irrational aberration and a waste of time. Since they are less aware of their own emotions, they are oblivious to the emotional needs of a child. This can create a gap in their relationships in later stages of life, especially if their children are sensitive. However, discounting few odd situations, EXPLORERS never hesitate to redefine their comfort zones, to provide the best to their children.",
              "employee_title": "EXPLORER EMPLOYEE",
              "employee_para": "EXPLORERS face a tough time looking for the right job. They find it pretty arduous to work in slow-paced, routine, and monotonous working environments. They are \"doers\" who live in the world of action. EXPLORERS keep performing well as long as they are occupied with a variety of things to do. Once they sense the assignment, they try to quickly execute the task and move on to the next thing. They are fantastic at networking and brilliant team players. Being highly competitive and adaptable they create benchmarks that influence their subordinates to also contribute in equal measures. EXPLORERS hate being confined to routine, regulations & boundaries. They are at their best when working independently and given complete responsibility for the end result. They get frustrated if they are made compulsively to report every small thing to their superiors before they continue their next course of action. EXPLORERS are resourceful and skilled to tackle adverse situations. They are highly objective and tend to make quick and logical decisions. EXPLORERS never hesitate to take risks to earn rewards and if they sense stagnancy in their current job, they never think twice before they quit.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ESTP_explorer_2.png",
              "boss_title": "EXPLORER BOSS",
              "boss_para": "EXPLORERS feel at home when they are in commanding positions. They are quite profound in leadership roles. They enjoy the liberty to experiment and take risks, apply their natural ability to identify challenges, and explore multiple options before they issue instructions to their task force. EXPLORERS are very encouraging and flexible bosses. They hate being traditional and dislike setting stringent rules. They rather strive to make their workplace more interactive and gratifying to yield optimum results from their employees. EXPLORERS are swift at assessing situations and quick to explain the course of action, but they are too fast for others to grasp. Also, they become impatient to discuss the same issues for long durations. This may sometimes jeopardize the proceedings which require extra attention. Adding to their weaknesses, EXPLORERS do not value the emotions of others. They think logically, even to the behavior of subordinates, which causes detriment & disconnection. Also, their tendency to deal with problems on day to day basis can distract them from focusing on the \u2018big-picture. However, once they pick up the trends, EXPLORERS apply their natural ability to quickly come up with innovative solutions to the problems, and their craving for success forces them to push their limits to accomplish their goals."
              },
              {
              "personality": "improviser",
              "main_title": "IMPROVISER (PARTICIPATORS FAMILY)",
              "intro_title": "IMPROVISER INTRODUCTION",
              "intro_para": "Impulsive & optimistic, IMPROVISRS are spontaneous in aligning the facts and certainty to figure out practical solutions to the immediate problems. Falling under PARTICIPATORS group, they are highly observant & proactive. Since IMPROVISERS are good at performing & delivering extemporaneously, they are ideal in emergencies & crisis situations. Always curious to find out the root cause of everything, they rely more on first-hand experience to explore & analyze, rather than just collecting the information. IMPROVISERS love to dismantle things without referring to the instruction manual, a trait which is also evident in their relationships where they act first and think later. Although it may be manageable with machines, where trial & error are permissible, it becomes too messy when it comes to people. IMPROVISERS are less sensitive to emotional expressions. Unsure how to exhibit their straightforwardness, they often end up being stubborn and blunt. Even though they are friendly and rational from within, they dislike being under any obligations, hence they prefer to stay away from social engagements. Living in the present, IMPROVISERS enjoy life as it comes. Always engaged in some activity or other, they are passionate to be in action and derive great pleasure from expediting challenging tasks.\r",
              "pros": "Highly energetic, spontaneous & action-oriented. Always excited to be engaged in some activity or other.;Extremely pragmatic, creative & resourceful. Makes decisions objectively & communicate precisely.;Distinctly logical & rational. Values individual freedom and right to expression. Straight forward and down-to-earth.;Exceptionally observant and meticulous in prioritizing in crisis situations. Impromptu in trouble-shooting & decision making.;Knack for mastering and retaining technical knowledge. Expedient & utilitarian. Excellent with the use of tools.",
              "cons": "Prefer to be very reserved. At times very difficult to understand. Seem to be unpredictable or mysterious in their ways.;High-risk taker & dare-devil attitude. May often escalate conflicts & push boundaries without estimating consequences.;Short-term-gain personality. Deficient in planning for a long-term. Move on to new projects without completing the previous ones.;Difficulty in predicting the emotions of others. Insensitive to the feelings of others. Often very blunt or stubborn.;Struggle to confer or fulfill commitments. Hate to be under obligations. Distances from social engagements.",
              "child_title": "IMPROVISER CHILD",
              "child_para": "IMPROVISERS are mischievous &s naughty kids. They are very energetic & pro-active right from childhood. If their energies are channelized in the right direction they can do wonders or else they are highly vulnerable to become delinquent. Nurturing of IMPROVISER children plays an important role in shaping up their behavior. They love hands-on things to take them apart & again put them together. They like to explore in a free & unrestricted environment. They are highly imaginable when it comes to applying their skills and they excel in activities such as sports, crafts or, practical. They are also good at numbers and conceptual analysis, but IMPROVISERS may tend to neglect the subjects they dislike. Their schoolmates enjoy having them around, for their unpredictable nature, and wicked pranks which are puckishly hilarious except for their targeted victims. Low on empathy, IMPROVISERS rarely apologize, but on the flip side, they never turn their back on their friends & colleagues whenever they face trouble.",
              "adult_title": "IMPROVISER ADULT",
              "adult_para": "IMPROVISERS are known for their technical sense and their urge for improvisation. They are pragmatic, logical & versatile problem solvers. Able tacticians by nature, they have the enviable knack of exploring technical subjects and mastering the use of tools. IMPROVISERS are highly inquisitive & result-oriented with the tendency to make on-the-spot decisions. Averse to sitting idle, they always keep themselves engaged in a line of action, but may suddenly shift to a different task if they find it more interesting. IMPROVISERS are short-term gain personalities, who would rather live in the movement and relish from the current prospects. Although their impulsive behavior to look for instant results may deprive them of the gains of long-term planning, but their spontaneity gives them an edge in emergencies. IMPROVISERS are meticulous in prioritizing & spot-on when dealing with the crisis situation. With a dry wit & masterly sense of timing, they have the ability to prevent disasters. On the downside, IMPROVISERS are less equipped with the skills of maintaining relationships. They view long-term commitments as a possible compromise with their freedom in the future. Also, they struggle to handle emotional situations and may often ignore the feelings of others. IMPROVISERS are free-spirited persons unable to deduce by the boundaries & guidelines. They interact with the world around them in a self-directed manner.\r",
              "friend_title": "IMPROVISER FRIEND",
              "friend_para": "IMPROVISERS are delighted to have friends with whom they get to enjoy & explore. They are very rational & fair and they always reach out to their pals when needed. They often invite friends to hang out for fun-trips and expeditions where they utilize their time to chill-out & blow away the cobwebs. Late night parties or long weekend drives, IMPROVISERS rarely miss a chance to have fun. Stimulated by excitement, their energies can sometimes be infectious, but IMPROVISERS never force themselves on their friends. Since they personally don't like to be bound by commitments, they choose to be liberal with their friends. They enjoy discussing a variety of topics and share ideas on all the subjects of interest, except for their personal life. IMPROVISERS rarely disclose facts about themselves and are reluctant to express their feelings. Their friends find them mysterious from this aspect. They even tend to be oppressive if confronted with personal questions. Discounting their unpredictability, IMPROVISERS are very creative with their sense of humor, and most popular among friends for their vigor & enthusiasm.",
              "lifepartner_title": "IMPROVISER LIFE-PARTNER",
              "lifepartner_para": "IMPROVISERS hate to be dominated and they enjoy their personal relationship if this condition is taken into account by their partners. Their idea is to live an obligation-free life without worrying too much about the things that cannot be controlled. Practical to the core, IMPROVISERS have a very informal approach towards their partners, right from their dating phase. Although not very romantic at heart, they are always excited by the thrill of new experiences. IMPROVISERS are good listeners but struggle to expose their emotions. To indicate the need for their personal space, they provide equal freedom to their partners, so that they are fair and rational. Once into a committed relationship, they prefer to be steady & loyal and their partners rarely complain of a dull moment. Being quick & able problem-solvers they are often handy around the house, taking pleasure being useful to their partners. A life with an IMPROVISER is a joyride, full of surprises & adventures, which is also reflected in their physical relations. They love to explore & experiment to keep their bonding meaningful & pleasurable. IMPROVISERS may fulfill all the wishes of their partners but they refrain from giving promises. They always like to keep their options open not wanting to be bound or burdened by allegiances. They may be oblivious to feelings but IMPROVISERS strive on mutual understandings & rarely fail to fulfill their moral responsibilities.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ISTP_improviser_1.png",
              "parent_title": "IMPROVISER PARENT",
              "parent_para": "IMPROVISERS place a great value upon freedom & self-expression which is distinctly perceptible in their approach towards parenting. Seen as a highly lenient parent, they provide all the support, confidence & resources to their children to help them built their self-esteem and discover their passions. IMPROVISERS are very open-minded and often forbearing to the demands of their kids, but not before ensuring that their authority is respected. They resort to enforcing limits only if they see their children misusing the prerogatives for non-productive activities. IMPROVISERS enjoy physical participation in school projects & activities of their kids. They encourage them to develop hobbies and take part in sports & camps. They enjoy teaching mechanical skills and love doing activities together. All-in-all, they prove to be ideal parents as far as fulfilling moral responsibilities, but they tend to be inadequate in providing the emotional well-being of their children. Being less sensitive to emotions, IMPROVISERS rely on their partners to bridge the gap. Persuaded by practical reasoning & benchmarking tendencies they do their best to motivate their kids to explore & learn by experience but IMPROVISERS never impose themselves on their kids. Rather than being outwardly affectionate, they convey their love by obliging practically.",
              "employee_title": "IMPROVISER EMPLOYEE",
              "employee_para": "IMPROVISERS are employees not often by choice, and even if they choose to do a job they are more likely to handle special assignments, solving specific predicaments. Highly task-oriented, when they take the charge of a situation, they remain detached & focused on the issues until they stick it out. Pragmatic to core, IMPROVISERS derive great pleasure from resolving challenging projects expeditiously. They are swift in decision-making & trouble-shooting and they thrive in an environment where they are given a discretionary list of things that need to be overhauled. Although very robust in crisis management, IMPROVISERS are considered inadequate in their interpersonal skills. They prefer to remain reserved and dislike excessive interactions with their subordinates. They display little regard to regulations & criteria, but not in a sense of being disloyal to their organization. They value logic and need flexibility for that to prevail. Subsequent to their unique perspective, instead of being lodged down to a dead-end, IMPROVISERS prefer to keep things loose and open-ended, so that in a given situation they always have a chance to improvise. They stay firm on their strengths and rarely get intimidated.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ISTP_improviser_2.png",
              "boss_title": "IMPROVISER BOSS",
              "boss_para": "In superior roles, IMPROVISERS display invaluable leadership, always leading by example and presenting their ideas through concrete, realistic & measurable objectives. Their decisions are rational, logical & task-oriented. IMPROVISERS are driven by quality & efficiency and have very little patience with incompetency. Although they never hang back in giving free hand to their employees to perform their duties in their own comfortable way but are always cautious about the end-result. They believe in creating practical & action-oriented working environments, free from overly burdened rules, procedures or bureaucracy. IMPROVISERS are blunt and are often seen lashing out towards disobedience & repetitive offenses. They value time and are intolerant towards unproductive activities. They insist their employees always be prepared by setting up apparatus & systems beforehand so that there is minimum obstruction during operations. IMPROVISERS are sometimes very unpredictable. They tend to believe that they are always right, but simultaneously they stay practical & rational. Usually, they are good listeners and impartial, but at times they may seem rigid. Despite this, the greatest strength with IMPROVISERS boss is their determination to accomplish almost anything once put into their minds."
              },
              {
              "personality": "indulgent",
              "main_title": "INDULGENT (REGULATORS FAMILY)",
              "intro_title": "INDULGENT INTRODUCTION",
              "intro_para": "INDULGENTS are easy-going, lenient & accommodating personalities who enjoy being in the spotlight for all the good reasons. Falling under the REGULATOR group, they are very practical with exceptional organization skills & attention to detail. INDULGENTS are outgoing & cordial who love socializing, particularly connecting with friends & loved ones. Jovial and exuberant from within, they rarely miss on an opportunity to tittle-tattle, especially on social media. Fond of events and parties, IDULGENTS take great pleasure in organizing social gatherings, carnivals & jamborees. Their basic philosophy about life is to make merry and ensure that everyone around them is equally happy. INDULGENTS are also highly emotional and sensitive. They get offended very easily if they don't receive a notable response to their concerted & gallant efforts. To make matters even worse they may get paranoid or even snivel (when deeply hurt) if questioned or criticized for their motives. Although INDULGENTS remain highly concerned for the feelings of others, they struggle to come to terms with their own emotions. Known for their spontaneity, sensibility & empathy, INDULGENTS are always willing to put other's needs above their own, and engaging in brawl or conflicts is the last thing on their mind.",
              "pros": "Incredibly warm, sympathetic & down-to-earth. Care deeply for the feelings of others. True altruists.;Highly people-oriented & sociable. Enjoy interacting with people. Receives pleasure from giving to others.;Extremely loyal & dedicated. Strong sense of responsibility. Can be depended on till the completion of tasks.;Distinctive organizational skills. Good at creating order, structure, well-defined guidelines & instructions. Very practical.;Excellent networking abilities. Efficient in orchestrating resources & working in a team. Radiates positive energy.",
              "cons": "Self-less to a fault. Often sacrifices the needs of their own to help others. Takes decision keeping others in mind.;Extremely sensitive & emotional. Struggle to hold back tears when either feeling ecstatic or deeply hurt.;Too traditional. Often push their beliefs too hard. Inflexible to unconventional methods.;Less technical & uncomfortable with abstract ideas. Reluctant to innovate & try new ideas.;Seeks approval before exploring new concepts. Feels uneasy coming out of routine tasks. Gets discouraged if criticized.",
              "child_title": "INDULGENT CHILD",
              "child_para": "INDULGENT kids are explicitly energetic and enthusiastic. They are very popular among their schoolmates for the fun & energy they disseminate. They are the most sought-after compadre, on the list of every play-fellows. INDULGENTS love gossiping and always want to know what others are doing. They have a strong \u201cInner critic\u201d which constantly guides them to tailor their environment to be in harmony with others. Harsh words or tensions can create a lot of inner turmoil in INDULGENTS.  Academically they are good with numbers but abstain from technical subjects & abstract ideas. Although they are fairly good in overall studies, their interest lies in extracurricular activities like arts, sports, or music. They actively participate in projects, school competitions, or annual day functions. Remembered by their playmates as mischievous, vivid & lively, INDULGENTS are always expected to deliver the \u2018unexpected'. Much to the delight of their playmates, they rarely fail to fulfill.\r",
              "adult_title": "INDULGENT ADULT",
              "adult_para": "INDULGENTS are sociable & outgoing yet they value traditions. As a result, while they are firm on their ideologies & principles, they also exhibit admiration & respect for the beliefs of others. Always encouraging for win-win situations, INDULGENTS are very practical and often like to mediate as peace-makers. Since they strive for harmony & stability, the sense of creating order & structure comes naturally to them and so do their organizing skills. INDULGENTS are also very dedicated & contentious, hence can be relied upon to follow up on things until completion. Their focus is always to be of service to their friends, relatives, colleagues, or by & large the society. INDULGENTS are always delighted to either lead or actively participate in community events, charity works & social welfare. They stay loyal & devoted to the purpose and wholeheartedly invest their time, energy & resources for the cause. Their heart is like a sponge that absorbs the troubles & anxieties of others, but on the downside, they get hurt very easily, especially if the recipients fail to acknowledge their services.  The biggest weakness of INDULGENTS is being so conscious about their social image that they often shape up their decisions keeping others in mind. They often limit their own benefits just to make others happy or seek to obtain their compliments. Nevertheless, they are highly appreciated for their compassionate, outgoing & humorous nature.",
              "friend_title": "INDULGENT FRIEND",
              "friend_para": "Being naturally outgoing & sociable, INDULGENTS have a humongous appetite for life and they possess a genuine concern for the well-being of others. They stay very informal when it comes to friendship. Even though they have a huge list of best friends, they try to ensure that each one feels special. INDULGENTS love to initiate activities, parties & trips to spend time with their close buddies, alluring them to move out of their routine hustle & bustle and enjoy the break. They are very sensitive towards the preferences of their friends and frequently go out of the way to comfort them, but the same responsiveness may also trigger despondency if they find their efforts are not appreciated. INDULGENTS expect their gestures to be reciprocated in a good sense. They get deeply hurt if they find friends being captious or making censorious remarks about them. However, true altruists as they are, INDULGENTS never run out of their supporters in adverse situations. They are desirable friends and the emotional bonding they share with people always proves to be beneficial in a long run.",
              "lifepartner_title": "INDULGENT LIFE-PARTNER",
              "lifepartner_para": "Highly emotional & affectionate INDULGENTS have some specific needs and personal relationship is always on their priority list. Romantic & passionate at the heart they long for a life partner who can understand the depth of their feelings and co-relate with their gestures. INDULGENTS consider finding the right partner the most pivotal decision of their life. They are very proactive & involved, especially in their dating phase, excited to know how their partners perceive their interactions. INDULGENTS may often find their hearts & mind at different places. They may feel an urge to take approvals from their close friends or relatives, just to ensure they are on the right track. Once they commit themselves, they aspire to win the trust of their partners early on by caring, supporting, and showing respect. Although INDULGENTS are traditional & process-oriented, they often break their mental protocols to find ways to make their partner happy, both mentally & physically. Being passionate & sensual themselves, they are always willing to explore new things. Even though INDULGENTS are very liberal & forbearing to an extent, they are intolerant to critics. They expect their partners to reciprocate equally and respect their opinions. Family-oriented INDULGENTS are always ready to sacrifice and face hardships for their families, but not without the moral support and backing of their beloved partners.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ESFJ_indulgent_1.png",
              "parent_title": "INDULGENT PARENT",
              "parent_para": "INDULGENTS are wonderful as parents. They love, cuddle & display their affection, often billing & cooing as they enjoy it more than their kids. Being very sensitive themselves, they are attentive to every expression of their children. INDULGENTS are always worried about the safety of their children, especially when they are young. While they are naturally affirming & supportive they are also very keen on teaching them morality & socially acceptable behavior. They impart their ideas in concrete & specific terms and tactfully try to establish order & respect. INDULGENTS participate in child development programs, often arranging outdoor activities where their kids can explore nature & stimulate their imagination. While they make all the possible efforts to be ideal parents INDULGENTS sometimes become overly cautious. The freedom they give to their children invariably comes with riders & conditions. Initially, when kids are young they follow the regulations, but as they grow into adolescence they start stepping out of their comfort zones, pushing away the resistance. Such situations often bring some distress & anguish for the soft-hearted INDULGENTS. Nevertheless, their overall parenting is gratifying, and as time passes their unconditional love & care further extends to their grandchildren.\r",
              "employee_title": "INDULGENT EMPLOYEE",
              "employee_para": "INDULGENTS are most comfortable with the placements which clearly define their job-roles and also align with their sense of purpose. They feel secured to work with the organizations with proper structure, order & hierarchy along with standard operating rules & regulations in place. No job is boring for INDULGENTS as long as it is people or service-oriented. They thrive in workplaces where they get an opportunity to utilize their interpersonal skills. They are good at collaborating and are energized when they work with a motivated & action-oriented team. Individual work like handling machinery or doing the technical analysis is the last thing they prefer. They are comfortable with expediting routine & repetitive tasks provided that they get to interact with people. INDULGENTS are loyal & hardworking employees who respect their superiors and follow the code of conduct. They tend to be inflexible only if they are forced to try an unconventional method or socially unacceptable procedures. They strongly defend their beliefs & traditions. Once they set a pattern and get well-versed, INDULGENTS apply their practical sense to create harmonious workplaces and always stay proactive to do what needs to be done.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ESFJ_indulgent_2.png",
              "boss_title": "INDULGENT BOSS",
              "boss_para": "INDULGENTS are the most lenient bosses, provided that their authority is not challenged. They are at their best when managing people. Generally, they dislike controlling others and prefer a more friendly & interactive approach but not before they create a proper order, structure & schedules. INDULGENTS are highly traditional and like to present ideas in concrete terms and an orderly fashion. They do not just consider goals & tasks to be done, but they also actively get themselves involved along with their team members. Always looking forward to maintaining harmony and consensus, they are tactful in controlling conflict situations. They utilize their people skills to make everyone feel important and get things done by smoothing out the disputes. Along with creating stable working environments INDULGENTS often invest in the welfare of their employees and their families. As long as things run smoothly they never interfere with the work style preferences of their subordinates but may get vexed if they are unable to achieve the promised results. INDULGENTS hate lousy attitude and the last thing they can tolerate is dishonesty. Taking this into account, if their expectations are honored, INDULGENTS are predominantly adorable in superior positions. They are a rare breed of non-domineering leaders."
              },
              {
              "personality": "exponent",
              "main_title": "EXPONENT (REGULATORS FAMILY)",
              "intro_title": "EXPONENT INTRODUCTION",
              "intro_para": "EXPONENTS, as the title suggests are able administrators who exult in inspiring people to contribute for a vision or a purpose. They are highly competent to undertake a leading role in the event, occasions or protest. Falling under REGULATORS family they are practical, loyal & dedicated personalities. EXPONENTS are masters of collaboration. They possess exceptional networking skills to bring together like-minded individuals and create a task force to accomplish a mutually decided goal. They are very efficient in creating order by delegation & empowerment. Although EXPONENTS prefer to stay friendly & down to earth on the surface, they are very strong-willed from within. They value traditions and dwell persistently on their beliefs & principles. They rarely dither from imposing their stance, defending their ideas even in unsubstantiated & hostile situations. But in the process EXPONENTS often become too obstinate to reject suggestions, even if they stand a fair chance to deliver results. They are just too uncomfortable with unconventional methods. Also, they are reluctant to gamble where their dignity is at stake. However, EXPONENTS exemplify true leadership with their excellent organizational abilities.\r",
              "pros": "Highly reliable, responsible, practical & dependable. Qualities of a natural leader.;Extremely dedicated, strong-minded & disciplined. Prefer to progress in a step-by-step & systematized manner.;Immensely loyal & trustworthy. Values security & tradition. Defends law, regulations & code-of-conduct.;Excellent organizing skills. Efficient in handling surveys, audits, finance & multi-facet diverse events.;Exceptionally bold, energetic, dynamic & enterprising. Task-oriented with attention to detail. Meticulous & diligent.",
              "cons": "Insensitive to the feelings of others & difficulty in expressing their own. Less emotional more practical.;Highly judgmental and inflexible towards the beliefs & change of opinion. Often seen as a rigid person.;Uncomfortable with a change in the customary methods, process, or routine. Hesitant to try alternate options.;A propensity to believe they are always right. Sometimes very stubborn to let go.;At times too autocratic & dictatorial. Need to be always in control and take the charge.",
              "child_title": "EXPONENT CHILD",
              "child_para": "EXPOPENT kids are highly rational, responsible & analytical right from their childhood. They are also athletic & proactive, always ready for action, but not until all their doubts regarding the end-results are clear. From the overall academic perspective, EXPONENTS are bright students, but their strength lies in their understanding of numbers & technical subjects, both practically and analytically. They are very attentive in classrooms and like to be most disciplined. They hate interruptions or unexpected changes in plans. They enjoy consistent routine and dislike frequent moves. As a child, though very intelligent, EXPONENTS face difficulty in expressing their emotions. Also, they are very judgmental and insensitive towards the feelings of others. Their classmates and teachers often perceive them to be inflexible and rude in their behavior. But as they come of age and start viewing things from broader perspectives, they discover their true purpose and priorities resulting in a matured approach towards others.\r",
              "adult_title": "EXPONENT ADULT",
              "adult_para": "If wrong, make it right. If right, keep it right.EXPONENTS are pretty straightforward and thorough. They firmly align with standard operating procedures and traditions. Strong defenders of law and authority, EXPONENTS strive to maintain the status quo. They are very determined individuals who rarely give up once they decide to take charge of a situation or a task. Fulfilling commitments within the allotted time, with the highest possible standards, they illustrate their competence, efficiency & reliability. EXPONENTS always keep themselves updated on their surroundings, probing every minute details, and later utilize all the collected facts to devise order and structure. They never hesitate to stand up against illegitimate or dishonest actions, not first for themselves, but also for their subordinates, and communities. With all these qualities EXPONENTS also have a few weakness and the most evident among them is their insensitiveness and lack of sympathy towards others, especially if someone deviates from fulfilling their promises. They are highly intolerant & inflexible towards incompetence & carelessness. They have a reputation to come on hard if they find anyone messing with an order or violating the regulations. With all these actions, exponents candidly demonstrate their administrative skills and epitomize their reliability. \r",
              "friend_title": "EXPONENT FRIEND",
              "friend_para": "EXPONENTS favor like-minded people. They prefer to befriend persons who share a similar perspective and measure up to their customs & beliefs. They respect loyalty and straightforwardness. When it comes to friendship, EXPONENTS are very interactive and vibrant. They love to venture out with their friends and may also volunteer to spearhead group outings, events, or sports activities. They take pleasure in inviting their friends often along with their families for the weekend outings. EXPONENTS utilize their organizing skills to ensure that the events are well planned out. They consider spending good time with friends & families as the best way to socialize, so much so that it becomes their routine. Their friends, on the other hand, find EXPONENTS to be trustworthy and enthusiastic but also a bit demanding while being authoritative. EXPONENTS rarely concur recommendations if the idea doesn't coincide with their viewpoints. Also, they struggle to see the emotional aspects. Still-and-all, EXPONENTS are considered to be the most reliable persons as friends.",
              "lifepartner_title": "EXPONENT LIFE-PARTNER",
              "lifepartner_para": "The simplicity and straightforwardness of EXPONENTS is also evident in their personal life. They dislike faking or bragging about themselves to impress others. Being naturally very practical, before entering into a relationship, they ensure that their partners are never under a false impression, and vice versa. The dating phase of EXPONENTS is less romantic and more of due diligence as they prefer to be highly cautious before they make their commitments. They view relationships as a long-term project and sense the significance of aligning their duties and responsibilities beforehand, just as they do with all the other highly important tasks in their life. EXPONENTS take things seriously, once they enter into a relationship. They put enormous efforts to ensure they tick all the right boxes, focusing more on stability and security. They may do everything right from their perspective, but EXPONENTS may still fall short at certain aspects, such as reading the emotional side of their partner's sentiments. Being less sensitive to feelings, they may be oblivious to the desires of their partners beyond their routine lifestyle \u2013both socially and physically. Once they get this straighten out, EXPONENTS enjoy a fulfilling and lifelong relationship. They express their affection by being the provider to their family, which they feel is the most effective way of showing their love towards their partners.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ESTJ_exponent_1.png",
              "parent_title": "EXPONENT PARENT",
              "parent_para": "For task-oriented EXPONENTS, parenting is quite a task. It takes them a while to realize that parenting is altogether a different ball game, and their universal method to create order may not work the way it usually does. EXPONENT'S approach towards upbringing their children is very conventional. Just like any other ideal parent they fulfill all their moral responsibilities, but also ensure that they stick to their traditions, expecting their children to follow the folklore. They believe in cultivating respect, honesty & moral values right from the beginning. Known for their austerities EXPONENTS may even go to the extent of being stern, to instigate the sense of duty & responsibility into their children. Although their intention is always to help their kids grow up to become independent & capable individuals, their harsh methods may sometimes backfire. As their children grow up they start becoming more and more defiant, especially in their adolescent years when they become impulsive & rebellious. EXPONENTS may often indulge in heated arguments with their children, but as time passes, they manage to discount their notions and contrive stability within the family, but not without a substantial contribution from their partners.",
              "employee_title": "EXPONENT EMPLOYEE",
              "employee_para": "EXPONENTS are self-motivated employees who look forward to embrace futuristic organizations with a single agenda in their minds \u2013to reach the top. With a unique amalgam of productive innate such as honesty, loyalty & willpower, added with grit, dedication & required skill sets, they make a perfect blend of \u201cbest person-in-charge\". EXPONENTS always respect hierarchy and rarely fail to follow guidelines. They are highly task-oriented with an affinity to accomplish their assignments with maximum efficiency & resources. They quickly develop a reputation in the workplace as people who can be trusted to deliver, on time and as requested. Their co-workers perceive them to be friendly, polite & rational. Although EXPONENTS prefer to stay calm & focused, they may sometimes lose their cool or even raise their voice if they find anyone practicing dishonest means to gain their grounds. They even do not spare or hesitate to point out to their superiors if they sense discrepancies at the workplace. All-in-all, EXPONENTS set an example of an ideal employee having the potential to play bigger roles in the long run.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ESTJ_exponent_2.png",
              "boss_title": "EXPONENT BOSS",
              "boss_para": "EXPONENTS feel at home when they are in charge. They deploy their perceptual sense in utilizing their powers in the most systematized manner. Almost genius in networking, delegating & micromanaging, EXPONENTS align strongly with camaraderie and convectional operating procedures, maintaining safe and optimal working conditions. While they dedicate themselves to build a well-oiled and progressing organization, they may take liberties of being stern, rigid & intolerant towards competence and inefficiency. Employees working under EXPONENTS generally prosper in a long run, but if they fail to abide by the book of rule they are bound to face the music. They communicate to the point and are very tactful in resolving conflicts.  EXPONENTS may exemplify true leadership qualities, but as the saying goes \u201cno one is perfect\u201d, they also have few weaknesses. Their tendency to always be right, at times becomes too domineering. They tend to uphold the traditional way of doing things and may not recognize the need for innovation. Despite being judgmental, EXPONENTS, with all their vision and conviction, take pride in leading from the front, ensuring that the end results are delivered exactly as expected, prove to be the most successful and able administrators in a long run."
              },
              {
              "personality": "benevolent",
              "main_title": "BENEVOLENT (REGULATORS FAMILY)",
              "intro_title": "BENEVOLENT INTRODUCTION",
              "intro_para": "Kind-hearted, good-natured & gracious, as the title suggests, BENEVOLENTS unlike other personalities, are overwhelmingly altruist and magnanimous. Falling under REGULATOR family they are highly observant and good at taking care of practical matters. They have good people skills and very sensible towards feelings of the others, but are reserved when it comes to express their own sentiments. Although very conservative by nature from within, BENEVOLENTS are still open-minded to changes & innovations if they are beneficial overall. They like to stay true to their own beliefs but may often compromise their personal interests if it solves the purpose. They always strive for win-win situations. BENEVOLENTS never try to showcase their beneficences but their humbleness is often taken for granted. They often tend to repress their feelings and feel hesitant to stand up for themselves. This particular trait may sometimes lead to stress and frustration. However, their vital force to see the beauty in harmony helps BENEVOLENTS to overcome such incidents and they continue to be bounteous just like nature itself. ",
              "pros": "Relationship-oriented, considerate & philanthropic. Sensitive towards the feelings of others.;Reserved and private. Good at protecting feelings of others but struggle to disclose their own emotions and grievances.;Extremely loyal, trustworthy, ethical & conscientious. Reliable to accomplish tasks with highest standards.;Too altruistic. Tendency to put other's needs before their own. Gets stressed out if not equally reciprocated.;Remarkably observant, meticulous & steady. Follows traditional & standard operating procedures.",
              "cons": "Vulnerable to emotional manipulation & exploitation. Dislikes to throw weight around, but unable to refuse burden from others.;Distinctly practical and structured. Excellent memory for facts and figures.;Uncomfortable working with technical theories and abstract ideas.;Down-to-earth, altruistic, kind & humble.  Strive for win-win situations.;At times too traditional or orthodox. Reluctant to accept required changes till the situation gets out of control.",
              "child_title": "BENEVOLENT CHILD",
              "child_para": "Leaving the odds out, BENEVOLENT kids are particularly shy and meek. They are notably less ambitious and bend with the needs of the current requirement, just enough to stay loyal to the purpose. BENEVOLENTS are ubiquitous helpers. They often go out of their way to help their colleagues, to whom, they may not even be familiar. They dislike working with theory and abstract thought. They are naturally concerned for the feelings of others. They are a few of those open-handed kids, who have difficulty in asking back their temporarily lent belongings from their friends. BENEVOLENTS are very good in subjects they love, but they sporadically score among the top rankers when aggregated overall. They often unnecessarily burden themselves with non-academic activities just to meet the expectations of their neighborhood hobnobs. Nevertheless, with all the real-life experiences of their childhood, BENEVOLRNTS develop a strong sense of practicality and emotions of self and others.\r",
              "adult_title": "BENEVOLENT ADULT",
              "adult_para": "BENEVOLENTS are relationship-oriented personalities, based on the fundamentals to delight others as the way of their life. Although very reluctant when it comes to exposing their personal side, they possess a keen interest to prospect the details of the life of others and their background. BENEVOLENTS have an excellent memory for facts & details, and are eager to always keep themselves tuned with their surroundings. They are also very hardworking, diligent, accurate & reliable who would rarely sit idle until the completion their jobs or an assignment. Their enthusiasm lies in satisfaction and recognition for their efforts & initiatives that make difference in the life of others and society as a whole. Even though the ultimate goal of BENEVOLENTS is never to be in the limelight, but they may get demotivated if they notice that their beneficiaries fail to acknowledge their favors. It gets even worse if the donee, instead of apprehending them, claim the credit for themselves. Such incidences may bring a lot of discontent and resentments in BENEVOLENTS, to the extent of affecting their personal life and health. Despite this, owing to their practical approach and disliking of conflicts BENEVOLENTS still manage to harness positivity and strength, with a little help from their friends, mentors & well-wishers.",
              "friend_title": "BENEVOLENT FRIEND",
              "friend_para": "BENEVOLENTS are appreciated for their incredibly kind and accommodating nature. They treat almost everyone in their regular contact as friends in general. While some people may reciprocate their kindness by showing equal benignity in return, others may take advantage of their altruistic nature. From the perspective of BENEVOLENTS, the one who understands them from within and corresponds unconditionally with their mutual support is worthy of true friendship. Although they may have a small circle of true friends, they share a very close relationship with them and consider them as their family members. BENEVOLENTS deem socializing as inviting friends along with their families for weekend dinners or hanging out with them at beaches and amusement parks, discussing general topics such as jobs, current affairs & health, observing their kids play along. They truly cherish such outings. BENEVOLENTS go out of their way to meet the needs of their friends, and never disregard their advice. For them, they are an essential part of their life.",
              "lifepartner_title": "BENEVOLENT LIFE-PARTNER",
              "lifepartner_para": "BENEVOLENTS have all the qualities of a desirable life partner. They are family-oriented people, who are dedicated to their responsibilities, right from taking care of the family and fulfilling their needs to providing a helping hand with all the household chores. BENEVOLENTS are very cautious when selecting their partners. Being shy and reserved, they initially struggle to convey their feelings, especially in their dating phase while trying to investigate their matching preferences. Most of the time, their deep feelings of attraction fail to find a bolder way to surface, not until they find a little extra support & hand-holding, either from friends or their partners themselves. They may also consider cards and gifts as an alternative to express their emotions. As the relationship progresses their feelings finally find words and expressions. BENEOLENTS always try different ways to keep their relationship interesting. They find pleasure in pleasing their partners and ensure that they are satisfied both physically and emotionally. They prove to be loyal, protective, indulgent & compromising partners who feel satisfied if their partners reciprocate with same gesture and appreciation. BENEVOLENTS often express their feelings with watery eyes. The tears of joy or outbursts of sorrow, to great extent, depend upon the sensitivity of their partners.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ISFJ_benevolent_1.png",
              "parent_title": "BENEVOLENT PARENT",
              "parent_para": "For family-oriented BENEVOLENTS, parenting is an inborn skill. Their customary and conservative approach, otherwise not always feasible, serves perfectly ideal proclivity for parenting. Providing their children all the basic needs like food & shelter, physical safety & emotional security is invariably on their priority list. More than their responsibilities, BENEVOLENTS enjoy the task of raising their kids and derive immense pleasure from it. But on the flip side, in the process of safeguarding their children, they may sometimes become overly cautious. Also while they are eager to teach them the lessons of moral values, responsibilities & dedication, they may unknowingly miss out to consider the views of their children. But eventually, with the advice of their partners BENEVOLENTS realize the fact that along with safeguarding, it is also necessary to provide freedom to the kids so that they learn from their own mistakes and experiences. In any such adverse situations, their true observant nature comes in handy. Applying their patience and perseverance, along with their sense of accountability, BENEVOLENTS never hesitate to redefine their comfort zones, all for the love and affection for their children.",
              "employee_title": "BENEVOLENT EMPLOYEE",
              "employee_para": "BENEVOLENTS always look for security and stability when they select a job. The organizations with defined job roles and structured hierarchy in place are considered ideal workplaces. Kind-hearted and considerate with a strong work ethic, BENEVOLENTS are pertinent in service not just to the clients but also towards their co-workers. Although they can fit in any role, they are most productive in the service industry. They are highly observant of people's feelings. BENEVOLENTS are extremely loyal and reliable employees, often the cornerstones of successful organizational structures. They get motivated to perform even better if their efforts are recognized and acknowledged, but this may also invite exploitation from their superiors or co-workers. Down-to-earth BENEVOLENTS dislike conflicts and criticism, and as a result, they may struggle to stand up for themselves, repressing their feelings when overloaded with extra assignments by their superiors. But luckily for BENEVOLENTS, they always manage to find help from their supporters in the workplace, mostly if not exclusively, indebted to them for their help in similar circumstances.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ISFJ_benevolent_2.png",
              "boss_title": "BENEVOLENT BOSS",
              "boss_para": "BENEVOLENTS are administrators not often by choice, but by the circumstances. Most of the time they are unaware of the fact that they can perform exceptionally well in managerial positions. Although they may not prefer to implement strict regulatory measures, they encourage their employees to develop a sense of their duties and do their best to work in an orderly fashion. They believe in motivating and leading by example. BENEVOLENTS are always available and involved, paying attention to details, taking into consideration suggestions of their co-workers, and promoting stable environments. Their work style preference is to follow traditional ideals and standard operating procedures, stressing the day-to-day operations. Along with providing friendly habitat, they are also keen to sponsor employee welfare programs such as health, wellness, child care, etc. With all these initiatives BENEVOLENTS may display exemplary organizational capabilities, but on the downside, they are too orthodox and reluctant to try new and innovative ideas. They may face hesitation in branching out into new territories and ventures. However, as they mature BENEVOLENTS apply their inborn dedication to put conscious efforts to develop their weaker traits and incompetence."
              },
              {
              "personality": "pragmatist",
              "main_title": "PRAGMATIST (REGULATORS FAMILY)",
              "intro_title": "PRAGMATIST INTRODUCTION",
              "intro_para": "As the title depicts PRAGMATISTS are the most practical, responsible, and dedicated personalities. Falling under the REGULATOR family they are very loyal towards their duties and take pride in fulfilling the responsibility they have chosen. PRAGMATISTS are fact-driven individuals who hate making assumptions. They are methodical to the core and prefer to analyze the facts and statistics before committing themselves to any assignment. Once they undertake a task, they work with timeless dedication, often scarifying their personal time and resources to fulfill the obligation. Unfortunately for PRAGMATISTS, their wholehearted dedication sometimes becomes more of a liability than an asset. They may be vulnerable to manipulation because of this quality. People who know their nature, may sometimes cunningly or diplomatically shift their responsibilities or workload onto them knowing that they will invariably take up the slack. Nevertheless, on the brighter side PRAGMATISTS are also genuinely appreciated and complimented by their friends and colleagues for the stabilizing role they play. For PRAGMATISTS those are the priceless moments they strive for.",
              "pros": "Honest, loyal, dutiful & responsible. Extremely dedicated & determined regarding their duties towards self & others.;Highly precise, systematic, stable & practical. Repositories of structured & orderly methods.;Task-oriented. Able to accomplish objectives by applying logical & rational thinking.;Significantly observant. Initiates with utmost clarity with nothing taken for granted.;Family and community-oriented. Values freedom, regulations & conservations.",
              "cons": "Too traditional, often to the extent of being orthodox (reluctant to bend the rules).;Insensitive to consider emotions, naturally less receptive to the feeling of others.;At times gives importance only to the facts based on their own perspectives. Becomes stubborn and judgmental.;Very reserved. Difficult in working with teams if their methods are questioned. Their mantra \"My way or the highway\"\".;Requires stability and security to be optimal. Intolerant to laziness & indecisiveness.\"",
              "child_title": "PRAGMATIST CHILD",
              "child_para": "PRAGMATISTS are honest & sincere right from their childhood. They stay quiet & focused in classrooms, not because they are serious by nature, but they have a vast aptitude for intelligence and they idealistically believe to follow the guidelines. They play hard in playtime and adroitly unplug themselves when concentrating on their studies. Pragmatists are a bit reserved in a sense, but they can also contribute significantly to a team if they have complete clarity of their roles beforehand. They are very good at numbers and technical subjects. They are highly confident & observant kids. PRAGMATIST kids never trade their self-respect for acquisitive gains. As a result, they are often perceived to be stubborn and insensitive by their friends and classmates. For the way they are, PRAGMATIST kids are never disregarded for their loyalty and dependability. They never fail to get themselves counted when reliability matters the most. They tend to be more mature for their age.",
              "adult_title": "PRAGMATIST ADULT",
              "adult_para": "PRAGMATISTS grow up to become highly disciplined, precise & realistic individuals. They can be stereotyped as a typical \u201cMR DEPENDABLE\u201d or labeled with well-suited \u201cA MAN OF HIS WORDS\u201d, as they possess a deep sense of personal integrity. They are task obedient who rely upon the standard operating manual. PRAGMATISTS believe in following the protocols and always adhere to guidelines. Although they are patient & determined when it comes to achieving their goals, but not before they are factually accreted with detailed information, presented well in advance for them to undertake any such targets. PRAGMATISTS have a no-nonsense attitude and they don't like to work on pre-suppositions. The most admirable strength they possess is their perseverance. They simply do not give up. They may lose their cool if their chosen methods are counted with illogical accusations. Also, PRAGMATISTS cannot stand laziness and dishonesty. To avoid all these circumstances they prefer to either work alone or under an authority to command. PRAGMATISTS often lack diplomacy and have mediocre interpersonal skills. Although they may not be in tune with the feelings of other people, for PRAGMATISTS, their life centers on bringing order & structure to the environment in which they breathe. They excel in time management, punctuality & consistently meeting their deadlines.",
              "friend_title": "PRAGMATIST FRIEND",
              "friend_para": "When it comes to their professional & personal life, PRAGMATISTS prefer to stay private. Their highly disciplined lifestyle has very little room for socializing. Attending parties & events are often ventured as formalities so that they maintain their respect as contributing members of the society. Reserved by nature, PRAGMATISTS end up with a very limited number of friends, which can be counted on fingers. They utilize their time with friends to relax and discuss current affairs, jobs, kids & other general topics. Even though PRAGMATISTS are not very impulsive or impromptu in conversations, they still enjoy the company of fun-loving & lively friends. Their friends on the other hand value them being honest & trustworthy. PRAGMATISTS generally don't like arguments, debates, or conflicts, but they fully support their friends and stand by them in any such confrontations, except for emotional issues. PRAGMATISTS are unable to handle emotional baggage. It is the first thing they check & ensure before selecting a person as a friend.  For any other situations, \u201cMR DEPENDABLE\u201d is always available 24x7.",
              "lifepartner_title": "PRAGMATIST LIFE-PARTNER",
              "lifepartner_para": "PRAGMATISTS are paragons of family institutions. They are truly dedicated partners who believe in mutually balanced relationships. They value tradition, security, stability & peaceful living. PRAGMATISTS like to keep things simple and straightforward right from the dating period till they finally decide to take the vows. They prefer a more traditional approach in their dating phase leaving the adventures, surprises & fantasies for their partners, as PRAGMATISTS refrain to take risks from unpredictable situations. Once they enter into a committed relationship they devote themselves to fulfill the promises and make every effort to create a bonding that is mutually satisfying and long-lasting. Although their physical relations are nothing out of ordinary, they never hesitate to try something fancy if that helps to satisfy their partners. The only aspect where PRAGMATISTS require counsel is to understand the emotional needs of their partners. Since they are less receptive to feelings, they rely upon their judgments to analyze the perspectives of their partners. However, PRAGMATIST's sense of responsibility and the ability to view things from a rational perspective becomes instrumental to sort out the differences, leading to mutual satisfaction in their personal relationships. It tends to be easier if they are lucky to get a like-minded or understandable partner.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ISTJ_pragmatist_1.png",
              "parent_title": "PRAGMATIST PARENT",
              "parent_para": "PRAGMATISTS are strict parents. Although they do everything right morally as a parent, their expectations from their children may sometimes be overburdening on them. As a responsible parent, PRAGMATISTS try to provide unrivalled environments, taking care of the food, clothing, education & even the interests of their children, but simultaneously they are also watchful to ensure that their kids progress in the right manner with optimal standards. They believe that along with academics kids should also develop their sense of responsibility, rational thinking & moral values. From the parameters of virtuous duties, PRAGMATISTS succeed in upholding their loyalty & devotion towards parenting, but may completely miss out on the emotional well-being of their children. They often neglect to exhibit physical display of love and affection when needed the most. Being less receptive to emotional needs of children, they rely on their partners to sort it out for them. If they are not lucky to have such sensitive partners it may result in confining distances or a mental barriers in their relations with their children. However, as time passes by, PRAGMATISTS manage to analyze the missing threads, discovering their flexibility and combining it with their natural instincts of dedication to bridge the gap.",
              "employee_title": "PRAGMATIST EMPLOYEE",
              "employee_para": "PRAGMATISTS long for a stable and secured job. They dislike shuffling unless they are absolutely sure about the benefits. They are loyal & hardworking individuals who perform exceptionally well if given responsibilities. PRAGMATISTS have a tendency to first check the details of the task with instructions clearly outlined. They are at ease when the directive & mandates are clearly defined along with the deadlines. PRAGMATISTS can work in various fields, but they feel comfortable working in an organization where structure & hierarchy are well established. They hate working in a haphazard & order-less environment, also they are intolerant to indecisiveness. PRAGMATISTS are most productive when working by themselves, but they also appreciate the value of working in a team as well, as long as their subordinates render reasonable contribution. They have a very clear command of time & priorities. With all their preconditions, PRAGMATISTS still can be counted among the employees, known for their invaluable & unparalleled contribution. Their core competency lies in planning, organizing & mapping out schedules to follow the agenda.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ISTJ_pragmatist_2.png",
              "boss_title": "PRAGMATIST BOSS",
              "boss_para": "PRAGMATIST personalities have all the administrative elements integrated within them by default. They hustle all their life to reach this milestone they righteously deserve. To work under a PRAGMATISTS boss can either be a triumph or a nightmare, which differs from person to person. They have strong opinions about the ways, they want things to be done. They love authority & power and are often intolerant towards their employee if they fail to meet their responsibilities. They strictly prefer their subordinates to follow the guidelines, expect them to accomplish their targets maintaining high standards, all within the deadline. PRAGMATISTS never hesitate to take tough decisions. Although it may help them to achieve their objectives but they are often perceived to be ruthless, which may face criticism. Also due to lack of sensitivity they may sound harsh when they enforce their perspectives. Still and all, working in an organization headed by PRAGMATISTS can be a boon to like-minded individuals who are ready to slog for a better future. Nothing can go wrong with a boss like PRAGMATIST as they can accomplish almost anything they put into their minds. They are pioneers in sense of planning with a strong eye for details. The organizations they create sets a benchmark for others to follow."
              },
              {
              "personality": "empiric",
              "main_title": "EMPIRIC (PARTICIPATORS FAMILY)",
              "intro_title": "EMPIRIC INTRODUCTION",
              "intro_para": "EMPIRICS are zealous experimenters who follow their passion and are deeply engrossed in their own prismatic world. Immensely creative from within, they possess ample interests in diverse subjects and have a very little tolerance for boredom. Falling under PARTICIPATORS family, they are highly observant and practical to the core. They have a unique obsession to distinguish patterns, symmetry & synchronicity in everything, which reflects their artistic & aesthetic sense that enables them to transform chaos into beauty. Although very individualistic & reserved, EMPIRICS have a profound ability to relate to the surroundings and are handy in crisis-situations. They are gentle, quiet & considerate towards others, having a soft heart for children & animals. Their humanistic outlook is evident in their creativity, which is based more on emotions and less on abstract thoughts. On the downside, EMPIRICS always live life on the edge and tend to be poor long-term planners. Highly focused on details, they often tend to miss the \u2018big picture'. They are independent to a fault and highly disregard traditions & regulations. Never afraid of taking risks EMPIRICS live their lives following what they feel is right, guided by their perception.",
              "pros": "Extremely sympathetic, gentle & service-oriented. Perceptive in relating to emotions & skilled to establish harmony.;Highly observant. Quick to notice & perceive the subject. Sensitive to the environment & nature.;Fundamentally loyal, faithful & idealistic. Defends & promotes moral values.;Eminently artistic, creative & passionate. Profound aesthetic sense. Versatile in expressing beauty.;Practical, original and unconventional. Avoids conflicts & confrontations. Upholds principles & ideals.",
              "cons": "Highly emotional. Gets disconnected with the outer world if feelings are hurt. Difficulty in handling emotional disturbance.;Independent to a fault. Rigidity towards customs & traditions. High demand for self-respect.;Over individualistic, quiet & reserved. Hesitate to communicate people whom they don't know.;Short-term gain personalities. Dislike long-term commitments & plans, resulting to stress & financial hardships later.;Dislikes strict rules & regimes. Requires personal freedom to accomplish tasks. Turns futile if constantly micro-managed.",
              "child_title": "EMPIRIC CHILD",
              "child_para": "EMPIRIC kids are gentle, easy-going & compassionate. Although intensely private & sensitive, they are very competitive from within. Their class-mates find them to be spontaneous & charming, often spotted volunteering for their pals which makes them likable & popular. EMPERIC child is naturally inclined towards extra-curricular activities such as arts, crafts, sports, music, etc. Academically they may struggle with technical subjects. They learn best in a \"hands-on\" environment and become easily bored with the traditional teaching methods, especially which emphasize abstract thinking. EMPIRICS thrive on sharp observation & creativity. They are sometimes unpredictable, leaving everything on hand for something more interesting. EMPIRICS follow their heart and are least bothered about the things which do not fall into their perspective. They hate criticism and rarely get involved in conflicts & confrontations. Known for their kindness & artistic skills, EMPIRICS are desirable mates in adventurous & fun-activities. ",
              "adult_title": "EMPIRIC ADULT",
              "adult_para": "EMPIRICS grow up to become passionate individuals. They develop a deep-rooted attachment with nature & living beings. Their decisions are based on strongly held personal values which are original and less conventional. EMPIRICS are interested in contributing to people's sense of well-being & happiness and will put a great deal of effort & energy into tasks which they believe in. They're more spiritually aware than most people and are more in touch with their souls than others. Fascinated by creative ideas, EMPIRICS often lose track of the time when engrossed in the activity of their interest. They are sensitive to color, texture & tone, and have an innate sense of what will be aesthetically pleasing. They dwell in the present and constantly introspect their identity in terms of beatific satisfaction. But, on the negative side, EMPIRICS often neglect to plan for their future. They value creative freedom more than other materialistic needs, which may often lead to economic hardships later in their life. Also, they have a tendency to frequently suppress their unpleasant emotions and may often feel overwhelmed with tension & stress. Being highly sensitive by nature they have extreme difficulty handling criticism. EMPIRICS are warm & sympathetic people, tend to make a living out of a process that is more humane & beneficial to others. They always thrive to make this world a better place to live.",
              "friend_title": "EMPIRIC FRIEND",
              "friend_para": "EMPIRICS are fun-loving & action-packed when they are with their friends, otherwise known to be shy & reserved personalities. They are at ease when they are casual. Although EMPIRICS take a little longer than usual to choose their best buddies, they are considered to be the most tranquil & contended when it comes to friendship. They love to create deep and lasting bonds that are built on mutual respect and validation. They enjoy chilling out with their friends, spending their quality time to relax, listen to music & have fun. EMPIRICS prefer to stay away from heated arguments & brainstorming intellectual debates. Instead, they look forward to a congenial company in rip-roaring activities & adventures. EMPIRICS rarely criticize in open and being judgmental about others is the last thing on their minds, but they also expect the same from their companions. The greatest quality of the EMPIRICS is their ability to relate to the emotions of their friends. They always stand by their pals through thick & thin. Having EMPIRICS as a friend is a boon, but it comes with a template-\u2018Fragile- Handle with care'.",
              "lifepartner_title": "EMPIRIC LIFE-PARTNER",
              "lifepartner_para": "The personal relationship of EMPIRIC is predominantly subsumed by feelings & emotions. While they are very much sensitive to the feelings of their partners, they often struggle to reveal their own. This is also evident in their dating phase, where EMPIRICS are reluctant to express more boldly. They hesitate to control the situation and rely on their partners to make the first move. Their partners perceive them to be mysterious initially, but as their relationship grows they gradually discover their bounteous warmth & affection. Once into a relationship, EMPIRICS stay loyal & caring. They always look forward to keeping their relationship healthy. They try to maintain harmony and are very reluctant to engage in a conflict. They ensure that the needs of their partners are satisfied, both physically & emotionally. EMPIRICS are generally givers by nature and all they expect in return is the acknowledgment for their efforts. They need positive affirmation to be happy and the greatest gift their partners can give them is the expression of their affection & admiration. Ignoring the efforts of EMPIRICS can turn their relationship sour. On the flip side, their partners may feel despondent due to their negligence towards future planning. Nevertheless, being very practical, EMPIRICS manage to balance out the shortcomings once they augment their natural abilities with the ideas amassed by their life experience.",
              "image_1": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ISFP_empiric_1.png",
              "parent_title": "EMPIRIC PARENT",
              "parent_para": "For EMPIRICS parenting is beyond just providing the basic needs to their children. More than their responsibilities as ideal parents, they enjoy everything that comes along in the process. They find joy & delight in the hardships of fulfilling the needs of their loved ones. EMPIRICS are encouraging parents who believe that apart from their regular academics, kids should also venture into extra-curricular activities and follow their passion. They like to show their love in deeds rather than words. While they are ardent to demonstrate the activities, they also show keen interest to participate in their projects. EMPIRICS are seen as lenient & permissive parents, wanting their children to explore & learn from their mistakes. Although they are inarguably best at providing practical needs to their kids, EMPIRICS often overlook or neglect the future prospects in terms of career options for their children. Since they are not natural goal setters themselves they rely upon periodic reminders from their partners. Adding to this downside, EMPIRICS may also sometimes be taken for granted by their kids for their lenient and forbearing nature, especially when the kids grow into adolescence. But, eventually, as time passes by, they are remembered as the most loyal, dedicated, and self-sacrificing parents by their children.",
              "employee_title": "EMPIRIC EMPLOYEE",
              "employee_para": "EMPIRICS are employees not by choice. They hate being confined to routine, regulations & boundaries. Their inborn artistic and creative traits demand unconditional freedom for them to blossom. As employees, EMPIRICS are highly observant and have a thorough understanding of their duties & responsibilities, but they prefer doing their job at a deliberately unhurried pace. They dislike being administered or constantly nit-picked. On the contrary, EMPIRICS burgeon when given their space or creative freedom, which they value more than their designation or remuneration. Being highly conscious of their physical surroundings, they prefer their work environment to be courteous, cooperative & aesthetically pleasing. Their work style may seem rather unconventional, but at times they give phenomenal results, especially in crisis situations. Their subordinates find EMPIRICS to be amiable, warm-hearted & humble. Their instincts to sympathize and help others make them adorable & admirable. The only downside to such disposition is their negligence to address their progress and future planning, which is likely to invite deprivation later in their life.",
              "image_2": "https://braino-static-images.s3.ap-south-1.amazonaws.com/inner_personality/ISFP_empiric_2.png",
              "boss_title": "EMPIRIC BOSS",
              "boss_para": "EMPIRICS are notably lenient and non-domineering when it comes to supervise or be in charge. They promote a supportive environment where they encourage their subordinates to be considerate & respectful to the core values of the organization. EMPIRICS are enormously observant and pay great attention to the humanistic aspects. Their sensitivity allows them to be a good perceiver who can sense the need to communicate with the right words at the right time. They like to have a work environment which is aesthetically pleasing. EMPIRICS believe in giving a free hand to their teams where hierarchy is often compromised to get the job done. They never hesitate to take risks or even gamble if the result is perceived to be rewarding. EMPIRICS are always eager to find a way to make things happen. In an event of dispute or disagreement, they prefer peaceful methods for conflict resolutions but may become aggressive if the ideals they identify with, are repeatedly disregarded or violated. EMPIRICS put more emphasis on providing practical solutions for current situations and often lack a long-term planning strategy, but they manage to run the show with their exceptional ability to relate to people and passion towards perusing whatever they decide in their minds."
              }
          ],
          "page30": [
              {
              "left_brain": "44.29",
              "right_brain": "55.71",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/brain_dominance/right_dominant.png"
              },
              {
              "left_brain": "44.29",
              "right_brain": "55.71",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/brain_dominance/left_dominant.png"
              },
              {
              "left_brain": "44.29",
              "right_brain": "55.71",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/brain_dominance/left_moderate.png"
              },
              {
              "left_brain": "44.29",
              "right_brain": "55.71",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/brain_dominance/right_moderate.png"
              },
              {
              "left_brain": "44.29",
              "right_brain": "55.71",
              "image": "https://braino-static-images.s3.ap-south-1.amazonaws.com/brain_dominance/equal.png"
              }
          ],
          "page31": {
              "introvert": "27",
              "extrovert": "73",
              "fact": "40",
              "opinion": "60",
              "objective": "48",
              "subjective": "52"
          },
          "page32": {
              "reportDetails": {
                  "leftRidgeCount": "97",
                  "rightRidgeCount": "122",
                  "totalRidgeCount": "219"
              },
              "reportDtl": [
                  {
                      "legends": "7",
                      "isArc": "NO",
                      "fpp": "UL",
                      "percentage": "5.02",
                      "isReverse": "NO",
                      "colorCode": "#ed1c24",
                      "hand": "RightHand,Thumb",
                      "isMemoryBackUp": "NO"
                  },
                  {
                      "legends": "4",
                      "isArc": "NO",
                      "fpp": "WT",
                      "percentage": "10.5",
                      "isReverse": "NO",
                      "colorCode": "#00a550",
                      "hand": "RightHand,Index",
                      "isMemoryBackUp": "NO"
                  },
                  {
                      "legends": "5",
                      "isArc": "NO",
                      "fpp": "UL",
                      "percentage": "10.05",
                      "isReverse": "NO",
                      "colorCode": "#00a550",
                      "hand": "RightHand,Middle",
                      "isMemoryBackUp": "NO"
                  },
                  {
                      "legends": "4",
                      "isArc": "NO",
                      "fpp": "WL",
                      "percentage": "10.5",
                      "isReverse": "NO",
                      "colorCode": "#00a550",
                      "hand": "RightHand,Ring",
                      "isMemoryBackUp": "NO"
                  },
                  {
                      "legends": "6",
                      "isArc": "NO",
                      "fpp": "UL",
                      "percentage": "8.22",
                      "isReverse": "NO",
                      "colorCode": "#55c5cf",
                      "hand": "RightHand,Pinky",
                      "isMemoryBackUp": "NO"
                  },
                  {
                      "legends": "1",
                      "isArc": "NO",
                      "fpp": "ULH",
                      "percentage": "13.7",
                      "isReverse": "NO",
                      "colorCode": "#00a550",
                      "hand": "LeftHand,Thumb",
                      "isMemoryBackUp": "NO"
                  },
                  {
                      "legends": "2",
                      "isArc": "NO",
                      "fpp": "WER",
                      "percentage": "12.33",
                      "isReverse": "YES",
                      "colorCode": "#00a550",
                      "hand": "LeftHand,Index",
                      "isMemoryBackUp": "NO"
                  },
                  {
                      "legends": "5",
                      "isArc": "NO",
                      "fpp": "UL",
                      "percentage": "10.05",
                      "isReverse": "NO",
                      "colorCode": "#00a550",
                      "hand": "LeftHand,Middle",
                      "isMemoryBackUp": "NO"
                  },
                  {
                      "legends": "3",
                      "isArc": "NO",
                      "fpp": "WIR",
                      "percentage": "11.42",
                      "isReverse": "NO",
                      "colorCode": "#00a550",
                      "hand": "LeftHand,Ring",
                      "isMemoryBackUp": "NO"
                  },
                  {
                      "legends": "6",
                      "isArc": "NO",
                      "fpp": "FL",
                      "percentage": "8.22",
                      "isReverse": "NO",
                      "colorCode": "#55c5cf",
                      "hand": "LeftHand,Pinky",
                      "isMemoryBackUp": "NO"
                  }
              ]
          },
          "footer": {
              "evalNo": "BOG0001",
              "date": "08-06-2021"
          }
        }
      }
    }
  
  ngOnInit() {
    this.data = this.response.data;
  }

}
