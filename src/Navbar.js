import './navbar.css';
import letterbox from './imgs/letterboxlogo.png';
import userprofile from './imgs/userprofile.jpg';
import { ReactComponent as TestSvgIcon } from './imgs/glass.svg';
import { ReactComponent as ExpandSvgIcon } from './imgs/expand.svg'
import { ReactComponent as BoltSvgIcon } from './imgs/bolt.svg'

function Navbar() {
    return(
        <div className='full-container'>             
                
            <div className='logo-container'>
                <img className='logo' src={letterbox} alt='letterbox' />
            </div> 

            <div className='nav-bar-container'>                     

                <div className='user-profile'>            
                    <div className='user-img-container'>
                            <img className='user-img' src={userprofile} alt='' />
                    </div>               
                    <div className='user-name'>
                        M A S A V I
                        <div className='expand-container'>
                            <ExpandSvgIcon />
                        </div>
                    </div>
                </div>

                <div className='bolt-container'>
                    <BoltSvgIcon />
                </div>

                <li className='menu-options'>FILMS</li>
                <li className='menu-options'>LISTS</li>
                <li className='menu-options'> MEMBERS</li>
                <li className='menu-options'>JOURNAL</li>
                        
                <div className='svg-container'>
                    <TestSvgIcon />
                </div>
                        
                <div className='buttons-container'>
                    
                    <button> <span>+ </span> LOG</button>
                    <button className='button-expand'><ExpandSvgIcon className='boris'  /></button>
                </div>
           
            </div>
        
        </div>
    );
};

export { Navbar };

