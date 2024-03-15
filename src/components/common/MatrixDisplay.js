import Square from './Square';

const MatrixDisplay = ({ matrix }) => {
  return (
    <div className="dungeon">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="cell" style={{ backgroundColor: cell.color }}>
              <Square key={cellIndex} value={cell.value} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixDisplay;