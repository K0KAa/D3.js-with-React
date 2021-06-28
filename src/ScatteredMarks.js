import React from 'react'
import "./Axis.css"

const ScatteredMarks = ({data,xScale,yScale,yValue,xValue,circleRadius}) => (
    data.map(d=>(
        <circle 
        className="marks"
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r= {circleRadius}
        >
            <title>{xValue(d)}</title>
        </circle>
    ))
)

export default ScatteredMarks
