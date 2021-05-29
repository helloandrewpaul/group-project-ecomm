import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import fit from "../assets/fitness.jpg";
import life from "../assets/lifestyle.jpg";
import med from "../assets/medical.jpg";
import ent from "../assets/entertainment.jpg";

const Categories = () => {
  return (
    <CatgegoryWrap>
      <Fitness to="/fitness">
        <Dark>
          <Fit>Fitness</Fit>
        </Dark>
      </Fitness>

      <Lifestyle to="/lifestyle">
        <Dark>
        <Life>Lifestyle</Life></Dark>
      </Lifestyle>
      <Entertainment to="/entertainment"><Dark>
        <Ent>Entertainment</Ent></Dark>
      </Entertainment>
      <Medical to="/medical"><Dark>
        <Med>Medical</Med></Dark>
      </Medical>
    </CatgegoryWrap>
  );
};
const Dark = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 35rem;
  height: 35rem;
  background: rgba(0, 0, 0, 0.5);
  &:hover {
    background: rgba(0, 0, 0, 0.8);

      transition: all 0.2s ease-in-out
  }
`;
const Fit = styled.h2`
  color: #fff;
`;
const Life = styled.h2`
  color: #fff;
`;
const Ent = styled.h2`
  color: #fff;
`;
const Med = styled.h2`
  color: #fff;
`;

const Lifestyle = styled(NavLink)`
  text-decoration: none;
  background-size: cover;
  width: 35rem;
  height: 35rem;
  background-image: url(${life});

`;
const Entertainment = styled(NavLink)`
  text-decoration: none;
  background-size: cover;
  width: 35rem;
  height: 35rem;
  background-image: url(${ent});

`;
const Medical = styled(NavLink)`
  text-decoration: none;
  background-size: cover;
  width: 35rem;
  height: 35rem;
  background-image: url(${med});

`;

const Fitness = styled(NavLink)`
  text-decoration: none;
  background-size: cover;
  width: 35rem;
  height: 35rem;
  background-image: url(${fit});
`;

const CatgegoryWrap = styled.div`
margin-top: 2rem;
  display: grid;
  grid-template-columns: 35rem 35rem;
  gap: 1.5rem;
  justify-content: center;
  align-content: center;

`;
export default Categories;
