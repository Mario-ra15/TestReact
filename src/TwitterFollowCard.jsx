
import { useState} from 'react'

export function TwitterFollowCard({formatUserName, userName = 'unknown',initIsFollowing ,children}){

    
    const [isFollowing,setIsFollowing] = useState(initIsFollowing)
   

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button '

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
               <img className='tw-followCard-avatar'
               alt="El avatar del person" src={`https://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong  >{children}</strong>
                    <span className='tw-followCard-infoUserName' >{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text} 
                </button>
            </aside>
        </article>    
    )
}

// const [isFollowing,setIsFollowing] = userState(false) los estado devuelven 
//una array donde la poicion 1 es el valor y la posicion 2 es el setter