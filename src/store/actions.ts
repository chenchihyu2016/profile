import { ActionTree } from 'vuex';
import { RootState } from './types';

const actions: ActionTree<RootState, RootState> = {
    setIsSidebarShow({ commit }, isSidebarShow) {
        commit('SET_IS_SIDEBAR_SHOW', isSidebarShow);
    },
    setIsMobile({ commit }, isMobile) {
        commit('SET_IS_MOBILE', isMobile);
    },
    setIsNavShow({ commit }, isNavShow) {
        commit('SET_IS_NAV_SHOW', isNavShow);
    },
    setScrollTopList({ commit }, scrollTopElement) {
        commit('SET_SCROLLTOP_LIST', scrollTopElement);
    }
};

export default actions;
