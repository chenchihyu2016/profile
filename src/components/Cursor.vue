<template>
    <div
        v-if="!isMobile"
        class="cursor"
        :style="{ left: `${cursorX}px`, top: `${cursorY}px` }"
        :class="[pulse ? 'pulse' : '']"
        @click="clickHandle"
    />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { useEventListener } from '@/composables/eventListener';

export default defineComponent({
    setup() {
        const { state } = useStore();
        const cursorX = ref(0);
        const cursorY = ref(0);
        const pulse = ref(false);
        const isMobile = computed(() => state.isMobile);

        function moveHandle(event: MouseEvent) {
            cursorX.value = event.x - 30;
            cursorY.value = event.y - 30;
        }

        function clickHandle() {
            pulse.value = true;

            setTimeout(() => {
                pulse.value = false;
            }, 500);
        }

        useEventListener(window, 'mousemove', moveHandle);
        useEventListener(window, 'click', clickHandle);

        return { cursorX, cursorY, pulse, clickHandle, isMobile };
    }
});
</script>

<style scoped lang="scss">
.cursor {
    position: fixed;
    width: 60px;
    height: 60px;
    background: rgba($color-primary, 0.6);
    border-radius: 50%;
    z-index: 1;
    pointer-events: none;
    mix-blend-mode: color-dodge;
}

.pulse {
    animation: pulse 500ms infinite;
}

@keyframes pulse {
    0% {
        box-shadow: rgba($color-primary, 0.6) 0 0 0 0;
    }

    75% {
        box-shadow: rgba($color-primary, 0) 0 0 0 16px;
    }
}
</style>
