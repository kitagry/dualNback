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

  public render() {
    const history = this.props.value.history;
    const lastHistory = history[history.length-1];
    let texts = Array<string>(9).fill("");

    texts[lastHistory.place] = lastHistory.text;
    return (
      <div className="game">
        <Boxes texts={texts}/>
      </div>
    )
  }
}
