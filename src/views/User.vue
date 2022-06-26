<template>
    <main class="element_container" ref="elementContainerRef">
        <template v-if="!loading">
            <input
                type="file"
                ref="imageRef"
                accept="image/*"
                @change="imageChange"
            />
            <div class="element" v-for="user in users" :key="user.id">
                <figure class="image_container">
                    <transition name="fade" mode="out-in">
                        <img
                            v-if="user.image"
                            :src="user.image"
                            :key="user.image"
                            class="image"
                            @click="clickImageRef(user.id)"
                        />
                        <figcaption
                            class="image"
                            @click="clickImageRef(user.id)"
                            v-else
                        >
                            {{ $t('CLICK_TO_UPDATE_PHOTO') }}
                        </figcaption>
                    </transition>
                </figure>
                <div class="data_container">
                    <div
                        class="data_item"
                        v-for="(item, index) in itemList"
                        :key="index"
                    >
                        <div class="data_name">
                            {{ $t(item.toUpperCase()) }}
                        </div>
                        <div class="data_value">{{ user[item] }}</div>
                    </div>
                    <div class="data_item" v-if="!isMobile">
                        <div class="data_name">{{ $t('COMPANY') }}</div>
                        <div class="data_value">
                            {{ user.company.name }}
                        </div>
                    </div>
                    <div class="data_item" v-if="!isMobile">
                        <div class="data_name">{{ $t('ADDRESS') }}</div>
                        <div class="data_value">
                            {{ user.address.city }}, {{ user.address.street }}
                        </div>
                    </div>
                    <div class="data_item clickable" @click="userDetail(user)">
                        {{ $t('SEE_MORE') }}
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="element" v-for="number in 5" :key="number">
                <div class="image_container">
                    <div class="image_skeleton"></div>
                </div>
                <div class="data_container">
                    <div class="data_item" v-for="index in 9" :key="index">
                        <div class="data_name_skeleton"></div>
                        <div class="data_value"></div>
                    </div>
                </div>
            </div>
        </template>
    </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted } from 'vue';
import { UserModel } from '@/models/User';
import Modal from '@/modals/index';
import uesImage from '@/composables/image';
import { useStore } from '@/store';
import { useScroll } from '@/composables/scroll';

export default defineComponent({
    setup() {
        const loading = ref(true);
        const elementContainerRef = ref();
        const isMobile = computed(() => state.isMobile);
        const users = computed(() => getters['data/getUsers']);
        const itemList = computed(() =>
            isMobile.value
                ? ['id', 'name']
                : ['id', 'name', 'username', 'email', 'phone', 'website']
        );
        const { imageRef, clickImageRef, imageChange } = uesImage();
        const { state, getters, dispatch } = useStore();
        const { setScrollTarget } = useScroll();

        onMounted(async () => {
            await dispatch('data/getUsers');

            setScrollTarget(elementContainerRef.value);

            setTimeout(() => {
                loading.value = false;
            }, 750);
        });

        function userDetail(user: UserModel) {
            Modal.userDetail(user);
        }

        return {
            users,
            loading,
            itemList,
            imageRef,
            isMobile,
            elementContainerRef,
            clickImageRef,
            imageChange,
            userDetail
        };
    }
});
</script>

<style scoped lang="scss">
.element_container {
    width: calc(100% - 20px);
    height: calc(100% - 70px);
    overflow-x: hidden;
    margin: 10px;
    padding-top: 60px;

    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    input {
        display: none;
    }
    .element {
        @include flex(flex-start, center);
        border: 1px solid $color-white;
        height: 200px;
        margin-bottom: 10px;
        transition: 1000ms all ease;
        padding: 10px;

        &::selection {
            background: $color-primary;
        }

        &:first-child {
            margin-top: 0;
        }

        .data_container {
            @include flex(center, space-between);
            align-content: space-between;
            height: 100%;
            flex: 4;
            position: relative;
            margin-left: 0.5rem;

            @media (orientation: portrait) {
                flex: 1;
                overflow: hidden;
            }

            .data_item {
                @include flex(center, center);
                flex-basis: calc(33% - 16px);
                height: calc(32.5% - 16px);

                @media (orientation: portrait) {
                    flex-basis: 100%;
                    height: 25%;
                }

                .data_name,
                .data_name_skeleton {
                    @include flex(center, center);
                    height: 100%;
                    flex: 1;
                    border: 1px solid $color-white;

                    @media (orientation: portrait) {
                        width: 50%;
                    }
                }

                .data_name_skeleton {
                    position: relative;
                    overflow: hidden;

                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba($color-white, 0.2);
                        animation: shimmer 2800ms infinite;
                    }
                }

                .data_value {
                    @include flex(center, center);
                    background-color: rgba($color-white, 0.2);
                    flex: 3;
                    height: 100%;
                }

                .data_name,
                .data_value {
                    padding: 0 4px;

                    @media (orientation: portrait) {
                        max-width: 50%;
                        flex: 1;
                        word-wrap: break-word;
                        word-break: break-word;
                    }
                }
            }
        }

        .image_container {
            @include flex(center, center);
            height: 100%;
            width: 100%;
            flex: 1;
            border: 1px solid $color-gray;
            overflow: hidden;
            max-width: 20%;

            @media (orientation: portrait) {
                max-width: 50%;
            }

            .image,
            .image_skeleton {
                cursor: pointer;
            }

            .image {
                @include flex(center, center);
                max-width: 100%;
                max-height: 100%;
                color: $placeholder-text;

                &:hover {
                    color: $color-primary;
                }
            }

            .image_skeleton {
                background: $color-gray;
                position: relative;
                width: 100%;
                height: 100%;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba($color-white, 0.2);
                    animation: shimmer 2800ms infinite;
                }
            }
        }
    }

    .opacity_full {
        opacity: 1;
    }

    @keyframes shimmer {
        from {
            left: -100%;
        }
        to {
            left: 200%;
        }
    }
}
</style>
