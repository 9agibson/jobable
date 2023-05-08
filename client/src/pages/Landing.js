
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import {Logo} from '../components'
import {Link} from 'react-router-dom'


const Landing = () => {
  return (
    <Wrapper>
        <Logo/>
        <div className='container page'>
            <div className='info'>
                <h1>Job <span>Tracking</span> App</h1>
                <p>
                    I'm baby offal locavore ennui roof party cornhole pitchfork. 
                    Sustainable adaptogen tonx meggings knausgaard everyday carry. 
                    Man bun drinking vinegar gentrify leggings four loko whatever 
                    praxis lo-fi venmo woke hell of meggings neutral milk hotel 
                    synth neutra. 8-bit normcore helvetica venmo vice direct trade, 
                    air plant af big mood.
                </p>
                <Link to='/register' className='btn btn-hero'>
                    Login/Register
                </Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    </Wrapper>
  )
}




export default Landing