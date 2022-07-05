import { render } from '@testing-library/react';

import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroSection />);
    expect(baseElement).toBeTruthy();
  });
});
