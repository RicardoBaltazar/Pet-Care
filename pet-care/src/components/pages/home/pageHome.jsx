import React from 'react'
import './pageHome.css'

import HomeTitle from '../../homeTitle/index'
import HomeAbout from '../../homeAbout/index'
import HomeServices from '../../homeServices/index'
import ImageClients from '../../imageClients/index'
import DepositionsClients from '../../depositionsClients/index'
import Form from '../../form/Form'




export default function PageHome() {
    return (
        <>
            <main>
                <HomeTitle  />
                <HomeAbout />
                <HomeServices />
                <ImageClients />
                <DepositionsClients />
                <Form />
            </main>
        </>
    )
}