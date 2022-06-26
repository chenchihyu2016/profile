declare module '.vue' {
    interface CSSProperties {
        [key: `--${string}`]: string;
    }
}
