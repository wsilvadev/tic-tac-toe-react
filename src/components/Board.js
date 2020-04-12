import React from "react";

import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        disable={this.props.squares[i]}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const sqList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    return (
      <div>
        {sqList.map((item) => {
          const element = item.map((i) => this.renderSquare(i));

          return <div className="board-row">{element}</div>;
        })}
      </div>
    );
  }
}
export default Board;
