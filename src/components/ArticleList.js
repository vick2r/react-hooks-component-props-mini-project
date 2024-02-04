import React from "react";
import Article from "./Article";

function ArticleList({ posts }){
// console.log(posts, 'posts array in articlelist')

return(
    <main>
        {posts.map((posts) => 
            <Article 
                key={posts.id}
                title={posts.title}
                date={posts.date}
                preview={posts.preview}
            />
        )}
    </main>
)}
export default ArticleList