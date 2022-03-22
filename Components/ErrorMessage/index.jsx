import styled from "styled-components";


const ErrorMessage = ({ text }) => {
  return (
    <Wrapper>
      <h4>{text}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem auto;
  width: 300px;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  background-color: rgba(255, 10, 84, 0.2);
  color: rgba(255, 10, 84, 0.8);
  border: 1px solid rgba(255, 10, 84, 1);
  height: 50px;
  border-radius: 0.35rem;

    h4 {
      margin: 0 auto;
      text-transform: lowercase;
      font-variant: small-caps;
      color: inherit;
    }
    
    @media screen and (min-width: 992px) {
      width: 800px;
    }
`;

export default ErrorMessage;
