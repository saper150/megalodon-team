
import React, { useState, useEffect, Component } from 'react'
import './chart.css'

const defaultOptions = {
	grid: {
		row: {
			colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0.5
		},
	},
	chart: {
		zoom: {
			enabled: true,
			type: 'x',
			autoScaleYaxis: false,
			zoomedArea: {
			  fill: {
				color: '#90CAF9',
				opacity: 0.4
			  },
			  stroke: {
				color: '#0D47A1',
				opacity: 0.4,
				width: 1
			  }
			}
		},
		toolbar: {
			show: false,
		}
	},
}

function firebaseToArray(snapshot) {
	const res = []
	snapshot.forEach((doc) => {
		const obj = doc.data()
		obj.id = doc.id
		res.push(obj)
	})
	return res
}

import Chart from 'react-apexcharts'
import firebase from 'firebase'
import { DateTime } from 'luxon'

export class ChartApp extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		options: {
			chart: {
				id: 'apexchart-example',
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			xaxis: {
				categories: [],
			},
		},
		series: []
	  }
	}

	componentDidMount() {
		firebase.firestore().collection('measurements').onSnapshot(snapshot => {
			const arr = firebaseToArray(snapshot)
			arr.sort((a, b) => {
				return ('' + a.measurement_date).localeCompare(b.measurement_date)
			})

			const xaxis = arr.map(el => {

				return Math.round(
					DateTime.fromISO(el.measurement_date).diffNow('hour').hours
				)
			})
			console.log(xaxis)
			const pm10 = arr.map(el => el.pm10)
			const pm25 = arr.map(el => el.pm25)

			this.setState({
				options: {
				...this.state.options,

				xaxis: {
					...this.state.options.xaxis,
					categories: xaxis
					}
				},
				series: [
					{
						name: 'pm10',
						data: pm10,
					},
					{
						name: 'pm20',
						data: pm25,
					}
				]
			})

		})

	}

	render() {
	  return (
		<div className="chart-container">
			<Chart options={this.state.options} series={this.state.series} type="line" width="1000px" height={500} />
		</div>
	  )
	}
  }