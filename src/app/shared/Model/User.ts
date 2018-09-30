
export class User {

  constructor(
    public First_name: string,
    public Last_name: string,
    public Birthdate: string,
    public Address: string,
    public Country: string,
    public Bio: string,
    public Organisation: string,
    public Phone_number: string,
    public Photo: string,
    public isValid: boolean,
    public Signup_date: string,
    public Notifications: number,
    public Product_types: string[],
    public Technologies: string[],
    public Social_links: SocialLinks,
    public Payment: PaymentInfo
  ) {
  }




  /*  static parse(data: any): User {
      return new User(data.First_name, data.Last_name, data.Birthdate, data.Address, data.Country, data.Bio,
        data.Organisation, data.Phone_number, data.Photo, data.isValid, data.Signup_date, data.Notifications);
    }*/
}

export class SocialLinks {
  constructor(
    public Github: string,
    public LinkedIn: string
  ) {
  }
}

export class PaymentInfo {
  constructor(
    public Account_number: string,
    public Payment_type: string,
    public Total_income: string
  ) {
  }
}
