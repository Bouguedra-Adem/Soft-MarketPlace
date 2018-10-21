export class UserCons {
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
    public Position: string,
    public isValid: boolean,
    public Signup_date: string,
    public Notifications: number,
    public Social_links: SocialLinks
  ) {}
}

export class SocialLinks {
  constructor(public Github: string, public LinkedIn: string) {}
}
