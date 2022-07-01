import styled from "styled-components"

export const StListingUnit = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
    position: relative;
    padding: 1rem;
    box-shadow: 0 0 9px rgba(255, 255, 255, 0.329);
    border-radius: 1rem;
    max-width: 60rem;
    animation: animateListing 2s ease-in-out;
  
  @keyframes animateListing {
    0% {
      transform: translate(-360rem);
      opacity: 0;
    }
  
    80% {
      transform: translate(4rem);
      opacity: 0.4;
    }
  
    100% {
      transform: translate(0);
      opacity: 1;
    }
}

.categoryListingLink {
    display: contents;
  }
  
  .categoryListingImg {
    width: 30%;
    height: 100px;
    border-radius: 1.5rem;
    object-fit: cover;
    margin-right: 1rem;
  }
  @media (min-width: 1024px) {
    .categoryListingImg {
      width: 19%;
      height: 217px;
    }
  }
  
  .categoryListingDetails {
    width: 65%;
  }
  @media (min-width: 1024px) {
    .categoryListingDetails {
      width: 79%;
    }
  }
  
  .categoryListingLocation {
    font-weight: 600;
    font-size: 0.7rem;
    opacity: 0.8;
    margin-bottom: 0;
  }
  
  .categoryListingName {
    font-weight: 600;
    font-size: 1.25rem;
    margin: 0;
  }
  
  .categoryListingPrice {
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 1.1rem;
    color: #00cc66;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
  
  .categoryListingInfoDiv {
    display: flex;
    justify-content: space-between;
    max-width: 275px;
  }
  
  .categoryListingInfoText {
    font-weight: 500;
    font-size: 0.7rem;
  }
`