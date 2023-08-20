export const regularExpressions = {
  nameOrSurname: '',
  // prettier-ignore
  password: "^(?=.*\\d)(?=.*[\\u0021-\\u002b\\u003c-\\u0040])(?=.*[A-Z])(?=.*[a-z])\\S{8,16}$",
  // prettier-ignore
  email: "^[^@]+@[^@]+\\.[a-zA-Z]{2,}$",
  companyName: '',
};
