import {Action} from 'redux';

const N: number = 2

// action
enum ActionNames {
  NEXT_QUIZ = "NEXT_QUIZ",
  PLACE_PUSHED = "PLACE_PUSHED",
  TEXT_PUSHED = "TEXT_PUSHED",
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

interface PlaceAction extends Action {
  type: ActionNames.PLACE_PUSHED
}

export function pushPlace(): PlaceAction {
  return {
    type: ActionNames.PLACE_PUSHED
  }
}

interface TextAction extends Action {
  type: ActionNames.TEXT_PUSHED
}

export function pushText(): TextAction {
  return {
    type: ActionNames.TEXT_PUSHED,
  }
}

// reducer
interface BoxesState {
  place: number
  text: string
  placePushed: boolean
  placeCorrect: boolean
  textPushed: boolean
  textCorrect: boolean
}

export interface BoxesHistoryState {
  history: BoxesState[]
}

export type GameActions = ClockAction | PlaceAction | TextAction

const initialState: BoxesHistoryState = {
  history: [{
    place: 0,
    text: "",
    placePushed: false,
    placeCorrect: false,
    textPushed: false,
    textCorrect: false,
  }],
}

export default function reducer(state: BoxesHistoryState = initialState, action: GameActions): BoxesHistoryState {
  switch (action.type) {
    case ActionNames.NEXT_QUIZ:
      return {
        history: state.history.concat({
          place: action.place,
          text: action.text,
          placePushed: false,
          placeCorrect: false,
          textPushed: false,
          textCorrect: false,
        }),
      }

    case ActionNames.PLACE_PUSHED:
      {
        const l: number = state.history.length
        if (l < N + 1 || state.history[l-1].placePushed) {
          return state
        }

        const correct: boolean = state.history[l-1].place == state.history[l-N-1].place
        let newHistory = Object.assign({}, state.history[l-1])
        newHistory.placePushed = true
        newHistory.placeCorrect = correct
        state.history[l-1] = newHistory
        return state
      }

    case ActionNames.TEXT_PUSHED:
      {
        const l: number = state.history.length
        if (l < N + 1 || state.history[l-1].textPushed) {
          return state
        }

        const correct: boolean = state.history[l-1].text == state.history[l-N-1].text
        let newHistory = Object.assign({}, state.history[l-1])
        newHistory.textPushed = true
        newHistory.textCorrect = correct
        state.history[l-1] = newHistory
        return state
      }

    default:
      return state
  }
}
