import { request } from './../utils/network/index';
import type { KnowledgePage, KnowledgeParams } from '../types/consult.d.ts';

export const getKnowledgePage = (params: KnowledgeParams) =>
    request<KnowledgePage>('/patient/home/knowledge', 'GET', params)
