import React from 'react'
import "./Axis.css"

const ScatteredAxisLeft = ({yScale,innerWidth,tickOffset=3}) => (
    yScale.ticks().map(tickValue=>(
            <g className='axis' transform={`translate(0, ${yScale(tickValue)})`}>
            {console.log(innerWidth)}
                 <line x2={innerWidth} />
                 <text key={tickValue}
                        style={{textAnchor:"end"}}
                        x={-tickOffset}
                        dy=".32em"
                 >
                    {tickValue}
                </text>
            </g>
    ))
    
)

export default ScatteredAxisLeft
