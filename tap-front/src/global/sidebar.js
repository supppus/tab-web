import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toast } from "react-toastify";

const ThisScreen = styled.ul`
  width: 30rem;
  height: 100vh;
  background-color: black;
  margin: 0;
  padding: 0;
  min-width: 25rem;
`;

const TopStyled = styled.header`
  padding-top: 15px;
  h1 {
    color: white;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 1.2rem;
    transition-duration: 250ms;
    &:hover {
      cursor: pointer;
      color: #a2a9af;
    }
  }
  @keyframes HoverPass {
    0% {
      color: white;
      font-size: 1.2rem;
    }
    50% {
      color: #fd0a54;
      font-size: 1.25rem;
    }
    100% {
      color: white;
      font-size: 1.2rem;
    }
  }
`;
const Top = ({ me }) => {
  function copy() {
    navigator.clipboard.writeText(me.identifier);
    return toast.info("Código copiado!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  }
  return (
    <TopStyled>
      <h1 onClick={() => copy()}>
        {me.identifier &&
          me.identifier.replace(
            me.identifier[Number.parseInt(me.identifier.length / 2)],
            "*"
          )}
      </h1>
    </TopStyled>
  );
};
const SideBar = ({ me }) => {
  return (
    <ThisScreen>
      <Top me={me} />
    </ThisScreen>
  );
};
const MapStateToProps = (state) => ({
  me: state.me,
});
export default connect(MapStateToProps)(SideBar);
