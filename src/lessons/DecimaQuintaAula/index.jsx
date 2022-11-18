import {useEffect, useState} from 'react'
import {DecimaQuintaAulaItem} from '../../components/DecimaQuintaAulaItem'
import './style.scss'

export function DecimaQuintaAula() {

    const [locations, setLocations] = useState([0])
    const [cep, setCep] = useState('')

    function searchCep(cepRecieved) {

        setCep(cepRecieved)

        if (cepRecieved.length === 8) {

            fetch(`https://viacep.com.br/ws/${cepRecieved}/json/`).then(
                res => {
                    res.json().then(
                        data => {

                            if (data.erro !== undefined) {

                                // Deu erro

                            } else {

                                // Deu Sucesso
                                setLocations([...locations, data])

                            }
                        }
                    )
                }
            )

        }

    }


    function deleteLocation(currentLocation) {

    }

    return (

        <div className="decima-quarta-aula-component">

            <form>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label htmlFor="">Cep</label>
                    <input
                        type="number"
                        value={cep}
                        onChange={event => searchCep(event.target.value)}
                    />
                </div>

                <button>Cadastrar</button>

            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) =>
                            (
                                <DecimaQuintaAulaItem
                                    key={index}
                                    data={location}
                                    onDeleteLocation={currentLocation => deleteLocation(currentLocation)}
                                />
                            )
                    )
                }

            </section>

        </div>

    )

}