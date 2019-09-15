import React from "react"
import {createHistory,LocationProvider} from "@reach/router"
function Support(){
    let history=createHistory(window)
    return(<div>Support Page

<LocationProvider history= {history}>

    {
        console.log(history)
    }
    
</LocationProvider>

    </div>)
}
export default Support