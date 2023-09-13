import { render } from '@testing-library/react';

import TvMovieCardShimmer from '../../Components/Shimmers/TvMovieCardShimmer';

test('Shimmer of Tv movie card is rendered', () => {
    const shimmer = render(<TvMovieCardShimmer />);
    const tvMovieCardShimmer = shimmer.getByTestId('tvMovieCardShimmer');
    const tvMovieCardShimmerBody = shimmer.getByTestId('tvMovieCardShimmerBody');
    expect(tvMovieCardShimmer.children.length).toBe(2);
    expect(tvMovieCardShimmerBody.children.length).toBe(3);
});
