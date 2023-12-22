function Article(name, content) {
  this.name = name;
  this.content = content;
}

function User(name, articles) {
  this.name = name;
  this.articles = articles;
}

User.prototype.logArticles = function () {
  this.articles.forEach((article, i) => {
    console.log(`Article ${i + 1} name is ${article.name}`);
  });
};

let article1 = new Article("React", "React is good");
let article2 = new Article("Angular", "React is nice");

let user = new User("Yana", [article1, article2]);

console.log(user);

user.logArticles();