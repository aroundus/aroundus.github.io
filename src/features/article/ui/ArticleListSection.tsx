import React from 'react';
import { createUseStyles } from 'react-jss';
import { List } from '@mui/material';
import isEmpty from 'lodash-es/isEmpty';
import dayjs from 'dayjs';

import type { Article } from '../model';
import { ArticleListItem } from '../ui';

interface ArticleListSectionProps {
  articles: Article[];
}

export function ArticleListSection({ articles }: ArticleListSectionProps) {
  const styles = createUseStyles(
    {
      container: `
        position: relative;
      `,
    },
    {
      name: 'ArticleListSection',
    },
  )();

  return (
    <section className={styles.container}>
      <List sx={{ mx: 'auto', maxWidth: 640, minWidth: 320, width: '80%' }}>
        {isEmpty(articles) ? (
          <ArticleListItem
            article={{
              date: dayjs().format('YYYY-MM-DD'),
              description:
                '아쉽지만 검색 결과가 나오지 않았어요. 당신이 원하는 글이 나올 수 있도록 노력해 볼게요. 이 글은 클릭해도 이동하지 않아요.',
              title: '뭐라도 하나는 있어야지 😉',
            }}
          />
        ) : (
          articles.map((article) => (
            <ArticleListItem
              article={article}
              key={article.id}
            />
          ))
        )}
      </List>
    </section>
  );
}
