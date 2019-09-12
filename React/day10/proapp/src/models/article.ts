import { Effect } from 'dva';
import { Reducer } from 'redux';

import { queryCurrent, query as queryArticles } from '@/services/Article';

export interface CurrentArticle {
  // avatar?: string;
  // name?: string;
  // title?: string;
  // group?: string;
  // signature?: string;
  // tags?: {
  //   key: string;
  //   label: string;
  // }[];
  // Articleid?: string;
  // unreadCount?: number;
}

export interface ArticleModelState {
  currentArticle?: CurrentArticle;
}

export interface ArticleModelType {
  namespace: 'article';
  state: ArticleModelState;
  effects: {
    fetch: Effect;
    fetchCurrent: Effect;
  };
  reducers: {
    saveCurrentArticle: Reducer<ArticleModelState>;
    changeNotifyCount: Reducer<ArticleModelState>;
  };
}

const ArticleModel: ArticleModelType = {
  namespace: 'article',

  state: {
    msg: 'hello',
    articleData: [],
  },

  effects: {
    *getArticleData(_, { call, put }) {
      let res = yield call();
      yield put({
        type:'',
        payload:
      })
    },

    *fetch(_, { call, put }) {
      const response = yield call(queryArticles);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentArticle',
        payload: response,
      });
    },
  },

  reducers: {
    saveCurrentArticle(state, action) {
      return {
        ...state,
        currentArticle: action.payload || {},
      };
    },
    changeNotifyCount(
      state = {
        currentArticle: {},
      },
      action,
    ) {
      return {
        ...state,
        currentArticle: {
          ...state.currentArticle,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};

export default ArticleModel;
