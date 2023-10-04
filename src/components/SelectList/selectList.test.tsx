import { render, screen } from "@testing-library/react-native"

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
    // debug()
    //leva em cosideração case-sensitive
    const selectedCity = screen.getByText('/Morro/') //no inicio ou no final
    // const selectedCity = screen.getByText('/Morro/i') //ignora case sensitive
    // const selectedCity = screen.getByText('Morro', {exact:false}) //no inicio ou no final
    console.log(selectedCity)
  })
})