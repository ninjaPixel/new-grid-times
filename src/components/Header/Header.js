import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <MaxWidthWrapper>
        <DesktopHeader>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <MainHeader>
            <Logo />
          </MainHeader>
          <DesktopSubscribe>
            <Button>Subscribe</Button>
            <a href="/">Already a subscriber?</a>
          </DesktopSubscribe>
        </DesktopHeader>
      </MaxWidthWrapper>
    </>
  );
};

const MobileHeader = styled.header`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;
const DesktopHeader = styled.header`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-content: space-between;
  }
`;

const DesktopSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  & a {
    text-decoration: underline;
    color: var(--color-gray-700);
    font-size: 0.8em;
  }
`;
// const Button = styled.button`
//   background-color: var(--color-primary);
//   color: var(--color-white);
// `;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
