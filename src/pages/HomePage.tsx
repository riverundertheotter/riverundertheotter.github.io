import buizel from '../assets/buizel.jpeg';
import './HomePage.css'

function HomePage() {
    return (
        <div className='HomePage'>
            <div className='PhotoBackground'></div>
            <div className='Header'>
                <b>Hi, I'm River!</b><br></br>
                On this site you can check out what I'm working on.
            </div>
            <img className='Buizel' src={buizel} alt='Buizel' />
        </div>
    )
} export default HomePage;