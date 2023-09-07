export default {
  preset: 'react-scripts',
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.css$': 'jest-css-modules-transform',
  },
};
