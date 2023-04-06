
import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const BasicChart=(props)=>{
 let datapts=[]
 Object.keys(props.data).forEach(function(key, index) {
   datapts.push({label:key,y:props.data[key]})

})

 const options = {
  title: {
   text: ""
  },
  data: [
  {
   // Change type to "doughnut", "line", "splineArea", etc.
   type: "column",
   dataPoints: datapts
  }
  ],
  
 }
 return (
 <div>
  <CanvasJSChart options = {options}
   /* onRef={ref => this.chart = ref} */
  />
  {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
 </div>);
}
export default BasicChart;