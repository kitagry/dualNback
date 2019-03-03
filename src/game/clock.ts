import {Action} from 'redux';

// action
enum ActionNames {
  NEXT_QUIZ = "NEXT_QUIZ",
}

function randomPlace() {
  return Math.floor(Math.random() * 9);
}

const textConst = "ACEGIJLNQS"
function randomText() {
  return textConst[Math.floor(Math.random() * textConst.length)]
}

interface ClockAction extends Action {
  type: ActionNames.NEXT_QUIZ
  place: number
  text: string
}

export function syncDate(): ClockAction {
  const place = randomPlace()
  const text = randomText()
  return {
    type: ActionNames.NEXT_QUIZ,
    place: place,
    text: text
  };
}

// reducer
interface BoxesState {
  place: number
  text: string
}

export interface BoxesHistoryState {
  history: BoxesState[]
}

export type GameActions = ClockAction

const initialState: BoxesHistoryState = {history: [{place: 0, text: ""}]}

export default function reducer(state: BoxesHistoryState = initialState, action: GameActions): BoxesHistoryState {
  switch (action.type) {
    case ActionNames.NEXT_QUIZ:
      return {
        history: state.history.concat({place: action.place, text: action.text})
      }
    default:
      return state
  }
}
