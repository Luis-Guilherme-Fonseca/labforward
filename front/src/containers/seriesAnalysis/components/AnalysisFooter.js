import React from 'react'
import { AnalysisType, AnalysisBtn } from '../styled';

function AnalysisFooter(props) {
  return (
    <AnalysisType>
      <AnalysisBtn onClick={() => props.changeType("peak")} selected={ props.type === "peak" } >
        <span>PEAK</span>
      </AnalysisBtn>
      <AnalysisBtn onClick={() => props.changeType("raw")} selected={ props.type === "raw" }>
        <span>COMPLETE</span>
      </AnalysisBtn>
    </AnalysisType>
  )
}

export default AnalysisFooter