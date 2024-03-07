import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){

    const format= (userName) => `@${userName}`
    

    return(
        <section className='App'> 

            <TwitterFollowCard formatUserName={format} 
            userName="midudev" initIsFollowing = {true} > 
            Mario fer
            </TwitterFollowCard>  

            <TwitterFollowCard formatUserName={format} 
            userName="pheralb" initIsFollowing = {false} >
            Pablo julian
            </TwitterFollowCard>  
             

            <TwitterFollowCard formatUserName={format} 
            userName="elonmusk" initIsFollowing = {false} > 
            Elon Musk
            </TwitterFollowCard> 
            
        </section>
    )
 }
 //las puerticitas vacias es el equivalente al react.Fragment
 //isfollowing = isfollowing={true}
 //formatUserName se usa para pasar por parametro una funcion