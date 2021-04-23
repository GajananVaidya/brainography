import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brainography';

  data = {
    status: "success",
    dataMap : {
      footer: {
        evalNo: '902111',
        date: '9/4/2021'
      },
      page1: {
        name: 'Gajanan Vaidya',
        evaluationNo : '902111'
      },
      page2: {
        name: 'Kamlesh Sheth'
      },
      page3: {
        personal: {
          name : 'Sameer Sheth',
          guardian : 'Kamlesh Sheth',
          gender : 'female',
          dob: '02/02/1992',
          contact: '9898989898',
          email: 'abc@gmail.com',
          address: 'Room No. 403, B wing, Saraswati Apartments, Airoli, Navi Mumbai 400701.',
          eval: '90211'
        },
        company: {
          name : 'Sameer Sheth',
          contact: '9898989898',
          email: 'abc@gmail.com',
          address: 'Room No. 403, B wing, Saraswati Apartments, Airoli, Navi Mumbai 400701.',
          dealer: '90211'
        }
      },
      page5: {
        fm_rank: '1',
        fm_perc: '90',
        ling_rank: '2',
        ling_perc: '99',
        text_rank: '3',
        text_perc: '80',
        gm_rank: '4',
        gm_perc: '70',
        sound_rank: '5',
        sound_perc: '40',
        pic_rank: '6',
        pic_perc: '88',
        kin_rank: '7',
        kin_perc: '78',
        aud_rank: '8',
        aud_perc: '86',
        vis_rank: '9',
        vis_perc: '55'
      }
    }
    
  };
  
}
