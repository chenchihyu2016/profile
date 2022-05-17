import { GetterTree } from 'vuex';
import { RootState } from '../../types';
import { DataState } from './types';

const getters: GetterTree<DataState, RootState> = {
    getUsers: (state) => state.users
};

export default getters;
