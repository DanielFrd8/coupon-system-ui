import { Box, Button, Collapse, IconButton, TableCell, TableRow, TextField, Typography } from '@material-ui/core'
import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CouponsTable from '../Coupons/CouponsTable';
import {fetchData,fetchWithBody} from '../../api/fetch'

export default function CustomerRow({ customer, setChanges }) {

    const [open, setOpen] = React.useState(false)
    const [email, setEmail] = React.useState(customer?.email)
    const [password, setPassword] = React.useState(customer?.password)

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{customer?.id}</TableCell>
                <TableCell>{customer?.firstName}</TableCell>
                <TableCell>{customer?.lastName}</TableCell>
                <TableCell>
                    <TextField
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </TableCell>
                <TableCell>{customer?.coupons?.length}</TableCell>
                <TableCell>
                    <Button
                        variant="outlined"
                        onClick={() => { 
                            fetchWithBody('http://localhost:8080/admin/customer/update',{
                                firstName: customer?.firstName,
                                lastName: customer?.lastName,
                                email,
                                password,
                                id:customer?.id
                            })('PUT')
                            setChanges(true)
                        }}>
                        edit
                    </Button>
                    <Button 
                    variant="outlined"
                    onClick={() => {
                        fetchData(`http://localhost:8080/admin/company/delete/${customer?.id}`)('DELETE')
                        setChanges(true)
                    }}>
                        delete
                    </Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Coupons
                            </Typography>
                            <CouponsTable coupons={customer?.coupons} isCustomizable={false} />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}
