import React from 'react'

import { HashRouter, Route, Redirect } from 'react-router-dom'

import PageHome from '../pages/home/pageHome'
import PageAbout from '../pages/about/index'
import PageServices from '../pages/services/index'

export default function Routes() {
    return (
        
        <HashRouter>
            <Route exact path='/' component={PageHome} />
            <Route exact path='/about' component={PageAbout} />
            <Route exact path='/services' component={PageServices} />

 
            <Redirect from='' to='/' />
        </HashRouter>
        
        /*
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/about" component={About} />
                <Route path="/form" component={Form} />
                <Route path="/scheduling" component={Scheduling} />
            </Switch>
        </BrowserRouter>
        */

    )
}