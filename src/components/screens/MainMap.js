import assignValuesToMatrix from '../common/MatrixUtils';
import MatrixDisplayMainMap from '../common/MatrixDisplayMainMap';
import '../../styles/MainMap.css';

const coust = {
  '#92D050': 10,
  '#C4BC96': 20,
  '#00B050': 100,
  '#948A54': 150,
  '#548DD4': 180
};

const matrix = [
  [
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#00B050', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54'
  ],
  [
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54'
  ],
  [
    '#00B050', '#ffff00', '#92D050', '#00B050',
    '#92D050', '#00B050', '#00B050', '#00B050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#00B050',
    '#92D050', '#92D050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#00B050', '#00B050', '#00B050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#C4BC96', '#948A54', '#948A54', '#C4BC96',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54'
  ],
  [
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#92D050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#00B050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#C4BC96', '#948A54', '#948A54', '#C4BC96',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54'
  ],
  [
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#00B050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#00B050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#92D050', '#92D050', '#948A54',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54'
  ],
  [
    '#00B050', '#00B050', '#92D050', '#00B050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#00B050',
    '#92D050', '#92D050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#000000', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54'
  ],
  [
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#000000', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#00B050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54'
  ],
  [
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#00B050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54'
  ],
  [
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#00B050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#00B050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#92D050', '#92D050', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54'
  ],
  [
    '#00B050', '#92D050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#00B050',
    '#92D050', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#92D050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#948A54', '#948A54', '#948A54',
    '#C4BC96', '#948A54'
  ],
  [
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#548DD4', '#92D050',
    '#92D050', '#92D050', '#92D050', '#00B050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#948A54', '#948A54', '#948A54',
    '#92D050', '#948A54'
  ],
  [
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#548DD4', '#548DD4', '#548DD4',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#00B050',
    '#00B050', '#00B050', '#00B050', '#92D050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#92D050', '#948A54'
  ],
  [
    '#00B050', '#92D050', '#92D050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#00B050',
    '#92D050', '#00B050', '#92D050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#548DD4', '#548DD4', '#548DD4',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#00B050',
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#548DD4', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#00B050',
    '#92D050', '#00B050', '#92D050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#948A54',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#00B050', '#00B050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#00B050', '#00B050', '#00B050', '#92D050',
    '#00B050', '#00B050', '#92D050', '#948A54',
    '#92D050', '#92D050', '#00B050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#948A54',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#548DD4', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#548DD4', '#548DD4', '#548DD4', '#92D050',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#00B050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#00B050', '#92D050', '#948A54',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#548DD4', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#C4BC96',
    '#C4BC96', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#948A54', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#548DD4', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#548DD4',
    '#92D050', '#00B050', '#00B050', '#00B050',
    '#00B050', '#92D050', '#92D050', '#948A54',
    '#92D050', '#92D050', '#548DD4', '#548DD4',
    '#92D050', '#92D050', '#548DD4', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#C4BC96',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#C4BC96', '#948A54', '#948A54', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#548DD4', '#92D050', '#00B050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#548DD4',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#92D050', '#92D050', '#548DD4', '#548DD4',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#C4BC96',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#C4BC96', '#948A54', '#00B050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#548DD4', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#548DD4',
    '#92D050', '#00B050', '#00B050', '#92D050',
    '#00B050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54', '#948A54', '#948A54',
    '#C4BC96', '#948A54', '#00B050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#548DD4', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#00B050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#00B050', '#00B050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#948A54', '#948A54',
    '#C4BC96', '#948A54', '#00B050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#548DD4', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#00B050', '#00B050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#92D050', '#00B050', '#00B050', '#00B050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#948A54', '#948A54',
    '#C4BC96', '#948A54', '#948A54', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#548DD4', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#548DD4',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#000000', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#948A54', '#948A54',
    '#C4BC96', '#C4BC96', '#948A54', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#548DD4', '#92D050', '#00B050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#548DD4',
    '#92D050', '#92D050', '#92D050', '#ffcbdb',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#948A54'
  ],
  [
    '#948A54', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#948A54', '#948A54',
    '#C4BC96', '#948A54', '#948A54', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#548DD4', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#548DD4',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54'
  ],
  [
    '#948A54', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#948A54', '#948A54',
    '#C4BC96', '#948A54', '#00B050', '#92D050',
    '#92D050', '#00B050', '#92D050', '#92D050',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#92D050', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#948A54', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54', '#948A54', '#948A54',
    '#C4BC96', '#948A54', '#00B050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#548DD4', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#548DD4', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#948A54', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#C4BC96',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#C4BC96', '#C4BC96', '#00B050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#548DD4', '#92D050',
    '#92D050', '#92D050', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#92D050',
    '#92D050', '#548DD4', '#92D050', '#92D050',
    '#92D050', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#C4BC96',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#00B050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#548DD4', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#C4BC96',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#00B050', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#92D050', '#548DD4', '#548DD4', '#92D050',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#92D050', '#92D050', '#92D050',
    '#92D050', '#548DD4', '#92D050', '#92D050',
    '#92D050', '#548DD4', '#948A54', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#C4BC96',
    '#948A54', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#548DD4', '#92D050', '#92D050',
    '#92D050', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#92D050', '#548DD4',
    '#92D050', '#92D050', '#00B050', '#92D050',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#92D050', '#92D050', '#948A54', '#92D050',
    '#92D050', '#548DD4', '#92D050', '#92D050',
    '#92D050', '#548DD4', '#548DD4', '#948A54',
    '#948A54', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#948A54', '#948A54',
    '#948A54', '#948A54', '#92D050', '#548DD4',
    '#00B050', '#92D050', '#92D050', '#92D050',
    '#948A54', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#C4BC96', '#948A54',
    '#92D050', '#92D050', '#948A54', '#92D050',
    '#92D050', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#948A54',
    '#948A54', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#548DD4',
    '#92D050', '#92D050', '#00B050', '#92D050',
    '#948A54', '#C4BC96', '#948A54', '#948A54',
    '#C4BC96', '#948A54', '#C4BC96', '#948A54',
    '#92D050', '#92D050', '#948A54', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#948A54', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#548DD4',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#948A54', '#C4BC96', '#C4BC96', '#948A54',
    '#C4BC96', '#948A54', '#C4BC96', '#C4BC96',
    '#92D050', '#92D050', '#948A54', '#948A54',
    '#948A54', '#948A54', '#92D050', '#948A54',
    '#948A54', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#C4BC96', '#C4BC96', '#C4BC96',
    '#C4BC96', '#C4BC96', '#948A54', '#948A54',
    '#948A54', '#948A54', '#92D050', '#548DD4',
    '#92D050', '#92D050', '#00B050', '#92D050',
    '#948A54', '#C4BC96', '#C4BC96', '#948A54',
    '#C4BC96', '#948A54', '#C4BC96', '#C4BC96',
    '#92D050', '#92D050', '#948A54', '#92D050',
    '#92D050', '#92D050', '#92D050', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#C4BC96', '#C4BC96',
    '#C4BC96', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#92D050', '#548DD4',
    '#92D050', '#00B050', '#00B050', '#92D050',
    '#948A54', '#C4BC96', '#948A54', '#948A54',
    '#C4BC96', '#948A54', '#C4BC96', '#948A54',
    '#92D050', '#92D050', '#948A54', '#92D050',
    '#92D050', '#948A54', '#92D050', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#C4BC96',
    '#948A54', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#948A54', '#C4BC96', '#C4BC96', '#948A54',
    '#C4BC96', '#C4BC96', '#C4BC96', '#948A54',
    '#92D050', '#92D050', '#948A54', '#92D050',
    '#92D050', '#948A54', '#92D050', '#948A54',
    '#948A54', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#C4BC96',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#92D050', '#92D050',
    '#00B050', '#00B050', '#00B050', '#92D050',
    '#948A54', '#000000', '#C4BC96', '#948A54',
    '#C4BC96', '#948A54', '#C4BC96', '#948A54',
    '#92D050', '#92D050', '#948A54', '#92D050',
    '#92D050', '#948A54', '#92D050', '#948A54',
    '#948A54', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#548DD4', '#548DD4', '#548DD4',
    '#548DD4', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#92D050', '#92D050', '#92D050', '#92D050',
    '#948A54', '#C4BC96', '#C4BC96', '#948A54',
    '#C4BC96', '#948A54', '#C4BC96', '#948A54',
    '#92D050', '#92D050', '#948A54', '#92D050',
    '#92D050', '#948A54', '#92D050', '#92D050',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54'
  ],
  [
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54', '#948A54', '#948A54',
    '#948A54', '#948A54'
  ]
];

const matrixWithValues = assignValuesToMatrix(matrix, coust);

const MainMap = () => {
  return (
    <div>
      <MatrixDisplayMainMap matrix={matrixWithValues} />
    </div>
  );
}

export default MainMap;