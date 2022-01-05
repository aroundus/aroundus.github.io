import React from 'react';
import { createUseStyles } from 'react-jss';
import { List } from '@mui/material';
import isEmpty from 'lodash-es/isEmpty';
import dayjs from 'dayjs';

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
      <List sx={{ mx: 'auto', maxWidth: 800 }}>
        {isEmpty(posts)
          ? (
            <PostPresentation
              post={{
                title: '뭐라도 하나는 있어야지 😉',
                description: '아쉽지만 검색 결과가 나오지 않았어요. 당신이 원하는 글이 나올 수 있도록 노력해 볼게요. 이 글은 클릭해도 이동하지 않아요.',
                date: dayjs().format('YYYY-MM-DD'),
              }}
            />
          ) : posts.map((post) => (
            <PostPresentation key={post.id} post={post} />
          ))}
      </List>
    </section>
  );
};

export default PostPresentationSection;
