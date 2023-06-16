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
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/login"> Login</NavbarLink>
            <NavbarLink to="/register"> Register</NavbarLink>
            <NavbarLink to="/about"> About Us</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <HamburgerMenu>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
          <NavbarLinkExtended to="/register"> Register</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
        </HamburgerMenu>
      )}
    </NavbarContainer>
  );
}

export default Navbar;