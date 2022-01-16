//arithemetic mean method r = Σ(𝑥−𝑥)(𝑦−𝑦)√Σ(𝑥−𝑥)2 Σ(𝑦−𝑦)2 
import React  from 'react'
import './Correlation.css'
import Pr from './Practice/Pr'
import  {correlationText,correlationEquation}  from './text/Text.jsx'
import {useState,useEffect} from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaPlus,FaBusinessTime }  from 'react-icons/fa';






function Correlation() {

    let variables =[{x : 22 , y : 24},{x : 26 , y : 22},{x : 28 , y : 23},{x : 32 , y : 26},{x : 38 , y : 34},{x : 40 , y : 36},{x : 40 , y : 35},{x : 42 , y : 38},{x : 44 , y : 40},{x : 46 , y : 40}] 

    /// calculation of arithemetic mean r = Σ(𝑥−𝑥)(𝑦−𝑦)√Σ(𝑥−𝑥)2 Σ(𝑦−𝑦)2
    let x_mean = variables.reduce((acc, curr) => acc + curr.x, 0) / variables.length
    let y_mean = variables.reduce((acc, curr) => acc + curr.y, 0) / variables.length
    let numerator = variables.reduce((acc, curr) => acc + (curr.x - x_mean) * (curr.y - y_mean), 0)
    let denominator = Math.sqrt(variables.reduce((acc, curr) => acc + (curr.x - x_mean) ** 2, 0)) * Math.sqrt(variables.reduce((acc, curr) => acc + (curr.y - y_mean) ** 2, 0))
    let r = numerator / denominator
    console.log(r)
    // if (r < 0) return prefect positive correlation
    // if (r > 0) return prefect negative correlation
    // if (r === 0) return no correlation
    let result = r < 0.75 ? "morderate degree of positive correlation" : r > 0.75 ? "high degree of positive correlation" : 
                 r <0.50 ? "Low degree of positive correlation" : r === -1 ? "prefect negative correlation" : 1 === r ? "prefect positive correlation" : r === 0 ? "no correlation":
                 r > -0.75 ? "high degree of neghative correlation" : r < -0.75 ? "morderate degree of Neghative correlation" : "Low degree of neghative correlation"
    
      const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const [toDosY,setToDosY] = useState([])
  const [toDoY,setToDoY] = useState('')
  useEffect(()=>{
    const toDos = JSON.parse(localStorage.getItem('toDos'))
    if(toDos){
      setToDos(toDos)
    }
  },[])
   useEffect(()=>{
    const toDosY = JSON.parse(localStorage.getItem('toDosY'))
    if(toDosY){
      setToDos(toDosY)
    }
  },[])
    ///Strore the data from toDos and toDosY arrays

    useEffect(()=>{
        localStorage.setItem('toDos',JSON.stringify(toDos))
    },[toDos])
    useEffect(()=>{
        localStorage.setItem('toDosY',JSON.stringify(toDosY))
    },[toDosY])
  


    return (
        <div>
            
            <h1 className="">Correlation   </h1>
           <a href="https://github.com/jaseem1999/Quantitative-techniques" className="github" ><AiFillGithub className="algit"/></a>
           
                <div className="correlation">
                    <p> 
                        <FaBusinessTime/>{correlationText}
                        <br />
                        <br />
                        <b>{correlationEquation}</b>
                        <br />
                        <br />
                    </p>

                    <p>
                        <b>
                            <u>
                                <h2>
                                    Correlation between two variables
                                </h2>
                            </u>
                        </b>
                        
                    </p>
                </div>
                <div className="correlation-t">
                     <p>
                      From the following data related to the ages of 10 couples, state whether there is any correlation between ages of husband and wife.<br/>
                        X variables is defined as husband<br/>
                        Y variables is defined as wife<br/>
                        <b>given the following data:</b><br/>
                    </p>
                    <table class="table">
                        <tr>
                            <th>X variables</th>
                            <th>Y variables</th>
                            
                        </tr>
                        {variables.map((obj,index)=>{
                            return (
                        <tr>
                            <td className="correlation-t-x" key={index}>{obj.x}</td>
                            <td  className="correlation-t-y" key={index}>{obj.y}</td>
                        </tr>
                       
                            )     
                        })
                        }
                         
                    </table>
                    
 
                    <div className="correlationAns">
                        <p>Correlation is :<br/> <span> {r}</span></p><br/>
                        <p>Correlation is :<br/> <span> {result}</span></p><br/>
                    </div>
                    <div className="input">
                        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add X values" />
                        <FaPlus onClick={()=>setToDos([...toDos,toDo,])} className='add' /><br/>
                        <input value={toDoY} onChange={(e)=>setToDoY(e.target.value)} type="text" placeholder="🖊️ Add Y values" />
                        <FaPlus onClick={()=>setToDosY([...toDosY,toDoY,])} className="add"/> <br />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <table className="table1">
                        <tr>
                            <th>X variables</th>
                        </tr>
                        {toDos.map((obj,index)=>{
                            return (
                                <tr>
                                    <td className="correlation-t-x" key={index}>{obj}</td> 
                                </tr> 
                            )     
                        })
                        }

                    </table> 

                        <table className="table2">
                        <tr>
                            <th>Y variables</th>
                        </tr>
                        {toDosY.map ((obj1,index1)=>{
                                return (
                                    <tr>
                                        <td className="correlation-t-y" key={index1}>{obj1}</td>
                                    </tr>
                                )
                            })
                        }
                    
                        </table>
                        <div className="correlationButton">
                              
                            <button onClick={()=>setToDos([])} className="fas fa-trash-alt">Delete X</button>
                            <button onClick={()=>setToDosY([])} className="fas fa-trash-alt">Delete Y</button>
                        </div>
                    <Pr/>

                </div>   
        </div>
    )
}

export default Correlation
