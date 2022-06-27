import { ref, Ref } from 'vue';

const scrollTopValue: Ref<number> = ref(0);

export function useScroll() {
    let target: HTMLElement | null = null;

    function setScrollTarget(inputTarget: HTMLElement) {
        target = inputTarget;

        target.addEventListener(
            'scroll',
            () => {
                scrollTopValue.value = parseInt(target!.scrollTop.toFixed(0));
            },
            { passive: true }
        );
    }

    function setScrollTopValue(inputScrollTopValue: number) {
        scrollTopValue.value = inputScrollTopValue;
    }

    return { scrollTopValue, setScrollTopValue, setScrollTarget };
}
