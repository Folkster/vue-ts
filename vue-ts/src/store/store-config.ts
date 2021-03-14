import { StoreOptions } from 'vuex';

// type import????????
import {
  Stock,
  uuid,
} from '../types/index';

// Store state type import
import {
  DataState,
  RootState,
} from './types/index';

// Importing mutation types
import {
  SET_NEW_STOCK_DATA,
  UPDATE_STOCK_DATA,
} from './mutation-types';

// Importing action types
import {
  LOAD_STATIC_DATA,
} from './action-types';

const TEST_DATA = {
  stocks: [
    {
      id: '',
      code: 'AAPL',
      name: 'Apple',
      price: 121.5,
      lastUpdate: 0,
    },
    {
      id: '',
      code: 'GME',
      name: 'GameStop Corp.',
      price: 264.5,
      lastUpdate: 0,
    },
  ],
};

const rootState: RootState = {
  stockIdList: [],
  stockData: {
    hasData: false,
    stockIdMap: new Map<string, Stock>(),
  },
};

const storeConfig: StoreOptions<RootState> = {
  state: rootState,
  mutations: {
    [SET_NEW_STOCK_DATA](state, incomingStock): void {
      const stock: Stock = incomingStock;
      stock.id = uuid();
      state.stockIdList.push(stock.code);
      state.stockData.stockIdMap.set(stock.code, stock);
    },
    [UPDATE_STOCK_DATA](state, incomingStock): void {
      state.stockData.stockIdMap.set(incomingStock.code, incomingStock);
    },
  },
  actions: {
    [LOAD_STATIC_DATA](state, code): void {
      const incomingStock = TEST_DATA.stocks.find((val) => val.code === code);
      if (incomingStock === undefined) {
        return;
      }
      const stock = incomingStock as Stock;
      stock.lastUpdate = Date.now();
      if (stock.id === undefined
        || stock.id.trim().length <= 0
        || state.getters.stockList.indexOf(stock.code) === -1) {
        this.commit(SET_NEW_STOCK_DATA, stock);
      } else {
        this.commit(UPDATE_STOCK_DATA, stock);
      }
    },
    // [DATE_CHANGED](context, selectedDate): void {
    //   this.commit(SET_LOADING, LoadingState.Loading);
    //   this.commit(SET_SELECTED_DATE, selectedDate);
    // },
  },
  getters: {
    stockList: (state): string[] => state.stockIdList,
    stockMap: (state): Map<string, Stock> => state.stockData.stockIdMap,
    haveStock: (state): boolean => state.stockData.hasData,
    // eslint-disable-next-line max-len
    getStock: (state) => (stockId: string): Stock|undefined => state.stockData.stockIdMap.get(stockId),
  },
};

export default storeConfig;
