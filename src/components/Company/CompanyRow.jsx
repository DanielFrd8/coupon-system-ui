import { Box, Button, Collapse, IconButton, TableCell, TableRow, TextField, Typography } from '@material-ui/core'
import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CouponsTable from '../Coupons/CouponsTable';
import {fetchData,fetchWithBody} from '../../api/fetch'

export default function CompanyRow({ company, setChanges }) {

    const [open, setOpen] = React.useState(false)
    const [email, setEmail] = React.useState(company?.email)
    const [password, setPassword] = React.useState(company?.password)

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{company?.id}</TableCell>
                <TableCell>{company?.name}</TableCell>
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
                <TableCell>{company?.coupons?.length}</TableCell>
                <TableCell>
                    <Button
                        variant="outlined"
                        onClick={() => { 
                            fetchWithBody('http://localhost:8080/admin/company/update',{
                                email,
                                password,
                                id:company?.id
                            })('PUT')
                            setChanges(true)
                        }}>
                        edit
                    </Button>
                    <Button 
                    variant="outlined"
                    onClick={() => {
                        fetchData(`http://localhost:8080/admin/company/delete/${company?.id}`)('DELETE')
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
                            <CouponsTable coupons={company?.coupons} isCustomizable={false} />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}
