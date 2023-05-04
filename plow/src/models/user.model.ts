export interface IUser{
    Key: number;
    Login:string;
    Name: string;
    Password: string;
    Patron: string;
    Surname: string;
    User_Role_Key: number
    Role?: IUserRole;
}

export interface IUserRole {
    DateFierd: string;
    DateRecrut: string;
    Duty_Key: number;
    Exp_Key: number;
    Key: number;
    Phys_Key: number;    
}