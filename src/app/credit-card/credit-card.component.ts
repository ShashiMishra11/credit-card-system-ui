import { Component, OnInit, OnChanges } from '@angular/core';
import {CreditCardModel} from '../model/credit-card.model';
import {CreditCardService} from "../credit-card.service";

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit, OnChanges {

  public creditCardObj: CreditCardModel = new CreditCardModel('','','',0);

  constructor(private creditCardService: CreditCardService) { }

  creditCardList: Array<CreditCardModel> = [];
  showCreditCardTable: boolean = false;

  ngOnInit(): void {
    this.getAllCreditCardDetails();
  }

  ngOnChanges(changes: any) {
    this.getAllCreditCardDetails();
  }

  addCreditCard(formRef: any) {
    JSON.stringify("Credit card form data : " + formRef.value)
    if (formRef.valid) {
      this.creditCardService.addCreditCard(formRef.value).subscribe(response => {
        JSON.stringify("Response : {}", response)
      }, error => {
        JSON.stringify("Error occurred at the service layer :: errorMessage {}", error);
      });
    }
  }

  getAllCreditCardDetails(){
    this.creditCardService.getAllCreditCardDetails().subscribe(response => {
      this.creditCardList = response;
      this.showCreditCardTable = true;
    })
  }
}
