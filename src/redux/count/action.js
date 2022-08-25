export const INCREMENT = 'INCREMENT'
export function increment() {
    return {
       type: 'INCREMENT'
    }
 }

 export const DECREMENT = 'DECREMENT'
 export function decrement() {
    return {
       type: 'DECREMENT'
    }
 }

 export const RESET = 'RESET'
 export function reset() {
    return { type: 'RESET', count : 0 }
 }

 export const DIRINCRE = 'DIRINCRE'
 export function dirincre(val) {
    return { type: 'DIRINCRE', count:val}
 }

 export const DIRDECRE = 'RESET'
 export function dircedre(val) {
    return { type: 'DIRDECRE', count:val }
 }

 