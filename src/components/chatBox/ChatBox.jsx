import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Box,
  CardContent,
  TextField,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { socket } from "../../socket";
import ScrollToBottom from "react-scroll-to-bottom";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";

import { COLOR, SOCKET, CONTENT } from "../../utils/constants";

const ChatBox = ({ handleChat }) => {
  const [messageList, setMessageList] = useState([]);
  const [input, setInput] = useState("");

  const handleCreateRoom = () => {
    localStorage.setItem(
      SOCKET.CHAT.ROOM_ID,
      Math.floor(Math.random() * Date.now()).toString(36)
    );
    socket.emit(
      SOCKET.CHAT.SEND.CREATE_ROOM,
      localStorage.getItem(SOCKET.CHAT.ROOM_ID)
    );
  };

  useEffect(() => {
    socket.connect();
    handleCreateRoom();
    return () => {
      socket.disconnect();
    };
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    if (input.trim().length !== 0) {
      if (input === "/end") {
        setMessageList([]);
        socket.emit(
          SOCKET.CHAT.SEND.END_CHAT,
          localStorage.getItem(SOCKET.CHAT.ROOM_ID)
        );
        localStorage.removeItem(SOCKET.CHAT.ROOM_ID);
        handleCreateRoom();
        setInput("");
        return;
      }
      const handleNewMessage = (input) => {
        const current = new Date();
        const newMessage = {};
        newMessage[SOCKET.CHAT.INFOR.SENDER] = SOCKET.CHAT.SENDER.CLIENT;
        newMessage[SOCKET.CHAT.INFOR.DATE_TIME] = `${
          current.getMonth() + 1
        }/${current.getDate()} ${current.getHours()}:${current.getMinutes()}`;
        newMessage[SOCKET.CHAT.INFOR.CONTENT] = input;
        return newMessage;
      };
      const newMessage = handleNewMessage(input);
      setMessageList((prev) => [...prev, newMessage]);

      const sendMessages = () => {
        return {
          roomId: localStorage.getItem(SOCKET.CHAT.ROOM_ID),
          messageList: [...messageList, newMessage],
        };
      };
      socket.emit(SOCKET.CHAT.SEND.EMIT, sendMessages());
      setInput("");
    }
  };

  useEffect(() => {
    const receiveMessages = (data) => {
      setMessageList(data.messageList);
    };
    socket.on(SOCKET.CHAT.RECEIVE.ON, receiveMessages);
    return () => {
      socket.off(SOCKET.CHAT.RECEIVE.ON, receiveMessages);
    };
  }, []);

  const Header = () => {
    return (
      <Box
        sx={{ padding: "0 1rem" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <h3>Customer Support</h3>
        <CloseIcon
          sx={{ cursor: "pointer" }}
          onClick={() => handleChat("close")}
        />
      </Box>
    );
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const styledGreetingIcon = {
    color: COLOR.PINK,
    fontSize: "1.6rem",
    marginRight: "0.5rem",
    marginTop: "0.2rem",
  };
  const styledGreetingText = {
    padding: "1rem",
    color: "gray",
    backgroundColor: COLOR.LIGHT_GRAY,
    borderRadius: "4px",
  };
  const Body = () => {
    return (
      <>
        <hr />
        <ScrollToBottom>
          <Box sx={{ height: "18rem", padding: "0 0.5rem" }}>
            {messageList.length === 0 && (
              <Box display="flex" alignItems="center">
                <PersonIcon sx={styledGreetingIcon} />
                <p style={styledGreetingText}>{CONTENT.CHAT.GREETING}</p>
              </Box>
            )}
            {messageList.map((input) => (
              <Box
                key={(Math.random() * 5).toString()}
                sx={{
                  textAlign:
                    input.sender === SOCKET.CHAT.SENDER.CLIENT
                      ? "right"
                      : "left",
                  color:
                    input.sender === SOCKET.CHAT.SENDER.CLIENT
                      ? "white"
                      : "gray",
                }}
              >
                <p
                  style={{
                    display: "inline-block",
                    borderRadius: "4px",
                    padding: "1rem",
                    backgroundColor:
                      input.sender === SOCKET.CHAT.SENDER.CLIENT
                        ? COLOR.PINK
                        : COLOR.LIGHT_GRAY,
                  }}
                >
                  {input.content}
                </p>
                <p style={{ color: "gray", marginTop: "0" }}>
                  <span>{input.dateTime}</span> from {input.sender}
                </p>
              </Box>
            ))}
          </Box>
        </ScrollToBottom>
      </>
    );
  };

  const CardFooter = () => {
    return (
      <>
        <hr />
        <form style={{ paddingRight: "0.5rem" }} onSubmit={submitForm}>
          <TextField
            variant="standard"
            fullWidth
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Typing /end to end the chat"
            inputProps={{
              style: { padding: "0.5rem 1rem", fontSize: "1rem" },
            }}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <button
                    type="submit"
                    style={{ backgroundColor: "white", border: "none" }}
                  >
                    <SendIcon
                      sx={{
                        color: COLOR.PINK,
                        cursor: "pointer",
                        fontSize: "medium",
                      }}
                    />
                  </button>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </>
    );
  };

  const styledCard = {
    width: { xs: "75%", sm: "45%", md: "35%", lg: "25%" },
    boxShadow: 2,
    zIndex: "3",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Card sx={styledCard} variant="outlined">
      <CardHeader component={Header} />
      <CardContent component={Body} />
      {CardFooter()}
    </Card>
  );
};

ChatBox.propTypes = {
  handleChat: PropTypes.func,
};

export default ChatBox;
