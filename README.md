# auth-with-jwt-example
both frontend and backend

## practice lab for Authentication and Authorization

### Landing Page:
- Has Sign up button
- Has Log in button

### After authenticated:
- Signup and log in buttons go away

### User can:
- Sign up or Log in
- Be authorized to request user profile
- Change password
** Using jsonwebtoken library, I am able to grab user information anywhere by decoding user jwt and request for password update instead of passing down user props from parent component.

### Stretch Goal
- Reset password
Good resource [Creating Secure Password Resets With JSON Web Tokens](https://www.smashingmagazine.com/2017/11/safe-password-resets-with-json-web-tokens/)
