declare const miniswitch: <T extends string | number | symbol, K>(what: T, cases: Record<T, () => K>, def?: (() => K) | undefined) => K;
export default miniswitch;
