import styled from 'styled-components'

export const ListFriends = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0.93rem;
    
  @media (max-width: 1190px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;  
    grid-gap: 0.93rem;
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;  
    grid-gap: 0.93rem;
  }
`;