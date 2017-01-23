import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import ArticleTitle from './ArticleTitle';
import ArticleBody from './ArticleBody';

class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false,
    }
    bindAll(this, ['_onMouseEnter', '_onMouseLeave']);
  }

  _onMouseEnter() {
    this.setState({isMouseOver: true});
  }

  _onMouseLeave() {
    this.setState({isMouseOver: false});
  }

  render () {
    const { article } = this.props;
    return (
      <div
        style={{display: 'inline-block'}} className={this.state.isMouseOver ? 'has-mouse-over' : ''}
        onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}
      >
        <ArticleTitle title={article.title} timestamp={article.timestamp} url={article.url}/>
        <ArticleBody body={article.body} />
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
}

export default Article;
