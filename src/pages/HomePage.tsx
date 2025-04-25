import buizel from '../assets/buizel.jpeg';

function HomePage() {
    return (
        <div className='HomePage'>
            <div className='Header'>
                Hi! I'm River Cook, and on this site you can check out what I'm working on.
            </div>
            <div className='Links'>
                <div><a href='https://github.com/riverundertheotter' target="_blank">Github </a></div>
                <div><a href='https://www.linkedin.com/in/river-cook/' target="_blank">LinkedIn </a></div>
            </div>
            <img className='Buizel' src={buizel} alt='Buizel' />
        </div>
    )
} export default HomePage;