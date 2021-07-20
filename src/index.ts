import 'reflect-metadata';
import DIContainer from './container';
import { ApiManager } from './apiManager';

const apiManager: ApiManager = DIContainer.resolve<ApiManager>(ApiManager);

apiManager.fetchData().then(d => {
    console.log(d);
});