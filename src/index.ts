const miniswitch = <T extends string | symbol | number, K>(what: T, cases: Record<T, () => K>, def?: () => K) => (cases[what] ?? def ?? (() => undefined))();
export default miniswitch;