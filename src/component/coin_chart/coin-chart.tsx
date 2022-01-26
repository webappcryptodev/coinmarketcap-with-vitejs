import ApexCharts from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component<any, any> {
    constructor(props:any) {
      super(props);

      this.state = {
      
        series: [{
          data: [
            [1327359600000,35.95],
            [1327446000000,34.34],
            [1327532400000,37.18],
            [1327618800000,33.05],
            [1327878000000,34.00],
            [1327964400000,35.95],
            [1328050800000,36.24],
            [1328137200000,37.29],
            [1328223600000,34.85],
            [1328482800000,35.86],
            [1328569200000,34.28],
            [1328655600000,39.10],
            [1328742000000,38.65],
            [1328828400000,37.21],
            [1329087600000,38.35],
            [1329174000000,34.44],
            [1329260400000,38.46],
            [1329346800000,35.86],
            [1329433200000,37.75],
            [1329778800000,38.54],
            [1329865200000,33.33],
            [1329951600000,36.97],
            [1330038000000,36.41],
            [1330297200000,37.27],
            [1330383600000,37.27],
            [1330470000000,34.89],
            [1330556400000,37.10],
            [1330642800000,39.73],
            [1330902000000,38.22],
            [1330988400000,38.99],
            [1331074800000,37.41],
          ]
        }],
        options: {
          chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
              autoScaleYaxis: true
            }
          },
          annotations: {
            yaxis: [{
              y: 30,
              borderColor: '#999',
              label: {
                show: false,
                // text: 'Support',
                style: {
                  color: "#fff",
                  background: '#00E396'
                }
              }
            }],
            xaxis: [{
              x: new Date('14 Nov 2012').getTime(),
              borderColor: '#999',
              yAxisIndex: 0,
              label: {
                show: false,
                // text: 'Rally',
                style: {
                  color: "#fff",
                  background: '#775DD0'
                }
              }
            }]
          },          
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
            style: 'hollow',
          },
          xaxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
          },
          tooltip: {
            x: {
              format: 'dd MMM yyyy'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          },
        },
      
      
        selection: 'one_year',
      
      };
            
      // setTimeout(async () => {
      //   let price:any = await fetchData();
      //   this.state.series[0].data.(23422324233,price[0].quote.USD.price);  
      //   localStorage.setItem("day_data",JSON.stringify(price[0].0))
      //   console.log("data"+this.state.series[0].data);
      //   this.state.series[0].data.slice(this.state.series[0].data.length-100,this.state.series[0].data.length);
      // }, 3000);
      
    }

  
    updateData(timeline:any) {
      this.setState({
        selection: timeline
      })
    
      switch (timeline) {
        case 'one_month':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('28 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'six_months':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('27 Sep 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'one_year':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('27 Feb 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'ytd':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('01 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'all':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('23 Jan 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        default:
      }
    }
  

    render() {
      return (
        

<div id="chart">
<div className="toolbar">
<button id="one_month"
    
    onClick={()=>this.updateData('one_month')} className={ (this.state.selection==='one_month' ? 'active' : '')}>
  1M
</button>
&nbsp;
<button id="six_months"
    
    onClick={()=>this.updateData('six_months')} className={ (this.state.selection==='six_months' ? 'active' : '')}>
  6M
</button>
&nbsp;
<button id="one_year"
    
    
    onClick={()=>this.updateData('one_year')} className={ (this.state.selection==='one_year' ? 'active' : '')}>
  1Y
</button>
&nbsp;
<button id="ytd"
    
    onClick={()=>this.updateData('ytd')} className={ (this.state.selection==='ytd' ? 'active' : '')}>
  YTD
</button>
&nbsp;
<button id="all"
    
    onClick={()=>this.updateData('all')} className={ (this.state.selection==='all' ? 'active' : '')}>
  ALL
</button>
</div>

<div id="chart-timeline">
<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={150} />
</div>
</div>
);
}
}

// const domContainer = document.querySelector('#app');

export default ApexChart;