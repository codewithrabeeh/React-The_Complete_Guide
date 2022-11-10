import React, { Fragment } from 'react'
import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'
// import Layout from './Layout' 

function Layout(props) {
  return (
    <Fragment>
        <MainNavigation />
        <main className={classes.main}>
            {props.children}
        </main>
    </Fragment>
  )
}

export default Layout