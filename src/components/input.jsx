import {useCallback, useState} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const InputDiv = styled.div`
  width: ${state => state.width}px;
  position: relative;
`;

const CustomInput = styled.input`
  width: ${state => state.width}px;
  height: ${state => state.height}px;
  font-size: ${state => state.fontSize + 2}px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0 5px;
`;

const Title = styled.div`
  font-size: ${state => state.fontSize}px;
  margin-left: 5px;
`;

const Check = styled.div`
  height: 10px;
  line-height: 10px;
  position: absolute;
  right: 0;
  bottom: ${state => (state.height - 10) / 2}px;  
`;

const AlertMessage = styled.div`
  font-size: ${state => state.fontSize - 2}px;
  margin-left: 5px;
  color: red;
`;

const PasswordVisible = styled(Check)`
  cursor: pointer;
`;

function Input({width = 300, height = 40, fontSize = 14}) {

  /** E-mail */
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const emailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const isEmail = useCallback((e) => {
    const emailRegex =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[.,;:\s@"]{2,})$/;
      return emailRegex.test(e);
  }, []);

  const changeEmailFocus = useCallback(() => {
    setEmailFocus(!emailFocus);
  }, [emailFocus]);

  /** Password */
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const passwordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const changePasswordVisible = useCallback(() => {
    setPasswordVisible(!passwordVisible);
  }, [passwordVisible]);

  return(
    <>
      <Title fontSize={fontSize}>E-mail</Title>
      <InputDiv placeholder="Email" width={width}>
        <CustomInput
          width={width}
          height={height}
          fontSize={fontSize}
          onChange={emailChange}
          onFocus={changeEmailFocus}
          onBlur={changeEmailFocus}
          placeholder="Email"
        />
        <Check height={height}>
          { !isEmail(email) ? <Check height={height}>N</Check> : <Check height={height}>OK</Check> }
        </Check>
      </InputDiv>
      {!emailFocus && isEmail(email) && email !== "" && <AlertMessage fontSize={fontSize}>Invalid E-mail address.</AlertMessage>}
      <Title fontSize={fontSize}>
        Password
      </Title>
      <InputDiv placeholder="Password" width={width}>
        <CustomInput
          value={password}
          width={width}
          height={height}
          fontSize={fontSize}
          onChange={passwordChange}
          type={!passwordVisible ? "password" : "text"}
          placeholder="Password"
        />
        { passwordVisible ?
          <PasswordVisible height={height} fontSize={fontSize} onClick={changePasswordVisible}>On</PasswordVisible> :
          <PasswordVisible height={height} fontSize={fontSize} onClick={changePasswordVisible}>Off</PasswordVisible> }
      </InputDiv>
    </>
  );
}

Input.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fontSize: PropTypes.number,
};
export default Input;