import React from 'react'
import { useRedirectByJwt } from '../../hooks/useAuth'
import NavBar from '../Navigation/NavBar'
import { useHistory, Router, Switch, Route } from 'react-router-dom';
import EntityTable from '../EntityTable/EntityTable';

export default function Admin(props) {
    useRedirectByJwt()
    const history = useHistory()

    return (
        <>
            <NavBar
                items={['company', 'customer']}
            />
            <Router history={history} >
                <Switch>
                    <Route
                        exact path="/admin/company"
                        render={() =>
                            <EntityTable
                                cells={['', 'ID', 'Name', 'Email', 'Password', 'Coupons', 'Actions']}
                                type="company"
                            />
                        }
                    />
                    <Route
                        exact path="/admin/customer"
                        render={() =>
                            <EntityTable
                                cells={['', 'ID', 'First Name', 'Last Name', 'Email', 'Password', 'Coupons', 'Actions']}
                                type="customer"
                            />
                        }
                    />
                </Switch>
            </Router>
        </>
    )
}
