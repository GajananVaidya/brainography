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
          "name": "AMIT BHATIA",
          "evaluationNo": "BOG0006"
        },
        "page2": {
          "name": "AMIT BHATIA"
        },
        "page3": {
          "personal": {
            "name": "AMIT BHATIA",
            "guardian": "",
            "gender": "Male",
            "dob": "02/06/1982",
            "contact": "98233",
            "email": "amitjbhatia@gmail.com",
            "address": "vasai",
            "eval": "BOG0006"
          },
          "company": {
            "name": "AMIT BHATIA",
            "contact": "98233",
            "email": "amitjbhatia@gmail.com",
            "address": "vasai",
            "dealer": "DD00004"
          }
        },
        "page5": {
          "linguistic_rank": "1.0",
          "linguistic_perc": "20.87",
          "music_rank": "2.0",
          "music_perc": "19.13",
          "text_rank": "3.0",
          "text_perc": "18.26",
          "minute_rank": "4.0",
          "minute_perc": "16.52",
          "fms_rank": "5.0",
          "fms_perc": "13.91",
          "gms_rank": "6.0",
          "gms_perc": "11.30",
          "auditory_rank": "1",
          "auditory_perc": "40.00",
          "visual_rank": "2",
          "visual_perc": "34.78",
          "kinesthetic_rank": "3",
          "kinesthetic_perc": "25.22"
        },
        "page7": {
          "ssc_perc": "60",
          "ssc_arch": "",
          "cbse_perc": "80",
          "cbse_arch": "",
          "icse_perc": "100",
          "icse_arch": "2x",
          "ib_perc": "40",
          "ib_arch": ""
        },
        "page10": {
          "section1": {
            "rank": "1",
            "title": "YOU HAVE A VERY GOOD UNDERSTANDING OF SPOKEN LANGUAGES",
            "image": null,
            "para1": "Your strength is your communication and correspondence. You express yourself well. You are also a good listener with a well-developed memory for the material you have read and recall of spoken information. You like quizzes that require the ability to quickly and accurately respond to spoken or written instructions.",
            "para2": "You may have fascination for learning new languages, memorizing tongue twisters, reading and exploring ways to creatively use language. Although linguistic ability is not a synonym for intelligence or grammar, you can still easily outsmart by using language power. You enjoy crosswords, scrabble and different word games.",
            "para3": "You may like jobs which includes language arts, public speaking, drama, and debate. You will be attracted towards different styles of writing such as, content writing, blog writing, script writing, translation, song writing, dialogue writing, language based jokes and stories etc. You may be drawn to choose careers such as language teacher, professional writer, news correspondent, poet, attorney, publicist, journalism, advertising agent, psychologist, speech pathologist, anchor, motivational spea",
            "interests": "Story Telling;Poem Writing Anchoring;Dubbing /Voicing;Singing/Rapping/Yodelling;Giving Speech;Language Learning;Phone Counselling Therapy;Live Commentary;Blog/Article/Script Writing;Public Speaking;Diary Writing;Dialogue/Lyrics Writing;News Reading;Jingle making;Translating"
          },
          "section2": {
            "rank": "2",
            "title": "YOU HAVE A GOOD UNDERSTANDING OF SOUND",
            "image": null,
            "para1": "Your strength is your ability to be aural (auditory-musical-rhythmic). You can perceive sound in terms of its frequency, amplitude and timbre. You have an inbuilt understanding of melody, rhythm, pitch, and harmony. You are highly emotional and you can feel the pain of others.",
            "para2": "You like to be surrounded by music and can appreciate different types of music and sounds. You may often be found humming or drumming out beats with your hands. You have good auditory memory and may respond well to jingles, rap and rhymes to help memorize. You may be Music Festival Background avid collector of music and musical instruments.",
            "para3": "You may sing or play music professionally solo or in a group, band, choir, or orchestra. You can do tutoring in music, voice, or instruments. You may prefer working in music retail stores, composing music, song writing, music ministry in churches or community choirs, music reviewer, piano tuner, recording engineer etc. In medical and allied professions you can choose audiologist, speech language pathologist or technician, music therapist, and recreation therapist. You like working in video, soci",
            "interests": "DJ'ing;Playing Musical Instruments;Singing/Rapping/Yodelling;Voice over/dubbing;Music/Melody Writing/Composing;Live/Karaoke performance;Sound mixing/Recording;Song Sequencing;Acting;Social Service;Nursing;Volunteering"
          },
          "section3": {
            "rank": "3",
            "title": "YOU HAVE EXCELLENT PHOTOGRAPHIC MEMORY & AESTHETIC SENSE",
            "image": null,
            "para1": "Your strength is in thinking in pictures rather than in words. You are a whole-picture thinker who can grasp a concept all at once and see the whole before acknowledging the details. You also have a very good sense of mirror imaging (Reverse imaging).",
            "para2": "You pay meticulous attention to objects. You think in colourful, pictorial IPF and high-resolution images of individual objects. Your 2D abilities involve in understanding the outside world, and processing the information by memorizing with reasoning in the mind. You can identify landmark and navigate easily.",
            "para3": "You enjoy jigsaw puzzles, mazes, maps, and building blocks. Your excellent photographic memory results into your inclination towards the fields of drafting, architecture, photography, cartography, design fields (fashion, interior, jewellery etc.), fashion merchandising, and visual advertising. You have an eye of a born Artist. You can explore art in different mediums such as canvas, wood, stone, glass, ice etc. You can also peruse career as a makeup artist, hair stylist, wardrobe stylist, brand ",
            "interests": "Photography;Drawing/Sketching/Painting;Shooting/Archery;Sketching;Styling;Fashion Designing;Prosthetic Designing;Painting Glass/Wood/Wall';Archery;Modern Art;Abstract Painting;Sculpturing- Stone/ Ice Art;Slingshot Shooting;Make Up Art"
          }
        },
        "page12": {
          "heart": 59.46,
          "Mind": 40.54,
          "indoor": 100,
          "outdoor": 44.83,
          "individual": 50,
          "team": 50,
          "physically": 55.17,
          "mentally": 51.72
        },
        "page13": {
          "hobby_1": 56.66,
          "hobby_2": 41.19,
          "hobby_3": 46.55,
          "hobby_4": 47.26,
          "hobby_5": 66.91,
          "hobby_6": 41.36,
          "hobby_7": 47.67,
          "hobby_8": 46.96,
          "hobby_9": 47.27,
          "hobby_10": 43.510000000000005,
          "hobby_11": 56.72,
          "hobby_12": 56.18,
          "hobby_13": 55.94,
          "hobby_14": 51.18,
          "hobby_15": 56.18,
          "hobby_16": 42.25,
          "hobby_17": 46.42,
          "hobby_18": 38.26,
          "hobby_19": 42.25,
          "hobby_20": 42.85,
          "hobby_21": 66.91,
          "hobby_22": 73.16,
          "hobby_23": 66.84,
          "hobby_24": 46.61,
          "hobby_25": 74.71000000000001,
          "hobby_26": 60.47,
          "hobby_27": 47.8,
          "hobby_28": 64.82000000000001,
          "hobby_29": 57.8,
          "hobby_30": 46.910000000000004,
          "hobby_31": 64.72,
          "hobby_32": 55.89,
          "hobby_33": 51.9,
          "hobby_34": 51.9,
          "hobby_35": 51.84,
          "hobby_36": 57.49,
          "hobby_37": 56,
          "hobby_38": 65.29,
          "hobby_39": 48.51,
          "hobby_40": 65.10000000000001,
          "hobby_41": 64.69,
          "hobby_42": 56.480000000000004
        },
        "footer": {
          "evalNo": "BOG0006",
          "date": "08/11/2020"
        }
      }
    }
  }
  
  ngOnInit() {
    this.data = this.response.data;
    console.log(this.data);
  }

}
