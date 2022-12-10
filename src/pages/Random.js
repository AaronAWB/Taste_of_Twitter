import Headshot from '../components/Headshot';
import Burton from '../assets/images/LeVar_Burton.png';
import Ward from '../assets/images/Alie_Ward.png';


const Random = () => {
    return (
        <div className='container d-flex align-items-center'>
            <div className='container mt-5'>
                <Headshot
                    Name='LeVar Burton' 
                    Source={Burton}
                    Alt='LeVar Burton'
                />
            </div>
            <div className='container mt-5'>
                <Headshot 
                    Name='Alie Ward'
                    Source={Ward}
                    Alt='Alie Ward'
                />
            </div>
            <div className='container mt-5'>
                <Headshot
                    Name='LeVar Burton' 
                    Source={Burton}
                    Alt='LeVar Burton'
                />
            </div>
            <div className='container mt-5'>
                <Headshot
                    Name='LeVar Burton' 
                    Source={Burton}
                    Alt='LeVar Burton'
                />
            </div>
            <div className='container mt-5'>
                <Headshot
                    Name='LeVar Burton' 
                    Source={Burton}
                    Alt='LeVar Burton'
                />
            </div>
        </div>
    );
}
 
export default Random;


// LeVar Burton
// John Cleese
// Andy Sterkowitz
// Alie Ward
// Premier League