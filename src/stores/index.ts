import { AnyAction, CombinedState, combineReducers, Reducer } from 'redux';
import { EnhancedStore, ThunkDispatch, Action } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { configReducer, ConfigState } from './config';
import { themeReducer, ThemeState } from './theme';
import { dialogReducer, DialogState } from './dialog';
import { userReducer, UserState } from './user';

export type StoreState = {
  theme: ThemeState;
  config: ConfigState;
  dialog: DialogState;
  user: UserState;
}

type RootReducer = Reducer<StoreState, AnyAction>;

export const rootReducer: RootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      if (state?.config.hydratedOnServer) {
        return state;
      }

      return {
        ...state,
        ...action.payload,
        config: {
          hydratedOnServer: true,
        },
      };

    default:
      return combineReducers({
        theme: themeReducer,
        config: configReducer,
        dialog: dialogReducer,
        user: userReducer,
      })(state, action);
  }
}

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export type Store = EnhancedStore<CombinedState<StoreState>, AnyAction>;