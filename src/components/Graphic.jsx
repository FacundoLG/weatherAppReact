import React from 'react'
import '../assets/styles/graphic.css'
const Graphic = () => {
    var graphic = [4,30,20,50,70,100,23,10,50,90,10,80,54,78,12,45,78,23,89]
    return (
        <div className="graphicContainer">
            <div className="graphicButtons">
                <button>Temperature</button>
                <button>Humidity</button>
                <button>RainProvabilitys</button>
            </div>
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
