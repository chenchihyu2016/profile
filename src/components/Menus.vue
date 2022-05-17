<template>
    <div class="sub_menu" v-if="item">
        <div class="title_bar" @click.prevent="isOpen = !isOpen">
            <div
                :class="[
                    'title',
                    isRouterLink(item.title) ? 'router_link' : ''
                ]"
                @click="routeHandle(item)"
            >
                {{ $t(item.title.toUpperCase()) }}
            </div>
        </div>
        <template v-if="item.children">
            <transition-group name="fade" mode="out-in">
                <Menu
                    v-show="isOpen"
                    v-for="itemChild in item.children"
                    :key="itemChild.title"
                    :item="itemChild"
                />
            </transition-group>
        </template>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, PropType } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/store';

interface MenuItem {
    title: string;
    children: Array<MenuItem>;
}

export default defineComponent({
    name: 'Menu',
    props: {
        item: {
            type: Object as PropType<MenuItem>,
            required: true
        }
    },
    setup() {
        const isOpen = ref(false);
        const router = useRouter();
        const { dispatch } = useStore();
        const route = useRoute();

        function routeHandle(item: MenuItem) {
            if (item.children.length === 0) {
                router.push({ name: item.title });

                dispatch('setIsSidebarShow', false);
            }
        }

        function isRouterLink(title: string) {
            const routeName = computed(() => route.name);

            return title === routeName.value;
        }

        return { isOpen, routeHandle, isRouterLink };
    }
});
</script>

<style scoped lang="scss">
.sub_menu {
    margin: 10px 0 10px 10px;

    .title_bar {
        @include flex(center, space-between);
        @include border_radius();
        text-align: justify;
        line-height: 2rem;
        margin-bottom: 4px;
        .title {
            @include border_radius();
            width: 90%;
            padding-left: 8px;
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: rgba($color-primary, 0.6);
                    color: $color-white;
                }
            }
        }
        .router_link {
            border: 1px solid $color-primary;
            background: unset;
            color: $color-primary;
        }
    }
}
</style>
