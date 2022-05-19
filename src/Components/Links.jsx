import React from "react"

var linkbox={
    display:"flex",
    justifyContent:"space-evenly",
    margin:"auto",
    width:"30%",
    color:"white"
  
  }

const Links=() =>{
    var arr=["Services","Projects","About"]
    
    
    return(
        <div style={linkbox}>
       <div>{arr[0]}</div>
       <div>{arr[1]}</div>
       <div>{arr[2]}</div>
        </div>
    )

}

export default Links