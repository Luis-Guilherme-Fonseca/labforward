import React from 'react';
import SeriesAnalysis from './containers/seriesAnalysis';
import StyledSettings from './settings/Styles';
import { PageContainer } from './Styled';

function App() {
  return (
    <StyledSettings>
      <PageContainer>
        <SeriesAnalysis/>
      </PageContainer>
    </StyledSettings>
  );
}

export default App;
