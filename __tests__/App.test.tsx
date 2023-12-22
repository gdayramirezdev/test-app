import App from '@/App'
import { render } from '@testing-library/react'

describe('App', () => {
  it('renders the TestComponent', () => {
    const { getByText } = render(<App />)
    const testComponent = getByText('Basic template')
    expect(testComponent).toBeInTheDocument()
  })
})
