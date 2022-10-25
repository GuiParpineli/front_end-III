import './style.scss'
import youtubeimage from '../../assets/images/img.png'

export function QuartaAula() {

    const componentsFinded = [
        {
            id: 1,
            title: 'Vídeo',
            image: youtubeimage,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dolorum!'
        },
        {
            id: 2,
            title: 'Input',
            image: youtubeimage,
            text: 'Lorem ipsum dolor sit amet, dolorum!'
        }
    ]

    return (<div className='quarta-aula-component'>

        <h1 className='main-title'>Olá, eu sou a quarta aula</h1>

        <ul className='components-finded'>

            {
                componentsFinded.map(
                    component =>
                        (

                            <li key={component.id}>
                                <img src={component.image} alt="image"/>
                                <h1>{component.title}</h1>
                                <p>{component.text}</p>
                            </li>

                        )
                )
            }

        </ul>

    </div>)
}