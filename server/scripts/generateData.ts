import User from '../src/entity/User';
import generateComment from './generateComment';
import generateCommentLike from './generateCommentLike';
import generateReview from './generateReview';
import generateReviewLike from './generateReviewLike';
import generateUser from './generateUser';

/**
 * Generates fake data.
 *
 * @param connection {Connection}
 */
export default async function generateData(connection) {
  try {
    const users = await generateUser({ connection });
    const reviews = await generateReview({ connection, users });
    const comments = await generateComment({ connection, users, reviews });

    await Promise.all([
      generateReviewLike({ connection, reviews, users }),
      generateCommentLike({ connection, comments, users }),
    ]);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  console.log(await connection.manager.find(User));
}
