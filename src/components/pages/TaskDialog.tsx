import { ActionType, DispatchContext, PreviousValueContext, RootContext, Task } from "@/store/TodoList";
import { Dialog, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
interface Props {
    open: boolean,
    task: Task,
    action: ActionType,
    setIsOpenDialog: Function,
    setTask: Function,
    setAction: Function
}

export default function TaskDialog(props: Props) {
    const dispatch = useContext(DispatchContext);
    const [id, setId] = useState<number>();
    const [name, setName] = useState<string>();
    const [state, setState] = useState<string>();
    useEffect(() => {
        setId(props.task.id)
        setName(props.task.name)
        setState(props.task.state)
    }, [])
    function handleClose() {
        props.setIsOpenDialog(false)
        props.setTask(undefined)
        props.setAction(undefined)
    }
    const previousContext = useContext(PreviousValueContext)
    const rootContext = useContext(RootContext)
    useEffect(() => {
        return () => {
            console.log('sadfasdf', rootContext);
            previousContext?.updatePreviousValue(rootContext ? [...rootContext] : null)
        }
    })
    return (
        <Dialog
            open={props.open}
            keepMounted
            onClose={handleClose}
        >
            {
                props.action == ActionType.delete ? <>
                    <DialogContent>
                        <div>delete task</div>
                        <div>Task Id: {props?.task?.id}</div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>cancel</Button>
                        <Button onClick={() => {
                            dispatch ? dispatch({ type: ActionType.delete, id: props?.task?.id }) : alert('error')
                            handleClose()
                        }}>delete</Button>
                    </DialogActions>
                </> : <>
                    <DialogContent>
                        <div>update task</div>
                        <TextField
                            label="Id"
                            type='number'
                            defaultValue={props.task.id}
                            onChange={(e) => setId(e.target.value as any)}
                        />
                        <TextField
                            label="Name"
                            defaultValue={props.task.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="State"
                            defaultValue={props.task.state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>cancel</Button>
                        <Button onClick={() => {
                            dispatch ? dispatch({ type: ActionType.update, id: id, name: name, state: state }) : alert('error')
                            handleClose()
                        }}>update</Button>
                    </DialogActions>
                </>
            }
        </Dialog>
    )
}