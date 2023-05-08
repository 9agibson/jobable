import NotFound from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper className='full-page'>
    <div>
        <img src={NotFound} alt="404 not found" className='img'/>
        <h3>Ohh! It looks like your are lost!</h3>
        <p>Lets get you back home</p>
        <Link to='/'>Back Home</Link>
    </div>
    </Wrapper>
  )
}
export default Error