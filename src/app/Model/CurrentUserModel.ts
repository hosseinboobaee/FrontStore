export class CurrentUserModel{
    constructor(
        public userId: number,
        public firstName:string,
        public lastName: string,
        public email: string,
        public address: string
    ){

    }
}