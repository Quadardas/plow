import api from "@/axios";
import { useUserStore } from "../stores/user";
import Cookies from 'js-cookie';

export class Auth {
    static async login(login: string, password: string){
       const authResult = await api.post("/login", {
            login, password,
        }).then((res)=> res.data);
        const userInfo = await api.get(`/getUserInfo/${authResult?.key}`).then((res)=> res.data)  
        const store = useUserStore();
        store.setUser(userInfo)
        
        Cookies.set("key", userInfo.Key)
        Cookies.set("token",authResult.token )
    }
    static async refresh(){
        const key = Cookies.get("key")
        const token = Cookies.get('token')

        if(!key || !token){
            return;
        }
        const userInfo = await api.get(`/getUserInfo/${key}`).then((res)=> res.data)  
        const store = useUserStore();
        store.setUser(userInfo)
    }
    static logOut(){
        Cookies.remove("key")
        Cookies.remove("token")
        const store = useUserStore();
        store.logOut()
    }
}