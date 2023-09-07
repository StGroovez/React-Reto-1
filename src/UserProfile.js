import './userprofile.css'


function UserProfile(props) {
    return (        
        <div className='profile-container'>
            <div className='img-container'>
                <img className='movie-img' src={props.moviePoster} alt='elbaisa'/>
                <div className='user-name-container'>
                    <img className='user-avatar' src= {props.avatar && props.userAvatar}/>              
                    <div className='friend-name'> {props.name}  </div>
                </div>                
            </div>

            <div className='user-info-container'>
                <div className='user-rate'> {props.rate}</div>
                <div className='user-date'> {props.date}</div>
            </div>
        </div>
    );
};

export { UserProfile }