import React from 'react'
import '../assets/styles/graphic.css'
const Graphic = () => {
    var graphic = [10,30,20,50,70,100,23,10]
    return (
        <div className="graphicContainer">
            <h3>Temperature</h3>
            <div className="graphic">
                {graphic.map((graphicU,i)=>
                    <div className="unityContainer">
                        <div className="unity" id={i} style={{height: `${graphicU}%`}}>
                            {graphicU}
                        </div>
                    </div>
                )}
            </div>            
        </div>
    )
}

export default Graphic
