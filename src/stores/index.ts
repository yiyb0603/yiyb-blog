import { AnyAction, CombinedState, combineReducers, Reducer } from 'redux';
import { EnhancedStore, ThunkDispatch, Action } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { themeReducer, ThemeState } from './theme';

export type StoreState = {
  theme: ThemeState;
}

type RootReducer = Reducer<CombinedState<StoreState>, AnyAction>;

export const rootReducer: RootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return combineReducers({
        theme: themeReducer,
      })(state, action);
  }
}

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export type Store = EnhancedStore<CombinedState<StoreState>, AnyAction>;