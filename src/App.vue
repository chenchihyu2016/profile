<template>
    <transition name="fade" mode="out-in">
        <div class="component" :key="layout">
            <component :is="layout">
                <router-view v-slot="{ Component }">
                    <transition name="component" mode="out-in">
                        <component :is="Component" :key="routeName" />
                    </transition>
                </router-view>
            </component>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, provide } from 'vue';
import VIndex from './layouts/VIndex.vue';
import { useRoute } from 'vue-router';
import { useStore } from './store';
import { useEventListener } from '@/composables/eventListener';

export default defineComponent({
    components: { VIndex },
    setup() {
        const layout = ref('VIndex');
        const route = useRoute();
        const routeName = computed(() => route.name as string);
        const { dispatch } = useStore();

        function isMobileConfiguartion() {
            const isMobile = document.body.clientWidth < 1024;

            dispatch('setIsMobile', isMobile);
        }

        onMounted(() => {
            isMobileConfiguartion();
        });

        useEventListener(window, 'resize', isMobileConfiguartion);

        return { layout, routeName };
    }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import '@/assets/scss/vendors/normalize';
@import '@/assets/scss/global/transition';

.component {
    @include flex(center, center);
    font-family: 'Lato', 'Noto Sans TC', '微軟正黑體', Helvetica, Arial,
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
}
</style>
