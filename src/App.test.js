import {render, screen} from '@testing-library/react';
import App from './App';

test('renders header', () => {
    render(<App/>);

    const el = screen.getByRole('heading');

    expect(el).toBeInTheDocument();
    expect(el).toContainHTML('<h1>App</h1>');
});
