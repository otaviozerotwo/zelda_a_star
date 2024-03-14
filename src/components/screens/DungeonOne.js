import Square from '../common/Square';
import '../../styles/Dungeon.css';

const DungeonOne = () => {
  const matrix = [
    [
      '#acacac', '#acacac', '#acacac',
      '#ababab', '#ababab', '#ababab',
      '#aaaaaa', '#aaaaaa', '#a8a8a8',
      '#a5a5a5', '#acacac', '#acacac',
      '#ababab', '#ababab', '#acacac',
      '#a7a7a7', '#ababab', '#ababab',
      '#a9a9a9', '#a8a8a8', '#a6a6a6',
      '#acacac', '#ababab', '#acacac',
      '#a8a8a8', '#a7a7a7', '#a7a7a7',
      '#acacac'
    ],
    [
      '#afafaf', '#d7d7d7', '#d7d7d7',
      '#aeaeae', '#afafaf', '#afafaf',
      '#adadad', '#adadad', '#ababab',
      '#a9a9a9', '#afafaf', '#afafaf',
      '#aeaeae', '#aeaeae', '#afafaf',
      '#aaaaaa', '#aeaeae', '#aeaeae',
      '#acacac', '#ababab', '#a9a9a9',
      '#afafaf', '#aeaeae', '#afafaf',
      '#ababab', '#aaaaaa', '#aaaaaa',
      '#afafaf'
    ],
    [
      '#ababab', '#d3d3d3', '#d3d3d3',
      '#d0d0d0', '#d1d1d1', '#d2d2d2',
      '#d0d0d0', '#cfcfcf', '#cdcdcd',
      '#cbcbcb', '#acacac', '#acacac',
      '#d1d1d1', '#d1d1d1', '#d2d2d2',
      '#a6a6a6', '#aaaaaa', '#aaaaaa',
      '#cfcfcf', '#cdcdcd', '#cbcbcb',
      '#ababab', '#aaaaaa', '#ababab',
      '#a8a8a8', '#a6a6a6', '#a6a6a6',
      '#ababab'
    ],
    [
      '#b2b2b2', '#dbdbdb', '#dbdbdb',
      '#b0b0b0', '#b1b1b1', '#dadada',
      '#b0b0b0', '#b0b0b0', '#aeaeae',
      '#d2d2d2', '#dadada', '#dbdbdb',
      '#d9d9d9', '#d9d9d9', '#dadada',
      '#adadad', '#b1b1b1', '#b0b0b0',
      '#d7d7d7', '#d5d5d5', '#d3d3d3',
      '#b1b1b1', '#b1b1b1', '#b1b1b1',
      '#aeaeae', '#acacac', '#acacac',
      '#b2b2b2'
    ],
    [
      '#aaaaaa', '#aaaaaa', '#aaaaaa',
      '#a9a9a9', '#aaaaaa', '#d1d1d1',
      '#a9a9a9', '#a8a8a8', '#a7a7a7',
      '#cacaca', '#aaaaaa', '#aaaaaa',
      '#d1d1d1', '#d0d0d0', '#d1d1d1',
      '#a6a6a6', '#aaaaaa', '#a9a9a9',
      '#cecece', '#cccccc', '#cbcbcb',
      '#aaaaaa', '#a9a9a9', '#aaaaaa',
      '#a7a7a7', '#a5a5a5', '#a5a5a5',
      '#aaaaaa'
    ],
    [
      '#afafaf', '#afafaf', '#afafaf',
      '#aeaeae', '#aeaeae', '#d6d6d6',
      '#adadad', '#adadad', '#ababab',
      '#cfcfcf', '#aeaeae', '#afafaf',
      '#aeaeae', '#aeaeae', '#aeaeae',
      '#aaaaaa', '#aeaeae', '#adadad',
      '#acacac', '#d2d2d2', '#a9a9a9',
      '#aeaeae', '#aeaeae', '#afafaf',
      '#ababab', '#aaaaaa', '#aaaaaa',
      '#afafaf'
    ],
    [
      '#b3b3b3', '#b3b3b3', '#b3b3b3',
      '#b2b2b2', '#b3b3b3', '#dcdcdc',
      '#b1b1b1', '#b1b1b1', '#afafaf',
      '#d4d4d4', '#b3b3b3', '#b3b3b3',
      '#b2b2b2', '#b2b2b2', '#b3b3b3',
      '#aeaeae', '#b3b3b3', '#b2b2b2',
      '#b0b0b0', '#d7d7d7', '#adadad',
      '#b3b3b3', '#b2b2b2', '#dcdcdc',
      '#d8d8d8', '#d6d6d6', '#aeaeae',
      '#b3b3b3'
    ],
    [
      '#aeaeae', '#aeaeae', '#aeaeae',
      '#d5d5d5', '#d6d6d6', '#d6d6d6',
      '#acacac', '#acacac', '#aaaaaa',
      '#cecece', '#d6d6d6', '#d6d6d6',
      '#d5d5d5', '#d5d5d5', '#d6d6d6',
      '#d0d0d0', '#d5d5d5', '#d5d5d5',
      '#d3d3d3', '#d1d1d1', '#cfcfcf',
      '#d6d6d6', '#d5d5d5', '#d6d6d6',
      '#d2d2d2', '#d0d0d0', '#a9a9a9',
      '#aeaeae'
    ],
    [
      '#ababab', '#ababab', '#ababab',
      '#d1d1d1', '#ababab', '#aaaaaa',
      '#a9a9a9', '#a9a9a9', '#a7a7a7',
      '#a5a5a5', '#ababab', '#ababab',
      '#aaaaaa', '#aaaaaa', '#ababab',
      '#cdcdcd', '#aaaaaa', '#aaaaaa',
      '#a8a8a8', '#cdcdcd', '#a5a5a5',
      '#ababab', '#aaaaaa', '#d2d2d2',
      '#cecece', '#cdcdcd', '#a6a6a6',
      '#ababab'
    ],
    [
      '#adadad', '#adadad', '#adadad',
      '#d3d3d3', '#acacac', '#acacac',
      '#ababab', '#ababab', '#a9a9a9',
      '#a6a6a6', '#acacac', '#adadad',
      '#acacac', '#acacac', '#acacac',
      '#cecece', '#acacac', '#ababab',
      '#aaaaaa', '#cfcfcf', '#a7a7a7',
      '#acacac', '#acacac', '#d4d4d4',
      '#d0d0d0', '#cecece', '#a8a8a8',
      '#adadad'
    ],
    [
      '#b3b3b3', '#b3b3b3', '#b3b3b3',
      '#dbdbdb', '#b2b2b2', '#b2b2b2',
      '#b1b1b1', '#b1b1b1', '#afafaf',
      '#acacac', '#b3b3b3', '#b3b3b3',
      '#b2b2b2', '#b2b2b2', '#b3b3b3',
      '#d6d6d6', '#b2b2b2', '#b2b2b2',
      '#d8d8d8', '#d7d7d7', '#d5d5d5',
      '#b3b3b3', '#b2b2b2', '#b3b3b3',
      '#afafaf', '#aeaeae', '#aeaeae',
      '#b3b3b3'
    ],
    [
      '#acacac', '#acacac', '#acacac',
      '#d2d2d2', '#acacac', '#acacac',
      '#aaaaaa', '#aaaaaa', '#cfcfcf',
      '#cccccc', '#d4d4d4', '#acacac',
      '#ababab', '#ababab', '#acacac',
      '#cecece', '#acacac', '#ababab',
      '#d0d0d0', '#cfcfcf', '#cdcdcd',
      '#acacac', '#ababab', '#acacac',
      '#a9a9a9', '#a7a7a7', '#a7a7a7',
      '#acacac'
    ],
    [
      '#adadad', '#adadad', '#d5d5d5',
      '#d3d3d3', '#d4d4d4', '#acacac',
      '#ababab', '#ababab', '#d0d0d0',
      '#cdcdcd', '#d4d4d4', '#adadad',
      '#acacac', '#acacac', '#adadad',
      '#cfcfcf', '#acacac', '#acacac',
      '#d1d1d1', '#cfcfcf', '#cdcdcd',
      '#adadad', '#acacac', '#acacac',
      '#a9a9a9', '#cfcfcf', '#cecece',
      '#adadad'
    ],
    [
      '#aaaaaa', '#aaaaaa', '#d1d1d1',
      '#a8a7a9', '#d1d1d1', '#aaaaaa',
      '#a8a8a8', '#a8a8a8', '#cdcdcd',
      '#c9c9c9', '#d1d1d1', '#d1d1d1',
      '#d0d0d0', '#d0d0d0', '#d1d1d1',
      '#cbcbcb', '#aaaaaa', '#a9a9a9',
      '#a7a7a7', '#a6a6a6', '#a4a4a4',
      '#aaaaaa', '#aaaaaa', '#aaaaaa',
      '#a7a7a7', '#cbcbcb', '#cbcbcb',
      '#aaaaaa'
    ],
    [
      '#afafaf', '#afafaf', '#d7d7d7',
      '#d6d6d6', '#d7d7d7', '#aeaeae',
      '#adadad', '#adadad', '#d3d3d3',
      '#cfcfcf', '#d7d7d7', '#afafaf',
      '#aeaeae', '#aeaeae', '#afafaf',
      '#d1d1d1', '#aeaeae', '#aeaeae',
      '#acacac', '#ababab', '#a9a9a9',
      '#afafaf', '#d6d6d6', '#d7d7d7',
      '#d3d3d3', '#d1d1d1', '#888887',
      '#afafaf'
    ],
    [
      '#acacac', '#acacac', '#acacac',
      '#ababab', '#ababab', '#ababab',
      '#aaaaaa', '#aaaaaa', '#cfcfcf',
      '#cbcbcb', '#d3d3d3', '#acacac',
      '#ababab', '#ababab', '#ababab',
      '#cdcdcd', '#ababab', '#aaaaaa',
      '#a9a9a9', '#a8a8a8', '#a6a6a6',
      '#ababab', '#d2d2d2', '#ababab',
      '#a8a8a8', '#cdcdcd', '#cdcdcd',
      '#acacac'
    ],
    [
      '#adadad', '#adadad', '#adadad',
      '#acacac', '#adadad', '#acacac',
      '#ababab', '#ababab', '#a9a9a9',
      '#a7a7a7', '#adadad', '#adadad',
      '#acacac', '#acacac', '#adadad',
      '#cfcfcf', '#acacac', '#acacac',
      '#aaaaaa', '#a9a9a9', '#a7a7a7',
      '#adadad', '#d4d4d4', '#adadad',
      '#a9a9a9', '#cecece', '#cecece',
      '#adadad'
    ],
    [
      '#b7b7b7', '#b7b7b7', '#b7b7b7',
      '#b6b6b6', '#b7b7b7', '#b6b6b6',
      '#b5b5b5', '#b5b5b5', '#b3b3b3',
      '#b0b0b0', '#b7b7b7', '#b7b7b7',
      '#b6b6b6', '#b6b6b6', '#b7b7b7',
      '#dbdbdb', '#b6b6b6', '#b6b6b6',
      '#b4b4b4', '#b2b2b2', '#b1b1b1',
      '#b7b7b7', '#e0e0e0', '#b7b7b7',
      '#b3b3b3', '#b2b2b2', '#b2b2b2',
      '#b7b7b7'
    ],
    [
      '#acacac', '#acacac', '#acacac',
      '#ababab', '#acacac', '#acacac',
      '#aaaaaa', '#aaaaaa', '#a8a8a8',
      '#a6a6a6', '#acacac', '#acacac',
      '#ababab', '#ababab', '#acacac',
      '#cecece', '#ababab', '#ababab',
      '#d0d0d0', '#cfcfcf', '#cdcdcd',
      '#acacac', '#d3d3d3', '#acacac',
      '#a9a9a9', '#a7a7a7', '#a7a7a7',
      '#acacac'
    ],
    [
      '#b5b5b5', '#b5b5b5', '#b5b5b5',
      '#b3b3b3', '#b4b4b4', '#b4b4b4',
      '#b3b3b3', '#dcdcdc', '#dadada',
      '#d6d6d6', '#dedede', '#b5b5b5',
      '#b4b4b4', '#b4b4b4', '#b4b4b4',
      '#d8d8d8', '#b4b4b4', '#b3b3b3',
      '#dbdbdb', '#d9d9d9', '#d7d7d7',
      '#b4b4b4', '#dddddd', '#b4b4b4',
      '#b1b1b1', '#b0b0b0', '#afafaf',
      '#b5b5b5'
    ],
    [
      '#b7b7b7', '#b7b7b7', '#b8b8b8',
      '#b6b6b6', '#b7b7b7', '#b7b7b7',
      '#b5b5b5', '#dfdfdf', '#dddddd',
      '#d9d9d9', '#e1e1e1', '#b7b7b7',
      '#b6b6b6', '#e0e0e0', '#e1e1e1',
      '#dbdbdb', '#e1e1e1', '#e0e0e0',
      '#dedede', '#dcdcdc', '#dadada',
      '#b7b7b7', '#e0e0e0', '#b7b7b7',
      '#b3b3b3', '#b2b2b2', '#b2b2b2',
      '#b7b7b7'
    ],
    [
      '#b7b7b7', '#e2e2e2', '#e2e2e2',
      '#e0e0e0', '#b7b7b7', '#b7b7b7',
      '#b6b6b6', '#dfdfdf', '#dddddd',
      '#d9d9d9', '#e1e1e1', '#b7b7b7',
      '#b6b6b6', '#e0e0e0', '#b7b7b7',
      '#b2b2b2', '#b7b7b7', '#b6b6b6',
      '#dedede', '#dcdcdc', '#dadada',
      '#b7b7b7', '#e1e1e1', '#b7b7b7',
      '#b4b4b4', '#b2b2b2', '#b2b2b2',
      '#b8b8b8'
    ],
    [
      '#b0b0b0', '#d9d9d9', '#d9d9d9',
      '#d7d7d7', '#d8d8d8', '#d8d8d8',
      '#d6d6d6', '#d6d6d6', '#d4d4d4',
      '#d1d1d1', '#d8d8d8', '#d9d9d9',
      '#d7d7d7', '#d8d8d8', '#b0b0b0',
      '#ababab', '#b0b0b0', '#afafaf',
      '#aeaeae', '#acacac', '#ababab',
      '#b0b0b0', '#d8d8d8', '#b0b0b0',
      '#adadad', '#ababab', '#ababab',
      '#b0b0b0'
    ],
    [
      '#b2b2b2', '#dbdbdb', '#dbdbdb',
      '#d9d9d9', '#b1b1b1', '#b1b1b1',
      '#b0b0b0', '#d8d8d8', '#d6d6d6',
      '#d3d3d3', '#dadada', '#b2b2b2',
      '#b1b1b1', '#d9d9d9', '#b1b1b1',
      '#adadad', '#b1b1b1', '#b0b0b0',
      '#afafaf', '#adadad', '#acacac',
      '#b1b1b1', '#d9d9d9', '#b1b1b1',
      '#aeaeae', '#adadad', '#acacac',
      '#b2b2b2'
    ],
    [
      '#b2b2b2', '#b3b3b3', '#b2b2b2',
      '#b1b1b1', '#b2b2b2', '#b2b2b2',
      '#b0b0b0', '#d9d9d9', '#d7d7d7',
      '#d3d3d3', '#dbdbdb', '#b2b2b2',
      '#b1b1b1', '#dadada', '#dbdbdb',
      '#d5d5d5', '#dadada', '#dadada',
      '#d8d8d8', '#d6d6d6', '#d4d4d4',
      '#dbdbdb', '#dadada', '#b2b2b2',
      '#afafaf', '#adadad', '#adadad',
      '#b2b2b2'
    ],
    [
      '#b7b7b7', '#b8b8b8', '#b8b8b8',
      '#b6b6b6', '#b7b7b7', '#b7b7b7',
      '#b6b6b6', '#dfdfdf', '#dddddd',
      '#d9d9d9', '#e1e1e1', '#b7b7b7',
      '#b6b6b6', '#b6b6b6', '#b7b7b7',
      '#b2b2b2', '#b7b7b7', '#b6b6b6',
      '#b4b4b4', '#b3b3b3', '#b1b1b1',
      '#b7b7b7', '#b6b6b6', '#b7b7b7',
      '#b4b4b4', '#b2b2b2', '#b2b2b2',
      '#b8b8b8'
    ],
    [
      '#b2b2b2', '#b3b3b3', '#b3b3b3',
      '#b1b1b1', '#b2b2b2', '#b2b2b2',
      '#b1b1b1', '#b1b1b1', '#afafaf',
      '#acacac', '#b2b2b2', '#b3b3b3',
      '#b1b1b1', '#b2b2b2', '#b2b2b2',
      '#aeaeae', '#b2b2b2', '#b1b1b1',
      '#b0b0b0', '#aeaeae', '#adadad',
      '#b2b2b2', '#b2b2b2', '#b2b2b2',
      '#afafaf', '#adadad', '#adadad',
      '#b2b2b2'
    ],
    [
      '#b1b1b1', '#b1b1b1', '#b1b1b1',
      '#b0b0b0', '#b1b1b1', '#b1b1b1',
      '#afafaf', '#afafaf', '#adadad',
      '#ababab', '#b1b1b1', '#b1b1b1',
      '#b0b0b0', '#b0b0b0', '#b1b1b1',
      '#acacac', '#b1b1b1', '#b0b0b0',
      '#aeaeae', '#adadad', '#ababab',
      '#b1b1b1', '#b0b0b0', '#b1b1b1',
      '#aeaeae', '#acacac', '#acacac',
      '#b1b1b1'
    ]
  ];

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

export default DungeonOne;