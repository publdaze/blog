module.exports = {
  pathPrefix: "/blog",
  siteUrl: "https://publdaze.github.io/blog",
  meta: {
    title: `publdaze의 블로그`,
    description: `publdaze의 블로그입니다.`,
    author: `publdaze`,
  },
  author: {
    name: `publdaze`,
    social: {
      resume: ``,
      github: `https://github.com/publdaze`,
      email: `publdaze@naver.com`,
    },
  },
  introduction: {
    sub: `안녕하세요!`,
    main: {
      start: ``,
      highlight: ``,
      end: `프론트엔드 개발자 김은지입니다.`,
    },
  },
  categories: [
    {
      name: "PROJECTS",
      subCategories: [
        {
          name: "blog template",
          href: "/?category=blog_template",
        },
      ],
    },
  ],
  comments: {
    utterances: {
      repo: "publdaze.github.io/blog",
    },
  },
};
