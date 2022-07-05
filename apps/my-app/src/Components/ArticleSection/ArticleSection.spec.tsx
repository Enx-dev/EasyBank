import { render } from '@testing-library/react';

import ArticleSection from './ArticleSection';

describe('ArticleSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleSection />);
    expect(baseElement).toBeTruthy();
  });
});
