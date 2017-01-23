import renderer from 'react-test-renderer';
import React from 'react';
import ArticleBody from './ArticleBody';

test('ArticleTest renders correctly', () => {
  const tree = renderer.create(
    <ArticleBody body="A title" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
