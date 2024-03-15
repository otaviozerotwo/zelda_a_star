import Square from './Square';

const MatrixDisplayMainMap = ({ matrix }) => {
  return (
    <div className="map">
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

export default MatrixDisplayMainMap;