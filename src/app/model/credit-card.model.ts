export class CreditCardModel {

  constructor(
    public name: string,
    public cardNumber: string,
    public limit: any,
    public balance: any) {
      Object.assign(this);
  }
}

