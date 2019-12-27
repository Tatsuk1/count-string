import {TEXTCHANGE } from '../actions';

const initialState = {textLength: 0, textValue: 'initial value'};

export default (state = initialState, action) => {
    switch (action.type) {
        case TEXTCHANGE:
            return {textValue: action.textValue, textLength: action.textLength};
        default:
            return state;
    }
};