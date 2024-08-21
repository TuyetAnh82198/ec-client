import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import { API } from "../../../utils/constants";
import CirProgress from "../../../components/circularProgress/CircularProgress";
import handleResponse from "../../../utils/handleResponse";
import handleNavigate from "../../../utils/handleNavigate";
import {
  StyledForm,
  StyledContainer,
  StyledFormFooter,
  StyledFormHeader,
  StyledTitle,
} from "./styled";

const EmailInput = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();
  const submitForm = () => {
    if (email) {
      const fetchUrl = process.env.REACT_APP_SERVER + API.USER.FORGOT_PASS;
      const body = { email };
      const headers = {
        "Content-Type": "application/json",
      };

      let fetchObject = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      };
      setIsLoading(true);
      fetch(fetchUrl, fetchObject)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          if (!data.err) {
            handleResponse(data, "", navigate);
          } else {
            handleNavigate.serverErr(navigate);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };
  const handleInputBackground = () => {
    return email.trim().length !== 0 ? "#E8F0FE" : "inherit";
  };
  return (
    <>
      {isLoading && <CirProgress />}
      <StyledContainer>
        <StyledForm
          sx={{ width: { xs: "100%", sm: "56%", md: "40%", lg: "28%" } }}
        >
          <form onSubmit={handleSubmit}>
            <StyledFormHeader>
              <StyledTitle>Forgot Password</StyledTitle>
            </StyledFormHeader>
            <TextField
              type="email"
              label="Email"
              name="Email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={handleInput}
              inputProps={{
                style: {
                  backgroundColor: handleInputBackground(email),
                },
              }}
            />
            <StyledFormFooter>
              <Button
                sx={{ margin: "1rem 0" }}
                fullWidth
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </StyledFormFooter>
          </form>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default EmailInput;
