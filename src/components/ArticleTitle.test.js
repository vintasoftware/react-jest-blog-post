import renderer from 'react-test-renderer';
import React from 'react';
import ArticleTitle from './ArticleTitle';

test('ArticleTest renders correctly', () => {
  const tree = renderer.create(
    <ArticleTitle title="A title" url="http://example.com" timestamp="2015-12-31" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
