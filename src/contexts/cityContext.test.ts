import { act, renderHook, waitFor } from '@testing-library/react-native'
import { CityProvider } from '@contexts/CityContext'

import { useCity } from '@hooks/useCity'

describe('Context: cityContext', () => {
  it('should be change selected city', async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })
    // await waitFor(() => act(() => console.log(result.current))) 

    await waitFor(() => act(() => result.current.handleChanceCity({
      id: '1',
      name: 'Morro Agudo',
      latitude: 568,
      longitude: 194
    })))

    expect(result.current.city?.name).toBe('Morro Agudo')

  })
})