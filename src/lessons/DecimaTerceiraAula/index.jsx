import {useState, useEffect} from "react";

export function DecimaTerceiraAula() {

    const [count, setCount] = useState(0)
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState(false)

    const add = () => setCount(count + 1)

    useEffect(() => userName.length > 10 ? setUserNameError(true) : setUserNameError(false), [userName])

    return (
        <>
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
            {userNameError ? (<small>The name is too big!!</small>) : null}
            <p>The value of count is: ${count}</p>
            <button onClick={add}>Update count</button>
        </>
    )
}