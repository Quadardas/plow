import api from "@/axios";
import { useUserStore } from "../stores/user";
import Cookies from 'js-cookie';
import type {Router } from "vue-router";

export class Auth {
    static async login(login: string, password: string, router: Router){
       const authResult = await api.post("/login", {
            login, password,
        }).then((res)=> res.data);
        if(!authResult){
            return;
        }
     
        const userInfo = await api.get(`/getUserInfo/${authResult?.key}`).then((res)=> res.data)  
        const store = useUserStore();
        console.log(userInfo)
        store.setUser(userInfo)
        
        Cookies.set("key", userInfo.Key)
        Cookies.set("token", authResult.token)
        router.push("/taskList");
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