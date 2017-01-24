import renderer from 'react-test-renderer';
import React from 'react';
import Article from './Article';

jest.mock('./ArticleTitle.js');
jest.mock('./ArticleBody.js');

const article = {
  timestamp: '2016-11-12',
  body: 'article body',
  url: 'http://example.com',
  title: 'An Article',
}

test('Article renders correctly', () => {
  const component = renderer.create(
    <Article article={article} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback1
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
