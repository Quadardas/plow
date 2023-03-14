import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { EUserTypes } from '@/enums/userType.enum';

export const useUserStore = defineStore('user', () => {
  const role: Ref<null | EUserTypes> = ref(EUserTypes.Worker);

  return { role }
})
