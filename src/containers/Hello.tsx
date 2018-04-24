import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/';
import Hello from '../components/Hello';
import { IStoreState } from '../types/index';

export function mapStateToProps(store: IStoreState) {
    return { enthusiasmLevel: store.enthusiasmState.enthusiasmLevel, name: store.enthusiasmState.languageName };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);