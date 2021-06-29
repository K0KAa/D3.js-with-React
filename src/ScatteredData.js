import React from 'react'
import useScatteredData from './useScatteredData'
import ScatteredAxisBottom from './ScatteredAxisBottom'
import ScatteredAxisLeft from './ScatteredAxisLeft'
import ScatteredMarks from './ScatteredMarks'
import { extent, scaleLinear } from 'd3'
import "./Axis.css"

import {Link} from "react-router-dom"

const width = 960
const height = 450
const margin ={
    top:30,
    bottom:80,
    left:80,
    right:30
}
const ScatteredData = () => {
    const data = useScatteredData()

    if(!data){
        return <pre>Loading...</pre>
    }

    const innerHeight = height -margin.top - margin.bottom
    const innerWidth =width-margin.left-margin.right

    const xAxisLabelOffet = 50
    const yAxisLabelOffset =35

    const xValue =d=>d.sepal_length
    const xAxisLabel ='Sepal Length'

    const yValue =d=>d.petal_width
    const yAxisLabel ='Sepal Width'



    const xScale =scaleLinear()
            .domain(extent(data,xValue)) //min to max
            .range([0,innerWidth])
            .nice()
    const yScale =scaleLinear()
            .domain(extent(data,yValue)) //min to max
            .range([0,innerHeight])
    return (
        <>
        <Link to="/"> 
                <button style={{background: "lightgrey",borderRadius:"6px", height:"2rem" }}>Go back Home</button>
        </Link>
        <h1>Comapring Same Species of two Iris Flower</h1>
        <svg height={height} width={width}>
            <g transform={`translate(${margin.left}, ${margin.top})`} >
                <ScatteredAxisBottom 
                    xScale={xScale} 
                    innerHeight={innerHeight}
                    tickOffset ={5}
                />
                <text 
                    className="axisLabel" 
                    textAnchor="middle"
                    transform={` translate(${-yAxisLabelOffset},${innerHeight/2}) rotate(-90)`}
                >{yAxisLabel}</text>
                <ScatteredAxisLeft 
                    yScale={yScale} 
                    innerWidth={innerWidth}
                    tickOffset ={5}
                />
                <text 
                    className="axisLabel" 
                    x={innerWidth/2} 
                    y={innerHeight+xAxisLabelOffet} 
                    textAnchor="middle"
                >{xAxisLabel}</text>
                <ScatteredMarks 
                    data={data} 
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValue}
                    yValue={yValue}
                    circleRadius={8}
                />
            </g>
        </svg>
            <div>
                <Link style={{textDecoration:"none"}} to="/barchart">
                    <button style={{background: "lightblue",borderRadius:"6px", height:"2rem" }}>
                        Go to Bar Chart of Meat Consumed in Nepal
                    </button>
                </Link>
                <Link style={{textDecoration:"none"}} to="/linedata">
                    <button style={{background: "lightblue",borderRadius:"6px", height:"2rem" }}>
                        Go to Line Graph of Temperature this Week
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ScatteredData
