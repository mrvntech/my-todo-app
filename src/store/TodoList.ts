import { Dispatch, createContext } from "react";

export function reducer(todoList: Task[], action: { type: ActionType, id?: number, name?: string, state?: string }): Task[] {
    switch (action.type) {
        case ActionType.add:
            return [...todoList, { id: action.id ?? todoList.length, name: action.name as string, state: action.state as string }]
        case ActionType.delete:
            return todoList.filter(task => task.id != action.id)
        case ActionType.update:
            return todoList.map(task => {
                if (task.id == action.id) return { id: action.id, name: action.name as string, state: action.state as string }
                return task;
            })
        default:
            return todoList;
    }
}

export interface Task {
    id: number,
    name: string,
    state: string
}

export enum ActionType {
    add = 'add',
    delete = 'delete',
    update = 'update'
}

export const RootContext = createContext<Task[] | null>(null);

export const DispatchContext = createContext<Dispatch<{ type: ActionType, id?: number, name?: string, state?: string }> | null>(null)