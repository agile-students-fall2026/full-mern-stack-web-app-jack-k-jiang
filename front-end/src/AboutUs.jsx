import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'

const AboutUs = props => {
    const [about, setAbout] = useState(null) // will hold { paragraphs, photo }
    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`) // http://localhost:5002/about
            .then(response => setAbout(response.data)) // JSON the back-end sends
            .catch(err => setError('Could not load About Us info'))
    }, [])

    if (error) return <p>{error}</p>
    if (!about) return <p>Loading...</p>

    return (
        <>
            <h1>About Us</h1>
            <img className="AboutUs-photo" src={about.photo} alt="Jack Jiang" />
            {about.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
            ))}
        </>
    )
}

export default AboutUs
