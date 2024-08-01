import { productModel } from '../models/product';

interface productsState {
  products: {
    items: productModel[];
    pagination: {
      current: number,
    },
    filter: {
      current: string | null,
    },
    overallCount: number,
    filteredCount: number,
  }
}

export const initialState = {
  products: {
    items: [
      {
        vendorCode: '123123asd',
        productName: 'someqwe',
        manufacturer: 'some',
        price: 3333333,
        available: false,
      },
    ],
    pagination: {
      current: 0,
    },
    filter: {
      current: null,
    },
    overallCount: 0,
    filteredCount: 0,
  },
};

export type State = productsState;
