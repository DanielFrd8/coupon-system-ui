import React from 'react'
import { useRedirectByJwt } from '../../hooks/useAuth'
import NavBar from '../Navigation/NavBar'
import adminMenu from './adminMenu';
import { useHistory, Router, Switch, Route } from 'react-router-dom';

export default function Admin(props) {
    useRedirectByJwt()
    const history = useHistory()

    return (
        <>
            <NavBar
                items={adminMenu}
            />
            <Router history={history} >
                <Switch>
                    {/* <Route exact path="/company/add" component={} /> */}
                </Switch>
            </Router>
        </>
    )
}
