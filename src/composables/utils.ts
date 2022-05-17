let debounceTimeout = -1;
let throttleInterval = -1;
let throttleTimeout = -1;

export function useDebounce(callback: Function, delay = 250) {
    window.clearTimeout(debounceTimeout);
    debounceTimeout = window.setTimeout(callback, delay);
}

export function useThrottle(callback: Function, delay = 250) {
    if (throttleInterval === -1) {
        throttleInterval = window.setInterval(callback, delay);
    }

    window.clearTimeout(throttleTimeout);
    throttleTimeout = window.setTimeout(clearThrottleIntervalAndTimeout, 1000);
}

function clearThrottleIntervalAndTimeout() {
    window.clearInterval(throttleInterval);
    window.clearTimeout(throttleTimeout);

    throttleInterval = -1;
    throttleTimeout = -1;
}
