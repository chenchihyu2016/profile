export function useIntersection(
    container: Element,
    elementClassName: string,
    toggleClassName: string
) {
    const elementContainer = container as Element;
    const options: IntersectionObserverInit = { threshold: 0.8 };
    const observer = new IntersectionObserver(callback, options);
    const elements: NodeListOf<Element> =
        elementContainer.querySelectorAll(elementClassName);

    function callback(
        entries: Array<IntersectionObserverEntry>,
        observer: IntersectionObserver
    ) {
        entries.forEach((entry: IntersectionObserverEntry) => {
            const target = entry.target as HTMLElement;

            if (entry.isIntersecting) {
                target.classList.add(toggleClassName);

                observer.unobserve(target);
            }
        });
    }

    elements.forEach((element) => observer.observe(element));
}
