const listUsers = [
  {
    email: "teste@teste.com.br",
    password: "12345",
    needVerification: true,
  },
  {
    email: "teste2@teste.com.br",
    password: "12345",
    needVerification: false,
  },
  {
    email: "teste3@teste.com.br",
    password: "12345",
    needVerification: false,
  },
];

const listUsersWithVerificationTrue = listUsers.map((user) => {
  return {
    ...user,
    needVerification: true,
  };
});

const listUsersWithVerificationFalse = listUsers.map((user) => {
    return {
      ...user,
      needVerification: false,
    };
  });



console.log({ listUsers });
console.log({ listUsersWithVerificationTrue });
console.log({ listUsersWithVerificationFalse });
