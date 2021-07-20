import { inject, injectable } from 'inversify';
import { ToDoClient } from './toDoClient';

export interface IApiManager {
    fetchData: Function;
}

@injectable()
export class ApiManager implements IApiManager {
    protected toDoClient: ToDoClient;

    constructor(@inject(ToDoClient) toDoClient: ToDoClient) {
        this.toDoClient = toDoClient;
    }

    public async fetchData(): Promise<string> {
        const response = await this.toDoClient.fetchData();

        return response;
    }
};