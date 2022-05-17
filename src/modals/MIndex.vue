<template>
    <div class="modal_backdrop">
        <component
            v-for="modal in modals"
            :is="modal.modalName"
            :store="storeProp"
            :data="modal.data"
            :key="modal.id"
            class="component"
            @destroy="destroy(modal.id)"
            @callback="modal.callback"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MUserDetail from './MUserDetail.vue';

interface Modal {
    id: number;
    data: { [key: string]: any };
    callback: Function;
    modalName: string;
}

export default defineComponent({
    props: {
        modals: {
            type: Object
        },
        store: {
            type: Object
        },
        destroyModals: {
            type: Function
        }
    },
    components: { MUserDetail },
    setup(props) {
        const modalsProp = props.modals as Array<Modal>;
        const storeProp = props.store as object;
        const destroyModals = props.destroyModals as Function;
        const modals = ref<Array<Modal>>(modalsProp);

        function destroy(id: number) {
            const destroyIndex = modals.value.findIndex(
                (modal: Modal) => modal.id === id
            );

            modals.value.splice(destroyIndex, 1);

            if (modals.value.length === 0) {
                destroyModals();
            }
        }

        return { modals, storeProp, destroy };
    }
});
</script>

<style scoped lang="scss">
.modal_backdrop {
    @include flex(center, center);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($color-black, 0.4);
    z-index: 1;

    .component {
        @include flex(center, center);
        @include border_radius();
        max-width: 80%;
        position: absolute;
        padding: 8px;

        @media (orientation: portrait) {
            max-width: 95%;
        }
    }
}
</style>
