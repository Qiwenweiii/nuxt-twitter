import { getUserByUsername } from '~~/server/db/users';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  // Todo: 数据处理
  console.log(body.username);

  // const { username, password } = body;
  const username = body.username;
  const password = body.password;

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
        statusMessage: 'Invalid username or password1111',
      })
    );
  }

  return {
    user: user,
  };
});
