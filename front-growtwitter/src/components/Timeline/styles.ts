import styled from "styled-components";

export const BodyTimeline = styled.div`
  border: 1px solid rgb(216, 215, 215);
  width: 60%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: x-large;
    margin: 15px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(216, 215, 215);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.p`
  margin: 0;
`;

export const SmallDot = styled.div`
  width: 4px;
  height: 4px;
  background-color: black;
  border-radius: 100%;
`;

export const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icons = styled.div`
  margin: 10px 10px 0px 0px;
  display: flex;
  cursor: pointer;

  svg {
    margin-right: 5px;
    align-self: center;
  }
`;
export const TweetContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(224, 224, 224);
    padding: 12px;
    font-size: 0.8rem;
    `
export const UserImg = styled.img`
    margin-right: 8px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-position: center center;
    background-size: cover;
    `
export const TweetContent = styled.div`
    margin: 0px;
    padding: 0px;
    font-family: Karla, Roboto, sans-serif;
    overflow: hidden;
    color: rgb(51, 51, 51);
    `
export const UserName = styled.div`
    display: flex;
    flex-direction: row;
`