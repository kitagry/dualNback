import {Game} from './Game'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {syncDate, pushPlace, pushText} from './clock'
import {ReduxAction, ReduxState} from '../store'

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void){}

  public date() {
    this.dispatch(syncDate())
  }

  public clickPlace() {
    this.dispatch(pushPlace())
  }

  public clickText() {
    this.dispatch(pushText())
  }
}

export default connect(
  (state: ReduxState) => ({value: state.game}),
  (dispatch: Dispatch<ReduxAction>) => ({actions: new ActionDispatcher(dispatch)})
)(Game)
