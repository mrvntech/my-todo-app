import { DispatchContext, PreviousValueContext, RootContext, reducer } from "@/store/TodoList";
import usePreviousValue from "@/utils/UsePrevious";
import { ReactNode, useContext, useReducer } from "react";

export default function DefaultLayout({ children }: { children?: ReactNode }) {
    const [todoList, dispatch] = useReducer(reducer, [{ id: 1, name: 'wakeup', state: 'done' }])
    const { previousValue, updatePreviousValue } = usePreviousValue()

    return (
        <RootContext.Provider value={todoList}>
            <DispatchContext.Provider value={dispatch}>
                <PreviousValueContext.Provider value={{ previousValue: previousValue.current, updatePreviousValue }}>
                    {children}
                </PreviousValueContext.Provider>
            </DispatchContext.Provider>
        </RootContext.Provider>
    )
}