import './movie-headers.css'

function MovieHeader({title, subTitle, Icon}) {
    return(
        <div className='friends-header'>
            <div className='friends-text'> { title }</div>
            <div className='activity-bolt-container'>
            { Icon && <Icon /> }
            <div className='all-activity'>{ subTitle }</div>
            </div>            
        </div>
    );
};

export { MovieHeader };