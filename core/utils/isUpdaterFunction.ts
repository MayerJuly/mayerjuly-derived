import { StateUpdater } from '../types'

export const isUpdaterFunction = <T>(updater: StateUpdater<T>): updater is (prev: T) => T => {
    return typeof updater === 'function'
}
