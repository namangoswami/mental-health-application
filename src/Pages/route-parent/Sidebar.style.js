import styled from 'styled-components';

export const Wrapper = styled.div `
  width: 140px;
  position: fixed;
  height: 100vh;
  background: #d4694b;
`;
export const Container = styled.div `
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div `
  font-size: 35px;
  font-weight: 800;
  margin: 16px 0;
  text-align: center;
  padding: 1px;
  color: #fff;

`;
export const IconContainer = styled.div `
  text-align: center;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  min-height: 85px;
  margin: 0 10px;
  color: #fff;
  border-radius: 10px;
  & img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    z-index: 5;
  }
  & a,& a:hover{
    text-decoration: none;
  }
  &:hover {
    background: #fff;
    color: #000;
    position: relative;
    &:before {
      content: '';
      width: 30px;
      height: 30px;
      border-radius: 50%;
      top: 13px;
      position: absolute;
      z-index: 1;
      background: #d4694b;
    }

    cursor: pointer;
  }

  &: first-child {
    margin-top: 20px;
  }
`;
export const Text = styled.div `
  margin: 0;
  font-size: 16px;
`;

export const LastContainer = styled.div `
  position: absolute;
  width: 100%;
  bottom: 0;
  .bottom {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    min-height: 50px;
    &: hover {
      background: #fff;
      color: #000;
      position: relative;
      &:before {
        content: '';
        width: 30px;
        height: 30px;
        border-radius: 50%;
        top: 10px;
        left: 10px;
        position: absolute;
        z-index: 1;
        background: #d4694b;
      }

      cursor: pointer;
    }
  }
  padding: 10px 0;
`;