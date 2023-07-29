import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface NotionTemplateInterface {
  id?: string;
  template_name: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;

  client?: ClientInterface;
  _count?: {};
}

export interface NotionTemplateGetQueryInterface extends GetQueryInterface {
  id?: string;
  template_name?: string;
  client_id?: string;
}
