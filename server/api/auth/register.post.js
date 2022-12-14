import { createUser } from '~~/server/db/users';
import { userTransformer } from '~~/server/transformers/user';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  // 一个普通对象
  console.log(body);

  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Invalid params' })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Passwords do not match' })
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https://www.dmoe.cc/random.php',
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
