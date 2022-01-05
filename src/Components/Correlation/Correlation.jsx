//arithemetic mean method r = Σ(𝑥−𝑥)(𝑦−𝑦)√Σ(𝑥−𝑥)2 Σ(𝑦−𝑦)2 
import React from 'react'
import './Correlation.css'


function Correlation() {
    let variables =[{x : 24 , y : 22},{x : 26 , y : 22},{x : 28 , y : 23},{x : 32 , y : 26},{x : 38 , y : 34},{x : 40 , y : 36},{x : 40 , y : 35},{x : 42 , y : 38},{x : 44 , y : 40},{x : 46 , y : 40}] 

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




    return (
        <div>
            
            <h1 className="heding-cor">Correlation</h1>
            
                <div className="correlation">
                    <p> 
                        The correlation coefficient is a measure of the strength of the linear relationship between two variables.<br/>
                        It is a number between -1 and 1.<br/>
                        The closer to 1, the stronger the correlation.<br/>
                        The closer to -1, the weaker the correlation.<br/>
                        The correlation coefficient is calculated by the formula:<br/>
                        <br />
                        <br />
                        <b>r = Σ(𝑥−𝑥)(𝑦−𝑦)√Σ(𝑥−𝑥)2 Σ(𝑦−𝑦)2</b>
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
                        <p>Correlation is : <span> {r}</span></p><br/>
                        <p>Correlation is : <span> {result}</span></p>
                    </div>
                </div>   
        </div>
    )
}

export default Correlation
