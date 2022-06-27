<template>
    <div class="intro_container" ref="introContainerRef" id="intro">
        <div class="avatar_container">
            <div class="image_container">
                <a
                    href="https://www.linkedin.com/in/chih-yu-chen-095029191/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        v-src="useGetImageUrl('Self')"
                        class="image"
                        alt="self_image"
                    />
                </a>
            </div>
        </div>
        <p class="description_container" :data-language="locale">
            {{ $t('ABOUT_ME_DESCRIPTION') }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useGetImageUrl } from '@/composables/image';

export default defineComponent({
    setup() {
        const introContainerRef = ref();
        const { locale } = useI18n();

        return { introContainerRef, locale, useGetImageUrl };
    }
});
</script>

<style scoped lang="scss">
.intro_container {
    @include flex(center, flex-end);
    width: 100%;
    height: 100%;
    position: relative;

    @media (orientation: portrait) {
        height: 120%;
    }

    .avatar_container {
        @include flex(center, center);
        position: absolute;
        top: 25%;
        left: 0;
        z-index: 1;
        width: 200px;
        height: 200px;
        transform: translateY(-50%);

        @media (orientation: portrait) {
            width: 160px;
            height: 160px;
        }

        .image_container {
            position: relative;
            border: 4px solid $color-black;
            border-radius: 50%;
            background: $color-white;
            width: 100%;
            height: 100%;

            &::before {
                content: '';
                position: absolute;
                width: calc(100% - 16px);
                height: calc(100% - 16px);
                border: 4px solid $color-primary;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .image {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 90%;
                max-height: 90%;
                border-radius: 50%;
                transition: 300ms all linear;
            }
        }
    }

    .description_container {
        @include flex(center, flex-start);

        align-content: center;
        height: 40%;
        width: 80%;
        background: rgba($color-gray, 0.2);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        margin: auto;
        padding: 0 16px;
        text-align: justify;
        line-height: 3rem;

        &[data-language='en-US'] {
            line-height: 1.5rem;
        }

        @media (orientation: portrait) {
            width: 100%;
        }
    }
}
</style>
