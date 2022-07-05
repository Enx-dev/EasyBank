import { render } from '@testing-library/react';

import MenuComp from './MenuSection';

describe('MenuComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuComp />);
    expect(baseElement).toBeTruthy();
  });
});
