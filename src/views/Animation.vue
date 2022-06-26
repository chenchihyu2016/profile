<template>
    <main class="animation_container">
        <Loading />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Loading from '@/components/Animation/Loading.vue';

export default defineComponent({
    components: { Loading },
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>
.animation_container {
    width: calc(100% - 20px);
    height: calc(100% - 70px);
    overflow-x: hidden;
    overflow-y: auto;
    margin: 10px;
    padding-top: 60px;

    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
}
</style>
