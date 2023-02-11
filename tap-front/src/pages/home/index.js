import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import BlockScreen from "../../components/BlockScreen";
import SideBar from "../../global/sidebar";

const ThisScreen = styled.div``;

const HomePage = ({ socket, pass, setMe }) => {
  useEffect(() => {
    if (socket) {
      socket.on("init", (args) => {
        setMe({ id: args.id, identifier: args.identifier });
      });
    }
  }, [socket, setMe]);
  return !socket && !pass ? (
    <BlockScreen />
  ) : (
    <ThisScreen>
      <SideBar />
    </ThisScreen>
  );
};
const MapStateToProps = (state) => ({
  socket: state.socket,
  pass: state.pass,
});
const MapActionsToProps = (dispatch) => ({
  SET_SOCKET: (value) => {
    dispatch({ type: "SET_SOCKET", value: value });
  },
  setMe: (value) => {
    dispatch({ type: "SET_ME", value: value });
  },
});
export default connect(MapStateToProps, MapActionsToProps)(HomePage);
