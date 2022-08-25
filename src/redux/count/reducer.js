import initialState from '../store/initialState'
import * as Actions from './action'

export const reducer = (state = initialState.counter, action) => {
    switch (action.type) {
        case Actions.INCREMENT:
            return {
                count: state.count + 1
            }
        case Actions.DECREMENT:
            return {
                count: state.count - 1
            }
        case Actions.RESET: return {
            count: 0
        }
        case Actions.DIRINCRE: 
            return {
                count: state.count + parseInt(action.count)
            }
        case Actions.DIRDECRE: 
            return {
                count: state.count - parseInt(action.count)
            }
        default:
            return state;

    }

 }
// export default reducer;