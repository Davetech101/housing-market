import styled from 'styled-components';

export const StExplore = styled.section`
min-height: 100vh;
padding: 4rem 2rem;
max-width: 70rem;
margin: 0 auto;

header p {
    font-size: 3rem;
    font-weight: 800;
    margin: 2rem auto;
    text-align: center;
}

cite {
    font-weight: 700;
    font-size: 1.4rem;
    display: block;
    margin: 1rem auto;
}

aside {
    display: flex;
    justify-content: space-between;
}

aside a {
    width: 45%;
}

aside p {
    font-weight: 500;
    text-align: left;
    font-size: 1.4rem;
}

img {
    min-height: 115px;
    height: 15vw;
    width: 100%;
    border-radius: 1.5rem;
    object-fit: cover;
    margin: 0 auto;
    box-shadow: 0 0 9px rgba(255, 255, 255, 0.219);
}

@media (min-width: 650px) 
    main{
      max-width: 60rem;
      margin: 0 auto;
    }
}
`