import { createClient } from './index'

describe('Export Core', () => {
  it('should export the Cards client correctly', () => {
    expect(createClient).toBeDefined()
  })
})
