import React, { useState } from "react";
import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarLinkContainer, NavbarLink, OpenLinksButton, NavbarLinkExtended, HamburgerMenu } from "./style";
import NewBook from "../NewBook";

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
            <NavbarLink to="/newbook" onClick={() => setExtendNavbar(false)}>
              Add New Book
            </NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>©
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <HamburgerMenu>
          <NavbarLinkExtended to="/" />
          <NavbarLinkExtended to="/book">Update Account</NavbarLinkExtended>
        </HamburgerMenu>
      )}
      {extendNavbar && <NewBook />}
    </NavbarContainer>
  );
}

export default Navbar;
