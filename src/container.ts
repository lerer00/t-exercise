import { Container } from 'inversify';
import { ToDoClient } from './toDoClient'

var DIContainer = new Container();
DIContainer.bind<ToDoClient>(ToDoClient).toSelf();

export default DIContainer;