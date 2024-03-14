import Square from '../common/Square';
import '../../styles/Dungeon.css';

const DungeonThree = ({ matrix }) => {
  return (
    <div className="dungeon">
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

export default DungeonThree;