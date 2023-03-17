import {Link} from 'react-router-dom'
import './MainPage.css'

export default function MainPage() {
    return (
        <div className='MainPage'>
            <h3 className='intro'>Services</h3>
            <div className='service-list'>
            <Link to='/cleaning'>
                <div className='service-card'>
                    <img src='https://images.pexels.com/photos/3768910/pexels-photo-3768910.jpeg' alt='cleaning' />
                    <h3>Cleaning</h3>
                    </div></Link>
            <Link to='/underconstruction'>
                <div className='service-card'>
                    <img src='https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cleaning' />
                    <h3>Plumbing</h3>
                    </div></Link>
            <Link to='/underconstruction'>
                <div className='service-card'>
                    <img src='https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cleaning' />
                    <h3>Electrical</h3>
                    </div></Link>
            <Link to='/underconstruction'>
                <div className='service-card'>
                    <img src='https://images.pexels.com/photos/4079768/pexels-photo-4079768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cleaning' />
                    <h3>Landscaping</h3>
                    </div></Link>
            <Link to='/underconstruction'>
                <div className='service-card'>
                    <img src='https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cleaning' />
                    <h3>Moving</h3>
                    </div></Link>
            <Link to='/underconstruction'>
                <div className='service-card'>
                    <img src='https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cleaning' />
                    <h3>Painting</h3>
                    </div></Link>
            <Link to='/underconstruction'>
                <div className='service-card'>
                    <img src='https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cleaning' />
                    <h3>Tutoring</h3>
                    </div></Link>
            </div>
        </div>
    )
    }