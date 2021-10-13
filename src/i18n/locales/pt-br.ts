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
    pages: "<0>{{pages}}</0> páginas",
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
      paginator: "Página <0>{{currentPage}}</0> de <0>{{totalPages}}</0>",
      usernameWelcome: "Bem vindo, <0>{{username}}!</0>",
    },
    pages: {
      login,
      home,
    },
  },
};
