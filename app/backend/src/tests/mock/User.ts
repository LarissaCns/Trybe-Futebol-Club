const userMock = {
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  }
  const loginMock = {
    email: 'admin@admin.com',
    password: "secret_admin"
  }

  const loginErrorEmailMock = {
    email: '',
    password: "admin"
  }

  const loginErrorPasswordMock = {
    email: 'admin@admin.com',
    password: ''
  }

  const tokenMock = {
    "authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
  }

  export {
    userMock,
    loginMock,
    loginErrorEmailMock,
    loginErrorPasswordMock,
    tokenMock
  }