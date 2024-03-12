const Square = ({ value }) => {
  return <div className={`cell ${value ? 'filled' : ''}`}></div>;
};

const Board = ({ matrix }) => {
  return (
    <div className="board">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <Square key={cellIndex} value={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;