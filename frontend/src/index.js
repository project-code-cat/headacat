import { AppRegistry } from 'react-native';
import App from './App'; // 메인 App 컴포넌트 경로를 확인하세요

AppRegistry.registerComponent('main', () => App);

if (window === undefined) {
  // React Native 환경
} else {
  // 웹 환경
  AppRegistry.runApplication('main', {
    initialProps: {},
    rootTag: document.getElementById('root')
  });
} 