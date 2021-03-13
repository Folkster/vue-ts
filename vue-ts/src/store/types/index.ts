import {
  Stock,
} from '@/types/index';

export interface DataState {
  hasData: boolean;
  stocks: Map<String,Stock>;
  fetches: FetchState[];
}

export interface RootState {
  myStocks: String[];
  dataState: DataState;
}

export interface FetchState {
  id: number,
  stockCode: string
  startTime: Date;
  endTime: Date;
  successFull: boolean;
}
