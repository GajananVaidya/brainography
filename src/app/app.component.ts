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
          "music_rank": "1.0",
          "music_perc": "X",
          "linguistic_rank": "2.0",
          "linguistic_perc": "X",
          "fms_rank": "3.0",
          "fms_perc": "X",
          "gms_rank": "4.0",
          "gms_perc": "14.29",
          "2d_rank": "5.0",
          "2d_perc": "X",
          "minute_rank": "6.0",
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
        "page10": {
          "section1": {
            "rank": "1",
            "title": "YOU HAVE A GOOD UNDERSTANDING OF SOUND",
            "image": null,
            "para1": "Your strength is your ability to be aural (auditory-musical-rhythmic). You can perceive sound in terms of its frequency, amplitude and timbre. You have an inbuilt understanding of melody, rhythm, pitch, and harmony. You are highly emotional and you can feel the pain of others.",
            "para2": "You like to be surrounded by music and can appreciate different types of music and sounds. You may often be found humming or drumming out beats with your hands. You have good auditory memory and may respond well to jingles, rap and rhymes to help memorize. You may be Music Festival Background avid collector of music and musical instruments.",
            "para3": "You may sing or play music professionally solo or in a group, band, choir, or orchestra. You can do tutoring in music, voice, or instruments. You may prefer working in music retail stores, composing music, song writing, music ministry in churches or community choirs, music reviewer, piano tuner, recording engineer etc. In medical and allied professions you can choose audiologist, speech language pathologist or technician, music therapist, and recreation therapist. You like working in video, soci",
            "interests": "DJ'ing;Playing Musical Instruments;Singing/Rapping/Yodelling;Voice over/dubbing;Music/Melody Writing/Composing;Live/Karaoke performance;Sound mixing/Recording;Song Sequencing;Acting;Social Service;Nursing;Volunteering"
          },
          "section2": {
            "rank": "2",
            "title": "YOU HAVE A VERY GOOD UNDERSTANDING OF SPOKEN LANGUAGES",
            "image": null,
            "para1": "Your strength is your communication and correspondence. You express yourself well. You are also a good listener with a well-developed memory for the material you have read and recall of spoken information. You like quizzes that require the ability to quickly and accurately respond to spoken or written instructions.",
            "para2": "You may have fascination for learning new languages, memorizing tongue twisters, reading and exploring ways to creatively use language. Although linguistic ability is not a synonym for intelligence or grammar, you can still easily outsmart by using language power. You enjoy crosswords, scrabble and different word games.",
            "para3": "You may like jobs which includes language arts, public speaking, drama, and debate. You will be attracted towards different styles of writing such as, content writing, blog writing, script writing, translation, song writing, dialogue writing, language based jokes and stories etc. You may be drawn to choose careers such as language teacher, professional writer, news correspondent, poet, attorney, publicist, journalism, advertising agent, psychologist, speech pathologist, anchor, motivational spea",
            "interests": "Story Telling;Poem Writing Anchoring;Dubbing /Voicing;Singing/Rapping/Yodelling;Giving Speech;Language Learning;Phone Counselling Therapy;Live Commentary;Blog/Article/Script Writing;Public Speaking;Diary Writing;Dialogue/Lyrics Writing;News Reading;Jingle making;Translating"
          },
          "section3": {
            "rank": "3",
            "title": "YOU ARE PRECISE WITH YOUR FINGERS & FACIAL EXPRESSIONS",
            "image": null,
            "para1": "Your strength is in your precise control over your fine and micro muscular movements. You like to explore all the finger based activities. You can easily perform delicate and feather touch tasks as well as tasks which require strong gripping.",
            "para2": "Along with profound dexterity, you also have an excellent hand-eye co- ordination and a very good control over your facial expressions. You learn from experience or from your own mistakes. You always have an urge to keep your fingers busy by scribbling or tapping a rhythm on desk by fingers while concentrating in a lecture.",
            "para3": "With strong Fine Motors, there are lot of possibilities. You can excel in various fields which are directly involved with facial expressions or your fingers. You can become a sports person. You may try carom, dart, snooker or all the racket based sports or become a bowler (spinner/ swinger). You can explore any musical instrument which requires fingers to play or be an artist of any form. You can also build your career in all the general precision based tasks such as repairing, surgery. non- fir",
            "interests": "Drawing/Colouring;Calligraphy;Stitching/Sewing/Knitting;Rangoli Making;Ikebana;Mehandi Designing;Tattoo Making;Hair Styling;Finger based sports;Magic Tricks;Body Massage;Classical Dancing;Rock Climbing;Acting;Facial Make Up;Yoga;Non Fire based Cooking;Playing Musical Instruments;Juggling"
          }
        },
        "page12": {
          "heart": 56.86,
          "Mind": 43.14,
          "indoor": 54.76,
          "outdoor": 45.24,
          "individual": 53.19,
          "team": 46.81,
          "physically": 54.76,
          "mentally": 57.89
        },
        "page13": {
          "hobby_1": 48.41,
          "hobby_2": 52.96,
          "hobby_3": 47.63,
          "hobby_4": 47.68,
          "hobby_5": 61.83,
          "hobby_6": 43.05,
          "hobby_7": 38.32,
          "hobby_8": 39.99,
          "hobby_9": 43,
          "hobby_10": 41.82,
          "hobby_11": 49.31,
          "hobby_12": 45.36,
          "hobby_13": 45.46,
          "hobby_14": 49.5,
          "hobby_15": 45.36,
          "hobby_16": 48.22,
          "hobby_17": 48.22,
          "hobby_18": 56.9,
          "hobby_19": 48.22,
          "hobby_20": 51.77,
          "hobby_21": 61.83,
          "hobby_22": 61.83,
          "hobby_23": 61.53,
          "hobby_24": 40.29,
          "hobby_25": 65.22,
          "hobby_26": 44.09,
          "hobby_27": 58.32,
          "hobby_28": 50.68,
          "hobby_29": 52.65,
          "hobby_30": 53.39,
          "hobby_31": 47.88,
          "hobby_32": 44.33,
          "hobby_33": 41.92,
          "hobby_34": 41.92,
          "hobby_35": 42.07,
          "hobby_36": 41.62,
          "hobby_37": 38.51,
          "hobby_38": 38.46,
          "hobby_39": 44.53,
          "hobby_40": 38.56,
          "hobby_41": 38.37,
          "hobby_42": 45.41
        },
        "page16": {
          "human_biology": {
            "hb_1": 63.65,
            "hb_2": 68.47,
            "hb_3": 63.35,
            "hb_4": 62.95,
            "hb_5": 61.97,
            "hb_6": 69.36,
            "hb_7": 61.48,
            "hb_8": 62.86,
            "hb_9": 63.84,
            "hb_10": 71.97,
            "hb_11": 63.35
          },
          "specialisation": {
            "sp_1": 61.48,
            "sp_2": 64.14,
            "sp_3": 63.94,
            "sp_4": 71.09,
            "sp_5": 64.14,
            "sp_6": 61.87,
            "sp_7": 61.47,
            "sp_8": 62.46,
            "sp_9": 62.46,
            "sp_10": 62.96,
            "sp_11": 61.57,
            "sp_12": 61.47,
            "sp_13": 61.48,
            "sp_14": 62.66,
            "sp_15": 69.95,
            "sp_16": 68.47,
            "sp_17": 63.94,
            "sp_18": 62.07,
            "sp_19": 62.07,
            "sp_20": 62.46,
            "sp_21": 69.21,
            "sp_22": 63.05,
            "sp_23": 61.48,
            "sp_24": 61.67,
            "sp_25": 64.44,
            "sp_26": 62.46,
            "sp_27": 61.48,
            "sp_28": 68.87,
            "sp_29": 68.71,
            "sp_30": 68.47,
            "sp_31": 62.36,
            "sp_32": 61.28,
            "sp_33": 64.63,
            "sp_34": 69.46,
            "sp_35": 80.2,
            "sp_36": 62.36,
            "sp_37": 62.17,
            "sp_38": 62.07,
            "sp_39": 61.48,
            "sp_40": 62.66,
            "sp_41": 61.87,
            "sp_42": 69.21,
            "sp_43": 62.07,
            "sp_44": 68.47
          },
          "plant_biology": {
            "pb_1": 61.48,
            "pb_2": 62.07,
            "pb_3": 61.57,
            "pb_4": 61.48,
            "pb_5": 60.49,
            "pb_6": 62.46,
            "pb_7": 62.46,
            "pb_8": 62.96
          },
          "animal_biology": {
            "ab_1": 63.35,
            "ab_2": 61.37,
            "ab_3": 61.57,
            "ab_4": 61.48,
            "ab_5": 61.28
          }
        },
        "page17": {
          "chemical_engineering": {
            "ch_1": 61.38,
            "ch_2": 62.07,
            "ch_3": 61.38,
            "ch_4": 69.36,
            "ch_5": 61.57
          },
          "civil_engineering": {
            "cv_1": 61.57,
            "cv_2": 61.57,
            "cv_3": 61.48,
            "cv_4": 61.57,
            "cv_5": 61.48,
            "cv_6": 62.07,
            "cv_7": 61.48
          },
          "mechanical_engineering": {
            "me_1": 68.81,
            "me_2": 61.48,
            "me_3": 69.21,
            "me_4": 62.07,
            "me_5": 61.48,
            "me_6": 61.57
          },
          "electrical_electronics_engineering": {
            "ee_1": 69.36,
            "ee_2": 68.62,
            "ee_3": 68.62,
            "ee_4": 61.48
          },
          "interdisciplinary": {
            "id_1": 61.38,
            "id_2": 61.57,
            "id_3": 62.36,
            "id_4": 62.07,
            "id_5": 61.57,
            "id_6": 68.62,
            "id_7": 69.01,
            "id_8": 61.97,
            "id_9": 61.57,
            "id_10": 61.77,
            "id_11": 61.48,
            "id_12": 61.77,
            "id_13": 61.48,
            "id_14": 61.48,
            "id_15": 69.36,
            "id_16": 61.67
          },
          "building_services_engineering": {
            "bs_1": 61.48,
            "bs_2": 68.72,
            "bs_3": 61.87,
            "bs_4": 61.57,
            "bs_5": 61.57
          },
          "non_engineering": {
            "ne_1": 61.38,
            "ne_2": 61.37,
            "ne_3": 62.86,
            "ne_4": 68.37,
            "ne_5": 61.97,
            "ne_6": 72.32,
            "ne_7": 61.57,
            "ne_8": 63.05,
            "ne_9": 68.32
          }
        },
        "page18": {
          "general_management": {
            "gm_1": 72.37,
            "gm_2": 72.37,
            "gm_3": 71.58,
            "gm_4": 72.47,
            "gm_5": 63.65,
            "gm_6": 70.99,
            "gm_7": 71.73
          },
          "product_marketing": {
            "pm_1": 61.97,
            "pm_2": 63.15,
            "pm_3": 71.83
          },
          "sales_services": {
            "ss_1": 80.6,
            "ss_2": 74.29
          },
          "hr": {
            "hr_1": 73.55,
            "hr_2": 79.31,
            "hr_3": 73.01
          },
          "event_management": {
            "em_1": 72.07,
            "em_2": 70.94,
            "em_3": 70,
            "em_4": 77.73,
            "em_5": 79.02,
            "em_6": 72.96,
            "em_7": 79.02,
            "em_8": 79.91
          },
          "economics": {
            "ec_1": 72.32,
            "ec_2": 71.33,
            "ec_3": 62.96,
            "ec_4": 62.36
          },
          "actual_science": {
            "as_1": 69.36,
            "as_2": 71.28
          },
          "ca": {
            "ca_1": 71.73,
            "ca_2": 71.04
          },
          "cs": {
            "cs_1": 64.73,
            "cs_2": 72.02,
            "cs_3": 72.07,
            "cs_4": 72.17,
            "cs_5": 68.62
          },
          "finance": {
            "fi_1": 72.02,
            "fi_2": 63.35,
            "fi_3": 71.28,
            "fi_4": 72.17,
            "fi_5": 63.55,
            "fi_6": 69.85
          },
          "bank": {
            "bo_1": 72.32,
            "bo_2": 73.21,
            "bo_3": 64.73,
            "bo_4": 64.63,
            "bo_5": 72.81,
            "bo_6": 72.47
          },
          "cma": {
            "cma_1": 71.28,
            "cma_2": 64.73,
            "cma_3": 72.17
          },
          "statistician": {
            "st_1": 70.45,
            "st_2": 70.45,
            "st_3": 70.45
          }
        },
        "page19": {
          "education": {
            "ed_1": 81.88,
            "ed_2": 80,
            "ed_3": 79.41,
            "ed_4": 80.2,
            "ed_5": 81.68,
            "ed_6": 80.59
          },
          "music": {
            "mu_1": 71.62,
            "mu_2": 73.99,
            "mu_3": 72.12,
            "mu_4": 62.36,
            "mu_5": 72.96,
            "mu_6": 79.02,
            "mu_7": 71.08,
            "mu_8": 64.14,
            "mu_9": 80.2,
            "mu_10": 77.54,
            "mu_11": 72.07,
            "mu_12": 63.84
          },
          "sports_adventure": {
            "sp_1": 68.91,
            "sp_2": 69.85,
            "sp_3": 67.92,
            "sp_4": 61.18,
            "sp_5": 68.27,
            "sp_6": 62.17,
            "sp_7": 78.92,
            "sp_8": 71.88
          },
          "performing_arts": {
            "pa_1": 69.06,
            "pa_2": 72.12,
            "pa_3": 64.93,
            "pa_4": 71.34,
            "pa_5": 71.34,
          },
          "artist": {
            "at_1": 68.12,
            "at_2": 68.22,
            "at_3": 61.57,
            "at_4": 61.57
          },
          "language_literature": {
            "ll_1": 80.69,
            "ll_2": 81.09,
            "ll_3": 62.85,
            "ll_4": 79.41,
            "ll_5": 79.41,
            "ll_6": 69.41
          },
          "journalism_mass_communication": {
            "jm_1": 78.62,
            "jm_2": 63.55,
            "jm_3": 79.31,
            "jm_4": 62.46,
            "jm_5": 79.31,
            "jm_6": 78.82
          },
          "law_affairs": {
            "lp_1": 64.34,
            "lp_2": 64.34,
            "lp_3": 79.12,
            "lp_4": 78.62,
            "lp_5": 72.07
          },
          "language_literatures": {
            "ph_1": 80.4,
            "ph_2": 80.2,
            "ph_3": 79.21,
            "ph_4": 79.31
          },
          "service_industry": {
            "si_1": 70.93,
            "si_2": 73.6
          }
        },
        "page14": {
          "bio_sci": 63.96,
          "math_sci": 63.6,
          "com": 70.91,
          "arts": 72.77
        },
        "page20": {
          "bo": 25.97,
          "emp": 24.03,
          "self_emp": 28.29,
          "inv": 21.71
        },
        "page21": {
          "admin": "21.56%",
          "planning": "17.43%",
          "execution": "19.27% + X",
          "correspondence": "24.77% + 2X",
          "exploration": "16.97% + X",
          "iq": "99.99",
          "eq": "33.33",
          "aq": "27.66",
          "cq": "32.98"
        },
        "page22": {
          "outer": 1,
          "outer_sub": 2
        },
        "page23": {
          "title": "EAGLE(MODERATE)",
          "para_1": "Owl (Extreme) conjures the vision of a wise, meticulous and a logical person. Curious by nature and motivated by knowledge & logic, they are perceived as methodical, mathematically minded, prudent & perfectionist. They are good at administration and possess a tendency to evaluate every minute detail critically before they execute their task. They are clinical, analytical, conservative, reserved & cautious.",
          "para_2": "On the downside, due to their perfectionist attitude they often become inflexible, taking forever to plan rather than execute. They need a structured environment with clearly defined processes to proceed. Owl (Extreme) cannot tolerate people who criticize or compare them with others. Their excessive critical evaluation creates more than two aims at the same time creating confusion for self- decisions.",
          "image": null,
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
          "strategist": 47.54,
          "samaritan": 50.98,
          "indulgent": 50.86,
          "jubilant": 52.46,
          "administrator": 45.94,
          "socializer": 49.38,
          "benevolent": 52.46,
          "empiric": 54.06,
          "theorist": 49.14,
          "optimist": 52.58,
          "exponent": 47.42,
          "explorer": 49.02,
          "challenger": 47.54,
          "energizer": 50.98,
          "pragmatist": 49.02,
          "improviser": 50.62,
          "winner": "empiric"
        },
        "page26_29": {
          "personality": "empiric",
          "main_title": "PRAGMATIST (REGULATORS FAMILY)",
          "intro_title": "PRAGMATIST INTRODUCTION",
          "intro_para": "As the title depicts PRAGMATISTS are the most practical, responsible, and dedicated personalities. Falling under the REGULATOR family they are very loyal towards their duties and take pride in fulfilling the responsibility they have chosen. PRAGMATISTS are fact-driven individuals who hate making assumptions. They are methodical to the core and prefer to analyze the facts and statistics before committing themselves to any assignment. Once they undertake a task, they work with timeless dedication, often scarifying their personal time and resources to fulfill the obligation. Unfortunately for PRAGMATISTS, their wholehearted dedication sometimes becomes more of a liability than an asset. They may be vulnerable to manipulation because of this quality. People who know their nature, may sometimes cunningly or diplomatically shift their responsibilities or workload onto them knowing that they will invariably take up the slack. Nevertheless, on the brighter side PRAGMATISTS are also genuinely appreciated and complimented by their friends and colleagues for the stabilizing role they play. For PRAGMATISTS those are the priceless moments they strive for.",
          "pros": [
            "Honest, loyal, dutiful & responsible. Extremely dedicated & determined regarding their duties towards self & others.",
            "Highly precise, systematic, stable & practical. Repositories of structured & orderly methods.",
            "Task-oriented. Able to accomplish objectives by applying logical & rational thinking.",
            "Significantly observant. Initiates with utmost clarity with nothing taken for granted. ",
            "Family and community-oriented. Values freedom, regulations & conservations. "
          ],
          "cons": [
            "Too traditional, often to the extent of being orthodox (reluctant to bend the rules).",
            "Insensitive to consider emotions, naturally less receptive to the feeling of others. ",
            "At times gives importance only to the facts based on their own perspectives. Becomes stubborn and judgmental. ",
            "Very reserved. Difficult in working with teams if their methods are questioned. Their mantra 'My way or the highway'. ",
            "Requires stability and security to be optimal. Intolerant to laziness & indecisiveness. "
          ],
          "child_title": "PRAGMATIST CHILD",
          "child_para": "PRAGMATISTS are honest & sincere right from their childhood. They stay quiet & focused in classrooms, not because they are serious by nature, but they have a vast aptitude for intelligence and they idealistically believe to follow the guidelines. They play hard in playtime and adroitly unplug themselves when concentrating on their studies. Pragmatists are a bit reserved in a sense, but they can also contribute significantly to a team if they have complete clarity of their roles beforehand. They are very good at numbers and technical subjects. They are highly confident & observant kids. PRAGMATIST kids never trade their self-respect for acquisitive gains. As a result, they are often perceived to be stubborn and insensitive by their friends and classmates. For the way they are, PRAGMATIST kids are never disregarded for their loyalty and dependability. They never fail to get themselves counted when reliability matters the most. They tend to be more mature for their age.",
          "adult_title": "PRAGMATIST ADULT",
          "adult_para": "PRAGMATISTS grow up to become highly disciplined, precise & realistic individuals.They can be stereotyped as a typical \"MR DEPENDABLE\" or labeled with well-suited \"A MAN OF HIS WORDS\", as they possess a deep sense of personal integrity. They are task obedient who rely upon the standard operating manual. PRAGMATISTS believe in following the protocols and always adhere to guidelines. Although they are patient & determined when it comes to achieving their goals, but not before they are factually accreted with detailed information, presented well in advance for them to undertake any such targets.PRAGMATISTS have a no-nonsense attitude and they don't like to work on pre-suppositions. The most admirable strength they possess is their perseverance. They simply do not give up. They may lose their cool if their chosen methods are counted with illogical accusations. Also, PRAGMATISTS cannot stand laziness and dishonesty. To avoid all these circumstances they prefer to either work alone or under an authority to command. PRAGMATISTS often lack diplomacy and have mediocre interpersonal skills. Although they may not be in tune with the feelings of other people, for PRAGMATISTS, their life centers on bringing order & structure to the environment in which they breathe. They excel in time management, punctuality & consistently meeting their deadlines.",
          "friend_title": "PRAGMATIST FRIEND",
          "friend_para": "When it comes to their professional & personal life, PRAGMATISTS prefer to stay private. Their highly disciplined lifestyle has very little room for socializing. Attending parties & events are often ventured as formalities so that they maintain their respect as contributing members of the society.Reserved by nature, PRAGMATISTS end up with a very limited number of friends, which can be counted on fingers. They utilize their time with friends to relax and discuss current affairs, jobs, kids & other general topics.Even though PRAGMATISTS are not very impulsive or impromptu in conversations, they still enjoy the company of fun-loving & lively friends. Their friends on the other hand value them being honest & trustworthy. PRAGMATISTS generally don't like arguments, debates, or conflicts, but they fully support their friends and stand by them in any such confrontations, except for emotional issues. PRAGMATISTS are unable to handle emotional baggage. It is the first thing they check & ensure before selecting a person as a friend. For any other situations,\"MR DEPENDABLE\" is always available 24x7.",
          "lifepartner_title": "PRAGMATIST LIFE-PARTNER",
          "lifepartner_para": "PRAGMATISTS are paragons of family institutions. They are truly dedicated partners who believe in mutually balanced relationships. They value tradition, security, stability & peaceful living. PRAGMATISTS like to keep things simple and straightforward right from the dating period till they finally decide to take the vows. They prefer a more traditional approach in their dating phase leaving the adventures, surprises & fantasies for their partners, as PRAGMATISTS refrain to take risks from unpredictable situations. Once they enter into a committed relationship they devote themselves to fulfill the promises and make every effort to create a bonding that is mutually satisfying and long-lasting. Although their physical relations are nothing out of ordinary, they never hesitate to try something fancy if that helps to satisfy their partners. The only aspect where PRAGMATISTS require counsel is to understand the emotional needs of their partners. Since they are less receptive to feelings, they rely upon their judgments to analyze the perspectives of their partners. However, PRAGMATIST's sense of responsibility and the ability to view things from a rational perspective becomes instrumental to sort out the differences, leading to mutual satisfaction in their personal relationships. It tends to be easier if they are lucky to get a like-minded or understandble partner", 
          "image1": "assets/images/Page 28/PAGE-28-Inner-personality-3.jpg",
          "parent_title": "PRAGMATIST PARENT",
          "parent_para": "PRAGMATISTS are strict parents. Although they do everything right morally as a parent, their expectations from their children may sometimes be overburdening on them. As a responsible parent, PRAGMATISTS try to provide unrivalled environments, taking care of the food, clothing, education & even the interests of their children, but simultaneously they are also watchful to ensure that their kids progress in the right manner with optimal standards. They believe that along with academics kids should also develop their sense of responsibility, rational thinking & moral values. From the parameters of virtuous duties, PRAGMATISTS succeed in upholding their loyalty & devotion towards parenting, but may completely miss out on the emotional well-being of their children. They often neglect to exhibit physical display of love and affection when needed the most. Being less receptive to emotional needs of children, they rely on their partners to sort it out for them. If they are not lucky to have such sensitive partners it may result in confining distances or a mental barrier in their relations with their children. However, as time passes by, PRAGMATISTS manage to analyze the missing threads, discovering their flexibility and combining it with their natural instincts of dedication to bridge the gap",
          "employee_title": "PRAGMATIST EMPLOYEE",
          "employee_para": "PRAGMATISTS long for a stable and secured job. They dislike shuffling unless they are absolutely sure about the benefits. They are loyal & hardworking individuals who perform exceptionally well if given responsibilities. PRAGMATISTS have a tendency to first check the details of the task with instructions clearly outlined. They are at ease when the directive & mandates are clearly defined along with the deadlines. PRAGMATISTS can work in various fields, but they feel comfortable working in an organization where structure & hierarchy are well established. They hate working in a haphazard & order-less environment, also they are intolerant to indecisiveness. PRAGMATISTS are most productive when working by themselves, but they also appreciate the value of working in a team as well, as long as their subordinates render reasonable contribution. They have a very clear command of time & priorities. With all their preconditions, PRAGMATISTS still can be counted among the employees, known for their invaluable & unparalleled contribution. Their core competency lies in planning, organizing & mapping out schedules to follow the agenda",
          "image2": "assets/images/Page 29/PAGE-29-Inner-personality-4.jpg",
          "boss_title": "PRAGMATIST BOSS",
          "boss_para": "PRAGMATIST personalities have all the administrative elements integrated within them by default. They hustle all their life to reach this milestone they righteously deserve. To work under a PRAGMATISTS boss can either be a triumph or a nightmare, which differs from person to person. They have strong opinions about the ways, they want things to be done. They love authority & power and are often intolerant towards their employee if they fail to meet their responsibilities. They strictly prefer their subordinates to follow the guidelines, expect them to accomplish their targets maintaining high standards, all within the deadline. PRAGMATISTS never hesitate to take tough decisions. Although it may help them to achieve their objectives but they are often perceived to be ruthless, which may face criticism. Also due to lack of sensitivity they may sound harsh when they enforce their perspectives. Still and all, working in an organization headed by PRAGMATISTS can be a boon to like-minded individuals who are ready to slog for a better future. Nothing can go wrong with a boss like PRAGMATIST as they can accomplish almost anything they put into their minds. They are pioneers in sense of planning with a strong eye for details. The organizations they create sets a benchmark for others to follow."
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
    console.log(this.data);
  }

}
