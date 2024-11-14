import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const LatestNews = () => {
  return (
    <div className='flex items-center gap-2 bg-gray-50 p-3 mt-7'>
      <p className='py-2 px-4 bg-red-600 text-white rounded'>Latest</p>
      <Marquee
        pauseOnHover={true}
        speed={100}
        className='font-semibold space-x-3'
      >
        <Link to='/news'>
          Match Highlights: Germany vs Spain — as it happened Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Vitae, beatae. ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to='/news'>
          Match Highlights: Germany vs Spain — as it happened Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Vitae, beatae. ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to='/news'>
          Match Highlights: Germany vs Spain — as it happened Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Vitae, beatae. ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  )
}

export default LatestNews
