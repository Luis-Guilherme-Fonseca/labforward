import styled from 'styled-components';

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
    border: 1.5px #222222 solid;
    border-radius: 15px;
    padding: .4em;
    margin-right: 20px;

    > span {
      font-size: 1.5em;
    }
  }

  div:last-child {
    margin-right: 0;
  }
`;