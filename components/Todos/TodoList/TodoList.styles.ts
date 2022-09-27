import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 600px;
`;

export const ListHead = styled.span`
  position: relative;
  height: 50px;
  width: 500px;
  background: rgb(20, 48, 100);
`;

export const List = styled.form`
  width: 500px;
  min-height: 600px;
  padding: 10px 40px 30px;
  position: relative;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: rgba(235, 212, 112, 0.9);
`;

export const InputField = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
`;

export const InputText = styled.input.attrs({ type: "text" })`
  position: absolute;
  width: 100%;
  background: transparent;
  border: none;
  font-size: 20px;
  color: rgba(22, 22, 22, 0.8);
  padding: 5px 15px 0;

  &:focus + label {
    outline: none;
    transform: translateY(-20px);
    font-size: 14px;
    padding: 2px 6px;
  }

  :focus ~ span:before {
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.5s ease-in-out;
  }
`;

export const Caption = styled.label`
  top: 0;
  left: 0;
  color: #555;
  pointer-events: none;
  display: block;
  transition: 0.5s;
  border-bottom: none;
`;

export const FunnelIcon = styled.img`
  position: absolute;
  width: 40px;
  right: 0;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;

  &:active {
    transform: rotate(15deg);
  }
`;

export const Border = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  background: #555;
  width: 100%;
  height: 2px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00b0ff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease-in-out;
  }
`;
