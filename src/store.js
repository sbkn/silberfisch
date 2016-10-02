import * as c from './constants';

const initialState = {
    values: {}
};

/*
 * DO NOT EVER USE MUTATING METHODS SUCH AS arr.splice(),
 * THAT IS WHY assign IS BEING USED HERE
 */
export default (state = initialState, action) => {
    switch (action.type) {

        case c.FORM_UPDATE_VALUE:
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.name]: action.value
                }
            };

        case c.FORM_RESET:
            return initialState;

        default:
            return state;
    }
}