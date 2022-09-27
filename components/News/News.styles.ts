import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  width: 400px;
  height: 400px;
`;

export const Card = styled.div<{ flip: boolean }>`
  ${({ flip }) => css`
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 15px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(34, 23, 23, 0.9);
    width: 100%;
    height: 100%;
    transition: 300ms;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(var(--rotate-y, 0))
      translateY(var(--translate-y, 0));
    cursor: pointer;

    &:hover {
      --translate-y: -2px;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
    }

    ${flip &&
    css`
      --rotate-y: 180deg;
    `}
  `}
`;

export const Front = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
  color: white;
`;

export const Back = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
  color: white;
  transform: rotateY(180deg);
`;

export const Thumbnail = styled.img`
  width: 60%;
  margin-bottom: 20px;
  border: 3px black solid;
`;
