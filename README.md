# auth-with-jwt-example

## practice lab for Authentication and Authorization

_A purpose of this repo is for users to understand the process of authentication and authorization_

### Instruction

1. `rails s` - localhost MUST be 3000 or customize url manually.
2. `npm start`

### Landing Page:

- Has Sign up button
- Has Log in button

### After authenticated:

- Signup and log in buttons go away

### User can:

- Sign up or Log in
- Be authorized to request user profile
- Change password
  **Using jsonwebtoken library, I am able to grab user information anywhere by decoding user JWT and request for password update instead of passing down user props from parent component.**

### Stretch Goal

- Reset password
  `Good resources:`
- [Handle Password and Email Changes in Your Rails API](https://www.sitepoint.com/handle-password-and-email-changes-in-your-rails-api/)
- [Ruby on Rails password reset](https://www.railstutorial.org/book/password_reset)
- [Adding 'Forgot Password' to login page.md](https://gist.github.com/wendygwo/6d65db594151c7a9d459)
- [Creating “Forgot password” feature on Rails API](https://medium.com/binar-academy/forgot-password-feature-on-rails-api-8e4a7368c59)
