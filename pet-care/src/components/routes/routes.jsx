import React from 'react'

import { HashRouter, Route, Redirect } from 'react-router-dom'

import PageHome from '../pages/home/pageHome'
import PageAbout from '../pages/about/index'
import PageServices from '../pages/services/index'
import PageBrushing from '../pages/brushing/index'
import ScrollToTop from '../scrollToTop/index'
import PageVaccination from '../pages/vaccination/index'
import PageBehavioral from '../pages/behavioral'
import PageCheckup from '../pages/checkup/index'
import PagePainTherapy from '../pages/therapy/index'
import PageDentalCare from '../pages/dental/index'
import Menu from '../../components/header/Header'


export default function Routes() {
    return (

        <HashRouter>
            <ScrollToTop />

            <Route exact path='/' component={PageHome} />
            <Route exact path='/' component={Menu} />
            <Route exact path='/about' component={PageAbout} />
            <Route exact path='/services' component={PageServices} />
            <Route exact path='/brushing' component={PageBrushing} />
            <Route exact path='/vaccination' component={PageVaccination} />
            <Route exact path='/behavioral' component={PageBehavioral} />
            <Route exact path='/checkup' component={PageCheckup} />
            <Route exact path='/pain-therapy' component={PagePainTherapy} />
            <Route exact path='/dental' component={PageDentalCare} />

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