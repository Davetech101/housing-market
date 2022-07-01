import styled from 'styled-components'

export const StListing = styled.section`
max-width: 70rem;
margin: 0 auto;
min-height: 100vh;
padding: 4rem 2rem;

.slideCont {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    margin: 2rem auto;
    position: relative;
}
  
.slideCont .image {
    opacity: 0;
    visibility: hidden;
    border-radius: 1.5rem;
    background-size: cover;
}
  
.slideCont .show {
    opacity: 1;
    visibility: visible;
    width: 100%;
    height: 20rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.8s;
    box-shadow: 0 0 9px rgba(255, 255, 255, 0.349);
    border-radius: 1.5rem;
}

.shareIcon {
    cursor: pointer;
    position: fixed;
    top: 3%;
    right: 5%;
    z-index: 2;
    background-color: #ffffff;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.205);
}

.linkCopied {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 2;
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    font-weight: 600;
    color: #00cc66;
}

.listingName {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.listingLocation {
    margin-top: 0;
    font-weight: 600;
    margin-bottom: 1rem;
}

.discountPrice {
    padding: 0.25rem 0.5rem;
    background-color: #000000;
    color: #ffffff;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    display: inline;
}

.listingType {
    padding: 0.25rem 0.5rem;
    background-color: #00cc66;
    color: #ffffff;
    border-radius: 2rem;
    display: inline;
    font-weight: 600;
    font-size: 1rem;
    margin-right: 1rem;
}

.listingDetailsList {
    padding: 0;
    list-style-type: none;
}

.listingDetailsList li {
    margin: 0.3rem 0;
    font-weight: 500;
    opacity: 0.8;
    font-size: 1.3rem;
}

.listingLocationTitle {
    margin: 2rem 0;
    font-weight: 600;
    font-size: 1.5rem;
}

.leafletContainer {
    width: 100%;
    height: 200px;
    overflow-x: hidden;
    margin-bottom: 3rem;
}

.primaryButton {
    cursor: pointer;
    background: #00cc66;
    color: #ffffff;
    border-radius: 1rem;
    padding: 0.85rem 2rem;
    font-weight: 600;
    font-size: 1.25rem;
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 900px) {
    .shareIcon {
      right: 15%;
    }
}
`
