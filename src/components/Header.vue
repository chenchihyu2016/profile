<template>
    <transition name="header" mode="out-in">
        <header v-if="isNavShow">
            <button class="close_icon" @click="toggleSidebar">
                <font-awesome-icon
                    :icon="['fas', isSidebarShow ? 'xmark' : 'bars']"
                />
            </button>
            <div class="options_container">
                <template v-for="tab in tabs">
                    <a
                        class="tab"
                        :href="`#${tab.value}`"
                        :key="tab.value"
                        v-if="!isMobile && isProfile"
                    >
                        {{ $t(tab.localeKey) }}
                    </a>
                </template>
                <font-awesome-icon
                    :icon="['fas', 'globe']"
                    class="locale"
                    @click="localeHandle"
                />
            </div>
        </header>
    </transition>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import headerTabs from '@/assets/json/headerTabs.json';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { dispatch, state } = useStore();
        const isSidebarShow = computed(() => state.isSidebarShow);
        const isMobile = computed(() => state.isMobile);
        const isNavShow = computed(() => state.isNavShow);
        const route = useRoute();
        const isProfile = computed(() => route.name === 'profile');
        const { locale } = useI18n();
        const tabs = ref(headerTabs);

        function toggleSidebar() {
            dispatch('setIsSidebarShow', !isSidebarShow.value);
        }

        function localeHandle() {
            const newLocale = locale.value === 'en-US' ? 'zh-TW' : 'en-US';

            locale.value = newLocale;
            localStorage.setItem('locale', newLocale);
        }

        return {
            isSidebarShow,
            isNavShow,
            tabs,
            isMobile,
            isProfile,
            locale,
            toggleSidebar,
            localeHandle
        };
    }
});
</script>

<style lang="scss">
header {
    @include flex(center, space-between);
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 32px);
    height: 60px;
    background: $color-background;
    padding: 0 16px;
    z-index: 1;
    border-bottom: 1px solid $color-primary;

    .close_icon {
        @include flex(center, center);

        transition: 0.3s all ease;
        width: 32px;
        height: 32px;
        color: $color-primary;
        border: 1px solid $color-primary;
        cursor: pointer;

        @media (hover: hover) {
            &:hover {
                color: $color-white;
                border: 1px solid $color-white;
            }
        }
    }

    .options_container {
        @include flex(center, center);
        height: 100%;

        .locale {
            width: 20px;
            height: 20px;
            cursor: pointer;
            border: 1px solid $color-white;
            padding: 6px;

            @media (orientation: portrait) {
                margin-right: 0;
            }

            @media (hover: hover) {
                &:hover {
                    color: $color-primary;
                    border: 1px solid $color-primary;
                }
            }
        }

        .tab {
            @include flex(center, center);
            @include underline_animation();
            height: 50%;
            color: $color-white;

            &:not(:last-child) {
                margin: 0 8px;
            }
        }
    }
}
</style>
