import { stringify } from 'qs';
import request from '@/utils/request';

/* eslint-disable import/prefer-default-export */
export async function queryMeasure(params) {
  return request(`/api/measures?${stringify(params)}`);
}
