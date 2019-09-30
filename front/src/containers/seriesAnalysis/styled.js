import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';

export const AnalysisContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AnalysisType = styled.div`
  display: flex;

  > div {
    margin-right: 20px;
  }

  div:last-child {
    margin-right: 0;
  }
`;

export const AnalysisBtn = styled.div`
  border: ${props => `1.5px solid ${props.theme.border}`};
  border-radius: 15px;
  padding: .4em;
  cursor: pointer;
  background-color: ${props => props.selected ? props.theme.selected : ''};

  > span {
    font-size: 1.5em;
  }
`;