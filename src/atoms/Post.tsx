import React from 'react'

interface IPost {
    title: string;
    content: string;
}

const Post = ({title, content}: IPost) => {
  return (
    <div className="blog-post">
        <h2></h2>
        <p></p>
    </div>
  )
}

export default Post