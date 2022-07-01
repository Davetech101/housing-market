import styled from "styled-components"

export const StContact = styled.section`
max-width: 60rem;
display: block;
margin: 0 auto;
overflow: hidden;
min-height: 100vh;

header p {
    font-size: 3rem;
    font-weight: 800;
    margin: 2rem auto;
    text-align: center;
}

.contactLandlord {
    margin-top: 2rem;
    display: flex;
    align-items: center;
}

.landlordName {
    font-weight: 600;
    font-size: 1.4rem;
}

.messageDiv {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
}

.messageLabel {
    margin-bottom: 0.5rem;
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
`