import { DispatchContext, RootContext, reducer } from "@/store/TodoList";
import { ReactNode, useContext, useReducer } from "react";

export default function DefaultLayout({ children }: { children?: ReactNode }) {
    const [todoList, dispatch] = useReducer(reducer, [{ id: 1, name: 'wakeup', state: 'done' }])
    console.log(todoList);

    return (
        <RootContext.Provider value={todoList}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </RootContext.Provider>
    )
}