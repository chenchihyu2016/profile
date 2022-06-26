<template>
    <section
        class="experience_container"
        ref="experienceContainerRef"
        id="experience"
    >
        <h2 class="header_title">{{ $t('WORK_EXPERIENCE') }}</h2>
        <div class="tabs_container">
            <button
                :class="['tab', currentTab === tab ? 'current_tab' : '']"
                v-for="(tab, index) in tabs"
                :key="index"
                @click="tabClickHandle(tab)"
            >
                {{ $t(tab) }}
            </button>
        </div>
        <transition name="fade" mode="out-in">
            <keep-alive>
                <div class="content_container" :key="currentTab">
                    <div
                        class="content"
                        v-for="(content, index) in currentContent"
                        :key="index"
                    >
                        <time
                            class="content_date"
                            v-html="dateHandle(content.date)"
                        />
                        <div class="content_info">
                            <p class="content_detail"
                                >{{ $t(content.titleLocaleKey) }}
                                <button
                                    class="highlight_company"
                                    @click="companyClick(content.companyURL)"
                                >
                                    @{{ $t(content.companyLocaleKey) }}
                                </button>
                            </p>
                            <p class="content_detail">{{
                                $t(content.descriptionLocaleKey)
                            }}</p>
                            <p class="content_detail">
                                <div
                                    v-for="(
                                        tagLocaleKey, indice
                                    ) in content.tags"
                                    :key="indice"
                                    class="content_tags"
                                    >{{ $t(tagLocaleKey) }}</div
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </keep-alive>
        </transition>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted } from 'vue';
import { useStore } from '@/store';
import contentJSON from '@/assets/json/content.json';

export default defineComponent({
    setup() {
        const experienceContainerRef = ref();
        const tabs = ['ENGINEER', 'TESTER', 'TUTOR'];
        const currentTab = ref('ENGINEER');
        const { state, dispatch } = useStore();
        const isMobile = computed(() => state.isMobile);
        const content = contentJSON;
        const currentContent = computed(
            () => content[currentTab.value as keyof typeof content]
        );

        function tabClickHandle(tabName: string) {
            currentTab.value = tabName;
        }

        function dateHandle(date: string) {
            return isMobile.value ? date.replace('~', '<br>~<br>') : date;
        }

        function companyClick(companyURL: string) {
            window.open(companyURL, 'target = _blank');
        }

        return {
            experienceContainerRef,
            tabs,
            currentTab,
            isMobile,
            currentContent,
            tabClickHandle,
            dateHandle,
            companyClick
        };
    }
});
</script>

<style scoped lang="scss">
.experience_container {
    @include flex(center, center);
    @include block_margin_bottom();
    flex-direction: column;
    width: 100%;

    .tabs_container {
        @include flex(center, flex-start);
        width: calc(100% - 32px);
        padding: 0 16px;
        border: 1px solid $color-primary;

        .tab {
            @include flex(center, center);
            @include underline_animation();
            height: 32px;
            margin: 16px 16px 16px 0;
            color: $color-white;

            @media (orientation: portrait) {
                margin: 8px 8px 8px 0;
            }
        }

        .current_tab {
            color: $color-primary;

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                background: $color-primary;
                height: 1px;
                transition: 300ms ease all;
            }
        }
    }

    .content_container {
        width: 100%;
        padding: 16px 0;
        border: 1px solid $color-primary;

        .content {
            display: flex;
            padding: 0 16px;

            &:not(:last-child) {
                margin-bottom: 16px;
            }

            .content_date {
                @include flex(flex-start, flex-start);
                flex: 1;
                line-height: 1.5rem;
            }

            .content_info {
                @include flex(flex-start, center);
                flex-direction: column;
                flex: 3;

                .content_detail {
                    @include flex(flex-start, flex-start);
                    text-align: left;
                    line-height: 1.5rem;

                    &:not(:last-child) {
                        margin-bottom: 12px;
                    }

                    .highlight_company {
                        @include underline_animation();
                        color: $color-primary;
                        margin-left: 4px;
                    }

                    .content_tags {
                        
                        margin-right: 8px;
                        background: $color-gray;
                        padding: 0px 8px;
                        color: $color-background;
                        line-height: 1.5rem;

                        @media (orientation: portrait) {
                            &:not(:last-child) {
                                margin-bottom: 8px;
                            }
                        }
                    }
                }
            }
        }
    }

    .opacity_full {
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>
