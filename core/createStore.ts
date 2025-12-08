import { Listener, Store } from './types'
import { isUpdaterFunction } from './utils/isUpdaterFunction'

export function createStore<T>(initialState: T): Store<T> {
    let state = initialState

    const listeners = new Set<Listener>()

    const getState = () => state

    const setState: Store<T>['setState'] = (updater) => {
        const next = isUpdaterFunction(updater) ? updater(state) : updater

        if (Object.is(next, state)) return

        state = next
        listeners.forEach((listener) => listener())
    }

    const subscribe = (listener: Listener) => {
        listeners.add(listener)

        return () => listeners.delete(listener)
    }

    return { getState, setState, subscribe }
}
