import './movieprofile.css'


function MovieProfile(props) {
    return (        
        <div className='movie-container'>
            <div className='poster-container'>
                <img className='movie-poster' src={props.moviePoster} alt='elbaisa'/>       
            </div>
        </div>
    );
};

export { MovieProfile }