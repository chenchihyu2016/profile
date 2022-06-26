import { ref, Ref } from 'vue';

const scrollTopValue: Ref<number> = ref(0);

export function useScroll() {
    let target: HTMLElement | null = null;

    function setScrollTarget(inputTarget: HTMLElement) {
        target = inputTarget;

        target.addEventListener('scroll', () => {
            scrollTopValue.value = parseInt(target!.scrollTop.toFixed(0));
        });
    }

    function setScrollTopValue(inputScrollTopValue: number) {
        scrollTopValue.value = inputScrollTopValue;
    }

    return { scrollTopValue, setScrollTopValue, setScrollTarget };
}

export function useGetIndividualScrollTop(element: HTMLElement) {
    const { offsetTop, offsetHeight } = element;

    return offsetTop - offsetHeight / 4;
}
