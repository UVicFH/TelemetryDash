import styled from "styled-components";

// Styled Collection

export const Dashboard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-start;
`;
export default Dashboard;

export const DashboardColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  padding: 15px;
`;