import { StoreOptions } from 'vuex';

// Store state type import
import {
  DataState,
  RootState,
} from './types/index';

// Importing mutation types
import {
  SET_BOOKINGS,
} from './mutation-types';

// Importing action types
import {
  RESOURCES_CHANGED
} from './action-types';


const rootState: RootState = {
  myStocks: ["AAPL"],
  dataState: {
    hasData: false,
    stocks: new Map(),
    fetches: [],
  },
};

const storeConfig: StoreOptions<RootState> = {
  state: rootState,
  mutations: {
    // [SET_SELECTED_DATE](state, date): void {
    //   state.selectedDate = date;
    // },
    // [SET_MY_SCHEDULE_ENABLED](state, orgUnitId): void {
    //   if (config.meetioUnitIds.includes(orgUnitId)) {
    //     state.isMyScheduleEnabled = true;
    //   } else {
    //     state.isMyScheduleEnabled = false;
    //   }
    // },
  },
  actions: {
    // [DATE_CHANGED](context, selectedDate): void {
    //   this.commit(SET_LOADING, LoadingState.Loading);
    //   this.commit(SET_SELECTED_DATE, selectedDate);
    // },
  },
  getters: {
    stockList: (state): String[] => state.myStocks,
    stockData: (state): DataState => state.dataState,
  },
};

export default storeConfig;
