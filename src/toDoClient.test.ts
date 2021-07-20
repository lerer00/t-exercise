import "reflect-metadata";
import { ToDoClient } from './ToDoClient';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);

const todosMockAnswer = 'This is a mocked answer.';
mock.onGet('https://jsonplaceholder.typicode.com/todos').reply(200, todosMockAnswer);

test('fetchData is mocked on toDoClient', () => {
    let client = new ToDoClient();

    client.fetchData().then((d) => {
        expect(d).toBe(todosMockAnswer);
    });
})