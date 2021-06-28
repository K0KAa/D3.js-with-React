import React from 'react'
import useScatteredData from './useScatteredData'
import ScatteredAxisBottom from './ScatteredAxisBottom'
import ScatteredAxisLeft from './ScatteredAxisLeft'
import ScatteredMarks from './ScatteredMarks'
import { extent, scaleLinear } from 'd3'
import "./Axis.css"

const width = 960
const height = 500
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

    const xValue =d=>d.petal_length
    const xAxisLabel ='Petal Length'

    const yValue =d=>d.sepal_width
    const yAxisLabel ='Sepal Width'



    const xScale =scaleLinear()
            .domain(extent(data,xValue)) //min to max
            .range([0,innerWidth])
            .nice()
    const yScale =scaleLinear()
            .domain(extent(data,yValue)) //min to max
            .range([0,innerHeight])
    return (
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
    )
}

export default ScatteredData
