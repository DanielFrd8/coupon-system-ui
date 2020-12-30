import React from 'react'
import { Button, makeStyles, TextField, } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
}))

export default function CompanySignup({ companyFields, onClick,buttonText,}) {
    const classes = useStyles()
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [pwdConfirm, setPwdConfirm] = React.useState('')

    return (
        <div className={classes.container}>
            <TextField
                label="name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <TextField
                label="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <TextField
                label="confirm password"
                value={pwdConfirm}
                onChange={e => setPwdConfirm(e.target.value)}
            />
            <Button 
                onClick={onClick}
            >
                {buttonText}
            </Button>
        </div>
    )
}
