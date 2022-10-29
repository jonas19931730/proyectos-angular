export interface Usuario{
    name:string;
    email:string;
    password:string;
}
export interface UsuarioResp{
    ok?:boolean;
    uid?:string;
    name?:string;
    token?:string;
}

