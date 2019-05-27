import styled from "styled-components";

// Styled Collection
export const Label = styled.div`
  flex: 0 0 75px;
  font-size: 15px;
  margin: 0 0 10px 0;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.5px;
  font-weight: 100;
`;

export const LabelValue = styled.div`
  flex: 0 0 50px;
  font-size: 20px;
  margin: 0 0 15px 0;  
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 100 !important;
`;

export const Viz = styled.div`
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
`;

export const VizGroup = styled.div`
  flex-grow: 23;
  display: flex;
  margin-top: 15px;
  align-items: center;
`;

