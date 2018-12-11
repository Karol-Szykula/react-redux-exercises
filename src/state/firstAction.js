const FIRST_ACTION = 'reduce/FIRST_ACTION'

const INITIAL_STATE = {
    firstAction: false
}

export const firstAction = () => ({
    type: FIRST_ACTION
})

export default (state = INITIAL_STATE, action) => {

    if (action.type === FIRST_ACTION) {
        return {
            ...state,
            firstAction: !state.firstAction
        }
    }
    return state
}

