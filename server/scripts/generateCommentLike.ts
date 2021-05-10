/* eslint-disable no-console */
import CommentLike from '../src/entity/CommentLike';

import getRandomNum from '../utils/getRandomNum';

const MAX_NUM_OF_TEST_COMMENT_LIKES = 1000;

export default async function generateReview({ connection, users, comments }) {
  console.log('Checking to see if we have any comment likes...');

  const commentLikes = await connection.manager.find(CommentLike);
  const commentLikessToGenerate = MAX_NUM_OF_TEST_COMMENT_LIKES - commentLikes.length;
  const promises = [];

  console.log(`Generating ${commentLikessToGenerate} comment likes...`);

  for (let i = 0; i < commentLikessToGenerate; i += 1) {
    const commentLike = new CommentLike();

    commentLike.user = users[getRandomNum({ max: users.length })];
    commentLike.comment = comments[getRandomNum({ max: comments.length })];

    console.log('Generating comment like...');
    promises.push(connection.manager.save(commentLike));
  }

  await Promise.all(promises);

  console.log('All done with comment likes!');

  return connection.manager.find(CommentLike);
}
