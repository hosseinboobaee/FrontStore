export class RegisterUserModel{
    constructor(
        public Email: string,
        public FirstName:string,
        public LastName: string,
        public Password: string,
        public ConfirmPassword: string,
        public Address: string

    ){

    }
}