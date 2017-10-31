import React, {Component} from 'react'
import * as d3 from 'd3'

const data = [30, 86, 168, 281, 303, 365]

class D3 extends Component {
  componentDidMount () {
    d3.select('.chart')
        .selectAll('div')
        .data(data)
          .enter()
          .append('div')
          .style('width', function (d) { return d + 'px' })
          .text(function (d) { return d })
  }
  render () {
    return (
      <div>
        <div className='chart'>This is chart from d3.js</div>
      </div>
    )
  }
  }

export default D3
