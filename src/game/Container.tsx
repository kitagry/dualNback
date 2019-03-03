import {Game} from './Game'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {syncDate} from './clock'
import {ReduxAction, ReduxState} from '../store'

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void){}

  public date() {
    this.dispatch(syncDate())
  }
}

export default connect(
  (state: ReduxState) => ({value: state.game}),
  (dispatch: Dispatch<ReduxAction>) => ({actions: new ActionDispatcher(dispatch)})
)(Game)
