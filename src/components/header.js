import React from 'react'

import style from './header.module.scss'
import Navigation from './navigation'

export default () => (
    <header className={style.header}>
        <h1 className={style.logo}>Shaun Leonardo</h1>
        <Navigation />
    </header>
)
