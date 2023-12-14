import usePreviousValue from "@/utils/UsePrevious"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useEffect } from "react"

export default function PreviousList() {
    const { previousValue } = usePreviousValue()
    useEffect(() => {
        console.log('cvnljxvho')
        console.log(previousValue);
    }
    )
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {previousValue.current?.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.state}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}