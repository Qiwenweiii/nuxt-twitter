import { getUserByUsername } from '~~/server/db/users';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { username, password } = body;

  console.log(username, password);

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Invalid username or password',
      })
    );
  }

  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Username or password is invalid',
      })
    );
  }

  return {
    user: user,
  };
});
