
import React, { Component } from 'react'
import './chart.css'


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
			let arr = firebaseToArray(snapshot)
			arr = arr.sort((a, b) => {
				return ('' + a.measurement_date).localeCompare(b.measurement_date)
			})
			.filter((x, i) => i % 2)

			const xaxis = arr.map(el => {

				return DateTime.fromISO(el.measurement_date).hour
			})

			const pm10 = arr.map(el => el.pm10)
			const pm25 = arr.map(el => el.pm25)

			// const a = xaxis.map((x) => {
			// 		return {
			// 			x: x,
			// 			label: {
			// 				borderColor: '#775DD0',
			// 				style: {
			// 				  color: '#fff',
			// 				  background: '#775DD0',
			// 				},
			// 				text: 'Teraz',
			// 			}
			// 	} else {
			// 		return {
			// 			x: x,
			// 		}
			// 	}

			// })

			this.setState({
				options: {
				...this.state.options,
				yaxis: {
					max: 200,
				},
				xaxis: {
					...this.state.options.xaxis,
					categories: xaxis,
					labels: { show: true },
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
			<Chart options={this.state.options} series={this.state.series} type="line" width="100%" height={500} />
		</div>
	)
	}
}