import Square from '../common/Square';
import '../../styles/Dungeon.css';

const DungeonThree = () => {
  const matrix = [
    [
      '#9c9c9c', '#a7a7a7', '#9d9d9d',
      '#9e9e9e', '#a2a2a2', '#a7a7a7',
      '#a1a1a1', '#a8a8a8', '#a4a4a4',
      '#a2a2a2', '#a6a6a6', '#a8a8a8',
      '#a8a8a8', '#a5a5a5', '#a7a7a7',
      '#9e9e9e', '#a8a8a8', '#a7a7a7',
      '#a7a7a7', '#a1a1a1', '#a0a0a0',
      '#a1a1a1', '#a7a7a7', '#a2a2a2',
      '#9f9f9f', '#9d9d9d', '#9b9b9b',
      '#9c9c9c'
    ],
    [
      '#a2a2a2', '#aeaeae', '#a3a3a3',
      '#a3a3a3', '#a7a7a7', '#adadad',
      '#a7a7a7', '#afafaf', '#aaaaaa',
      '#a8a8a8', '#acacac', '#aeaeae',
      '#aeaeae', '#ababab', '#adadad',
      '#a3a3a3', '#aeaeae', '#adadad',
      '#adadad', '#a7a7a7', '#a5a5a5',
      '#a7a7a7', '#adadad', '#a7a7a7',
      '#a5a5a5', '#a3a3a3', '#a1a1a1',
      '#a2a2a2'
    ],
    [
      '#9e9e9e', '#a9a9a9', '#9f9f9f',
      '#a0a0a0', '#a5a5a5', '#aaaaaa',
      '#a4a4a4', '#ababab', '#a7a7a7',
      '#a5a5a5', '#a9a9a9', '#ababab',
      '#ababab', '#a8a8a8', '#aaaaaa',
      '#a1a1a1', '#ababab', '#aaaaaa',
      '#aaaaaa', '#a4a4a4', '#a3a3a3',
      '#a4a4a4', '#a9a9a9', '#a3a3a3',
      '#a0a0a0', '#9f9f9f', '#9d9d9d',
      '#9e9e9e'
    ],
    [
      '#aaaaaa', '#b6b6b6', '#ababab',
      '#d3d3d3', '#d8d8d8', '#e0e0e0',
      '#d8d8d8', '#e1e1e1', '#dcdcdc',
      '#d9d9d9', '#dfdfdf', '#e1e1e1',
      '#e1e1e1', '#dddddd', '#dfdfdf',
      '#d3d3d3', '#e1e1e1', '#dfdfdf',
      '#dfdfdf', '#d8d8d8', '#d6d6d6',
      '#d8d8d8', '#b6b6b6', '#b0b0b0',
      '#adadad', '#ababab', '#a9a9a9',
      '#aaaaaa'
    ],
    [
      '#9e9e9e', '#aaaaaa', '#a0a0a0',
      '#c5c5c5', '#a4a4a4', '#aaaaaa',
      '#a4a4a4', '#ababab', '#a7a7a7',
      '#a5a5a5', '#a9a9a9', '#d2d2d2',
      '#ababab', '#a7a7a7', '#a9a9a9',
      '#a0a0a0', '#ababab', '#a9a9a9',
      '#a9a9a9', '#a4a4a4', '#a2a2a2',
      '#cacaca', '#aaaaaa', '#a4a4a4',
      '#c6c6c6', '#c5c5c5', '#c2c2c2',
      '#9e9e9e'
    ],
    [
      '#9b9b9b', '#a7a7a7', '#9d9d9d',
      '#c1c1c1', '#a1a1a1', '#a7a7a7',
      '#a1a1a1', '#a8a8a8', '#a4a4a4',
      '#a1a1a1', '#a6a6a6', '#cecece',
      '#a7a7a7', '#a4a4a4', '#a6a6a6',
      '#9d9d9d', '#a8a8a8', '#a6a6a6',
      '#a6a6a6', '#a1a1a1', '#9f9f9f',
      '#c6c6c6', '#a7a7a7', '#a1a1a1',
      '#c3c3c3', '#c1c1c1', '#bebebe',
      '#9c9c9c'
    ],
    [
      '#a7a7a7', '#b4b4b4', '#a9a9a9',
      '#d0d0d0', '#adadad', '#b4b4b4',
      '#d5d5d5', '#dedede', '#d9d9d9',
      '#aeaeae', '#dcdcdc', '#dedede',
      '#dedede', '#b1b1b1', '#dcdcdc',
      '#d0d0d0', '#dedede', '#b3b3b3',
      '#dcdcdc', '#d5d5d5', '#ababab',
      '#d5d5d5', '#dddddd', '#d5d5d5',
      '#d2d2d2', '#d0d0d0', '#cdcdcd',
      '#a8a8a8'
    ],
    [
      '#9d9d9d', '#a9a9a9', '#9f9f9f',
      '#c4c4c4', '#a3a3a3', '#a9a9a9',
      '#c9c9c9', '#d1d1d1', '#cccccc',
      '#a4a4a4', '#cfcfcf', '#d1d1d1',
      '#d1d1d1', '#cdcdcd', '#cfcfcf',
      '#c4c4c4', '#d1d1d1', '#cfcfcf',
      '#cfcfcf', '#c8c8c8', '#a1a1a1',
      '#c9c9c9', '#a9a9a9', '#a3a3a3',
      '#c5c5c5', '#c4c4c4', '#c1c1c1',
      '#9e9e9e'
    ],
    [
      '#a2a2a2', '#aeaeae', '#a4a4a4',
      '#cacaca', '#a8a8a8', '#aeaeae',
      '#cfcfcf', '#d8d8d8', '#d3d3d3',
      '#a9a9a9', '#d5d5d5', '#d7d7d7',
      '#d7d7d7', '#acacac', '#d6d6d6',
      '#cacaca', '#d8d8d8', '#adadad',
      '#d5d5d5', '#cfcfcf', '#a6a6a6',
      '#cfcfcf', '#aeaeae', '#a8a8a8',
      '#cbcbcb', '#cacaca', '#c7c7c7',
      '#a3a3a3'
    ],
    [
      '#9e9e9e', '#a9a9a9', '#9f9f9f',
      '#c4c4c4', '#a3a3a3', '#a9a9a9',
      '#a4a4a4', '#d2d2d2', '#a7a7a7',
      '#a4a4a4', '#a8a8a8', '#d1d1d1',
      '#aaaaaa', '#a7a7a7', '#a9a9a9',
      '#a0a0a0', '#ababab', '#a9a9a9',
      '#a8a8a8', '#a3a3a3', '#a1a1a1',
      '#c9c9c9', '#a9a9a9', '#a3a3a3',
      '#a1a1a1', '#9f9f9f', '#9d9d9d',
      '#9e9e9e'
    ],
    [
      '#a9a9a9', '#b6b6b6', '#ababab',
      '#d2d2d2', '#afafaf', '#b5b5b5',
      '#d7d7d7', '#e1e1e1', '#dbdbdb',
      '#b0b0b0', '#b4b4b4', '#e0e0e0',
      '#b6b6b6', '#b3b3b3', '#dedede',
      '#d3d3d3', '#e1e1e1', '#b5b5b5',
      '#b5b5b5', '#afafaf', '#adadad',
      '#d7d7d7', '#b6b6b6', '#afafaf',
      '#acacac', '#ababab', '#a8a8a8',
      '#a9a9a9'
    ],
    [
      '#a1a1a1', '#adadad', '#a2a2a2',
      '#c8c8c8', '#a7a7a7', '#acacac',
      '#cdcdcd', '#d6d6d6', '#d1d1d1',
      '#cecece', '#d3d3d3', '#d5d5d5',
      '#d5d5d5', '#d1d1d1', '#d3d3d3',
      '#c8c8c8', '#d6d6d6', '#acacac',
      '#acacac', '#a6a6a6', '#a5a5a5',
      '#cdcdcd', '#adadad', '#a7a7a7',
      '#a4a4a4', '#a2a2a2', '#a0a0a0',
      '#a1a1a1'
    ],
    [
      '#9d9d9d', '#a9a9a9', '#9f9f9f',
      '#c4c4c4', '#a3a3a3', '#a9a9a9',
      '#c9c9c9', '#d1d1d1', '#cccccc',
      '#a4a4a4', '#a8a8a8', '#d0d0d0',
      '#a9a9a9', '#a6a6a6', '#cfcfcf',
      '#c4c4c4', '#d1d1d1', '#a8a8a8',
      '#a8a8a8', '#a3a3a3', '#a1a1a1',
      '#c9c9c9', '#a9a9a9', '#a3a3a3',
      '#c5c5c5', '#c3c3c3', '#c1c1c1',
      '#9e9e9e'
    ],
    [
      '#a0a0a0', '#acacac', '#a1a1a1',
      '#c7c7c7', '#a6a6a6', '#acacac',
      '#a6a6a6', '#adadad', '#a9a9a9',
      '#a6a6a6', '#ababab', '#d4d4d4',
      '#acacac', '#a9a9a9', '#ababab',
      '#c7c7c7', '#adadad', '#ababab',
      '#d2d2d2', '#cccccc', '#a4a4a4',
      '#cccccc', '#acacac', '#a6a6a6',
      '#c9c9c9', '#c7c7c7', '#c4c4c4',
      '#a0a0a0'
    ],
    [
      '#a0a0a0', '#acacac', '#a1a1a1',
      '#c7c7c7', '#a5a5a5', '#acacac',
      '#cccccc', '#d5d5d5', '#d0d0d0',
      '#a6a6a6', '#ababab', '#d4d4d4',
      '#acacac', '#a9a9a9', '#d2d2d2',
      '#c7c7c7', '#d5d5d5', '#ababab',
      '#d2d2d2', '#cbcbcb', '#a4a4a4',
      '#cccccc', '#d3d3d3', '#cccccc',
      '#c9c9c9', '#7d7c7b', '#c3c3c3',
      '#a0a0a0'
    ],
    [
      '#a5a5a5', '#b1b1b1', '#a6a6a6',
      '#cdcdcd', '#d2d2d2', '#d9d9d9',
      '#d2d2d2', '#dadada', '#d5d5d5',
      '#d2d2d2', '#d8d8d8', '#dadada',
      '#b1b1b1', '#aeaeae', '#d8d8d8',
      '#cdcdcd', '#dbdbdb', '#d8d8d8',
      '#d8d8d8', '#aba1a2', '#a9a9a9',
      '#d2d2d2', '#b1b1b1', '#aaaaaa',
      '#cecece', '#cccccc', '#cacaca',
      '#a5a5a5'
    ],
    [
      '#a0a0a0', '#acacac', '#a2a2a2',
      '#c7c7c7', '#a6a6a6', '#acacac',
      '#cccccc', '#d5d5d5', '#d0d0d0',
      '#a7a7a7', '#ababab', '#d4d4d4',
      '#adadad', '#a9a9a9', '#d2d2d2',
      '#c7c7c7', '#d5d5d5', '#ababab',
      '#d3d3d3', '#cccccc', '#a4a4a4',
      '#cccccc', '#acacac', '#a6a6a6',
      '#c9c9c9', '#c7c7c7', '#c4c4c4',
      '#a1a1a1'
    ],
    [
      '#aaaaaa', '#b6b6b6', '#ababab',
      '#d3d3d3', '#afafaf', '#b6b6b6',
      '#afafaf', '#b7b7b7', '#b3b3b3',
      '#b0b0b0', '#b5b5b5', '#e0e0e0',
      '#b7b7b7', '#b3b3b3', '#b5b5b5',
      '#ababab', '#b7b7b7', '#b5b5b5',
      '#dfdfdf', '#d8d8d8', '#adadad',
      '#d8d8d8', '#b6b6b6', '#afafaf',
      '#adadad', '#ababab', '#a9a9a9',
      '#aaaaaa'
    ],
    [
      '#a3a3a3', '#afafaf', '#a5a5a5',
      '#cbcbcb', '#a9a9a9', '#afafaf',
      '#d0d0d0', '#d9d9d9', '#d4d4d4',
      '#aaaaaa', '#aeaeae', '#d8d8d8',
      '#b0b0b0', '#adadad', '#d7d7d7',
      '#cbcbcb', '#d9d9d9', '#afafaf',
      '#aeaeae', '#a9a9a9', '#a7a7a7',
      '#d0d0d0', '#afafaf', '#a9a9a9',
      '#a6a6a6', '#a5a5a5', '#a2a2a2',
      '#a4a4a4'
    ],
    [
      '#a6a6a6', '#b2b2b2', '#a7a7a7',
      '#cecece', '#acacac', '#b2b2b2',
      '#d3d3d3', '#dcdcdc', '#d7d7d7',
      '#d4d4d4', '#d9d9d9', '#dcdcdc',
      '#dcdcdc', '#d8d8d8', '#dadada',
      '#cecece', '#dcdcdc', '#b1b1b1',
      '#b1b1b1', '#ababab', '#aaaaaa',
      '#d3d3d3', '#b2b2b2', '#acacac',
      '#d0d0d0', '#cecece', '#cbcbcb',
      '#a6a6a6'
    ],
    [
      '#a8a8a8', '#b5b5b5', '#aaaaaa',
      '#d1d1d1', '#aeaeae', '#b4b4b4',
      '#d6d6d6', '#e0e0e0', '#dadada',
      '#afafaf', '#b4b4b4', '#dfdfdf',
      '#b5b5b5', '#b2b2b2', '#dddddd',
      '#d1d1d1', '#e0e0e0', '#b4b4b4',
      '#dddddd', '#d6d6d6', '#acacac',
      '#d7d7d7', '#b5b5b5', '#aeaeae',
      '#d3d3d3', '#d1d1d1', '#cecece',
      '#a9a9a9'
    ],
    [
      '#a7a7a7', '#b3b3b3', '#a8a8a8',
      '#cfcfcf', '#adadad', '#b3b3b3',
      '#adadad', '#b4b4b4', '#b0b0b0',
      '#adadad', '#dbdbdb', '#dddddd',
      '#dddddd', '#b0b0b0', '#b2b2b2',
      '#a9a9a9', '#b4b4b4', '#b2b2b2',
      '#dbdbdb', '#d4d4d4', '#d2d2d2',
      '#d4d4d4', '#dcdcdc', '#d4d4d4',
      '#d1d1d1', '#cfcfcf', '#cccccc',
      '#a7a7a7'
    ],
    [
      '#9b9b9b', '#a7a7a7', '#9d9d9d',
      '#c1c1c1', '#a1a1a1', '#a7a7a7',
      '#a1a1a1', '#a8a8a8', '#a4a4a4',
      '#a1a1a1', '#cccccc', '#cecece',
      '#cecece', '#a4a4a4', '#a6a6a6',
      '#9d9d9d', '#a8a8a8', '#a6a6a6',
      '#cccccc', '#c6c6c6', '#9f9f9f',
      '#c6c6c6', '#a7a7a7', '#a1a1a1',
      '#c3c3c3', '#c1c1c1', '#bebebe',
      '#9c9c9c'
    ],
    [
      '#9d9d9d', '#a9a9a9', '#9e9e9e',
      '#c3c3c3', '#a3a3a3', '#a8a8a8',
      '#a3a3a3', '#aaaaaa', '#a6a6a6',
      '#a3a3a3', '#a8a8a8', '#a9a9a9',
      '#a9a9a9', '#a6a6a6', '#a8a8a8',
      '#9f9f9f', '#aaaaaa', '#a8a8a8',
      '#a8a8a8', '#a2a2a2', '#a1a1a1',
      '#c8c8c8', '#a9a9a9', '#a3a3a3',
      '#c5c5c5', '#c3c3c3', '#c0c0c0',
      '#9d9d9d'
    ],
    [
      '#a9a9a9', '#b5b5b5', '#aaaaaa',
      '#d2d2d2', '#d7d7d7', '#dedede',
      '#d7d7d7', '#e0e0e0', '#dbdbdb',
      '#d7d7d7', '#dddddd', '#dfdfdf',
      '#e0e0e0', '#dbdbdb', '#dddddd',
      '#d2d2d2', '#e0e0e0', '#dddddd',
      '#dddddd', '#d6d6d6', '#d4d4d4',
      '#d7d7d7', '#b5b5b5', '#afafaf',
      '#acacac', '#aaaaaa', '#a8a8a8',
      '#a9a9a9'
    ],
    [
      '#a3a3a3', '#afafaf', '#a5a5a5',
      '#a5a5a5', '#a9a9a9', '#afafaf',
      '#a9a9a9', '#b1b1b1', '#acacac',
      '#aaaaaa', '#aeaeae', '#b0b0b0',
      '#b0b0b0', '#adadad', '#afafaf',
      '#a5a5a5', '#b1b1b1', '#afafaf',
      '#afafaf', '#a9a9a9', '#a7a7a7',
      '#a9a9a9', '#afafaf', '#a9a9a9',
      '#a6a6a6', '#a5a5a5', '#a2a2a2',
      '#a3a3a3'
    ],
    [
      '#9f9f9f', '#aaaaaa', '#a0a0a0',
      '#a0a0a0', '#a4a4a4', '#aaaaaa',
      '#a4a4a4', '#ababab', '#a7a7a7',
      '#a5a5a5', '#a9a9a9', '#ababab',
      '#ababab', '#a8a8a8', '#a9a9a9',
      '#a0a0a0', '#ababab', '#a9a9a9',
      '#a9a9a9', '#a4a4a4', '#a2a2a2',
      '#a4a4a4', '#aaaaaa', '#a4a4a4',
      '#a2a2a2', '#a0a0a0', '#9e9e9e',
      '#9f9f9f'
    ],
    [
      '#9c9c9c', '#a7a7a7', '#9d9d9d',
      '#9d9d9d', '#a1a1a1', '#a7a7a7',
      '#a1a1a1', '#a8a8a8', '#a4a4a4',
      '#a2a2a2', '#a6a6a6', '#a8a8a8',
      '#a8a8a8', '#a5a5a5', '#a7a7a7',
      '#9e9e9e', '#a8a8a8', '#a6a6a6',
      '#a6a6a6', '#a1a1a1', '#a0a0a0',
      '#a1a1a1', '#a7a7a7', '#a1a1a1',
      '#9f9f9f', '#9d9d9d', '#9b9b9b',
      '#9c9c9c'
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

export default DungeonThree;