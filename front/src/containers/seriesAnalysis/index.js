import React, { useEffect, useState } from 'react';
import PeakChart from './components/PeakChart';
import { AnalysisContainer } from './styled';
import AnalysisFooter from './components/AnalysisFooter';
import Selector from './components/Selector';
import RawDataChart from './components/RawDataChart';
import { getExperimentList, getExperimentData } from './actions';
import { connect } from 'react-redux';

function SeriesAnalysis(props) {
	const [chartType, setChartType] = useState("peak")
	const { experimentsList, experiment, dispatch, error } = props
	const experimentName = experiment.name || "Select Experiment"
	
	useEffect(() => {
		dispatch(getExperimentList())
	}, [])
	const onSelect = (item) => {
		dispatch(getExperimentData(item.id))
	}

	if(error) {
		return (
			<AnalysisContainer>
				<h2>{error}</h2>
			</AnalysisContainer>
		)
	} 

	return (
		<AnalysisContainer>
			<Selector text={ experimentName } onSelect={ onSelect } data={ experimentsList }/>
			{chartType === "peak"
				?
					<PeakChart data={ experiment.data }/>
				:
					<RawDataChart data= { experiment.data }/>

			}
			<AnalysisFooter type={ chartType } changeType={ setChartType } />
		</AnalysisContainer>
	)
}

const mapStateToProps = (state) => {
	return {
		experimentsList: state.list,
		experiment: state.currentExperiment,
		error: state.error
	}
}

export default connect(mapStateToProps)(SeriesAnalysis)