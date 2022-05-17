interface RootState {
    isSidebarShow: boolean;
    isMobile: boolean;
    isNavShow: boolean;
    scrollTopList: Array<{ key: string; value: number }>;
}

const state: RootState = {
    isSidebarShow: false,
    isMobile: false,
    isNavShow: true,
    scrollTopList: []
};

export default state;
export { RootState };
