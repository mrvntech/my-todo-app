import DefaultLayout from "@/components/layout/DefaultLayout";
import { ActionType, RootContext, Task } from "@/store/TodoList";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import TodoListComponent from "@/components/pages/TodoList";
import TaskDialog from "@/components/pages/TaskDialog";
import PreviousList from "@/components/pages/PreviousList";
import usePreviousValue from "@/utils/UsePrevious";

export default function TodoList() {
    const [task, setTask] = useState<Task>()
    const [action, setAction] = useState<ActionType>()
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    function openDialog() {
        setIsOpenDialog(true)
    }
    function closeDialog() {
        setIsOpenDialog(false)
    }

    // const { updatePreviousValue } = usePreviousValue()
    // const rootContext = useContext(RootContext)
    useEffect(() => {
        console.log('werwqiesladf');

    })

    return (
        <DefaultLayout>
            <div>this is todo list</div>
            <TodoListComponent setTask={setTask} setAction={setAction} openDialog={setIsOpenDialog} />
            this is previous list
            <PreviousList></PreviousList>
            {
                task ?
                    <TaskDialog open={isOpenDialog} setIsOpenDialog={setIsOpenDialog} task={task as Task} action={action as ActionType} setTask={setTask} setAction={setAction}></TaskDialog> : <></>
            }

        </DefaultLayout>
    )
}