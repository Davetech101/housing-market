import styled from 'styled-components'

export const StNav = styled.div`
    position: sticky;
    left: 0;
    bottom: 0;
    right: 0;
    height: 85px;
    background-color: #ffffff;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  
  .navbarNav {
    width: 100%;
    margin-top: 0.75rem;
    overflow-y: hidden;
  }
  
  .navbarListItems {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .navbarListItem {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .navbarListItemName,
  .navbarListItemNameActive {
    margin-top: 0.25rem;
    font-size: 14px;
    font-weight: 600;
    color: #636363;
  }
  .navbarListItemNameActive {
    color: #000000;
  }

  @media (min-width: 900px) {
      position: fixed;
      left: unset;
      bottom: 0;
      right: 0;
      height: 100vh;
      width: 8.5rem;
      background-color: #ffffff;
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
  
    .navbarNav {
      width: 100%;
      margin-top: unset;
      overflow-y: hidden;
    }
  
    .navbarListItems {
      margin: 0;
      padding: 0;
      display: flex;
      justify-items: space-around;
      height: 100vh;
      flex-direction: column;
      align-items: center;
    }
  
    .navbarListItem {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .navbarListItemName,
    .navbarListItemNameActive {
      margin-top: 0.25rem;
      font-size: 14px;
      font-weight: 600;
      color: #636363;
    }
    .navbarListItemNameActive {
      color: #000000;
    }
}  
  
`