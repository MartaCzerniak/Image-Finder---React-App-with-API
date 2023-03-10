import styled from "@emotion/styled";
const FancyButton = styled.button({
  backgroundColor: "#3f51b5",
  border: "none",
  padding: 10,
  borderRadius: 5,
  cursor: "pointer",
  maxWidth: "100px",
});

function Button({ onClick }) {
  return (
    <FancyButton type="button" onClick={onClick}>
      Load More
    </FancyButton>
  );
}

export default Button;
