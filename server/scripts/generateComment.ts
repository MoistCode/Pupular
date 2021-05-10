/* eslint-disable no-console */
import * as faker from 'faker';
import Comment from '../src/entity/Comment';

import getRandomNum from '../utils/getRandomNum';

const MAX_NUM_OF_TEST_COMMENTS = 1000;

export default async function generateReview({ connection, users, reviews }) {
  console.log('Checking to see if we have any comments...');

  const comments = await connection.manager.find(Comment);
  const commentsToGenerate = MAX_NUM_OF_TEST_COMMENTS - comments.length;
  const promises = [];

  console.log(`Generating ${commentsToGenerate} comments...`);

  for (let i = 0; i < commentsToGenerate; i += 1) {
    const comment = new Comment();

    comment.user = users[getRandomNum({ max: users.length })];
    comment.review = reviews[getRandomNum({ max: reviews.length })];
    comment.content = faker.lorem.paragraphs();

    console.log('Generating comment...');
    promises.push(connection.manager.save(comment));
  }

  await Promise.all(promises);

  console.log('All done with comments!');

  return connection.manager.find(Comment);
}
