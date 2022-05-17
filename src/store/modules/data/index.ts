import { Module } from 'vuex';
import { RootState } from '../../types';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { DataState } from './types';

const data: Module<DataState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default data;
