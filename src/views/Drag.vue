<template>
    <div class="container">
        <div
            class="element"
            v-for="item in data"
            :key="item.id"
            @drop="onDrop($event, item)"
            @dragenter="onDragEnter($event, item)"
            @dragleave="onDragLeave($event, item)"
            @dragover.prevent
        >
            <div
                class="text"
                draggable="true"
                @dragstart="dragStart($event, item)"
            >
                {{ item.text }}
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    setup() {
        const data = reactive([]);
        let draggingId = 0;

        for (let index = 0; index < 20; index++) {
            data.push({
                id: index,
                text: `這是第${index}筆資料`
            });
        }

        function dragStart(event, item) {
            draggingId = item.id;

            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('itemId', item.id);
        }

        function onDrop(event, onDropItem) {
            const dragId = parseInt(event.dataTransfer.getData('itemId'));
            const dropId = onDropItem.id;
            const dragItem = data.find((item) => item.id === dragId);
            const dropItem = data.find((item) => item.id === dropId);
            const dropItemTemp = { ...dropItem };

            shallowCopy(dragItem, dropItem);
            shallowCopy(dropItemTemp, dragItem);

            event.target.classList.remove('hoverEnter');
            draggingId = null;
        }

        function shallowCopy(source, target) {
            const keys = Object.keys(source);

            keys.forEach((key) => (target[key] = source[key]));
        }

        function onDragEnter(event, item) {
            if (draggingId !== item.id)
                event.target.classList.add('hoverEnter');
        }

        function onDragLeave(event) {
            if (event.target.classList.contains('hoverEnter'))
                event.target.classList.remove('hoverEnter');
        }

        return { data, dragStart, onDrop, onDragEnter, onDragLeave };
    }
});
</script>

<style scoped lang="scss">
.container {
    @include flex(flex-start, flex-start);
    align-content: center;
    border: 1px solid $color-black;
    overflow: auto;

    .element {
        flex: 1 1 20%;
        border: 1px solid $color-black;
        color: $color-white;
        padding: 10px;

        .text {
            border: 2px solid $color-white;
            background: $color-primary;
            padding: 10px;
            cursor: pointer;
            transition: 0.25s all ease;
        }

        .hoverEnter {
            color: $color-primary;
            border: 2px solid $color-primary;
            background: rgba($color-gray, 0.3);
        }
    }
}
</style>
