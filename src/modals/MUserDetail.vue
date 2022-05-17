<template>
    <div class="wrapper">
        <input
            type="file"
            ref="imageRef"
            accept="image/*"
            @change="imageChange"
        />
        <div class="image_container">
            <transition name="fade" mode="out-in">
                <img
                    v-if="data.image"
                    :src="data.image"
                    :key="data.id"
                    class="image"
                    @click="clickImageRef(data.id)"
                />
                <div v-else class="image" @click.self="clickImageRef(data.id)">
                    {{ $t('CLICK_TO_UPDATE_PHOTO') }}
                </div>
            </transition>
        </div>
        <div class="right_data_container">
            <div
                class="data_item"
                v-for="(property, index) in rightData"
                :key="index"
            >
                <div class="data_name">{{ $t(property.toUpperCase()) }}</div>
                <div class="data_value">{{ data[property] }}</div>
            </div>
        </div>
        <div class="bottom_data_container">
            <div class="data_item">
                <div class="data_name">{{ $t('EMAIL') }}</div>
                <div class="data_value">{{ data.email }}</div>
            </div>
            <div class="data_item">
                <div class="data_name">{{ $t('WEBSITE') }}</div>
                <div class="data_value">{{ data.website }}</div>
            </div>
            <div class="data_item">
                <div class="data_name">{{ $t('ADDRESS') }}</div>
                <div class="data_value">
                    {{ data.address.city }}, {{ data.address.street }},
                    {{ data.address.suite }}, {{ data.address.zipcode }}
                </div>
            </div>
            <div class="data_item">
                <div class="data_name">{{ $t('COMPANY') }}</div>
                <div class="data_value">
                    {{ data.company.name }}
                </div>
            </div>
        </div>
        <div class="button_container">
            <button class="success" @click.self="$emit('destroy')">
                {{ $t('CLOSE') }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import useImageUpload from '@/composables/image';
import { UserModel } from '@/models/User';

export default defineComponent({
    props: {
        data: {
            type: Object as PropType<UserModel>,
            required: true
        },
        store: {
            type: Object,
            required: true
        }
    },
    setup() {
        type StringKeys = Extract<keyof UserModel, string>;
        const { imageRef, clickImageRef, imageChange } = useImageUpload();
        const rightData = [
            'id',
            'name',
            'username',
            'phone'
        ] as Array<StringKeys>;

        return {
            rightData,
            imageRef,
            clickImageRef,
            imageChange
        };
    }
});
</script>

<style scoped lang="scss">
.wrapper {
    @include flex(flex-start, flex-start);
    align-content: flex-start;
    width: 40%;
    height: 80%;
    background: rgba($color-gray, 0.2);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);

    @media (orientation: portrait) {
        width: 90%;
    }

    input {
        display: none;
    }

    .image_container {
        @include inline-flex(center, center);
        @include border_radius();
        flex-basis: 50%;
        height: 40%;
        border: 1px solid $color-text;
        box-sizing: border-box;
        color: $color-text;
        cursor: pointer;

        &:hover {
            color: $color-primary;
        }

        img {
            @include flex(center, center);
            max-width: 100%;
            max-height: 100%;
        }
    }

    .right_data_container {
        @include inline-flex(flex-start, space-between);
        flex-direction: column;
        flex-basis: 48%;
        height: 40%;
        padding-left: 2%;
    }

    .bottom_data_container {
        @include flex(flex-start, space-between);
        flex-direction: column;
        height: 46%;
        width: 100%;
        padding: 2% 0;

        & > .data_item {
            & > .data_name {
                flex: 1;
            }

            & > .data_value {
                flex: 3;
            }
        }
    }

    .button_container {
        @include flex(center, center);
        border-top: 1px solid $color-gray;
        width: 100%;
        height: 10%;
    }
}

.data_item {
    @include flex(center, center);
    height: 20%;
    width: 100%;
    color: $color-text;
    .data_name {
        flex: 2;
        color: $color-white;
        border: 1px solid $color-white;
        box-sizing: border-box;

        @media (orientation: portrait) {
            flex: 2;
        }
    }
    .data_value {
        flex: 3;
        box-sizing: border-box;
    }

    .data_name,
    .data_value {
        @include flex(center, center);
        height: 100%;
        padding: 4px;

        @media (orientation: portrait) {
            font-size: 0.5rem;
            word-wrap: break-word;
            word-break: break-word;
        }
    }
}
</style>
