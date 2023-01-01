import Csrf from 'csrf';
import { setCookie } from 'nookies';
import type { ServerResponse } from 'http';

/**
 * @name createCsrfCookie
 * @description Creates a CSRF secret cookie and returns the CSRF token to be
 * sent to the client-side. The client-side will return this token in the
 * HTTP request header.
 * @param ctx
 */
async function createCsrfCookie<Ctx extends { res: ServerResponse }>(ctx: Ctx) {
  const csrf = new Csrf();
  const secret = await csrf.secret();

  // set a CSRF token secret, so we can validate it on POST requests
  setCookie(ctx, 'csrfSecret', secret, {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === `production`,
    sameSite: 'Strict',
  });

  return csrf.create(secret);
}

export default createCsrfCookie;
