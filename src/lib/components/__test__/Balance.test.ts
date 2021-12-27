import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'

import Balance from '../Balance.svelte'

it('should contain app Balance', async () => {
	render(Balance)

	await expect(screen.findByText('Your balance')).resolves.toBeInTheDocument()
})

it('should contain app $ sign', async () => {
	render(Balance)

	await expect(screen.findByText(/\$/)).resolves.toBeInTheDocument()
})
