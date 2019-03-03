import * as React from 'react';
import {Box} from './Box';

interface BoxesProps {
  texts: string[];
}

export class Boxes extends React.Component<BoxesProps, {}> {
  renderBox(i: number) {
    return (
      <Box
        text={this.props.texts[i]}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderBox(0)}
          {this.renderBox(1)}
          {this.renderBox(2)}
        </div>
        <div className="board-row">
          {this.renderBox(3)}
          {this.renderBox(4)}
          {this.renderBox(5)}
        </div>
        <div className="board-row">
          {this.renderBox(6)}
          {this.renderBox(7)}
          {this.renderBox(8)}
        </div>
      </div>
    );
  }
}
