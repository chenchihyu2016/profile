<template>
    <div class="contact_container" ref="contactContainerRef">
        <h2 class="header_title">{{ $t('CONTACT_ME') }}</h2>
        <div class="contact" v-for="contact in contacts" :key="contact.id">
            <font-awesome-icon
                :icon="[
                    ['linkedin', 'github'].includes(contact.icon)
                        ? 'fab'
                        : 'fas',
                    contact.icon
                ]"
                :class="['icon', contact.icon]"
            />
            <a
                class="info"
                :href="contact.href"
                target="_blank"
                rel="noreferrer noopener"
            >
                {{ contact.href }}
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from '@/store';
import { useIntersection } from '@/composables/intersection';
import { useGetIndividualScrollTop } from '@/composables/scroll';
import contactInfo from '@/assets/json/contact.json';

export default defineComponent({
    setup() {
        const contactContainerRef = ref();
        const { dispatch } = useStore();
        const contacts = ref(contactInfo);

        onMounted(() => {
            const scrollTop = useGetIndividualScrollTop(
                contactContainerRef.value
            );

            useIntersection(contactContainerRef.value, '.contact', 'float');

            dispatch('setScrollTopList', { key: 'contact', value: scrollTop });
        });

        return { contactContainerRef, contacts };
    }
});
</script>

<style scoped lang="scss">
.contact_container {
    @include flex(center, center);
    @include block_margin_bottom();
    height: 300px;
    width: 100%;
    background: $color-background;

    @media (orientation: portrait) {
        height: 160px;
        flex-direction: column;
        flex-wrap: nowrap;
        padding: 40px 0;
    }

    .contact {
        @include flex(center, center);
        flex-direction: column;
        flex: 1;
        height: 100%;
        transition: 300ms ease opacity, 1200ms ease transform;
        max-width: 50%;
        box-sizing: border-box;
        opacity: 0.8;
        transform: scale(0.6);

        @media (orientation: portrait) {
            max-width: unset;
            width: 100%;
            flex-direction: row;
        }

        &:hover {
            cursor: pointer;
            opacity: 1;
        }

        .icon {
            width: 60px;
            height: 60px;
            flex: 2;

            @media (orientation: portrait) {
                width: 30px;
                height: 30px;
                flex: 1;
            }

            &.linkedin {
                color: $color-blue;
            }

            &.paper-plane {
                color: $color-primary;
            }
        }

        .info {
            @include flex(flex-start, flex-start);
            flex: 1;
            transition: 300ms ease all;
            padding: 20px;
            word-break: break-all;
            word-wrap: break-word;
            color: $color-white;

            &:hover {
                text-decoration: underline;
                color: $color-primary;
            }

            @media (orientation: portrait) {
                flex: 3;
            }
        }
    }

    .float {
        transform: scale(1);
    }
}
</style>
