import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

export default function CouponsTable({ coupons, isCustomizable, type}) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Price</TableCell>
                    {type==='company' && <TableCell>Amount</TableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {coupons.map((value, key) => (
                    <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.title}</TableCell>
                        <TableCell>{value.description}</TableCell>
                        <TableCell>{value.price}</TableCell>
                        {type==='company' && <TableCell>{value.amount}</TableCell>}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
