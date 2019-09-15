
import React, { useState, useEffect } from 'react'
import './chart.css'
const options = {
	options: {
	  chart: {
			zoom: {
				enabled: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		title: {
			text: 'Product Trends by Month',
			align: 'left'
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
			},
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
		},
		plotOptions: {
			bar: {
				distributed: true,
				horizontal: true,
			}
		},
	},
	series: [
		{
			name: "Desktops",
			data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
		},
		{
			name: "ddd",
			data: [10, 41, 35, 51, 36, 89, 78, 14, 25]
		}
	],
  }
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


export function ChartApp(data) {

	const [state, setState] = useState([])

	useEffect(() => {
		firebase.firestore().collection('measurements').onSnapshot(snapshot => {
			setState(firebaseToArray(snapshot))
		})
	})


	return <div className="chart-container">
		<Chart options={options} series={options.series} type="line" width="100%" height="100%"></Chart>
	</div>
}