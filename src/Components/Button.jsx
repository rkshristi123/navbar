import React from "react"

var btndiv={
    marginTop:"15px",
    marginRight:"40px",
    textAlign:"center",
}

var btn={
    backgroundColor:"skyblue",
    borderRadius:"10px",
    border:"none",
    height:"25px",
    color:"white"
}
const Button = () =>{
    return(
        <div style={btndiv}>
            <button style={btn}>Contact</button>
        </div>
    );
}

export default Button