export interface ILoginUser{
    status: string
    data:{
        token: string,
        expireTime: number,
        firstName: string,
        lastName:string,
        userId: number
        email: string,
        address: string
    }
}