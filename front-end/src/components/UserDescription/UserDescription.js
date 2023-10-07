import { useState, useEffect } from 'react';
import Axios from 'axios';
import './UserDescription.css'

const UserDescription = ({author_id}) => {

    const [user, setUser] = useState({})

    const getUserInfo = async (author_id) => {
        const res = await Axios.get(`/api/tweets/user_info/${author_id}`)
        console.log(`res.data.data: ${res.data.data}`)
        setUser(res.data.data)
    }

    useEffect(() => {
        if (author_id) {
            console.log(`author_id: ${author_id}`)
            getUserInfo(author_id)
        }
    }, [author_id])


    return(
        <div className='card description-card shadow-lg mb-2 mt-2'>
            <div className ='card-body description-body'>
                <div className='description-content'>
                    <div className='col'>
                        <h6 className='card-title row description-container description-name mb-3'>
                            About {user.name || "Loading user's name..."}
                        </h6>
                        <p className='card-text row description-container'>
                            {user.description || "Loading description..."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDescription;