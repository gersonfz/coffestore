import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Details = () =>{
    return(
        <>
            <div>
                <h1 style={{color:"black"}}>Detalles</h1>
            </div>
        </>
    )}
const AppRouting = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/details" element={<Details/>}/> {/* localhost:3000/about */}
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouting