import styled from 'styled-components'

const StyledHeaderLink = styled.li`
  a {
    color: blue;
    text-decoration: none;

    &.active {
      color: purple;
    }

    &:hover {
      color: purple;
    }
  }
`

export default StyledHeaderLink
