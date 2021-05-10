/* eslint-disable no-console */
import * as faker from 'faker';

import Review from '../src/entity/Review';
import getRandomNum from '../utils/getRandomNum';

const MAX_NUM_OF_TEST_REVIEWS = 1000;

export default async function generateReview({ connection, users }) {
  console.log('Checking to see if we have any reviews...');

  const reviews = await connection.manager.find(Review);
  const reviewsToGenerate = MAX_NUM_OF_TEST_REVIEWS - reviews.length;
  const promises = [];

  console.log(`Generating ${reviewsToGenerate} reviews...`);

  for (let i = 0; i < reviewsToGenerate; i += 1) {
    const review = new Review();

    review.user = users[getRandomNum({ max: users.length })];
    review.title = faker.lorem.sentence();
    review.content = faker.lorem.paragraphs();
    review.numberOfPaws = getRandomNum({ min: 1, max: 5 });

    console.log(`Generating Review: ${review.title}`);
    promises.push(connection.manager.save(review));
  }

  await Promise.all(promises);

  console.log('All done with reviews!');

  return connection.manager.find(Review);
}
