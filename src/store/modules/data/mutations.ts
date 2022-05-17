import { MutationTree } from 'vuex';
import { DataState } from './types';
import { UserModel } from '@/models/User';

const mutations: MutationTree<DataState> = {
    SET_USERS(state, users: UserModel[]) {
        state.users = users;
    },
    SET_USER_IMAGE(state, data: { imageURL: string; userId: number }) {
        const { imageURL, userId } = data;
        const target = state.users.find(
            (user: UserModel) => user.id === userId
        ) as UserModel;

        target.image = imageURL;
    }
};

export default mutations;
