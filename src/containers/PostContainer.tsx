import React from 'react';

import { ArticleSection, KeyVisualSection } from '~components/Section';
import { Post } from '~types/global';

interface PostContainerProps {
  post: Post;
}

const PostContainer = ({
  post,
}: PostContainerProps) => (
  <>
    <KeyVisualSection post={post} isButtonVisible={false} />
    {post.html && <ArticleSection html={post.html} />}
  </>
);

export default PostContainer;
