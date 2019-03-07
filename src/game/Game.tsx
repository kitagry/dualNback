import * as React from 'react';
import {BoxesHistoryState} from './clock';
import {ActionDispatcher} from './Container';
import {Boxes} from '../templates/Boxes';

interface Props {
  value: BoxesHistoryState;
  actions: ActionDispatcher;
}

interface State {
  interval: number;
}

export class Game extends React.Component<Props, State> {
  public componentDidMount() {
    let self = this
    this.setState({interval: setInterval(function() {
      self.props.actions.date()
    }, 3000)});
  }

  public componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  private correctTextNum(): number {
    const histories = this.props.value.history
    if (histories.length == 0) {
      return 0
    }

    return histories.filter(history => {
      return history.textCorrect
    }).length
  }

  private correctPlaceNum(): number {
    const histories = this.props.value.history
    if (history.length == 0) {
      return 0
    }

    return histories.filter(history => {
      return history.placeCorrect
    }).length
  }

  public render() {
    const history = this.props.value.history;
    const lastHistory = history[history.length-1];
    let texts = Array<string>(9).fill("");

    const correctPlaceNum = this.correctPlaceNum()
    const correctTextNum = this.correctTextNum()
    console.log(history)

    texts[lastHistory.place] = lastHistory.text;
    return (
      <div>
        <div className="game">
          <Boxes texts={texts}/>
        </div>
        <div className="buttons">
          <button onClick={() => this.props.actions.clickPlace()}>場所</button>
          <button onClick={() => this.props.actions.clickText()}>文字</button>
        </div>
        <div className="buttons">
          <p>場所の正解数: {correctPlaceNum}</p>
          <p>文字の正解数: {correctTextNum}</p>
        </div>
      </div>
    )
  }
}
