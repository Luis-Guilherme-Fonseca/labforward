import React, { useEffect, useState } from 'react'
import PeakChart from './components/PeakChart';
import { AnalysisContainer } from './styled';
import AnalysisFooter from './components/AnalysisFooter';
import Selector from './components/Selector';
import { getExperiments, getExperiment } from './services';

function SeriesAnalysis(props) {
	const [experimentsList, setExperimentsList] = useState([])
	const [currentExperimentData, setCurrentExperimentData] = useState([])
	const [currentExperiment, setCurrentExperiment] = useState("Select Experiment")
	useEffect(() => {
		getExperiments().then(res => setExperimentsList(res))
	}, [])
	const onSelect = (item) => {
		setCurrentExperiment(item.name)
		getExperiment(item.id).then(res => res.peaks.map((peak, index) => ({peak: peak, raw: res.raw[index]}))).then(experiment => setCurrentExperimentData(experiment))
	}
	return (
		<AnalysisContainer>
			<Selector text={ currentExperiment } onSelect={ onSelect } data={ experimentsList }/>
			<PeakChart data={ currentExperimentData } />
			<AnalysisFooter/>
		</AnalysisContainer>
	)
}

export default SeriesAnalysis