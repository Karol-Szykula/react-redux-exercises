const INC = 'counter/INC'
const DEC = 'counter/DEC'

export const inc = () => ({
    type: INC
})

export const dec = () => ({
    type: DEC
})

const INITIAL_STATE = {
    counter: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case DEC:
            return {
                ...state,
                counter: state.counter - 1
            }
        case INC:
            return {
                ...state,
                counter: state.counter + 1
            }

        default:
            return {
                counter: 0
            }
    }
}