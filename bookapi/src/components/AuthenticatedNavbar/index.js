import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
  HamburgerMenu,
} from "./style";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
        <NavbarLink to="/"> Book Store </NavbarLink>
        </LeftContainer>
        <RightContainer>
        <NavbarLinkContainer>
            <NavbarLink to="/login"> Login</NavbarLink>
            <NavbarLink to="/register"> Register</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <HamburgerMenu>
          <NavbarLinkExtended to="/">
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
          <NavbarLinkExtended to="/register"> Register</NavbarLinkExtended>
        </HamburgerMenu>
      )}
    </NavbarContainer>
  );
}

export default Navbar;