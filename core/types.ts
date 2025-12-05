export type Listener = () => void;

export type SetState<T> = T | ((prev: T) => T)

export interface Store<T> {
    getState(): T;

    setState(next: SetState<T>): void;

    subscribe(listener: Listener): () => void;
}
