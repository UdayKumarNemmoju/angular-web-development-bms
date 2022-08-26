import { Component, OnInit } from '@angular/core';
import { Book } from 'src/assets/book';

@Component({
  selector: 'app-corporates',
  templateUrl: './corporates.component.html',
  styleUrls: ['./corporates.component.css']
})
export class CorporatesComponent implements OnInit {



  userDetails:Book = new Book('','','',1234567982);

para1:string = "Gifting entertainment is a fun way to push your brand's message. And the ways you can use vouchers are endless. For example, upselling celebrity-endorsed products timed with a movie release."
para2:string ="Show your clients and employees some appreciation by gifting them our products"
para3:string = "Get positive referals, keep existing customers and trigger change management"
para4:string = "Keep customers firmly in your corner by rewarding them with promotional vouchers."
para5:string = "From stand-up comedy and sporting activities to movies and plays, we've got all the entertainment worth gifting to your patrons."
para6:string = "Highly customizable, single usage, promotional codes in the form of set amount/ value or a percentage of discount on the ticket cost. An ideal suit for movie and product promotions, consumer activation and countless more!"
para7:string = "Amazing little pre-loaded cash cards which can be used to purchase tickets across all categories for 6 months. Be it employee rewards, trade channel incentive or consumer engagement, a gift voucher fits all."

  constructor() { }

  ngOnInit(): void {
  }

}
