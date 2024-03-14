import Square from '../common/Square';
import '../../styles/Dungeon.css';

const DungeonTwo = () => {
  const matrix = [
    [
      '#b0b0b0', '#b1b1b1', '#b1b1b1',
      '#aeaeae', '#b0b0b0', '#b0b0b0',
      '#b0b0b0', '#b0b0b0', '#b0b0b0',
      '#b0b0b0', '#afafaf', '#afafaf',
      '#aeaeae', '#acacac', '#aaaaaa',
      '#aaaaaa', '#b0b0b0', '#aeaeae',
      '#aeaeae', '#ababab', '#a7a7a7',
      '#b0b0b0', '#b1b1b1', '#aeaeae',
      '#acacac', '#adadad', '#a7a7a7',
      '#b0b0b0'
    ],
    [
      '#b3b3b3', '#b3b3b3', '#b4b4b4',
      '#b1b1b1', '#b3b3b3', '#b3b3b3',
      '#b3b3b3', '#b3b3b3', '#b3b3b3',
      '#b3b3b3', '#b2b2b2', '#b2b2b2',
      '#b1b1b1', '#afafaf', '#adadad',
      '#acacac', '#b2b2b2', '#b0b0b0',
      '#b1b1b1', '#adadad', '#aaaaaa',
      '#b3b3b3', '#b3b3b3', '#b1b1b1',
      '#afafaf', '#b0b0b0', '#aaaaaa',
      '#b3b3b3'
    ],
    [
      '#ababab', '#d2d2d2', '#d2d2d2',
      '#cfcfcf', '#ababab', '#ababab',
      '#ababab', '#d2d2d2', '#d2d2d2',
      '#d2d2d2', '#aaaaaa', '#a9a9a9',
      '#a8a8a8', '#cccccc', '#a5a5a5',
      '#a4a4a4', '#aaaaaa', '#a8a8a8',
      '#cfcfcf', '#cbcbcb', '#c7c7c7',
      '#d2d2d2', '#d2d2d2', '#d0d0d0',
      '#cdcdcd', '#cecece', '#a2a2a2',
      '#aaaaaa'
    ],
    [
      '#b3b3b3', '#dddddd', '#dddddd',
      '#dadada', '#b3b3b3', '#b3b3b3',
      '#b3b3b3', '#dcdcdc', '#dcdcdc',
      '#dcdcdc', '#b2b2b2', '#b2b2b2',
      '#b0b0b0', '#d7d7d7', '#adadad',
      '#acacac', '#b2b2b2', '#b0b0b0',
      '#d9d9d9', '#adadad', '#aaaaaa',
      '#b3b3b3', '#dddddd', '#b1b1b1',
      '#afafaf', '#b0b0b0', '#aaaaaa',
      '#b3b3b3'
    ],
    [
      '#b4b4b4', '#dddddd', '#dddddd',
      '#dadada', '#dddddd', '#dddddd',
      '#dcdcdc', '#dcdcdc', '#dddddd',
      '#dddddd', '#dcdcdc', '#dbdbdb',
      '#dadada', '#d7d7d7', '#adadad',
      '#d4d4d4', '#dcdcdc', '#dadada',
      '#d9d9d9', '#aeaeae', '#ababab',
      '#b3b3b3', '#dddddd', '#b2b2b2',
      '#afafaf', '#b0b0b0', '#aaaaaa',
      '#b3b3b3'
    ],
    [
      '#afafaf', '#d7d7d7', '#d8d8d8',
      '#d4d4d4', '#afafaf', '#afafaf',
      '#aeaeae', '#d7d7d7', '#d7d7d7',
      '#d7d7d7', '#aeaeae', '#adadad',
      '#acacac', '#d1d1d1', '#a9a9a9',
      '#a8a8a8', '#aeaeae', '#acacac',
      '#d4d4d4', '#d0d0d0', '#cccccc',
      '#afafaf', '#d7d7d7', '#d5d5d5',
      '#d2d2d2', '#d3d3d3', '#a6a6a6',
      '#afafaf'
    ],
    [
      '#b5b5b5', '#dfdfdf', '#dfdfdf',
      '#dcdcdc', '#b5b5b5', '#b5b5b5',
      '#b5b5b5', '#dedede', '#dedede',
      '#dedede', '#b4b4b4', '#b4b4b4',
      '#b2b2b2', '#d9d9d9', '#afafaf',
      '#aeaeae', '#b5b5b5', '#b3b3b3',
      '#b2b2b2', '#afafaf', '#acacac',
      '#b5b5b5', '#dfdfdf', '#dcdcdc',
      '#dadada', '#dadada', '#acacac',
      '#b5b5b5'
    ],
    [
      '#b7b7b7', '#b7b7b7', '#e1e1e1',
      '#b5b5b5', '#b7b7b7', '#b7b7b7',
      '#b7b7b7', '#b7b7b7', '#e1e1e1',
      '#b7b7b7', '#b6b6b6', '#b5b5b5',
      '#dedede', '#dbdbdb', '#d9d9d9',
      '#b0b0b0', '#b6b6b6', '#b4b4b4',
      '#b4b4b4', '#b1b1b1', '#aeaeae',
      '#b7b7b7', '#e1e1e1', '#dfdfdf',
      '#dcdcdc', '#dddddd', '#adadad',
      '#b7b7b7'
    ],
    [
      '#b2b2b2', '#b2b2b2', '#dbdbdb',
      '#afafaf', '#b2b2b2', '#b2b2b2',
      '#b1b1b1', '#b1b1b1', '#dadada',
      '#b1b1b1', '#b1b1b1', '#b0b0b0',
      '#d7d7d7', '#d5d5d5', '#d3d3d3',
      '#ababab', '#b1b1b1', '#afafaf',
      '#afafaf', '#acacac', '#cfcfcf',
      '#b2b2b2', '#b2b2b2', '#b0b0b0',
      '#adadad', '#d6d6d6', '#a9a9a9',
      '#b1b1b1'
    ],
    [
      '#b0b0b0', '#b0b0b0', '#d9d9d9',
      '#d6d6d6', '#d9d9d9', '#d8d8d8',
      '#b0b0b0', '#afafaf', '#d8d8d8',
      '#b0b0b0', '#afafaf', '#aeaeae',
      '#d5d5d5', '#d3d3d3', '#d1d1d1',
      '#d0d0d0', '#d8d8d8', '#d5d5d5',
      '#d5d5d5', '#d1d1d1', '#cdcdcd',
      '#b0b0b0', '#b0b0b0', '#aeaeae',
      '#acacac', '#d4d4d4', '#a7a7a7',
      '#b0b0b0'
    ],
    [
      '#b6b6b6', '#b6b6b6', '#b6b6b6',
      '#b3b3b3', '#b6b6b6', '#dfdfdf',
      '#b5b5b5', '#b5b5b5', '#dfdfdf',
      '#b5b5b5', '#b5b5b5', '#b4b4b4',
      '#dcdcdc', '#dadada', '#d8d8d8',
      '#afafaf', '#b5b5b5', '#dcdcdc',
      '#b3b3b3', '#b0b0b0', '#d4d4d4',
      '#b5b5b5', '#e0e0e0', '#dddddd',
      '#dadada', '#dbdbdb', '#acacac',
      '#b5b5b5'
    ],
    [
      '#b7b7b7', '#b7b7b7', '#b8b8b8',
      '#b5b5b5', '#b7b7b7', '#e1e1e1',
      '#b7b7b7', '#b7b7b7', '#e1e1e1',
      '#b7b7b7', '#b6b6b6', '#b6b6b6',
      '#dedede', '#dcdcdc', '#dadada',
      '#b0b0b0', '#b7b7b7', '#dedede',
      '#b4b4b4', '#b1b1b1', '#d6d6d6',
      '#b7b7b7', '#e2e2e2', '#b5b5b5',
      '#b3b3b3', '#b4b4b4', '#aeaeae',
      '#b7b7b7'
    ],
    [
      '#b2b2b2', '#dcdcdc', '#dcdcdc',
      '#d9d9d9', '#b2b2b2', '#dbdbdb',
      '#b2b2b2', '#b2b2b2', '#dbdbdb',
      '#b2b2b2', '#b1b1b1', '#b1b1b1',
      '#b0b0b0', '#d6d6d6', '#acacac',
      '#ababab', '#b2b2b2', '#d8d8d8',
      '#b0b0b0', '#adadad', '#d0d0d0',
      '#b2b2b2', '#dcdcdc', '#b0b0b0',
      '#aeaeae', '#d7d7d7', '#d0d0d0',
      '#b2b2b2'
    ],
    [
      '#b4b4b4', '#dddddd', '#b5b7ab',
      '#dadada', '#dddddd', '#dddddd',
      '#dddddd', '#b3b3b3', '#dddddd',
      '#b3b3b3', '#b3b3b3', '#b2b2b2',
      '#b1b1b1', '#d7d7d7', '#aeaeae',
      '#adadad', '#b3b3b3', '#dadada',
      '#dadada', '#d6d6d6', '#d2d2d2',
      '#b4b4b4', '#dddddd', '#dadada',
      '#d8d8d8', '#949492', '#d2d2d2',
      '#b4b4b4'
    ],
    [
      '#b7b7b7', '#e2e2e2', '#e2e2e2',
      '#dfdfdf', '#b7b7b7', '#e1e1e1',
      '#b7b7b7', '#b7b7b7', '#e1e1e1',
      '#b7b7b7', '#e0e0e0', '#e0e0e0',
      '#dedede', '#dcdcdc', '#b1b1b1',
      '#b0b0b0', '#b7b7b7', '#b5b5b5',
      '#b5b5b5', '#b1b1b1', '#d6d6d6',
      '#b7b7b7', '#e2e2e2', '#b5b5b5',
      '#b3b3b3', '#dddddd', '#d6d6d6',
      '#b7b7b7'
    ],
    [
      '#b3b3b3', '#b3b3b3', '#b3b3b3',
      '#b1b1b1', '#b3b3b3', '#dcdcdc',
      '#b3b3b3', '#b3b3b3', '#dcdcdc',
      '#b3b3b3', '#dbdbdb', '#dbdbdb',
      '#d9d9d9', '#aeaeae', '#adadad',
      '#acacac', '#b3b3b3', '#b0b0b0',
      '#b0b0b0', '#adadad', '#d1d1d1',
      '#b3b3b3', '#dddddd', '#b1b1b1',
      '#afafaf', '#b0b0b0', '#aaaaaa',
      '#b3b3b3'
    ],
    [
      '#b7b7b7', '#b7b7b7', '#b7b7b7',
      '#b5b5b5', '#b7b7b7', '#e1e1e1',
      '#b7b7b7', '#b7b7b7', '#e1e1e1',
      '#b7b7b7', '#e0e0e0', '#e0e0e0',
      '#dedede', '#b2b2b2', '#b1b1b1',
      '#d9d9d9', '#e1e1e1', '#dedede',
      '#b4b4b4', '#b1b1b1', '#d6d6d6',
      '#b7b7b7', '#e1e1e1', '#b5b5b5',
      '#b3b3b3', '#b3b3b3', '#aeaeae',
      '#b7b7b7'
    ],
    [
      '#b7b7b7', '#b7b7b7', '#b7b7b7',
      '#b5b5b5', '#b7b7b7', '#e1e1e1',
      '#b7b7b7', '#b7b7b7', '#e1e1e1',
      '#b7b7b7', '#e0e0e0', '#dfdfdf',
      '#dedede', '#b2b2b2', '#b1b1b1',
      '#d8d8d8', '#e0e0e0', '#dedede',
      '#b4b4b4', '#b1b1b1', '#d6d6d6',
      '#b7b7b7', '#e1e1e1', '#b5b5b5',
      '#b3b3b3', '#b3b3b3', '#aeaeae',
      '#b7b7b7'
    ],
    [
      '#b4b4b4', '#b4b4b4', '#dedede',
      '#b2b2b2', '#b4b4b4', '#dedede',
      '#dddddd', '#dddddd', '#dddddd',
      '#b4b4b4', '#dcdcdc', '#dcdcdc',
      '#dbdbdb', '#d8d8d8', '#d6d6d6',
      '#d5d5d5', '#dddddd', '#dbdbdb',
      '#dadada', '#d7d7d7', '#d2d2d2',
      '#dedede', '#dedede', '#dbdbdb',
      '#d9d9d9', '#d9d9d9', '#ababab',
      '#b4b4b4'
    ],
    [
      '#b7b7b7', '#b7b7b7', '#e1e1e1',
      '#b4b4b4', '#b7b7b7', '#b7b7b7',
      '#b7b7b7', '#b7b7b7', '#b7b7b7',
      '#b7b7b7', '#e0e0e0', '#dfdfdf',
      '#dedede', '#b2b2b2', '#b1b1b1',
      '#d8d8d8', '#e0e0e0', '#dedede',
      '#b4b4b4', '#b1b1b1', '#d6d6d6',
      '#b7b7b7', '#e1e1e1', '#b5b5b5',
      '#b3b3b3', '#dddddd', '#aeaeae',
      '#b7b7b7'
    ],
    [
      '#b7b7b7', '#b7b7b7', '#e1e1e1',
      '#b4b4b4', '#b7b7b7', '#b7b7b7',
      '#b7b7b7', '#b6b6b6', '#b7b7b7',
      '#b7b7b7', '#e0e0e0', '#dfdfdf',
      '#dedede', '#b2b2b2', '#b0b0b0',
      '#d8d8d8', '#e0e0e0', '#dedede',
      '#b4b4b4', '#b1b1b1', '#d5d5d5',
      '#b7b7b7', '#e1e1e1', '#b5b5b5',
      '#b3b3b3', '#dddddd', '#adadad',
      '#b7b7b7'
    ],
    [
      '#adadad', '#adadad', '#d6d6d6',
      '#d2d2d2', '#d5d5d5', '#d5d5d5',
      '#adadad', '#adadad', '#adadad',
      '#adadad', '#d4d4d4', '#d4d4d4',
      '#d2d2d2', '#a9a9a9', '#a7a7a7',
      '#a7a7a7', '#d5d5d5', '#acacac',
      '#ababab', '#a8a8a8', '#cacaca',
      '#adadad', '#d6d6d6', '#ababab',
      '#d0d0d0', '#d1d1d1', '#a4a4a4',
      '#adadad'
    ],
    [
      '#acacac', '#acacac', '#aeaeae',
      '#acacac', '#aeaeae', '#d3d3d3',
      '#acacac', '#ababab', '#acacac',
      '#acacac', '#adadad', '#adadad',
      '#acacac', '#a7a7a7', '#a6a6a6',
      '#a5a5a5', '#d3d3d3', '#a9a9a9',
      '#a9a9a9', '#a6a6a6', '#c9c9c9',
      '#acacac', '#aeaeae', '#aaaaaa',
      '#cfcfcf', '#cfcfcf', '#a3a3a3',
      '#acacac'
    ],
    [
      '#a7a7a7', '#a7a7a7', '#a7a7a7',
      '#a5a5a5', '#cecece', '#cecece',
      '#cdcdcd', '#cdcdcd', '#a7a7a7',
      '#a7a7a7', '#a6a6a6', '#a6a6a6',
      '#a5a5a5', '#a3a3a3', '#a1a1a1',
      '#a1a1a1', '#cdcdcd', '#a5a5a5',
      '#a5a5a5', '#a2a2a2', '#c3c3c3',
      '#cdcdcd', '#cecece', '#cbcbcb',
      '#c9c9c9', '#cacaca', '#9e9e9e',
      '#a7a7a7'
    ],
    [
      '#acacac', '#acacac', '#adadad',
      '#aaaaaa', '#d4d4d4', '#d4d4d4',
      '#d4d4d4', '#d4d4d4', '#acacac',
      '#acacac', '#ababab', '#ababab',
      '#aaaaaa', '#a8a8a8', '#a6a6a6',
      '#a6a6a6', '#d3d3d3', '#aaaaaa',
      '#aaaaaa', '#a7a7a7', '#c9c9c9',
      '#adadad', '#aeaeae', '#ababab',
      '#cfcfcf', '#d0d0d0', '#a3a3a3',
      '#acacac'
    ],
    [
      '#a9a9a9', '#a9a9a9', '#a9a9a9',
      '#a7a7a7', '#d0d0d0', '#d0d0d0',
      '#d0d0d0', '#d0d0d0', '#d0d0d0',
      '#d0d0d0', '#cfcfcf', '#cecece',
      '#cdcdcd', '#cacaca', '#c9c9c9',
      '#c8c8c8', '#cfcfcf', '#cdcdcd',
      '#cdcdcd', '#c9c9c9', '#c5c5c5',
      '#a9a9a9', '#a9a9a9', '#a7a7a7',
      '#cbcbcb', '#cccccc', '#a0a0a0',
      '#a9a9a9'
    ],
    [
      '#a9a9a9', '#a9a9a9', '#a9a9a9',
      '#a6a6a6', '#d0d0d0', '#d0d0d0',
      '#cfcfcf', '#cfcfcf', '#aaaaaa',
      '#aaaaaa', '#a9a9a9', '#a9a9a9',
      '#a8a8a8', '#a6a6a6', '#a4a4a4',
      '#a3a3a3', '#a9a9a9', '#a8a8a8',
      '#a7a7a7', '#a5a5a5', '#a1a1a1',
      '#a8a8a8', '#a9a9a9', '#a7a7a7',
      '#a6a6a6', '#a7a7a7', '#a0a0a0',
      '#a8a8a8'
    ],
    [
      '#ababab', '#ababab', '#acacac',
      '#a9a9a9', '#adadad', '#adadad',
      '#adadad', '#acacac', '#ababab',
      '#ababab', '#aaaaaa', '#aaaaaa',
      '#a9a9a9', '#a7a7a7', '#a5a5a5',
      '#a5a5a5', '#ababab', '#a9a9a9',
      '#a9a9a9', '#a6a6a6', '#a3a3a3',
      '#ababab', '#ababab', '#a9a9a9',
      '#a7a7a7', '#a8a8a8', '#a2a2a2',
      '#ababab'
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

export default DungeonTwo;