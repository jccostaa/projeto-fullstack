import styled from "styled-components";

export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100vh;
`;
export const SidebarStyled = styled.div`
  min-width: 15vw;
  max-width: 20vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const SidebarSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 3rem;

  #logo {
    padding: 0px 0px 10px 0px;
  }

  p {
    padding: 0.5rem 0rem;
  }

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;
export const SidebarItem = styled.div`
  display: flex;
  gap: 8px;
  text-decoration: none;
  cursor: pointer;

  &.selected {
    font-weight: bold;
  }
`;

export const SidebarUserSection = styled.div`
  padding: 20px;
`;

export const UserAvatarSection = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const UserLogoutLink = styled.a`
  margin: 20px;
  text-decoration: none;
  color: black;
`;

