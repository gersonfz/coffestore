import React from "react";
import styles from "./Error404.module.css"
import {Link} from 'react-router-dom'

const Error404 = () =>{
    return(
        <section className={styles.error404}>

            <h1>Error 404</h1>
            <p>Not Found</p>
                <span><Link to="/">Ir a home</Link></span>
        </section>       
    )
}

export default Error404