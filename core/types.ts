export type Listener = () => void

export type StateUpdater<T> = T | ((prev: T) => T)

export interface Store<T> {
    getState(): T
    setState(updater: StateUpdater<T>): void
    subscribe(listener: Listener): () => void
}
