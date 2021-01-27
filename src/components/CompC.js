import React from 'react'
import { FirstName } from '../App'

const CompC = () => {
    return (
        <div>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <div>
                            <h1>Hey {fname} its component C.</h1>
                            <h2>Its a example of Hooks Context.</h2>
                        </div>
                        )
                }}
            </FirstName.Consumer>
        </div>
    )
}

export default CompC;