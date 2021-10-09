const login = {
  form: {
    email: {
      text: "Email",
      underDescription: "Type your e-mail",
    },
    password: {
      text: "Password",
      underDescription: "type your password",
    },
    signIn: "Sign in",
    errors: {
      invalidEmailOrPassword: "Incorrect email and/or password.",
    },
  },
};

const home = {
  books: {
    pages: "{{pages}} pages",
    publishingCompany: "Publishing company {{publishingCompany}}",
    publishedDate: "Published in {{publishedDate}}",
  },
  book: {
    information: "INFORMATION",
    pages: "Pages",
    publishingCompany: "Publishing Company",
    publishedDate: "Published Date",
    lang: "Language",
    originalTitle: "Original Title",
    synopsis: "SYNOPSIS",
  },
};

export const enUs = {
  path: {
    global: {
      applicationName: "Books",
      paginator: "Page {{x, strong}} of {{y, strong}}",
      usernameWelcome: "Welcome, {{username, strong}}",
    },
    pages: {
      login,
      home,
    },
  },
};
