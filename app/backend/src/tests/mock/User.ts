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
    authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVmFsdWVzIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJfcHJldmlvdXNEYXRhVmFsdWVzIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJfY2hhbmdlZCI6e30sIl9vcHRpb25zIjp7ImlzTmV3UmVjb3JkIjpmYWxzZSwiX3NjaGVtYSI6bnVsbCwiX3NjaGVtYURlbGltaXRlciI6IiIsInJhdyI6dHJ1ZSwiYXR0cmlidXRlcyI6WyJpZCIsInVzZXJuYW1lIiwicm9sZSIsImVtYWlsIiwicGFzc3dvcmQiXX0sImlzTmV3UmVjb3JkIjpmYWxzZSwiaWF0IjoxNjYzMjc3NjgxfQ.4ub6UA46Wftg9qSXF5UjK7B8Z-Qop5iWOin9SVRMYIQ"
  }

  const roleMock = { role: 'admin' }

  export {
    userMock,
    loginMock,
    loginErrorEmailMock,
    loginErrorPasswordMock,
    tokenMock,
    roleMock
  }