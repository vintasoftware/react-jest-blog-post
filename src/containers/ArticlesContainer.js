import React from 'react';
import Article from '../components/Article';

class ArticlesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 1,
          title: 'JavaScript\'s Lambda and Arrow Function',
          url: 'http://www.vinta.com.br/blog/2015/javascript-lambda-and-arrow-functions/',
          body: 'Lambda expressions are present in most of modern programming languages (Python, Ruby, Java...)...',
          timestamp: '2015-12-14'
        }, {
          id: 2,
          title: 'Metaprogramming and Django - Using Decorators',
          url: 'http://www.vinta.com.br/blog/2016/metaprogramming-and-django-using-decorators/',
          body: 'While programming is about, in some way, doing code to transform data, metaprogramming can...',
          timestamp: '2016-11-17'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.articles.map(article => <div key={article.id}><Article article={article} /></div>)}
      </div>
    );
  }
}

export default ArticlesContainer;
