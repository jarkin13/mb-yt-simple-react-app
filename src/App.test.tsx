import { render, screen } from '@testing-library/react'
import App from './App'

test('renders app text', () => {
  render(<App />)
  const textElement = screen.getByText(/MB Simple Youtube App/i)
  expect(textElement).toBeInTheDocument()
})
