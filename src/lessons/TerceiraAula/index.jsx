import './style.scss'
import batataGif from '../../assets/images/batata.gif'

export function TerceiraAula() {

    const components = [
        {
            name: 'Card',
            description: 'teste',
            image: batataGif
        },
        {
            name: 'Card 2',
            description: 'teste',
            image: ''
        },
        {
            name: 'Card 3',
            description: 'teste',
            image: ''
        },
        {
            name: 'Card 4',
            description: 'teste',
            image: ''
        }
    ]

    return (
        <div>
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>
                {
                    components.map(component => (
                        <li>
                            <img src={component.image} alt=""/>
                            <h1>{component.name}</h1>
                            <p>{component.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}