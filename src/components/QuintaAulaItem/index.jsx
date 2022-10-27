export function QuintaAulaItem(props) {

    console.log(props)

    return (
        <li>
            <img src={props.item.image} alt="image"/>
            <h1>{props.item.title}</h1>
            <p>{props.item.text}</p>
        </li>
    )
}