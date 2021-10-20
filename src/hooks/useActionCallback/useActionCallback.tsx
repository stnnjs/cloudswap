import { Dispatch } from 'redux';
import { useCallback } from 'react';

type FunctionType<A extends Array<any> = any, R = any> = (...args: A) => R;

export function useActionCallback<F extends FunctionType>(action: F, dispatch: Dispatch) {
  const callbackAction = useCallback((...args: Parameters<F>) => dispatch(action(...args)), [dispatch, action]);
  return callbackAction;
}
