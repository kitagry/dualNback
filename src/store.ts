import game, {GameActions, BoxesHistoryState} from './game/clock'
import {createStore, combineReducers, Action} from 'redux'

export default createStore(
  combineReducers({
    game
  })
)

export type ReduxState = {
  game : BoxesHistoryState
}

export type ReduxAction = GameActions | Action
