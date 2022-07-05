import { render } from '@testing-library/react';

import InfoSection from './InfoSection';

describe('InfoSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoSection />);
    expect(baseElement).toBeTruthy();
  });
});
