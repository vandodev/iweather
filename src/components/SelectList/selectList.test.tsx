import { render, screen, fireEvent  } from "@testing-library/react-native"

import { SelectList } from '@components/SelectList'
import { CityProps } from "@services/getCityByNameService"

describe("Component: SelectList", () =>{
  it('should be return city details selected', async() => {
    const data = [
      { id: '1', name: 'Morro Agudo', latitude: 123, longitude: 456 },
      { id: '2', name: 'Ribeirão Preto', latitude: 123, longitude: 456 }
    ]

// const {debug} = render(
   render(
      <SelectList 
        data={data}
        onChange={() =>{}}
        onPress={() => {}}
      />
    )
    const selectedCity = screen.getByText('/Morro/') 
    fireEvent.press(selectedCity)
  })
})