import { stringify } from 'qs';
import getMeasure from '@/utils/measure';

/* eslint-disable import/prefer-default-export */
export async function queryMeasure(params) {
  return getMeasure(`/api/measures?${stringify(params)}`);
}
