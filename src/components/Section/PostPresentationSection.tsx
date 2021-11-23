import React from 'react';
import { createUseStyles } from 'react-jss';

import { List } from '@mui/material';

import { Post } from '~types/global';

import PostPresentation from '../PostPresentation';

interface PostPresentationSectionProps {
  posts: Post[];
}

const PostPresentationSection = ({
  posts,
}: PostPresentationSectionProps) => {
  const styles = createUseStyles({
    container: `
      position: relative;
    `,
  }, {
    name: 'PostPresentationSection',
  })();

  return (
    <section className={styles.container}>
      <List
        sx={{
          mx: 'auto', py: 10, maxWidth: 800,
        }}
      >
        {posts.map((post) => (
          <PostPresentation post={post} key={post.id} />
        ))}
      </List>
    </section>
  );
};

export default PostPresentationSection;
