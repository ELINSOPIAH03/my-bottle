declare module 'splitting' {
    interface SplittingResult {
        el: HTMLElement;
        words?: HTMLElement[];
        chars?: HTMLElement[];
    }

    interface SplittingOptions {
        target?: HTMLElement | string;
        by?: string;
    }

    function Splitting(options?: SplittingOptions): SplittingResult[];

    export default Splitting;
}
