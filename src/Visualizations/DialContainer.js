import styled from "styled-components";

// Styled Collection
export const Card = styled.div`
  flex-grow: 1;
  // flex: none;
  width: ${props => props.width + "px" || "100%"};
  margin: 10px;
`;

export const CardLabel = styled.div`
  // background-color: #18232C;
  // color: #495761;
  // padding: 5px;  
  // border-bottom: 2px solid #1B262E;
`;

export const CardBody = styled.div`
  // background-color: #111C24;
  // color: #A3A8A9;
  // padding: 10px;  
`;
