import { ActionTree } from 'vuex';
import { RootState } from '../../types';
import { DataState } from './types';
import Placeholder from '@/assets/api/Placeholder/index.js';
import { UserModel } from '@/models/User';

const actions: ActionTree<DataState, RootState> = {
    async getUsers({ commit }) {
        const response: Array<UserModel> = await Placeholder.getUsers();

        commit('SET_USERS', response);
    },
    setUserImage({ commit }, data: { imageURL: string; userId: number }) {
        commit('SET_USER_IMAGE', data);
    }
};

export default actions;
