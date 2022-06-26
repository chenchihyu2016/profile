<template>
    <!-- <div class="three_d_container">
        <ul class="ul">
            <li
                v-for="contact in contacts"
                :key="contact.id"
                class="contact"
                :style="contact.style"
            >
                <a
                    class="info"
                    :href="contact.href"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span class="icon">
                        <font-awesome-icon
                            :icon="[contact.prefix, contact.icon]"
                        />
                    </span>
                    {{ contact.text }}
                </a>
            </li>
        </ul>
    </div> -->
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import contactInfo from '@/assets/json/contact.json';

interface ContactInfo {
    id: number;
    href: string;
    prefix: string;
    icon: string;
    text: string;
    style: {
        '--color': string;
        '--index': number;
    };
}

export default defineComponent({
    setup() {
        const contacts = ref(contactInfo) as Ref<Array<ContactInfo>>;

        return { contacts };
    }
});
</script>

<style lang="scss" scoped>
$color-background: #3e3f46;
.three_d_container {
    @include flex(center, center);
    min-height: 600px;
    animation: rise 500ms linear;

    .ul {
        position: relative;
        transform: skewY(-15deg);
        .contact {
            color: $color-white;
            position: relative;
            list-style: none;
            width: 120px;
            background: $color-background;
            height: 4rem;
            transition: 200ms all linear;
            cursor: pointer;
            letter-spacing: 0.05rem;
            z-index: calc(1 * var(--index));

            &:hover {
                transform: translateX(-50px);
                background-color: var(--color);

                &::before,
                &::after {
                    background: var(--color);
                }

                .info {
                    color: $color-white;

                    .icon {
                        filter: brightness(1);
                        background: var(--color);
                    }
                }
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: -40px;
                width: 40px;
                height: 100%;
                background: #3e3f46;
                filter: brightness(0.7);
                transform-origin: right;
                transform: skewY(45deg);
            }

            &::after {
                content: '';
                position: absolute;
                top: -40px;
                left: 0;
                width: 100%;
                height: 40px;
                background: #3e3f46;
                filter: brightness(0.7);
                transform-origin: bottom;
                transform: skewX(45deg);
            }

            &:last-child::after {
                box-shadow: -120px 120px 20px rgba($color-white, 0.25);
            }
            .info {
                @include flex(center, center);
                color: #999;
                width: 100%;
                height: 100%;

                .icon {
                    @include flex(center, center);
                    position: absolute;
                    top: 0;
                    left: -40px;
                    width: 40px;
                    background: #3e3f46;
                    height: 100%;
                    filter: brightness(0.7);
                    transform-origin: right;
                    transform: skewY(45deg);
                }
            }
        }
    }
}

@keyframes rise {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
