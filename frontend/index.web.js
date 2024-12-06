import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('App', () => App);

if (window === undefined) {
  AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
