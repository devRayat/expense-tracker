import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/svelte'

import Header from '../Header.svelte'

it('should contain app header', async () => {
	render(Header)

	await expect(screen.findByText('Expense Tracker')).resolves.toBeInTheDocument()
})
