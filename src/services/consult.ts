import { request } from './../utils/network/index';
import type { KnowledgePage, DoctorPage, KnowledgeParams, PageParams, FollowType } from '../types/consult.d.ts';

export const getKnowledgePage = (params: KnowledgeParams) =>
  request<KnowledgePage>('/patient/home/knowledge', 'GET', params)

// 医生推荐列表
export const getDoctorPage = (params: PageParams) =>
  request<DoctorPage>('/home/page/doc', 'GET', params)

// 关注与取消关注
export const followOrUnfollow = (id: string, type: FollowType = 'doc') => request('/like', 'POST', { id, type })
