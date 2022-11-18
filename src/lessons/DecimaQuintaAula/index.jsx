import {useEffect, useState} from 'react'
import {DecimaQuintaAulaItem} from '../../components/DecimaQuintaAulaItem'
import './style.scss'

export function DecimaQuintaAula() {

    const [locations, setLocations] = useState([])
    const [cepError, setCepError] = useState(false)
    const [cep, setCep] = useState('')

    function searchCep(e) {
        e.preventDefault()

        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
                res => {
                    res.json().then(
                        data => {
                            if (data.erro !== undefined) {
                                setCepError(true)
                            } else {
                                setCepError(false)
                                setLocations([...locations, data])
                            }
                        }
                    )
                }
            )
        }

    }

    function deleteLocation(currentLocation) {
        if (locations.length === 1) {
            setLocations([])
        } else {
            var newLocations = [...locations]
            newLocations.splice(currentLocation,1)
            setLocations(newLocations)
        }
    }

    return (

        <div className="decima-quarta-aula-component">
            <form onSubmit={e => searchCep(e)}>
                <h1>Cadastrar endereços</h1>
                <div>
                    <label htmlFor="">Cep</label>
                    <input
                        type="number"
                        value={cep}
                        onChange={event => setCep(event.target.value)}
                    />
                    {
                        cepError && (
                            <span>Cep invalido</span>
                        )
                    }
                </div>
                <button >Cadastrar</button>
            </form>
            <section className="locations">

                {
                    locations.map(
                        (location, index) =>
                            (
                                <DecimaQuintaAulaItem
                                    id={index}
                                    key={index}
                                    data={location}
                                    onDeleteLocation={
                                        currentLocation => deleteLocation(currentLocation)
                                    }
                                />
                            )
                    )
                }

            </section>

        </div>

    )

}