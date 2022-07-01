import styled from 'styled-components'

export const StProfile = styled.section`
min-height: 100vh;
padding: 4rem 2rem;

header p {
    font-size: 3rem;
    font-weight: 800;
    margin: 2rem auto;
    text-align: center;
}

header button {
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffffff;
    background-color: #00cc66;
    padding: 0.7rem 1.7rem;
    border-radius: 1rem;
}

cite{
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin: 1rem auto;
}

cite p{
    font-weight: 600;
    font-size: 1.4rem;
}

cite button{
    font-weight: 600;
    color: #00cc66;
    font-size: 1.4rem;
}

form{
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.123);
    max-width: 60rem;
    margin: 0 auto;
}

input{
  padding: 1.7rem 7rem;
  all: unset;
  width: 70%;
  font-weight: 600;
  padding: 0.9rem;
  display: block;
  font-size: 1.4rem;
  color: black;
}

.profileNameActive {
  background-color: rgba(44, 44, 44, 0.1);
}

.createListing{
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 0.25rem 1rem;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.123);
    margin: 2rem auto;
    font-weight: 600;
    max-width: 60rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.createListing p{
    color: rgb(15, 5, 5);
}

aside h6{
    margin: 3rem 0 0.8rem;
    font-weight: 600;
    font-size: 1.4rem;
    text-align: center;
}

@media (min-width: 650px) {
   header button {
    margin: 0 auto;
    display: block;
  }
`