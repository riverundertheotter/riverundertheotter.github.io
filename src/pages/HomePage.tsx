import buizel from '../assets/buizel.jpeg';
import './HomePage.css'

function HomePage() {
    return (
        <div className='HomePage'>
            <div className='PhotoBackground'></div>
            <div className='Header'>
                Hi, I'm River!<br></br>
                On this site you can check out what I'm working on.
            </div>
            <img className='Buizel' src={buizel} alt='Buizel' />
        </div>
    )
} export default HomePage;