import './style.scss'
import {CardNewGames} from "../../components/CardNewGames/index.jsx";
import windows from '../../assets/icons/windows.png'

export function NewGames() {
    const newGames = [
        {
            key: 0,
            name: 'Hollow Knight',
            plataforms: windows,
            categories: ['Metroidvania', 'Souls-like', 'Platformer2D'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg'
        },
        {
            key: 1,
            name: "Don't Starve",
            plataforms: windows,
            categories: ['SurvivalOpen', 'World Survival', 'CraftCrafting'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg'
        },
        {
            key: 2,
            name: 'Cult of the Lamb',
            plataforms: windows,
            categories: ['Horror', 'Cute', 'Roguelike'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg'
        }
    ]

    return (
        <div className='new-games-cards'>
            <ul className='cards'>
            <h1>New Games</h1>
                {
                    newGames.map(
                        c =>
                            (
                                <CardNewGames
                                    key={c.key}
                                    item={c}/>
                            )
                    )
                }
            </ul>
        </div>
    )
}