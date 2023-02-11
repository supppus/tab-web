import React, { useState } from "react";
import styled from "styled-components";
import MemoryRam from "../assets/ram.png";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import { connect } from "react-redux";

const ThisScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #142026;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Form = styled.form`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  label {
    text-align: center;
    &::before {
      display: block;
      font-size: 1.5rem;
      content: "Senha para as suas salas";
      color: white;
    }
    input {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      border: 0;
      outline: 0;
      background-color: transparent;
      border-bottom: 1px solid white;
      color: white;
      padding: 5px;
    }
    margin-top: 4rem;
  }
  button {
    margin-top: 1rem;
    font-size: 1.2rem;
    background-color: transparent;
    border: 0;
    outline: 0;
    color: gray;
    cursor: pointer;
    transition-duration: 800ms;
    padding: 10px;
    &:hover {
      color: white;
    }
  }
`;
const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    display: block;
    width: 140px;
    height: 140px;
    filter: invert(100%);
  }
  span {
    font-size: 1.1rem;
    line-height: 30px;
    text-align: center;
    color: white;
    font-weight: bold;
  }
`;
const BlockScreen = ({ setSocket, setPassword, backend }) => {
  const [pass, setPass] = useState("");
  const handlePass = (e) => {
    if (e.target.value.length > 20) {
      setPass(pass);
    } else {
      setPass(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pass || pass.length < 5 || pass.length > 20) {
      return toast.error("Confira sua senha!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
    setSocket(io(backend, { pass: pass }));
    setPassword(pass);
    setPass("");
  };
  return (
    <ThisScreen>
      <Form onSubmit={handleSubmit}>
        <Section>
          <img src={MemoryRam} alt="Cache memory" />
          <span>
            Todas as suas mensagens são temporárias, cada vez que você sair as
            suas mensagens serão apagadas!
          </span>
        </Section>
        <label>
          <input type="password" value={pass} onChange={handlePass} />
        </label>
        {pass && pass.length > 5 && <button type="submit">Avançar</button>}
      </Form>
    </ThisScreen>
  );
};
const MapStateToProps = (state) => ({
  backend: state.backend,
});
const MapActionsToProps = (dispatch) => ({
  setSocket: (sock) => {
    dispatch({ type: "SET_SOCKET", value: sock });
  },
  setPassword: (pass) => {
    dispatch({ type: "SET_PASS", value: pass });
  },
});
export default connect(MapStateToProps, MapActionsToProps)(BlockScreen);
