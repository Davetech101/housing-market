import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import Spinner from './Spinner'
import { StSlider } from '../styledComponents/StSlider'

function Slider() {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)
  const [idx, setIdx] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
      const querySnap = await getDocs(q)

      let listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setListings(listings)
      setLoading(false)
    }

    fetchListings()
  }, [])

  useEffect(() => {
    const idxInterval = setInterval(() => {
      setIdx(prev => {
        if (prev < listings?.length - 1)
          return prev + 1
        else return 0
      })
    }, 6000);

    return () => {
      clearInterval(idxInterval)
    }
  }, [idx, listings?.length])


  if (loading) {
    return <Spinner />
  }

  if (listings.length === 0) {
    return <></>
  }

  return (
    listings && (
      <main>
        <cite>Recommended</cite>
        <StSlider >
          {listings.map(({ data, id }, index) => {
            return (<button key={id} onClick={() => navigate(`/category/${data.type}/${id}`)}>
              <div className={idx !== index ? "image" : "show"} style={{
                background: `url(${data.imageUrls[0]}) center no-repeat`,
                backgroundSize: 'cover',
                cursor: 'pointer'
              }} >
                 <p className='swiperSlideText'>{data.name}</p>
                <p className='swiperSlidePrice'>
                  ${data.discountedPrice ?? data.regularPrice}{' '}
                  {data.type === 'rent' && '/ month'}
                </p>
              </div>
            </button>)
          })}
        </StSlider>
      </main>
    )
  )
}

export default Slider