import styled from "styled-components";

// Styled Collection

export const Card = styled.div`
  flex-grow: 1;
  width: 100%;
  margin: 10px;
`;

export const CardHeader = styled.div`
  background-color: #18232C;
  color: #495761;
  padding: 5px 15px;  
  border-bottom: 2px solid #1B262E;
  font-family: 'Montserrat', serif;
  text-align: center;
`;

export const CardBody = styled.div`
  background-color: #111C24;
  color: #A3A8A9;
  padding: 10px; 
  display:  ${props => props.display || "block" }; 
  flex-wrap: wrap;
  justify-content: center;
`;
