import { render, screen } from "@testing-library/react-native"
import { NextDays } from "@components/NextDays"

import clearDay from '@assets/clear_day.svg'

describe('Component: NextDays', () => {
  it('should be render day', () => {
    render(
      <NextDays 
        data={[
          { day: '09/10', min: '30°c', max: '34°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '10/10', min: '35°c', max: '39°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '11/10', min: '39°c', max: '37°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '12/10', min: '21°c', max: '30°c', icon: clearDay, weather: 'Chuva fraca' },
          { day: '13/10', min: '15°c', max: '20°c', icon: clearDay, weather: 'Nublado' },
        ]}
      />
    )

    expect(screen.getByText('10/10')).toBeTruthy()
  })
})