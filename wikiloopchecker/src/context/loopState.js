import { useState } from "react";
import LoopContext from "./loopContext";
import Alert from "../components/Alert";

const LoopState = (props) =>{

    const [url,setUrl]=useState("");

    const [visitedPages,setVisitedPages]=useState([]);

    const [numberOfReq,setNumberOfReg]=useState(0)

    const sendRequest=async()=>{
        const response = await fetch(`http://localhost:8000/api/reqinfo`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({url})
          });
          const json= await response.json();

          if(response.status===200){
            setNumberOfReg(json.urlCounts);
            setVisitedPages(json.visitedPages)
          }
          else{
                triggerAlert("Url Not Found!")
          }
    }

    let [msg,setmsg]=useState(null)

    const triggerAlert=(msg)=>{
        setmsg(msg)
        setTimeout(() => {
            setmsg(null)
        }, 1500);

    }

    return(
        <LoopContext.Provider value={{url, setUrl, visitedPages, setVisitedPages, numberOfReq, setNumberOfReg, sendRequest}}>
            <Alert msg={msg} />
                { props.children }          
        </LoopContext.Provider>
    )
}

export default LoopState;