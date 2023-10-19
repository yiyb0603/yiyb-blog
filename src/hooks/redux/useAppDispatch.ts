import { useDispatch } from 'react-redux';
import { ThunkAppDispatch } from '@/stores';

const useAppDispatch = (): ThunkAppDispatch => {
  return useDispatch<ThunkAppDispatch>();
};

export default useAppDispatch;
