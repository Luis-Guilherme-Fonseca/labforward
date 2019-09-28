import React from 'react'
import PeakChart from './components/PeakChart';
import { AnalysisContainer } from './styled';
import AnalysisFooter from './components/AnalysisFooter';
import Selector from './components/Selector';

function SeriesAnalysis(props) {
	return (
		<AnalysisContainer>
			<Selector text='Select Experiment' onSelect={val => console.log(val)} data={[{name: 'experiment 1', id: 1}]} />
			<PeakChart data={ data } />
			<AnalysisFooter/>
		</AnalysisContainer>
	)
}

const data = [
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 0},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 1},
	{"peak": 1, "values": 8},
	{"peak": 1, "values": 9},
	{"peak": 1, "values": 8},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 0},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 3},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 0},
	{"peak": 1, "values": 8},
	{"peak": 1, "values": 9},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 0},
	{"peak": 0, "values": 3},
	{"peak": 0, "values": 0},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 3},
	{"peak": 1, "values": 8},
	{"peak": 1, "values": 10},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 3},
	{"peak": 0, "values": 0},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 1, "values": 7},
	{"peak": 1, "values": 6},
	{"peak": 1, "values": 9},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 0},
	{"peak": 0, "values": 1},
	{"peak": 0, "values": 2},
	{"peak": 0, "values": 1}
]

export default SeriesAnalysis