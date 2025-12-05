import {Listener, Store} from "./types";


export function createStore<T>(initialState:T):Store<T> {
    let state = initialState;

    const listeners = new Set<Listener>();

    const getState = () => state;

    const setState: Store<T>["setState"] = (updater) => {
        const next = typeof updater === "function" ? (updater as any)(state) : updater;

        if(Object.is(next, state)) return;
    }

    const subscribe = (listener: Listener) => {
        listeners.add(listener)

        return () => listeners.delete(listener)

    }


    return { getState, setState, subscribe};


}