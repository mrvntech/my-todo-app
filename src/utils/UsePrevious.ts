import { Task } from "@/store/TodoList";
import { useRef } from "react";

export default function usePreviousValue() {
    const previousValue = useRef<Task[] | null>(null)
    function updatePreviousValue(newValue: Task[] | null) {
        console.log(newValue);
        previousValue.current = newValue
    }
    return {
        previousValue,
        updatePreviousValue
    };
}