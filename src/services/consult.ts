import { request } from './../utils/network/index';
import type { KnowledgePage, DoctorPage, KnowledgeParams, PageParams } from '../types/consult.d.ts';

export const getKnowledgePage = (params: KnowledgeParams) =>
    request<KnowledgePage>('/patient/home/knowledge', 'GET', params)

export const getDoctorPage = (params: PageParams) =>
  request<DoctorPage>('/home/page/doc', 'GET', params)
