import React, { PropTypes } from 'react';

const ArticleBody = ({ body }) => (
  <div>
    <p>{body}</p>
  </div>
);

ArticleBody.propTypes = {
  body: PropTypes.string.isRequired,
}

export default ArticleBody;
