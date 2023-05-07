import React from 'react';
import { createUseStyles } from 'react-jss';
import { List } from '@mui/material';
import isEmpty from 'lodash-es/isEmpty';
import dayjs from 'dayjs';

import type { Post } from '~types/global';

import PostListItem from '../PostListItem';

interface PostListSectionProps {
  posts: Post[];
}

const PostListSection = ({
  posts,
}: PostListSectionProps) => {
  const styles = createUseStyles({
    container: `
      position: relative;
    `,
  }, {
    name: 'PostListSection',
  })();

  return (
    <section className={styles.container}>
      <List sx={{ mx: 'auto', maxWidth: 800 }}>
        {isEmpty(posts)
          ? (
            <PostListItem
              post={{
                title: '뭐라도 하나는 있어야지 😉',
                description: '아쉽지만 검색 결과가 나오지 않았어요. 당신이 원하는 글이 나올 수 있도록 노력해 볼게요. 이 글은 클릭해도 이동하지 않아요.',
                date: dayjs().format('YYYY-MM-DD'),
              }}
            />
          ) : posts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
      </List>
    </section>
  );
};

export default PostListSection;
