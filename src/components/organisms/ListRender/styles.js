import styled from 'styled-components'

export const ListScreenListContentContainer = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: auto;

  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
`

// @media screen and (max-width: 767px) {
//   .list-screen-list-content-container {
//     grid-template-columns: 100%;
//   }
// }
