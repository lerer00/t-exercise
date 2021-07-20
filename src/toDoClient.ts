import { injectable } from 'inversify';
import axios from 'axios';

@injectable()
export class ToDoClient {
    private readonly url: string = 'https://jsonplaceholder.typicode.com/todos';

    public async fetchData(): Promise<string> {
        const response = await axios.get(this.url);

        return response.data;
    }
}