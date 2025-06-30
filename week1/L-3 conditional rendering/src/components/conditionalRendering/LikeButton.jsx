import React, { useState } from 'react'

const LikeButton = () => {

    const [isLike, setIsLike] = useState(true);

    return (
        <div>
            <button
                onClick={() => { setIsLike(!isLike) }}
            >
                Like
            </button>

            <h2>
                {
                    isLike ? "You Liked the Post" : " you didnt liked the post "
                }

            </h2>
        </div>
    )
}

export default LikeButton
