import { ref, Ref } from 'vue';
import { store } from '@/store';

export default function useImageUpload() {
    const imageRef = ref<HTMLInputElement>() as Ref<HTMLInputElement>;
    const userId = ref<number | null>(null);

    function clickImageRef(id: number) {
        userId.value = id;
        imageRef.value.click();
    }

    function imageChange(event: Event) {
        const target = event.target as HTMLInputElement;
        const files = target.files as FileList;
        const file = files[0];
        const imageURL = URL.createObjectURL(file);

        store.dispatch('data/setUserImage', { imageURL, userId: userId.value });
        target.value = '';
    }

    return { imageRef, clickImageRef, imageChange };
}

export function useGetImageUrl(imageName: string) {
    return new URL(`../assets/images/${imageName}.png`, import.meta.url).href;
}
