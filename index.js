import {AppRegistry} from 'react-native';
import AppWrapper from './app/app';
import axios from 'axios';
axios.defaults.baseURL= 'https://api.spacexdata.com/v4';

AppRegistry.registerComponent('SpaceX', () => AppWrapper);
