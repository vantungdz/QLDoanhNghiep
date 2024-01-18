import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { getDefaultCompilerOptions } from 'typescript';
import { curryGetDefaultMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk : true,
      // serializableCheck: false,
      // immutableCheck : false
    }).concat(sagaMiddleware),
  
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
