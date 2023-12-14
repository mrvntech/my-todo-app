import { ActionType, DispatchContext, RootContext, Task } from "@/store/TodoList";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useContext, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
interface Props {
    setTask: Function
    setAction: Function
    openDialog: Function
}

export default function TodoList(props: Props) {
    const todoList = useContext(RootContext)
    const dispatch = useContext(DispatchContext)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">State</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todoList?.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.state}</TableCell>
                            <TableCell align="center">
                                <DeleteIcon sx={{ color: 'blue' }} onClick={() => {
                                    props.setTask(row)
                                    props.setAction(ActionType.delete)
                                    props.openDialog(true)
                                }} />
                                <UpdateIcon sx={{ color: 'blue' }} onClick={() => {
                                    props.setTask(row)
                                    props.setAction(ActionType.update)
                                    props.openDialog(true)
                                }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}