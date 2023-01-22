import './UserDescription.css'

const UserDescription = ({name, description}) => {

    return(
        <div className='card description-card text-bg-info shadow-lg mb-2 mt-2'>
            <div className ='card-body description-body'>
                <div className='description-content'>
                    <div className='col'>
                        <h5 className='card-title text-muted row description-container mb-3'>
                            About {name}
                        </h5>
                        <p className='card-text row description-container'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDescription;