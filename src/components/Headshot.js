
const Headshot = (Source) => {
    return(
        <img 
            src={Source}
            className='img-thumbnail rounded-circle shadow-sm'
            alt='LeVar Burton'
            width='200px'
            height='200px'
        ></img>
    )
}

export default Headshot;