import CloseIcon from "@mui/icons-material/Close";
import { Menu, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/imgs/logo.png";
import {
  StyledNavLink,
  StyledPromotionContainer,
  StyledContentContainer,
  StyledContent,
  StyledCloseBtn,
  StyledNavbar,
  StyledImgContainer,
  StyledImg,
  StyledItemsContainer,
  StyledItems,
  StyledItem,
  StyledIcon,
} from "../styled.js";
import {
  CONTENT,
  NAVBAR,
  API,
  PAGE_PATH,
  RESPONSE_MESSAGES,
} from "../../../utils/constants";
import fetchLogin from "../../../utils/fetchLogin";

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
      return { color: "#469E02" };
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

  const handleProperty = (item) => {
    return Object.keys(item)[0];
  };

  const handleIcon = (icon) => {
    return <StyledIcon>{icon}</StyledIcon>;
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
            const noneFirefox = "noneFirefox";
            localStorage.removeItem(noneFirefox);
            //
            alert(RESPONSE_MESSAGES.LOGOUT.SUCCESS);
            navigate(PAGE_PATH.LOGIN);
          }
        })
        .catch((err) => console.log(err));
    } else if (item === "HISTORY") {
    }
  };
  return (
    <>
      <StyledPromotionContainer
        container
        sx={{ display: isShow ? "flex" : "none" }}
      >
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
      <StyledNavbar container>
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
                    {handleIcon(item[property].ICON)}
                    {property}
                  </StyledNavLink>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
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
                          {handleIcon(item[property].ICON)}
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
      </StyledNavbar>
    </>
  );
};

export default LayoutHeader;
