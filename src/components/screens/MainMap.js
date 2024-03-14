import Square from '../common/Square';
import '../../styles/MainMap.css';

const MainMap = ({ matrix }) => {
  return (
    <div className="map">
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

export default MainMap;