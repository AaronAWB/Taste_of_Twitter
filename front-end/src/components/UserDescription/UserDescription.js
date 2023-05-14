import './UserDescription.css'

const UserDescription = ({user}) => {

    return(
        <div className='card description-card shadow-lg mb-2 mt-2'>
            <div className ='card-body description-body'>
                <div className='description-content'>
                    <div className='col'>
                        <h6 className='card-title row description-container description-name mb-3'>
                            About {user.name}
                        </h6>
                        <p className='card-text row description-container'>
                            {user.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDescription;