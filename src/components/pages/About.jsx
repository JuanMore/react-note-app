import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink';

function About() {
    return (
        <>
        <div className="card">
            <div className="center">
            <h1>About This project</h1>
            <p>This is a React app to take down notes.</p>
            <p>Version: 1.0.0</p>

            <p>
                <Link to="/">Back to home</Link>
                </p>
                </div>
        </div>
            <BackLink />
            </>
    )
}

export default About
