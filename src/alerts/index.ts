import { ref, Ref, App, createApp } from 'vue';
import AIndex from './AIndex.vue';
import { AlertItem } from '@/models/AlertItem';

class Alerts {
    alerts: Ref<Array<object>>;
    app: App<Element>;

    constructor() {
        this.alerts = ref<Array<AlertItem>>([]);
        this.app = null as any;
    }

    success(message: string, description?: string) {
        this.create('success', message, description);
    }

    error(message: string, description?: string) {
        this.create('error', message, description);
    }

    warning(message: string, description?: string) {
        this.create('warning', message, description);
    }

    private create(type: string, message: string, description?: string) {
        const id = new Date().getTime();
        const alertItem: AlertItem = { id, message, description, type };

        this.alerts.value.push(alertItem);

        if (this.alerts.value.length === 1) {
            const mounteEl = document.createElement('div');
            const destroyAlerts = this.destroyAlerts.bind(this);

            this.app = createApp(AIndex, {
                alerts: this.alerts.value,
                destroyAlerts
            });
            mounteEl.id = 'alertElement';
            document.body.appendChild(mounteEl);
            this.app.mount(mounteEl);
        }
    }

    private destroyAlerts() {
        const alertElement = document.body.querySelector(
            '#alertElement'
        ) as Element;

        this.app.unmount();
        document.body.removeChild(alertElement);
    }
}

export default new Alerts();
