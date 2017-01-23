import React, { PropTypes } from 'react';

const ArticleTitle = ({ title, url, timestamp }) => (
  <div>
    <h1>{title} [{timestamp}]</h1>
    <h4><a href={url}>{url}</a></h4>
  </div>
);

ArticleTitle.propTypes = {
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default ArticleTitle;
