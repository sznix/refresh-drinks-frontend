import { createSelector } from 'reselect';

const ItemsSelector = state => state.item;

export const getItems = createSelector([ItemsSelector], (state) => state.list);