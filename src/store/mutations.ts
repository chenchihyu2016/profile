import { MutationTree } from 'vuex';
import { RootState } from './types';

const mutations: MutationTree<RootState> = {
    SET_IS_SIDEBAR_SHOW(state, isSidebarShow) {
        state.isSidebarShow = isSidebarShow;
    },
    SET_IS_MOBILE(state, isMobile) {
        state.isMobile = isMobile;
    },
    SET_IS_NAV_SHOW(state, isNavShow) {
        state.isNavShow = isNavShow;
    },
    SET_SCROLLTOP_LIST(state, scrollTopElement) {
        state.scrollTopList.push(scrollTopElement);
    }
};

export default mutations;
