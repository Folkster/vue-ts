import {
  Stock,
} from '@/types/index';

export interface DataState {
  hasData: boolean;
  stockIdMap: Map<string, Stock>;
}

export interface RootState {
  stockIdList: string[];
  stockData: DataState;
}

export interface FetchState {
  id: number;
  stockCode: string;
  startTime: Date;
  endTime: Date;
  successFull: boolean;
}
