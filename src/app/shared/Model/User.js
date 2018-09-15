export class User {

  $key: string;
  firstName: string;
  lastName: string;
  birthday: string;
  address: string;
  country: string;
  bio: string;
  organization: string;
  phone: string;
  photo: string;
  isValide: boolean;


  constructor (firstName,lastName,birthday,address,country,bio,organization,phone,photo,isValide){
    this.firstName =firstName ;
    this.lastName = lastName ;
    this.birthday = birthday ;
    this.address =  address;
    this.country = country ;
    this.bio = bio ;
    this.organization = organization ;
    this.phone = phone ;
    this.photo = photo ;
    this.isValide = isValide ;
  }
}
