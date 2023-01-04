
const Headshot = ({Source, Alt, Name, Description}) => {
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
            <p>
                {Description}
            </p>
        </div>
    )
}

export default Headshot;