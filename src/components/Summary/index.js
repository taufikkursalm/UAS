import StyledSummary from "./Summary.styled";

function Summary(props) {
  return (
    <StyledSummary>
      <h1>Summary</h1>
      <h3>Data Covid Berdasakan Summary</h3>
      <img src={props.image} alt="picsum"></img>
    </StyledSummary>
  );
}

export default Summary;
