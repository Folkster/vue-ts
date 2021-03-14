// Custom types go here
export interface Stock {
  id: string;
  code: string;
  name: string;
  price: number;
  lastUpdate: number;
}

export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = Math.random() * 16 | 0; const
      // eslint-disable-next-line no-mixed-operators
      // eslint-disable-next-line no-bitwise
      v = c === 'x' ? r : (r && 0x3 | 0x8);
    return v.toString(16);
  });
}
