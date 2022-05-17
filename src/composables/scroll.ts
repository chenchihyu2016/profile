import { ref, Ref } from 'vue';

const scrollTopValue: Ref<number> = ref(0);
const isScrollDown: Ref<boolean> = ref(false);

export function useScroll() {
    let target: HTMLElement | null = null;

    function setScrollTarget(inputTarget: HTMLElement) {
        target = inputTarget;

        target.addEventListener('scroll', () => {
            isScrollDown.value = scrollTopValue.value < target!.scrollTop;
            scrollTopValue.value = parseInt(target!.scrollTop.toFixed(0));
        });
    }

    function setScrollTopValue(inputScrollTopValue: number) {
        scrollTopValue.value = inputScrollTopValue;
    }

    return { scrollTopValue, isScrollDown, setScrollTopValue, setScrollTarget };
}

export function useGetIndividualScrollTop(element: HTMLElement) {
    const { offsetTop, offsetHeight } = element;

    return offsetTop - offsetHeight / 4;
}
