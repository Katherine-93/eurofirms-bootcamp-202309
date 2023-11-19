function Home(props) {
    console.log('Home')

    const ViewState = React.useState(null)
    const view = ViewState[0]
    const setView = ViewState[1]

    const timestampState = React.useState(null)

    const timestamp = timestampState[1]

    let name = null

    try {
        const user = retrieveUser(sessionUserId)

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    let posts = null

    try {
        posts = retrievePosts(sessionUserId)

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    function handleLogoutClick() {
        loggedInEmail = null

        props.onLogout()
    }

    function handleNewPostClick() {
        setView('new-post')
    }

    function handleNewPostCancelClick() {
        setView(null)
    }

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector("#image-input")
        const imageDescriptionInput = event.target.querySelector("#image-description-input")
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const imageDescription = imageDescriptionInput.value
        const text = textInput.value

        try {
            createNewPost(loggedInEmail, image, imageDescription, text)
            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostLikeClick(postId) {
        try {
            toggleLikePost(sessionUserId, postId)

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <header className="header" arial-label="Header">
            <h1>HOME</h1>
            <span aria-label="User name">{name}</span>
            <button title="New post" aria-label="New post" className="button" onClick={handleNewPostClick}>+</button>
            <button className="button" onClick={handleLogoutClick}>Logout</button>
        </header>

        {view === 'new-post' ? <div className="view">

            <h2>New post</h2>

            <form className="form">
                <label htmlFor="image-input" className="label">Image</label>
                <input type="url" id="image-input" className="input" required />

                <label htmlFor="image-description-input" className="label">Image description</label>
                <input type="text" id="image-description-input" className="input" required />

                <label htmlFor="text-input" className="label">Text</label>
                <input type="text" id="text-input" className="input" required />

                <button type="submit" className="button">Post</button>
                <button className="button" onClick={handleNewPostCancelClick}>Cancel</button>
            </form>
        </div> : null}

        {posts !== null ? <div id="posts-list" aria-label="Posts-list" className="view">
            {posts.toReversed().map(function (post, index, posts) {
                const liked = post.likes.includes(loggedInEmail)

                function handleBeforePostLikeClick() {
                    handlePostLikeClick(postId)

                }

                return <article key={post.id} className="post">
                    <h3>{post.autor}</h3>
                    <img className="post-image"
                        src={post.image}
                        alt={post.imageDescription}
                        title={post.imageDescription} />
                    <p>{post.text}</p>
                    <button className="button" onClick={handleBeforePostLikeClick}>{(liked ? '❤️' : '🩶') + ' ' + post.likes.legth + 'likes'}</button>
                </article>
            })}
        </div> : null}
    </div>
}

