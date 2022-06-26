<template>
    <footer class="footer_container">
        <p class="description">
            {{ $t('FOOTER_MESSAGE') }}
            <a
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noreferrer noopener"
                class="link"
            >
                https://brittanychiang.com/
            </a>
        </p>
        <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
        >
            <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
            </defs>
            <g class="parallax">
                <use
                    xlink:href="#gentle-wave"
                    x="48"
                    y="0"
                    fill="rgba(255,255,255,0.7"
                />
                <use
                    xlink:href="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(255,255,255,0.5)"
                />
                <use
                    xlink:href="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(255,255,255,0.3)"
                />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
        </svg>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    }
});
</script>

<style scoped lang="scss">
.footer_container {
    width: 100%;
    background: linear-gradient(60deg, $color-yellow 0%, $color-primary 100%);
    height: 80px;
    position: relative;
    overflow: hidden;

    @media (orientation: portrait) {
        margin-bottom: 60px;
    }

    .description {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        font-size: 0.9rem;
        font-weight: 600;
        color: $color-background;
        padding: 0 16px;
        width: calc(100% - 32px);
        text-align: center;

        @media (orientation: portrait) {
            text-align: left;
        }

        .link {
            color: $color-blue;
            text-decoration: underline;
        }
    }

    .waves {
        position: relative;
        width: 100%;
        height: 15vh;
        margin-bottom: -7px; /*Fix for safari gap*/
        max-height: 150px;

        @media (orientation: portrait) {
            height: 80px;
        }
    }

    .content {
        position: relative;
        height: 15vh;
        text-align: center;
        background-color: rgba($color-white, 0.5);

        @media (orientation: portrait) {
            height: 80px;
        }
    }

    .parallax > use {
        animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }
    .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
    }
    .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
    }
    @keyframes move-forever {
        0% {
            transform: translate3d(-90px, 0, 0);
        }
        100% {
            transform: translate3d(85px, 0, 0);
        }
    }
}
</style>
