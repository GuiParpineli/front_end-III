import "./style.scss"
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BlogComponent} from "../../components/BlogComponent";

export function DesafioBlog() {

    const [posts, setPosts] = useState([])


    useEffect(() => console.log("changed") ,[posts])

    const findAllPosts = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        const convert = await data.json()
        setPosts(convert)
    }

    const findPostById = async (postId) => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const convert = await data.json()
        setPosts([convert])
    }

    return (
        <div className="container-main">
            <div className="button-container">
                <button onClick={findAllPosts}>Exibir Posts</button>
            </div>
            <div className="post-link">
                {
                    posts.map(posts =>
                        <Link  to={`/desafio-blog/${posts.id}`}>
                            <ul>
                                <button onClick={() => findPostById(posts.id)}>
                                    {posts.id}
                                </button>
                            </ul>
                        </Link>
                    )
                }
            </div>
            <main className="posts">
                {
                    posts.map(
                        (posts, index) =>
                            <BlogComponent
                                id={posts.id}
                                key={index}
                                data={posts}
                            />
                    )
                }
            </main>
        </div>
    )

}