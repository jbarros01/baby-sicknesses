import React from "react";
import { Link } from 'react-router';

const ArticleType = () => {
    return (
        <article id="1" class="post-1 post type-post status-publish format-standard hentry category-uncategorized tag-boat tag-lake">
            <div class="post-inner no-thumb">
                <header class="entry-header">
                    <h2 class="entry-title">
                        <a href="https://wp-themes.com/?p=19" rel="bookmark">Test</a>
                    </h2>
                </header>
                <div class="entry-content">
                    <p>Test</p>
                </div>
            </div>
            <Link to="/articles">
                <div class="read-more">Continue reading …</div>
            </Link>						
        </article>
    )
}

export default ArticleType