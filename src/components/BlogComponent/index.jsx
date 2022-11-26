import "./style.scss"
export function BlogComponent(props){
    return (
        <div className="post-card">
            <h1>{props.data.title}</h1>
            <p>{props.data.body}</p>
        </div>
    )
}