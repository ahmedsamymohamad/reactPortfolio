import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

function Header () {
  const { title } = header

  return (
    <header className='header center'>
      <h3>
          <a href="/" className='link'>
            {title}
          </a>
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
