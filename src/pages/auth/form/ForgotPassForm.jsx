import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

import { API, PAGE_TITLE } from "../../../utils/constants";
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

const ForgotPassForm = ({ pageTitle }) => {
  const [isInputEmail, setIsInputEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputFields, setInputFields] = useState([]);
  const [inputs, setInputs] = useState(null);

  useEffect(() => {
    if (pageTitle === PAGE_TITLE.FORGOT_PASS) {
      setIsInputEmail(true);
      setInputFields(["Email"]);
      setInputs({
        Email: "",
      });
    } else {
      setIsInputEmail(false);
      setInputFields(["Pass", "ConfirmPass"]);
      setInputs({ Pass: "", ConfirmPass: "" });
    }
  }, []);

  const handleInputs = (e, field) => {
    setInputs((prevInputs) => {
      return { ...prevInputs, [field]: e.target.value };
    });
  };

  const navigate = useNavigate();
  const params = useParams();
  const submitForm = () => {
    let fetchUrl;
    let body = {};
    if (isInputEmail) {
      fetchUrl = process.env.REACT_APP_SERVER + API.USER.FORGOT_PASS;
      body.Email = inputs.Email;
    } else {
      const { Pass, ConfirmPass } = inputs;
      fetchUrl = process.env.REACT_APP_SERVER + API.USER.RESET_PASS;
      body = {
        Pass,
        ConfirmPass,
        Token: params.token,
      };
    }

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };
  const handleInputBackground = (field) => {
    return field.trim().length !== 0 ? "#E8F0FE" : "inherit";
  };
  const handleLabel = (field) => {
    switch (field) {
      case "Pass":
        return "New password";
        break;
      case "ConfirmPass":
        return "Confirm new password";
        break;
      default:
        return "Email";
    }
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
              <StyledTitle>{pageTitle}</StyledTitle>
            </StyledFormHeader>
            {inputFields.map((field, i) => (
              <TextField
                sx={{
                  marginTop: i === inputFields.length - 1 ? "0.5rem" : "0",
                }}
                key={i}
                type={field === "Email" ? "email" : "password"}
                label={handleLabel(field)}
                name={field}
                variant="outlined"
                fullWidth
                required
                value={inputs[field]}
                onChange={(e) => handleInputs(e, field)}
                inputProps={{
                  style: {
                    backgroundColor: handleInputBackground(inputs[field]),
                  },
                }}
              />
            ))}
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

ForgotPassForm.propTypes = {
  pageTitle: PropTypes.string,
};
export default ForgotPassForm;
