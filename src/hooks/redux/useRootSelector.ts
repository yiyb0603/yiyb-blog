import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '@/stores';

type Selector<T> = (state: RootState) => T;

const useRootSelector = <T>(selector: Selector<T>): T => {
  return useSelector(selector, shallowEqual);
}

export default useRootSelector;