import { queryMeasure } from '@/services/api';

export default {
  namespace: 'measure',

  state: {
    data: {
      list: [],
      pagination: {}
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryMeasure, payload);
      yield put({
        type: 'save',
        /* eslint-disable no-nested-ternary */
        payload: Array.isArray(response.list)
          ? response.list.length === 1
            ? response.list[0]
            : response
          : []
      });
    }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload
      };
    }
  }
};
