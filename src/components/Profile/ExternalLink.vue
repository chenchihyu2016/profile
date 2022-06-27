<template>
    <section class="external_links_container" id="externalLink">
        <h2 class="header_title">{{ $t('EXTERNAL_LINK') }}</h2>
        <article
            class="external_link"
            v-for="link in links"
            :key="link.id"
            @click="openHandle(link.href)"
        >
            <h2 class="name">{{ $t(link.nameLocaleKey) }}</h2>
            <p class="description">{{ $t(link.descriptionLocaleKey) }}</p>
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import externalLinks from '@/assets/json/externalLinks.json';

export default defineComponent({
    setup() {
        const links = ref(externalLinks);

        function openHandle(url: string) {
            window.open(url, 'target = _blank');
        }

        return { links, openHandle };
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
