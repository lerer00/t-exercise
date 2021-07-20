import "reflect-metadata";
import { Container } from "inversify";
import { ApiManager } from './apiManager';
import { ToDoClient } from "./toDoClient";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);

const todosMockAnswer = 'This is a mocked answer from injected client.';
mock.onGet('https://jsonplaceholder.typicode.com/todos').reply(200, todosMockAnswer);

test('make sure ToDoClient is injected correctly in ApiManager.', () => {
    const container = new Container();
    container.bind<ApiManager>(ApiManager).toSelf();
    container.bind<ToDoClient>(ToDoClient).toSelf();

    const apiManager = container.get<ApiManager>(ApiManager);

    apiManager.fetchData().then((d) => {
        expect(d).toBe(todosMockAnswer);
    });
})