import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import { fetchWithBody, } from '../../api/fetch'
import CompanySignup from '../Company/CompanySignup'

export default function Signup() {
    const [type, setType] = React.useState('company')

    return (
        <>
            <FormControl>
                <RadioGroup value={type} onChange={e => setType(e.target.value)}>
                    <FormControlLabel value="company" control={<Radio />} label="Company" />
                    <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                </RadioGroup>
            </FormControl>

            {type === 'company' ? <CompanySignup/> : <p></p>}
        </>
    )
}
