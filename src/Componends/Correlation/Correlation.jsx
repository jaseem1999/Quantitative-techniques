//arithemetic mean method r = Σ(𝑥−𝑥)(𝑦−𝑦)√Σ(𝑥−𝑥)2 Σ(𝑦−𝑦)2 
import React from 'react'
import './Correlation.css'


function Correlation() {
    let variables =[{x : 24 , y : 18},{x : 27 , y : 25},{x : 26 , y : 26},{x : 30 , y : 29}] 
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
                        A husbend and wife correlation is a measure of the strength of the relationship between two variables.<br/>
                        X variables is defined husbend<br/>
                        Y variables is defined wife<br/>
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
                </div>   
        </div>
    )
}

export default Correlation
