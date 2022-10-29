import './style.scss'

export function CardNewGames(props) {
    return (

        <li className='games-cards'>

            <div className='image-game'>
                <img src={props.item.picture} alt=""/>
            </div>

            <div className='info-games'>
                <h1>{props.item.name}</h1>
                <img className='plataform' src={props.item.plataforms} alt=""/>
                <p>{props.item.categories}</p>
            </div>
            <div className='price'>
                <h1>{props.item.price}</h1>
            </div>


        </li>
    )
}