import axios from 'axios';
import queryString from 'query-string';
import { NotionTemplateInterface, NotionTemplateGetQueryInterface } from 'interfaces/notion-template';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNotionTemplates = async (
  query?: NotionTemplateGetQueryInterface,
): Promise<PaginatedInterface<NotionTemplateInterface>> => {
  const response = await axios.get('/api/notion-templates', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createNotionTemplate = async (notionTemplate: NotionTemplateInterface) => {
  const response = await axios.post('/api/notion-templates', notionTemplate);
  return response.data;
};

export const updateNotionTemplateById = async (id: string, notionTemplate: NotionTemplateInterface) => {
  const response = await axios.put(`/api/notion-templates/${id}`, notionTemplate);
  return response.data;
};

export const getNotionTemplateById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/notion-templates/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNotionTemplateById = async (id: string) => {
  const response = await axios.delete(`/api/notion-templates/${id}`);
  return response.data;
};
