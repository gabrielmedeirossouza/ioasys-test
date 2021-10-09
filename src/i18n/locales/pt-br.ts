const login = {
  form: {
    email: {
      text: "Email",
      underDescription: "Digite seu email",
    },
    password: {
      text: "Senha",
      underDescription: "Digite sua senha",
    },
    signIn: "Entrar",
    errors: {
      invalidEmailOrPassword: "Email e/ou senha incorretos.",
    },
  },
};

const home = {
  books: {
    pages: "{{pages}} páginas",
    publishingCompany: "Editora {{publishingCompany}}",
    publishedDate: "Publicado em {{publishedDate}}",
  },
  book: {
    information: "INFORMAÇÕES",
    pages: "Páginas",
    publishingCompany: "Editora",
    publishedDate: "Publicação",
    lang: "Idioma",
    originalTitle: "Título Original",
    synopsis: "RESENHA DA EDITORA",
  },
};

export const ptBr = {
  path: {
    global: {
      applicationName: "Books",
      paginator: "Página {{x, strong}} de {{y, strong}}",
      usernameWelcome: "Bem vindo, {{username, strong}}",
    },
    pages: {
      login,
      home,
    },
  },
};
