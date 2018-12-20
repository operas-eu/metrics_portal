import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryMeasure(params) {
  return request(`/api/measures?${stringify(params)}`);
}
