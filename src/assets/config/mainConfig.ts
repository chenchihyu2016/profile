import { DirectiveBinding } from 'vue';
import zh from '@/assets/language/zh-TW.json';
import en from '@/assets/language/en-US.json';

export const i18nConfig = {
    globalInjection: true,
    legacy: false,
    locale: localStorage.getItem('locale') ?? 'en-US',
    fallbackLocale: 'en-US',
    messages: {
        'zh-TW': zh,
        'en-US': en
    }
};

export function srcDirective(el: HTMLImageElement, binding: DirectiveBinding) {
    el.style.opacity = '0';

    if (binding.value) {
        const img = new Image();

        img.src = binding.value;
        img.onload = () => {
            el.src = binding.value;
            el.style.opacity = '1';
        };
    }
}
