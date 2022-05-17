import { createApp, ref, Ref, App } from 'vue';
import { store } from '@/store';
import MIndex from './MIndex.vue';
import { createI18n } from 'vue-i18n';
import zh from '@/assets/language/zh-TW.json';
import en from '@/assets/language/en-US.json';

interface DataModel {
    [key: string]: any;
}

class Modal {
    modals: Ref<Array<Object>>;
    app: App<Element>;

    constructor() {
        this.modals = ref<Array<object>>([]);
        this.app = null as any;
    }

    userDetail(data: DataModel, callback?: Function) {
        const modalName = 'MUserDetail';

        this.create(data, modalName, callback);
    }

    create(data: DataModel, modalName: string, callback?: Function) {
        const id = new Date().getTime();
        const modalItem = { id, data, callback, modalName };
        const i18n = createI18n({
            legacy: false,
            locale: localStorage.getItem('locale') ?? 'en-US',
            fallbackLocale: 'en-US',
            messages: {
                'zh-TW': zh,
                'en-US': en
            }
        });

        this.modals.value.push(modalItem);

        if (this.modals.value.length === 1) {
            const modals = this.modals;
            const mounteEl = document.createElement('div');
            const destroyModals = this.destroyModals.bind(this);

            this.app = createApp(MIndex, { modals, store, destroyModals });
            this.app.use(i18n);

            mounteEl.id = 'modalElement';
            document.body.appendChild(mounteEl);
            this.app.mount(mounteEl);
        }
    }

    destroyModals() {
        const modalElement = document.body.querySelector(
            '#modalElement'
        ) as HTMLDivElement;

        this.app.unmount();
        document.body.removeChild(modalElement);
    }
}

export default new Modal();
