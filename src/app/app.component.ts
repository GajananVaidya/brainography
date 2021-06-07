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
            "name": "AB",
            "evaluationNo ": "BOG0003"
          },
          "page2": {
            "name": "AB"
          },
          "page3": {
            "personal": {
              "name": "AB",
              "guardian": "",
              "gender": "Male",
              "dob": "07/10/2002",
              "contact": "9",
              "email": "V@GMAIL.COM",
              "address": "",
              "eval": "BOG0003"
            },
            "company": {
              "name": "AB",
              "contact": "9",
              "email": "V@GMAIL.COM",
              "address": "",
              "dealer": "DD00002"
            }
          },
          "page5": {
            "music_rank": "1",
            "music_perc": "X",
            "linguistic_rank": "2",
            "linguistic_perc": "X",
            "fms_rank": "3",
            "fms_perc": "X",
            "gms_rank": "4",
            "gms_perc": "14.29",
            "2d_rank": "5",
            "2d_perc": "X",
            "minute_rank": "6",
            "minute_perc": "13.53",
            "auditory_rank": "1",
            "auditory_perc": "40.60",
            "kinesthetic_rank": "2",
            "kinesthetic_perc": "31.58",
            "visual_rank": "3",
            "visual_perc": "27.82"
          },
          "page7": {
            "ssc_perc": "40",
            "ssc_arch": "X",
            "cbse_perc": "60",
            "cbse_arch": "2X",
            "icse_perc": "100",
            "icse_arch": "2X",
            "ib_perc": "80",
            "ib_arch": "X"
          },
          "page10_11": {
            "section1": {
              "rank": "1",
              "title": "YOU HAVE A GOOD UNDERSTANDING OF SOUND",
              "image": "assets/images/Page 10/Page-10-img1.jpg",
              "para1": "Your strength is your ability to be aural (auditory-musical-rhythmic). You can perceive sound in terms of its frequency, amplitude and timbre. You have an inbuilt understanding of melody, rhythm, pitch, and harmony. You are highly emotional and you can feel the pain of others.",
              "para2": "You like to be surrounded by music and can appreciate different types of music and sounds. You may often be found humming or drumming out beats with your hands. You have good auditory memory and may respond well to jingles, rap and rhymes to help memorize. You may be Music Festival Background avid collector of music and musical instruments.",
              "para3": "You may sing or play music professionally solo or in a group, band, choir, or orchestra. You can do tutoring in music, voice, or instruments. You may prefer working in music retail stores, composing music, song writing, music ministry in churches or community choirs, music reviewer, piano tuner, recording engineer etc. In medical and allied professions you can choose audiologist, speech language pathologist or technician, music therapist, and recreation therapist. You like working in video, soci",
              "interests": "DJ'ing;Playing Musical Instruments;Singing/Rapping/Yodelling;Voice over/dubbing;Music/Melody Writing/Composing;Live/Karaoke performance;Sound mixing/Recording;Song Sequencing;Acting;Social Service;Nursing;Volunteering"
            },
            "section2": {
              "rank": "2",
              "title": "YOU HAVE A VERY GOOD UNDERSTANDING OF SPOKEN LANGUAGES",
              "image": "assets/images/Page 10/PAGE-11-img1.jpg",
              "para1": "Your strength is your communication and correspondence. You express yourself well. You are also a good listener with a well-developed memory for the material you have read and recall of spoken information. You like quizzes that require the ability to quickly and accurately respond to spoken or written instructions.",
              "para2": "You may have fascination for learning new languages, memorizing tongue twisters, reading and exploring ways to creatively use language. Although linguistic ability is not a synonym for intelligence or grammar, you can still easily outsmart by using language power. You enjoy crosswords, scrabble and different word games.",
              "para3": "You may like jobs which includes language arts, public speaking, drama, and debate. You will be attracted towards different styles of writing such as, content writing, blog writing, script writing, translation, song writing, dialogue writing, language based jokes and stories etc. You may be drawn to choose careers such as language teacher, professional writer, news correspondent, poet, attorney, publicist, journalism, advertising agent, psychologist, speech pathologist, anchor, motivational spea",
              "interests": "Story Telling;Poem Writing Anchoring;Dubbing /Voicing;Singing/Rapping/Yodelling;Giving Speech;Language Learning;Phone Counselling Therapy;Live Commentary;Blog/Article/Script Writing;Public Speaking;Diary Writing;Dialogue/Lyrics Writing;News Reading;Jingle making;Translating"
            },
            "section3": {
              "rank": "3",
              "title": "YOU ARE PRECISE WITH YOUR FINGERS & FACIAL EXPRESSIONS",
              "image": "assets/images/Page 10/PAGE-11-img1.jpg",
              "para1": "Your strength is in your precise control over your fine and micro muscular movements. You like to explore all the finger based activities. You can easily perform delicate and feather touch tasks as well as tasks which require strong gripping.",
              "para2": "Along with profound dexterity, you also have an excellent hand-eye co- ordination and a very good control over your facial expressions. You learn from experience or from your own mistakes. You always have an urge to keep your fingers busy by scribbling or tapping a rhythm on desk by fingers while concentrating in a lecture.",
              "para3": "With strong Fine Motors, there are lot of possibilities. You can excel in various fields which are directly involved with facial expressions or your fingers. You can become a sports person. You may try carom, dart, snooker or all the racket based sports or become a bowler (spinner/ swinger). You can explore any musical instrument which requires fingers to play or be an artist of any form. You can also build your career in all the general precision based tasks such as repairing, surgery. non- fir",
              "interests": "Drawing/Colouring;Calligraphy;Stitching/Sewing/Knitting;Rangoli Making;Ikebana;Mehandi Designing;Tattoo Making;Hair Styling;Finger based sports;Magic Tricks;Body Massage;Classical Dancing;Rock Climbing;Acting;Facial Make Up;Yoga;Non Fire based Cooking;Playing Musical Instruments;Juggling"
            }
          },
          "page12": {
            "heart": "56.86",
            "Mind": "43.14",
            "indoor": "54.76",
            "outdoor": "45.24",
            "individual": "53.19",
            "team": "46.81",
            "physically": "54.76",
            "mentally": "57.89"
          },
          "page13": {
            "hobby_1": "48",
            "hobby_2": "53",
            "hobby_3": "48",
            "hobby_4": "48",
            "hobby_5": "62",
            "hobby_6": "43",
            "hobby_7": "38",
            "hobby_8": "40",
            "hobby_9": "43",
            "hobby_10": "42",
            "hobby_11": "49",
            "hobby_12": "45",
            "hobby_13": "45",
            "hobby_14": "50",
            "hobby_15": "45",
            "hobby_16": "48",
            "hobby_17": "48",
            "hobby_18": "57",
            "hobby_19": "48",
            "hobby_20": "52",
            "hobby_21": "62",
            "hobby_22": "62",
            "hobby_23": "62",
            "hobby_24": "40",
            "hobby_25": "65",
            "hobby_26": "44",
            "hobby_27": "58",
            "hobby_28": "51",
            "hobby_29": "53",
            "hobby_30": "53",
            "hobby_31": "48",
            "hobby_32": "44",
            "hobby_33": "42",
            "hobby_34": "42",
            "hobby_35": "42",
            "hobby_36": "42",
            "hobby_37": "39",
            "hobby_38": "38",
            "hobby_39": "45",
            "hobby_40": "39",
            "hobby_41": "38",
            "hobby_42": "45"
          },
          "page16": {
            "human_biology": {
              "hb_1": "64",
              "hb_2": "68",
              "hb_3": "63",
              "hb_4": "63",
              "hb_5": "62",
              "hb_6": "69",
              "hb_7": "61",
              "hb_8": "63",
              "hb_9": "64",
              "hb_10": "72",
              "hb_11": "63"
            },
            "specialisation": {
              "sp_1": "61",
              "sp_2": "64",
              "sp_3": "64",
              "sp_4": "71",
              "sp_5": "64",
              "sp_6": "62",
              "sp_7": "61",
              "sp_8": "62",
              "sp_9": "62",
              "sp_10": "63",
              "sp_11": "62",
              "sp_12": "61",
              "sp_13": "61",
              "sp_14": "63",
              "sp_15": "70",
              "sp_16": "68",
              "sp_17": "64",
              "sp_18": "62",
              "sp_19": "62",
              "sp_20": "62",
              "sp_21": "69",
              "sp_22": "63",
              "sp_23": "61",
              "sp_24": "62",
              "sp_25": "64",
              "sp_26": "62",
              "sp_27": "61",
              "sp_28": "69",
              "sp_29": "69",
              "sp_30": "68",
              "sp_31": "62",
              "sp_32": "61",
              "sp_33": "65",
              "sp_34": "69",
              "sp_35": "80",
              "sp_36": "62",
              "sp_37": "62",
              "sp_38": "62",
              "sp_39": "61",
              "sp_40": "63",
              "sp_41": "62",
              "sp_42": "69",
              "sp_43": "62",
              "sp_44": "68"
            },
            "plant_biology": {
              "pb_1": "61",
              "pb_2": "62",
              "pb_3": "62",
              "pb_4": "61",
              "pb_5": "60",
              "pb_6": "62",
              "pb_7": "62",
              "pb_8": "63"
            },
            "animal_biology": {
              "ab_1": "63",
              "ab_2": "61",
              "ab_3": "62",
              "ab_4": "61",
              "ab_5": "61"
            }
          },
          "page17": {
            "chemical_engineering": {
              "ch_1": "61",
              "ch_2": "62",
              "ch_3": "61",
              "ch_4": "69",
              "ch_5": "62"
            },
            "civil_engineering": {
              "cv_1": "62",
              "cv_2": "62",
              "cv_3": "61",
              "cv_4": "62",
              "cv_5": "61",
              "cv_6": "62",
              "cv_7": "61"
            },
            "mechanical_engineering": {
              "me_1": "69",
              "me_2": "61",
              "me_3": "69",
              "me_4": "62",
              "me_5": "61",
              "me_6": "62"
            },
            "electrical_electronics_engineering": {
              "ee_1": "69",
              "ee_2": "69",
              "ee_3": "69",
              "ee_4": "61"
            },
            "interdisciplinary": {
              "id_1": "61",
              "id_2": "62",
              "id_3": "62",
              "id_4": "62",
              "id_5": "62",
              "id_6": "69",
              "id_7": "69",
              "id_8": "62",
              "id_9": "62",
              "id_10": "62",
              "id_11": "61",
              "id_12": "62",
              "id_13": "61",
              "id_14": "61",
              "id_15": "69",
              "id_16": "62"
            },
            "building_services_engineering": {
              "bs_1": "61",
              "bs_2": "69",
              "bs_3": "62",
              "bs_4": "62"
            },
            "non_engineering": {
              "ne_1": "61",
              "ne_2": "61",
              "ne_3": "63",
              "ne_4": "68",
              "ne_5": "62",
              "ne_6": "72",
              "ne_7": "62",
              "ne_8": "63",
              "ne_9": "68"
            }
          },
          "page18": {
            "general_management": {
              "gm_1": "72",
              "gm_2": "72",
              "gm_3": "72",
              "gm_4": "72",
              "gm_5": "64",
              "gm_6": "71",
              "gm_7": "72"
            },
            "product_marketing": {
              "pm_1": "62",
              "pm_2": "63",
              "pm_3": "72"
            },
            "sales_services": {
              "ss_1": "81",
              "ss_2": "74"
            },
            "hr": {
              "hr_1": "74",
              "hr_2": "79",
              "hr_3": "73"
            },
            "event_management": {
              "em_1": "72",
              "em_2": "71",
              "em_3": "70",
              "em_4": "78",
              "em_5": "79",
              "em_6": "73",
              "em_7": "79",
              "em_8": "80"
            },
            "economics": {
              "ec_1": "72",
              "ec_2": "71",
              "ec_3": "63",
              "ec_4": "62"
            },
            "actual_science": {
              "as_1": "69",
              "as_2": "71"
            },
            "ca": {
              "ca_1": "72",
              "ca_2": "71"
            },
            "cs": {
              "cs_1": "65",
              "cs_2": "72",
              "cs_3": "72",
              "cs_4": "72",
              "cs_5": "69"
            },
            "finance": {
              "fi_1": "72",
              "fi_2": "63",
              "fi_3": "71",
              "fi_4": "72",
              "fi_5": "64",
              "fi_6": "70"
            },
            "bank": {
              "bo_1": "72",
              "bo_2": "73",
              "bo_3": "65",
              "bo_4": "65",
              "bo_5": "73",
              "bo_6": "72"
            },
            "cma": {
              "cma_1": "71",
              "cma_2": "65",
              "cma_3": "72"
            },
            "statistician": {
              "st_1": "70"
            }
          },
          "page19": {
            "education": {
              "ed_1": "82",
              "ed_2": "80",
              "ed_3": "79",
              "ed_4": "80",
              "ed_5": "82",
              "ed_6": "81"
            },
            "music": {
              "mu_1": "72",
              "mu_2": "74",
              "mu_3": "72",
              "mu_4": "62",
              "mu_5": "73",
              "mu_6": "79",
              "mu_7": "71",
              "mu_8": "64",
              "mu_9": "80",
              "mu_10": "78",
              "mu_11": "72",
              "mu_12": "64"
            },
            "sports_adventure": {
              "sp_1": "69",
              "sp_2": "70",
              "sp_3": "68",
              "sp_4": "61",
              "sp_5": "68",
              "sp_6": "62",
              "sp_7": "79",
              "sp_8": "72"
            },
            "performing_arts": {
              "pa_1": "69",
              "pa_2": "72",
              "pa_3": "65",
              "pa_4": "71"
            },
            "artist": {
              "at_1": "68",
              "at_2": "68",
              "at_3": "62",
              "at_4": "62"
            },
            "language_literature": {
              "ll_1": "81",
              "ll_2": "81",
              "ll_3": "63",
              "ll_4": "79",
              "ll_5": "79",
              "ll_6": "69"
            },
            "journalism_mass_communication": {
              "jm_1": "79",
              "jm_2": "64",
              "jm_3": "79",
              "jm_4": "62",
              "jm_5": "79",
              "jm_6": "79"
            },
            "law_affairs": {
              "lp_1": "64",
              "lp_2": "64",
              "lp_3": "79",
              "lp_4": "79",
              "lp_5": "72"
            },
            "language_literatures": {
              "ph_1": "80",
              "ph_2": "80",
              "ph_3": "79",
              "ph_4": "79"
            },
            "service_industry": {
              "si_1": "71",
              "si_2": "74"
            }
          },
          "page14": {
            "bio_sci": "63",
            "math_sci": "63",
            "com": "70",
            "arts": "72"
          },
          "page20": {
            "bo": "25.97",
            "emp": "24.03",
            "self_emp": "28.29",
            "inv": "21.71"
          },
          "page21": {
            "admin": "21.56%",
            "planning": "17.43%",
            "execution": "19.27% + X",
            "correspondence": "24.77% + 2X",
            "exploration": "16.97% + X",
            "iq": "33.33",
            "eq": "33.33",
            "aq": "27.66",
            "cq": "32.98"
          },
          "page22": {
            "outer": "1",
            "outer_sub": "3"
          },
          "page23": {
            "title": "EAGLE(MODERATE)",
            "para_1": null,
            "para_2": null,
            "image": "assets/images/Page 23/PAGE-23-Outer-personality-1-out-of-16.jpg",
            "common_characteristic": [
              "ABC",
              "DEF"
            ],
            "challenges": [
              "ABC",
              "DEF"
            ],
            "remedies": [
              "ABC",
              "DEF"
            ]
          },
          "page25": {
            "strategist": "47.54",
            "samaritan": "50.98",
            "indulgent": "50.86",
            "jubilant": "52.46",
            "administrator": "45.94",
            "socializer": "49.38",
            "benevolent": "52.46",
            "empiric": "54.06",
            "theorist": "49.14",
            "optimist": "52.58",
            "exponent": "47.42",
            "explorer": "49.02",
            "challenger": "47.54",
            "energizer": "50.98",
            "pragmatist": "49.02",
            "improviser": "50.62",
            "winner": "empiric"
          },
          "page26_29": {
            "personality": "empiric",
            "main_title": "",
            "intro_title": "",
            "intro_para": "",
            "pros": "",
            "cons": "",
            "child_title": "",
            "child_para": "",
            "adult_title": "",
            "adult_para": "",
            "friend_title": "",
            "friend_para": "",
            "life-partner_title": "",
            "life-partner_para": "",
            "image1": "assets/images/Page 28/PAGE-28-Inner-personality-3.jpg",
            "parent_title": "",
            "parent_para": "",
            "employee_title": "",
            "employee_para": "",
            "image2": "assets/images/Page 29/PAGE-29-Inner-personality-4.jpg",
            "boss_title": "",
            "boss_para": ""
          },
          "page30": {
            "left_brain": "46.80",
            "right_brain": "53.20",
            "image": "assets/images/Page 30/PAGE-30.1.png"
          },
          "page31": {
            "introvert": "53",
            "extrovert": "47",
            "fact": "53",
            "opinion": "47",
            "objective": "43",
            "subjective": "57"
          },
          "page32": {
            "reportDetails": {
              "leftRidgeCount": "95.00",
              "rightRidgeCount": "108.00",
              "totalRidgeCount": "203.00"
            },
            "reportDtl": [
              {
                "legends": "1",
                "isArc": "NO",
                "fpp": "WDR",
                "percentage": "12.32",
                "isReverse": "NO",
                "colorCode": "#00a550",
                "hand": "RightHand,Thumb",
                "isMemoryBackUp": "NO"
              },
              {
                "legends": "2",
                "isArc": "NO",
                "fpp": "U",
                "percentage": "10.84",
                "isReverse": "NO",
                "colorCode": "#00a550",
                "hand": "RightHand,Index",
                "isMemoryBackUp": "NO"
              },
              {
                "legends": "5",
                "isArc": "YES",
                "fpp": "U",
                "percentage": "9.36",
                "isReverse": "YES",
                "colorCode": "#00a550",
                "hand": "RightHand,Middle",
                "isMemoryBackUp": "YES"
              },
              {
                "legends": "1",
                "isArc": "YES",
                "fpp": "WSL",
                "percentage": "12.32",
                "isReverse": "NO",
                "colorCode": "#00a550",
                "hand": "RightHand,Ring",
                "isMemoryBackUp": "NO"
              },
              {
                "legends": "6",
                "isArc": "NO",
                "fpp": "U",
                "percentage": "8.37",
                "isReverse": "YES",
                "colorCode": "#55c5cf",
                "hand": "RightHand,Pinky",
                "isMemoryBackUp": "YES"
              },
              {
                "legends": "2",
                "isArc": "NO",
                "fpp": "WS",
                "percentage": "10.84",
                "isReverse": "NO",
                "colorCode": "#00a550",
                "hand": "LeftHand,Thumb",
                "isMemoryBackUp": "NO"
              },
              {
                "legends": "7",
                "isArc": "NO",
                "fpp": "U",
                "percentage": "7.88",
                "isReverse": "NO",
                "colorCode": "#024da1",
                "hand": "LeftHand,Index",
                "isMemoryBackUp": "NO"
              },
              {
                "legends": "4",
                "isArc": "NO",
                "fpp": "LF",
                "percentage": "9.85",
                "isReverse": "NO",
                "colorCode": "#00a550",
                "hand": "LeftHand,Middle",
                "isMemoryBackUp": "NO"
              },
              {
                "legends": "3",
                "isArc": "YES",
                "fpp": "WSL",
                "percentage": "10.34",
                "isReverse": "NO",
                "colorCode": "#00a550",
                "hand": "LeftHand,Ring",
                "isMemoryBackUp": "NO"
              },
              {
                "legends": "7",
                "isArc": "YES",
                "fpp": "U",
                "percentage": "7.88",
                "isReverse": "NO",
                "colorCode": "#024da1",
                "hand": "LeftHand,Pinky",
                "isMemoryBackUp": "NO"
              }
            ]
          },
          "footer": {
            "evalNo": "BOG0003",
            "date": "07/10/2020"
          }
        }
      }
    }
  
  ngOnInit() {
    this.data = this.response.data;
  }

}
