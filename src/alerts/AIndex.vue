<template>
    <div class="alert_container">
        <div
            class="alert"
            v-for="alert in alerts"
            :key="alert.id"
            :style="{
                background: backgroundConversion(alert.type),
                color: colorConversion(alert.type)
            }"
            @click="close(alert.id)"
        >
            <span class="message">{{ alert.message }}</span>
            <p class="description" v-if="alert.description">
                {{ alert.description }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, PropType } from 'vue';
import { AlertItem } from '@/models/AlertItem';

export default defineComponent({
    props: {
        alerts: {
            type: Array as PropType<Array<AlertItem>>,
            required: true
        },
        destroyAlerts: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        const { alerts } = toRefs(props);
        const destroyAlerts = props.destroyAlerts;
        const timerId = ref(0);

        function backgroundConversion(type: string) {
            switch (type) {
                case 'success':
                    return '#f0f9eb';
                case 'warning':
                    return '#fdf6ec';
                case 'error':
                    return '#fef0f0';
            }
        }

        function colorConversion(type: string) {
            switch (type) {
                case 'success':
                    return '#67c23a';
                case 'warning':
                    return '#e6a23c';
                case 'error':
                    return '#f56c6c';
            }
        }

        function close(id: number) {
            const index = alerts.value.findIndex((alert) => alert.id === id);

            alerts.value.splice(index, 1);

            if (alerts.value.length === 0) {
                destroyAlerts();
                window.clearInterval(timerId.value);
            }
        }

        timerId.value = window.setInterval(() => {
            close(alerts.value[0].id);
        }, 2500);

        return { alerts, backgroundConversion, colorConversion, close };
    }
});
</script>

<style scoped lang="scss">
.alert_container {
    @include flex(center, flex-start);
    align-content: flex-start;
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 30%;
    padding: 1%;
    z-index: 2;

    @media (orientation: portrait) {
        width: 80%;
    }

    .alert {
        @include flex(flex-start, center);

        margin-bottom: 12px;
        padding: 12px;
        width: 100%;
        flex-direction: column;
        opacity: 0.95;
        border: 1px solid $color-gray;

        &:last-child {
            margin-bottom: 0;
        }

        .message {
            line-height: 1.15rem;
        }

        .description {
            font-size: 0.8rem;
            margin-top: 12px;
        }
    }
}
</style>
