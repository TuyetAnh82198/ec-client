import CloseIcon from "@mui/icons-material/Close";
import { Menu, MenuItem, Badge } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/imgs/logo.png";
import {
  StyledNavLink,
  StyledPromotionContainer,
  StyledContentContainer,
  StyledContent,
  StyledCloseBtn,
  StyledNavbarContainer,
  StyledImgContainer,
  StyledImg,
  StyledItemsContainer,
  StyledItems,
  StyledItem,
  StyledIcon,
  StyledNavbar,
} from "../styled.js";
import {
  CONTENT,
  NAVBAR,
  API,
  PAGE_PATH,
  RESPONSE_MESSAGES,
  COLOR,
  LOCAL_STORAGE,
} from "../../../utils/constants";
import fetchLogin from "../../../utils/fetchLogin";
import PageSize from "../../pageSize/PageSize";
import { styled } from "@mui/material/styles";
import { socket } from "../../../socket";
import {
  handleSocketConnect,
  handleSocketAction,
} from "../../../utils/handleSocket";

const LayoutHeader = () => {
  const [isShow, setIsShow] = useState(true);
  const [navbarItems, setNavbarItems] = useState([]);
  const [dropdownItems, setDropdownItems] = useState([]);

  const handleFilter = (item, property) => {
    return item.hasOwnProperty(property);
  };

  useEffect(() => {
    fetchLogin()
      .then((loggedInState) => {
        setNavbarItems(
          NAVBAR.filter(
            (item) =>
              handleFilter(item, "HOME") ||
              handleFilter(item, "SHOP") ||
              handleFilter(item, "CART") ||
              handleFilter(item, "USER")
          )
        );
        setDropdownItems(
          NAVBAR.filter(
            (item) =>
              handleFilter(item, "HISTORY") || handleFilter(item, "LOGOUT")
          )
        );
      })
      .catch((loggedInState) => {
        setNavbarItems(
          NAVBAR.filter(
            (item) =>
              handleFilter(item, "HOME") ||
              handleFilter(item, "SHOP") ||
              handleFilter(item, "REGISTER") ||
              handleFilter(item, "LOGIN")
          )
        );
      });
  }, []);

  const handleActive = ({ isActive }) => {
    if (isActive) {
      return { color: COLOR.MAIN_GREEN };
    }
  };

  const handleClosePromotion = () => {
    setIsShow(false);
  };

  //MUI
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleDropdown = (e, property) => {
    if (property === "USER") {
      e.preventDefault();
      setAnchorEl(e.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProperty = (item) => {
    return Object.keys(item)[0];
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 0,
      top: 3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const handleIcon = (icon, property) => {
    const iconElement = <StyledIcon>{icon}</StyledIcon>;
    if (property === "CART") {
      return (
        <StyledBadge
          sx={{ marginRight: "0.5rem" }}
          badgeContent={4}
          color="error"
          overlap="circular"
          invisible={false}
        >
          {iconElement}
        </StyledBadge>
      );
    }
    return iconElement;
  };

  const navigate = useNavigate();
  const handleSubMenu = (e, item) => {
    e.stopPropagation();
    if (item === "LOGOUT") {
      const fetchUrl = process.env.REACT_APP_SERVER + API.USER.LOGOUT;
      const fetchObj = {
        method: "GET",
        credentials: "include",
      };
      fetch(fetchUrl, fetchObj)
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === RESPONSE_MESSAGES.LOGOUT.SUCCESS) {
            //deployed by a public suffix
            localStorage.removeItem(LOCAL_STORAGE.TOKEN);
            //
            alert(RESPONSE_MESSAGES.LOGOUT.SUCCESS);
            navigate(PAGE_PATH.LOGIN);
          }
        })
        .catch((err) => console.log(err));
    } else if (item === "HISTORY") {
    }
  };
  const stylePromotion = {
    display: isShow ? "flex" : "none",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "8",
  };

  useEffect(() => handleSocketConnect(socket), []);
  useEffect(() => handleSocketAction.add(socket), []);
  return (
    <>
      <StyledPromotionContainer container sx={stylePromotion}>
        <StyledContentContainer item xs={11}>
          <StyledContent>{CONTENT.FREE_DELIVERY}</StyledContent>
        </StyledContentContainer>
        <StyledCloseBtn item xs={1}>
          <CloseIcon
            onClick={handleClosePromotion}
            sx={{ stroke: "#7EBB4E", strokeWidth: 2, cursor: "pointer" }}
          />
        </StyledCloseBtn>
      </StyledPromotionContainer>

      <StyledNavbar sx={{ marginTop: isShow ? "3rem" : "0.5rem" }}>
        <PageSize>
          <StyledNavbarContainer container>
            <StyledImgContainer item xs={2}>
              <StyledImg src={logo} />
            </StyledImgContainer>
            <StyledItemsContainer item xs={10}>
              <StyledItems
                container
                spacing={0.5}
                alignItems="center"
                minHeight="100%"
              >
                {navbarItems.map((item, i) => {
                  let property = handleProperty(item);
                  return (
                    <StyledItem key={i} item xs={3}>
                      <StyledNavLink
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={(e) => handleDropdown(e, property)}
                        to={item[property].PATH}
                        style={handleActive}
                      >
                        {handleIcon(item[property].ICON, property)}
                        {property}
                      </StyledNavLink>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        {dropdownItems.map((item, i) => {
                          let property = handleProperty(item);
                          return (
                            <MenuItem
                              key={i + 10}
                              onClick={(e) => handleSubMenu(e, property)}
                            >
                              {handleIcon(item[property].ICON, property)}
                              {property}
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    </StyledItem>
                  );
                })}
              </StyledItems>
            </StyledItemsContainer>
          </StyledNavbarContainer>
        </PageSize>
      </StyledNavbar>
    </>
  );
};

export default LayoutHeader;
