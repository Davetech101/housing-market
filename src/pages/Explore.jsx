import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
import { StExplore } from '../styledComponents/StExplore'

function Explore() {
  return (
    <StExplore>
      <header>
        <p>Explore</p>
      </header>

      <main>
        <Slider />

       <div>
       <cite>Categories</cite>
        <aside>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent'
            />
            <p>Places for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='sell'
            />
            <p>Places for sale</p>
          </Link>
        </aside>
       </div>
      </main>
    </StExplore>
  )
}

export default Explore