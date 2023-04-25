import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/models/user.model'

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser>({} as IUser)
  
  function setUser(userInfo:IUser){
    user.value = userInfo
  }
  function logOut(){
    user.value = {} as IUser
  }
const userName = computed(()=>`${user.value.Surname} ${user.value.Name} ${user.value.Patron}`)
const isLogin = computed(()=> user.value.Key) 
  return { user, setUser, userName, isLogin, logOut}
})


