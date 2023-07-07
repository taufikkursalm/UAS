import styled from "styled-components";

const StyledHero = styled.div`
    /* Small Screen */
    margin: 1rem;
  
  .left {
    margin-bottom: 1rem;
    text-align: left;
  }
  
  .title {
    color: #06D6A0;
    font-size: 2.5rem;
  }
  
  .notes {
    font-size: 1.2rem;
    color: #118AB2;
  }
  
  .descrip {
    margin-top: 0.8rem;
    font-size: 1rem;
    color: #000;
  }
  
  button {
    padding: 1rem 2rem;
    margin-top: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #06D6A0;
    color: #fff;
  }
  
  img {
    background-image: url(../Assets/img/logo.png);
    max-width: 100%;
    border-radius: 15px;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
  left {
    margin-bottom: 1rem;
    text-align: left;
  }
  
  right {
    flex-basis: 60%;
  }
  
  .hero {
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
`;

export default StyledHero;