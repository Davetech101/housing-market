import styled from 'styled-components'

export const StListingForm = styled.section`
min-height: 100vh;
padding: 4rem 2rem;

header p {
    font-size: 3rem;
    font-weight: 800;
    margin: 2rem auto;
    text-align: center;
}

.formLabel {
    font-weight: 600;
    margin-top: 2rem;
    display: block;
}

.formButtons {
    display: flex;
}

.formButton,
.formInput,
.formInputAddress,
.formInputName,
.formInputSmall,
.formButtonActive {
    padding: 0.9rem 3rem;
    background-color: #ffffff;
    font-weight: 600;
    border-radius: 1rem;
    font-size: 1rem;
    margin: 0.5rem 0.5rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .formButtonActive {
    background-color: #00cc66;
    color: #ffffff;
  }
  
.flex {
    display: flex;
}
  
.formInput,
.formInputAddress,
.formInputName,
.formInputSmall,
.formInputFile {
    border: none;
    outline: none;
    font-family: "Montserrat", sans-serif;
}

.formInputSmall,
.formInputFile {
    margin-right: 3rem;
    padding: 0.9rem 0.7rem;
    text-align: center;
}

.formInputName {
    padding: 0.9rem 1rem;
    width: 90%;
    max-width: 326px;
}

.formInputAddress {
    padding: 0.9rem 1rem;
    width: 90%;
    max-width: 326px;
}

.formPriceDiv {
    display: flex;
    align-items: center;
}

.formPriceText {
    margin-left: -1.5rem;
    font-weight: 600;
}

.imagesInfo {
    font-size: 0.9rem;
    opacity: 0.75;
}

.formInputFile {
    width: 100%;
}

.formInputFile::-webkit-file-upload-button {
    background-color: #00cc66;
    border: none;
    color: #ffffff;
    font-weight: 600;
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
    margin-right: 1rem;
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
    margin-top: 5rem;
}

@media (min-width: 900px) {
    .formInputFile {
      width: 80%;
    }
  }
  
`