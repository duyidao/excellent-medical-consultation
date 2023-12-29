import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
    'userStore',
    () => {
        const user = ref<User>()
        // 设置用户，登录后使用
        const setUser = (u: User) => {
            user.value = u
        }
        // 清空用户，退出后使用
        const delUser = () => {
            user.value = {} as User
        }
        return { user, setUser, delUser }
    },
    {
        persist: true
    }
)