
const Headshot = ({Source, Alt, Name}) => {
    return(
        <div className='container d-flex flex-column align-items-center'>
            <img 
                src={Source}
                alt={Alt}
                className='img-thumbnail rounded-circle shadow-sm'
                width='200px'
                height='200px'
            ></img>
            <p>
                {Name}
            </p>
        </div>
    )
}

export default Headshot;