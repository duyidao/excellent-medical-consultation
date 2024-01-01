import { request } from './../utils/network/index';
import type { User } from '@/types/user.d.ts';

export const login = (payload: {mobile: string, password: string}) => {
    return request<User>('/login/password', 'post', payload)
}