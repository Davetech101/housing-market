import styled from 'styled-components'
import badgeIcon from "../assets/svg/badgeIcon.svg"
import personIcon from "../assets/svg/personIcon.svg"
import lockIcon from "../assets/svg/lockIcon.svg"

export const StAuth = styled.main`
padding: 10rem 2rem;
height: 100vh;
overflow: hidden;

header p {
    font-size: 3rem;
    font-weight: 800;
    margin: 2rem auto;
    text-align: center;
}

input {
  box-shadow: rgba(255, 255, 255, 0.7);
  border: none;
  background: #ffffff;
  border-radius: 3rem;
  height: 3rem;
  width: 100%;
  max-width: 60rem;
  display: block;
  margin: 0 auto;
  outline: none;
  font-family: "Montserrat", sans-serif;
  padding: 1.7rem 4rem;
  font-size: 1.4rem;
}

#name {
    margin-bottom: 2rem;
    background: url(${badgeIcon}) #ffffff 2.5% center no-repeat;
}

#email{
    margin-bottom: 2rem;
    background: url(${personIcon}) #ffffff 2.5% center no-repeat;
}

#password {
    margin-bottom: 2rem;
    background: url(${lockIcon}) #ffffff 2.5% center no-repeat;
}


aside{
    position: relative;
    max-width: 60rem;
    display: block;
    margin: 0 auto;
}

aside a{
    cursor: pointer;
    color: #00cc66;
    font-weight: 600;
    text-align: right;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    display: block;
    max-width: 60rem;
    display: block;
    margin: 0 auto;
}

aside img{
    cursor: pointer;
    position: absolute;
    top: -4%;
    right: 1%;
    padding: 1rem;
}

#submit{
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: inherit;
    max-width: 30rem;
    margin: 0 auto;
    cursor: pointer;
}

#submit p{
  font-size: 2rem;
  margin: 1rem;
  font-weight: 700;
}

#submit span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background-color: #00cc66;
    border-radius: 50%;
}

a{
    margin-top: 2rem;
    color: #00cc66;
    font-weight: 600;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 1.4rem;
}
`