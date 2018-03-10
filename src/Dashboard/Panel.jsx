import styled from "styled-components";

// Styled Collection

export const PanelContainer = styled.div`
  background-color: ${props => props.color || "green"};
`;
export default PanelContainer;
