import './UserDescription.css'

const UserDescription = ({name, description}) => {

    return(
        <div className='card description-card border-info shadow-sm mb-2 mt-2'>
            <div className ='card-body description-body'>
                <div className='description-content'>
                    <h5 className='card-title mb-3'>
                        About {name}:
                    </h5>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserDescription;