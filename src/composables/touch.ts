const SWIPE_THRESHOLD = 50;
const SWIPE_LEFT = 1;
const SWIPE_RIGHT = 2;
const SWIPE_UP = 3;
const SWIPE_DOWN = 4;

export function useTouch() {
    let startEvent: TouchEvent | null = null;
    let endEvent: TouchEvent | null = null;

    function getSwipeDirection() {
        const start = startEvent!.changedTouches[0];
        const end = endEvent!.changedTouches[0];
        const horizontalDifference = start.screenX - end?.screenX ?? 0;
        const verticalDifference = start.screenY - end?.screenY ?? 0;
        let swipeDirection = null;

        if (!start || !end) return null;

        if (Math.abs(horizontalDifference) > Math.abs(verticalDifference)) {
            if (horizontalDifference >= SWIPE_THRESHOLD)
                swipeDirection = SWIPE_LEFT;
            else if (horizontalDifference <= -SWIPE_THRESHOLD)
                swipeDirection = SWIPE_RIGHT;
        } else {
            if (verticalDifference >= SWIPE_THRESHOLD)
                swipeDirection = SWIPE_UP;
            else if (verticalDifference <= -SWIPE_THRESHOLD)
                swipeDirection = SWIPE_DOWN;
        }

        return swipeDirection;
    }

    function isSwipeLeft() {
        return getSwipeDirection() === SWIPE_LEFT;
    }

    function isSwipeRight() {
        return getSwipeDirection() === SWIPE_RIGHT;
    }

    function isSwipeUp() {
        return getSwipeDirection() === SWIPE_UP;
    }

    function isSwipeDown() {
        return getSwipeDirection() === SWIPE_DOWN;
    }

    function setTouchstartEvent(inputStartEvent: TouchEvent) {
        startEvent = inputStartEvent;
    }

    function setTouchendEvent(inputEndEvent: TouchEvent | null) {
        endEvent = inputEndEvent;
    }

    return {
        isSwipeLeft,
        isSwipeRight,
        isSwipeUp,
        isSwipeDown,
        setTouchstartEvent,
        setTouchendEvent
    };
}
