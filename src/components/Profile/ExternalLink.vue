<template>
    <div class="external_links_container" ref="externalLinkRef">
        <h2 class="header_title">{{ $t('EXTERNAL_LINK') }}</h2>
        <div
            class="external_link"
            v-for="link in links"
            :key="link.id"
            @click="openHandle(link.href)"
        >
            <h2 class="name">{{ $t(link.nameLocaleKey) }}</h2>
            <span class="description">{{ $t(link.descriptionLocaleKey) }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import externalLinks from '@/assets/json/externalLinks.json';
import { useGetIndividualScrollTop } from '@/composables/scroll';
import { useStore } from '@/store';

export default defineComponent({
    setup() {
        const externalLinkRef = ref();
        const links = ref(externalLinks);
        const { dispatch } = useStore();

        function openHandle(url: string) {
            window.open(url, 'target = _blank');
        }

        onMounted(() => {
            const scrollTop = useGetIndividualScrollTop(externalLinkRef.value);

            dispatch('setScrollTopList', {
                key: 'externalLink',
                value: scrollTop
            });
        });

        return { externalLinkRef, links, openHandle };
    }
});
</script>

<style scoped lang="scss">
.external_links_container {
    @include block_margin_bottom();
    @include flex(flex-start, flex-start);
    width: 100%;

    .external_link {
        @include inline-flex(center, center);
        align-content: flex-start;
        color: $color-text-bright;
        border: 1px solid $color-primary;
        box-sizing: border-box;
        cursor: pointer;
        flex-basis: 49%;
        transition: 300ms all ease;
        padding: 16px;
        box-shadow: $color-primary 4px 4px 0;

        &:nth-child(2n) {
            margin-right: 1%;
        }

        &:nth-child(2n + 1) {
            margin-left: 1%;
        }

        @media (orientation: portrait) {
            flex-basis: 100%;

            &:nth-child(2n),
            &:nth-child(2n + 1) {
                margin-right: 0;
                margin-left: 0;
            }
        }

        @media (hover: hover) {
            &:hover {
                transform: translateY(-8px);

                & .name {
                    color: $color-primary;
                }
            }
        }

        &:active {
            transform: translateX(4px) translateY(4px);
            box-shadow: $color-transparent 0px 0px 0px;
        }

        &:not(:last-child) {
            margin-bottom: 20px;
        }

        .name {
            display: block;
            width: 100%;
            margin-top: 0;
        }

        .description {
            text-align: justify;
            line-height: 1.5rem;
        }
    }
}
</style>
