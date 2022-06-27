<template>
    <aside
        :class="[
            'sidebar',
            isSidebarShow ? 'open' : '',
            isNavShow ? '' : 'toTop'
        ]"
        @touchstart.passive="touchstartHandle"
        @touchend="touchendHandle"
    >
        <ul>
            <Menu v-for="item in menus" :key="item.title" :item="item" />
        </ul>
    </aside>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue';
import { useStore } from '@/store';
import menuData from '@/assets/json/menus.json';
import Menu from '@/components/Menus.vue';
import { useTouch } from '@/composables/touch';

export default defineComponent({
    name: 'Sidebar',
    components: { Menu },
    setup() {
        const { state, dispatch } = useStore();
        const isSidebarShow = computed(() => state.isSidebarShow);
        const isNavShow = computed(() => state.isNavShow);
        const menus = reactive(menuData.menus);
        const { isSwipeLeft, setTouchstartEvent, setTouchendEvent } =
            useTouch();

        function touchstartHandle(event: TouchEvent) {
            setTouchstartEvent(event);
        }

        function touchendHandle(event: TouchEvent) {
            setTouchendEvent(event);

            if (isSwipeLeft()) {
                dispatch('setIsSidebarShow', false);
            }

            setTouchendEvent(null);
        }

        return {
            isSidebarShow,
            menus,
            isNavShow,
            touchstartHandle,
            touchendHandle
        };
    }
});
</script>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    left: 0;
    top: 60px;
    overflow: hidden;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    width: 256px;
    height: 110%;
    z-index: 1;
    margin-left: -256px;
    background: rgba($color-gray, 0.2);
    transition: 300ms all ease;

    @media (orientation: portrait) {
        top: 0;
    }
}
.open {
    margin-left: 0;
}
.toTop {
    top: 0;
}
</style>
