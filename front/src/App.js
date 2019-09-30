import React from 'react';
import SeriesAnalysis from './containers/seriesAnalysis';
import StyledSettings from './settings/Styles';
import { PageContainer } from './Styled';
import ReduxSettings from './settings/Redux';

function App() {
  return (
    <ReduxSettings>
      <StyledSettings>
        <PageContainer>
          <SeriesAnalysis/>
        </PageContainer>
      </StyledSettings>
    </ReduxSettings>
  );
}

export default App;
