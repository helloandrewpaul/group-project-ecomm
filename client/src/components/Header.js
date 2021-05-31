import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiUserCircle, BiCartAlt, BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  const handleSearch = (ev) => {
    // gets value of input box
    // looks thru store data to see if any store item .includes(search term)
    // does a history.push to a search results component that loads the relevant store item(s)
    // that were .includes in the store items stsate.... naw mean?
    // if none, just return the search results c omponent that says "sry nothing found xD"
    console.log(ev);
  };
  return (
    <Main>
      <LinkWrap>
        <StoreName exact to={"/"}>
          Clown Town
        </StoreName>
        <Cat exact to={"/categories"}>
          Categories
        </Cat>
        <All exact to={"/shop/shop-all"}>
          Shop All
        </All>
        <About exact to={"/about-us"}>
          About US
        </About>
        <Con exact to={"/contact"}>
          Contact
        </Con>
      </LinkWrap>
      <CartWrap>
        {/* <Search placeholder={"Search"} type="text"></Search> */}
        <SearchWrapper>
          <Input type="text" placeholder="pls..." />
          <button
            onClick={(ev) => {
              handleSearch(ev);
            }}
          >
            <StyledBiSearchAlt2 />
          </button>
        </SearchWrapper>
        <StyledBiUserCircle />
        <NavLink to={"/shop/cart"}>
          <StyledBiCartAlt />
        </NavLink>
      </CartWrap>
    </Main>
  );
};
// const Search = styled.input`
//   width: 30rem;
//   height: 3rem;
//   margin-bottom: 1rem;
//   border-radius: 2vw;
//   border: none;
// `;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
  }
`;
const Input = styled.input`
  border-radius: 10px;
`;
const StyledBiSearchAlt2 = styled(BiSearchAlt2)`
  width: 2.3vw;
  height: 100%;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;
const StyledBiCartAlt = styled(BiCartAlt)`
  width: 2.3vw;
  height: 100%;
  cursor: pointer;
  color: white;

  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;
const StyledBiUserCircle = styled(BiUserCircle)`
  width: 2.3vw;
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const CartWrap = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 1.5rem;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
`;

const StoreName = styled(NavLink)`
  font-size: 3vw;
  color: #fff;
  font-weight: 700;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const Cat = styled(NavLink)`
  font-size: 1.5vw;
  font-weight: 550;
  margin-left: 1rem;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const All = styled(NavLink)`
  margin-left: 1rem;
  font-size: 1.5vw;
  font-weight: 550;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const About = styled(NavLink)`
  margin-left: 1rem;
  font-size: 1.5vw;
  font-weight: 550;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const Con = styled(NavLink)`
  margin-left: 1rem;
  font-size: 1.5vw;
  font-weight: 550;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const LinkWrap = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  margin-left: 1rem;
`;

const Main = styled.div`
  color: #fff;
  /* position: relative; */
  z-index: 10;
  background: #000;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export default Header;
