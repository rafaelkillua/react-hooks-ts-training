import styled from 'styled-components'

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 2rem;

  p {
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  div {
    display: flex;
    justify-content: space-around;

    @media (max-width: 500px) {
      flex-direction: column;

      &> * {
        margin-bottom: 0.5rem;
      }
    }
  }
`

export default ExampleContainer
