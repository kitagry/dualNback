import * as React from 'react';

interface BoxProps {
  text: string;
}

export class Box extends React.Component<BoxProps, {}> {
  render() {
    return (
      <div className="square">
        <p>{this.props.text}</p>
      </div>
    )
  }
}
