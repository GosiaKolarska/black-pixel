import styled from "styled-components";

export const CookieWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgb(255, 193, 7, 0.95);
  color: #000;
  text-align: center;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  z-index: 9;
`;

export const CookieButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 5px;
  background: #fff;
  color: #000;
  transition: 0.2s;

  &:hover {
    background: #0c0e15;
    color: #fff;
  }

  &:focus {
    outline-offset: 4px;
  }
`;
