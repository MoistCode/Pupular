/* eslint-disable no-console */
import ReviewLike from '../src/entity/ReviewLike';

import getRandomNum from '../utils/getRandomNum';

const MAX_NUM_OF_TEST_REVIEW_LIKES = 1000;

export default async function generateReview({ connection, users, reviews }) {
  console.log('Checking to see if we have any review likes...');

  const reviewLikes = await connection.manager.find(ReviewLike);
  const reviewLikessToGenerate = MAX_NUM_OF_TEST_REVIEW_LIKES - reviewLikes.length;
  const promises = [];

  console.log(`Generating ${reviewLikessToGenerate} review likes...`);

  for (let i = 0; i < reviewLikessToGenerate; i += 1) {
    const reviewLike = new ReviewLike();

    reviewLike.user = users[getRandomNum({ max: users.length })];
    reviewLike.review = reviews[getRandomNum({ max: reviews.length })];

    console.log('Generating review like...');
    promises.push(connection.manager.save(reviewLike));
  }

  await Promise.all(promises);

  console.log('All done with review likes!');

  return connection.manager.find(ReviewLike);
}
