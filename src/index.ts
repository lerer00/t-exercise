import 'reflect-metadata';
import DIContainer from './container';
import { ApiManager } from './apiManager';

const apiManager: ApiManager = DIContainer.resolve<ApiManager>(ApiManager);

var x = apiManager.fetchData();

console.log(x);