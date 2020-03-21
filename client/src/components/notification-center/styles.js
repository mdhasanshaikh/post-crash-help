import styled, { keyframes } from "styled-components";

export const NotificationCenterBox = styled.div`
  margin-right: 100px;
  margin-bottom: 24px;
  width: 360px;
  height: 56px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(92, 99, 105, 0.3);
  animation-name: ${props => getKeyframes(props)};
  animation-duration: 0.25s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-fill-mode: forwards;
`;

const calculateHeight = props => {
  if (props.count >= 3) {
    return `275px`;
  } else if (props.count === 2) {
    return `204px`;
  } else if (props.count === 1) {
    return `132px`;
  } else {
    return `56px`;
  }
};

const getKeyframes = props => {
  const height = calculateHeight(props);

  if (props.isOpen === null) {
    return keyframes`
    from {
        height: 56px;
    }
    to {
        height: 56px;
    }
`;
  } else if (props.isOpen === false) {
    return keyframes`
    from {
        height: ${height};
    }
    to {
        height: 56px;
    }
`;
  } else if (props.isOpen === true) {
    return keyframes`
    from {
        height: 56px;
    }
    to {
      height: ${height};
    }
`;
  }
};

export const Topbar = styled.div`
  padding: 0px 16px;
  width: calc(100% - 32px);
  height: 56px;
  display: grid;
  grid-template-columns: auto 24px;
  grid-column-gap: 8px;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-family: Nunito;
  background-color: #163172;
  float: left;
  cursor: pointer;
  float: left;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  padding: 0px;
  width: auto;
  height: auto;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ContentSection = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  overflow-y: scroll;
  float: left;
`;

export const Item = styled.div`
  padding: 8px 8px;
  margin: 0px 8px;
  width: calc(100% - 32px);
  height: auto;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.24);
  float: left;
  :last-child {
    border: none;
  }
`;

export const TextSection = styled.div`
  padding: 8px 0px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: auto auto;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
  float: left;
`;

export const TextSectionFirstRow = styled.div`
  padding-right: 12px;
  width: calc(100% - 12px);
  font-size: 16px;
  color: #163172;
  font-family: OpenSans;
`;

export const TextSectionSecondRow = styled.div`
  padding-right: 12px;
  width: calc(100% - 12px);
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 8px;
  color: #979797;
  font-size: 14px;
  font-family: Nunito;
`;

export const BtnSection = styled.div`
  padding: 8px 0px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  float: left;
`;
export const ServeBtn = styled.button`
  width: 100%;
  height: 36px;
  font-size: 14px;
  color: #163172;
  font-family: Nunito-Semibold;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`;
