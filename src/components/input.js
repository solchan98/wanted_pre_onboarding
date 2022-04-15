import styled from "styled-components";
import {useCallback, useState} from "react";

const InputDiv = styled.div`
  width: 350px;
  position: relative;
`;

const Title = styled.div`
  font-size: 14px;
  margin-left: 5px;
`;

const Check = styled.div`
  height: 10px;
  line-height: 10px;
  position: absolute;
  right: 0;
  bottom: 15px;
`;

const AlertMessage = styled.div`
  font-size: 12px;
  margin-left: 5px;
  color: red;
`;

export const Input = () => {

    const [email, setEmail] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);

    const emailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, [email]);

    const isEmail = useCallback((email) => {
        const emailRegex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        return emailRegex.test(email);
    }, [email]);

    const changeEmailFocus = useCallback(() => {
        setEmailFocus(!emailFocus);
    }, [emailFocus]);

    return(
        <div>
            <Title>E-mail</Title>
            <InputDiv placeholder="Email">
                <input
                    onChange={emailChange}
                    size="5"
                    onFocus={changeEmailFocus}
                    onBlur={changeEmailFocus}
                    placeholder="Email" style={{width: "350px",height: "40px", fontSize: "16px", border: "1px solid gray", borderRadius: "5px", padding: "0 5px"}}/>
                { !isEmail(email) ? <Check>N</Check> : <Check>OK</Check> }
            </InputDiv>
            { !emailFocus && !isEmail(email) ? <AlertMessage>Invalid E-mail address</AlertMessage> : null }
        </div>
    );
}