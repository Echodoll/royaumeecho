import '../assets/home.css'

function Chatons({ picture, altPicture, title, text, className }) {

    return (
        <div className={`chatons ${className}`}>
            <div className='chatons__picture'>
                <img src={picture} alt={altPicture} ></img>
            </div>
            <div className='chatons__text'>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Chatons