<template>
    <main class="error_page_container">
        {{ $t('PAGE_NOT_FOUND') }}
    </main>
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
.error_page_container {
    @include flex(center, center);
    height: 100%;
    text-align: justify;
    padding: 0 20%;
    color: $color-primary;
    font-size: 3rem;

    @media (orientation: portrait) {
        font-size: 2rem;
        padding: 0 5%;
    }
}
</style>
