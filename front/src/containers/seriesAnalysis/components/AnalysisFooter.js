import React from 'react'
import { AnalysisType, AnalysisBtn } from '../styled';

function AnalysisFooter(props) {
  return (
    <AnalysisType>
      <AnalysisBtn>
        <span>PEAK</span>
      </AnalysisBtn>
      <AnalysisBtn>
        <span>COMPLETE</span>
      </AnalysisBtn>
    </AnalysisType>
  )
}

export default AnalysisFooter