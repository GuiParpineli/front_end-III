import {DecimaQuartaAulaItem} from "../../components/DecimaQuartaAulaItem";
import {useState} from "react";

export function DecimaQuartaAula() {

    const registers = [{id: 1, title: "Testing testing"}]

    const [registerListVisible, setRegisterListVisible] = useState(true)

    function deleteRegisterFromList(){ }

    return (
        <>
            <h1>Lista</h1>
            <button onClick={() => setRegisterListVisible(!registerListVisible)}>{`${registerListVisible ? "Ocultar" : "Exibir"}`}</button>
            {
                registerListVisible && (
                    registers.map( a =>
                        <DecimaQuartaAulaItem
                            key={a.id}
                            registerData={a}
                            delete={ b => deleteRegisterFromList(b)}
                        />
                    )
                )
            }
        </>
    )
}