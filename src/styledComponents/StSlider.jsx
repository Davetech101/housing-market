import styled from "styled-components";

export const StSlider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    margin: 2rem auto;
    position: relative;
  
  .image {
    opacity: 0;
    visibility: hidden;
    border-radius: 1.5rem;
    background-size: cover;
  }
  
 .show {
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

  .swiperSlideText {
    color: #ffffff;
    position: absolute;
    top: 70px;
    left: 0;
    font-weight: 600;
    max-width: 90%;
    font-size: 1.25rem;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0.5rem;
  }
  .swiperSlidePrice {
    color: #000000;
    position: absolute;
    top: 143px;
    left: 11px;
    font-weight: 600;
    max-width: 90%;
    background-color: #ffffff;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
  }

`