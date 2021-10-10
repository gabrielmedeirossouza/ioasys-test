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
      paginator: "Página <1>{{x}}</1> de <2>{{y}}</2>",
      usernameWelcome: "Bem vindo, <1>{{username}}!</1>",
    },
    pages: {
      login,
      home,
    },
  },
};
