import {Link} from 'react-router-dom'

export default function MainPage() {
    return (
        <div>
            <p>we have a wide range of services to choose from</p>
            <button><Link to='/cleaning'>Cleaning</Link></button>
            <button><Link to='/underconstruction'>Plumbing</Link></button>
            <button><Link to='/underconstruction'>Electrical</Link></button>
            <button><Link to='/underconstruction'>Landscaping</Link></button>
            <button><Link to='/underconstruction'>Moving</Link></button>
            <button><Link to='/underconstruction'>Painting</Link></button>
            <button><Link to='/underconstruction'>Yard Work</Link></button>
            <button><Link to='/underconstruction'>Tutoring</Link></button>
        </div>
    )
    }