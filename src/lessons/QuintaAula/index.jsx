import './style.scss'
import youtubeimage from '../../assets/images/img.png'
import {QuintaAulaItem} from "../../components/QuintaAulaItem";

export function QuintaAula() {

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

    return (
        <div className='quarta-aula-component'>


            <h1 className='main-title'>Componentes Identificadores</h1>

            <ul className='components-finded'>


                {
                    componentsFinded.map(
                        component =>
                            (
                                <QuintaAulaItem
                                    key={component.id}
                                    item={component}/>
                            )
                    )
                }


            </ul>

        </div>)
}