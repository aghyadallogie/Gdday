import styled from "styled-components";

export const ItemLabel = styled.label`
  position: relative;
  display: block;
  margin: 30px 0;
  color: white;
  font-size: 24px;
  cursor: pointer;
  border-bottom: 1px solid rgba(126, 122, 122, 0.6);
`;

export const Check = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;

  &:checked ~ i {
    top: 10px;
    border-top: none;
    border-right: none;
    height: 11px;
    width: 20px;
    transform: rotate(-45deg);
    transition: 0.1s;
  }

  &:checked ~ span:before {
    transform: translateY(-50%) scaleX(1);
    transform-origin: left;
    transition: transform 0.5s;
  }

  &:checked ~ span {
    color: rgba(127, 139, 179, 0.7);
  }
`;

export const Box = styled.i`
  position: absolute;
  top: 6px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid white;

  &:checked ~ span {
    color: rgba(127, 139, 179, 0.7);
  }
`;

export const ItemText = styled.span`
  position: relative;
  left: 30px;
  transition: 0.5s;
  color: rgba(38, 40, 136, 0.8);
  font-size: 22px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: white;
    transform: translateY(-50%) scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }
`;
