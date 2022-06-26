import React from "react";
import styles from "./Error404.module.css"
import {Link} from 'react-router-dom'

const Error404 = () =>{
    return(
        <section className={styles.error404}>

            <h2>Error 404</h2>
            <p>Not Found</p>
            <Link to="/">Ir a home</Link>
        </section>       
    )
}

export default Error404