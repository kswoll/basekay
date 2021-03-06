﻿import * as constants from '../constants';

export interface IIncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function incrementEnthusiasm() {
    return { type: constants.INCREMENT_ENTHUSIASM };
}

export function decrementEnthusiasm() {
    return { type: constants.DECREMENT_ENTHUSIASM };
}