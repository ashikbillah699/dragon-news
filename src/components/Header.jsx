import moment from 'moment'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='text-center mt-8'>
      <img className='mx-auto' src={logo} alt='' />
      <p className=' text-gray-400 my-2'>Journalism Without Fear or Favour</p>
      <p className='font-medium text-gray-500'>
        {moment().format('dddd, MMMM Do YYYY')}
      </p>
    </div>
  )
}

export default Header
