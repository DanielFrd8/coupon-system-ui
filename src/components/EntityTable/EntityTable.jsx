import React from 'react'
import {
    Button, Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core'
import { fetchData, fetchWithBody, } from '../../api/fetch'
import { useHistory } from 'react-router-dom';
import CustomerRow from '../Customer/CustomerRow';
import CompanyRow from '../Company/CompanyRow';

export default function EntityTable({ cells, type }) {

    const [data, setData] = React.useState(null)
    const [changes, setChanges] = React.useState(true);
    const history = useHistory()

    function getCompanies() {
        fetchData(`http://localhost:8080/admin/${type}/all`)('GET')
            .then(({ content }) =>
                setData(content)
            )
            .catch(error => console.error('!!!', error))
    }

    React.useEffect(() => {
        if (changes) {
            setData([])
            getCompanies()
            setChanges(false);
        }
    }, [changes])

    return (
        <>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {cells.map((cell, key) => (
                            <TableCell key={key}>{cell}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {type === 'company'
                        ? data && data?.map((row, key) => (
                            <CompanyRow company={row} key={key} setChanges={setChanges} />
                        ))
                        : data && data?.map((row, key) => (
                            <CustomerRow customer={row} key={key} setChanges={setChanges} />
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}
