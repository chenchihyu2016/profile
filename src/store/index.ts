import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import state, { RootState } from './types';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import data from './modules/data';

export const key: InjectionKey<Store<RootState>> = Symbol();
export const store = createStore<RootState>({
    state,
    getters,
    mutations,
    actions,
    modules: {
        data
    }
});
export function useStore() {
    return baseUseStore(key);
}
