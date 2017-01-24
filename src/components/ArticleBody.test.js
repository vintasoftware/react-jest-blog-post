import renderer from 'react-test-renderer';
import React from 'react';
import ArticleBody from './ArticleBody';

test('ArticleBody renders correctly', () => {
  const tree = renderer.create(
    <ArticleBody body="Article content" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
