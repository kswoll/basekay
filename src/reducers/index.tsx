import { EnthusiasmAction } from '../actions';
import { IEnthusiasmState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initialState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
};

export function enthusiasm(state = initialState, action: EnthusiasmAction): IEnthusiasmState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
    }
    return state;
}