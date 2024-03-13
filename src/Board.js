const Square = ({ color }) => {
  return <div className="cell" style={{backgroundColor: color}}></div>;
};

const Board = ({ matrix }) => {
  return (
    <div className="board">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cellColor, cellIndex) => (
            <Square key={cellIndex} color={cellColor} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;