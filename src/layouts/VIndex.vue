<template>
    <Header />
    <Sidebar />
    <!-- <Cursor /> -->
    <div class="slot">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import Cursor from '@/components/Cursor.vue';

export default defineComponent({
    components: { Header, Sidebar, Cursor },
    setup() {
        return {};
    }
});
</script>

<style scoped lang="scss">
.slot {
    position: fixed;
    width: 100vw;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    flex: 1;

    transition: 300ms all ease;
    overflow: hidden;
}
</style>
