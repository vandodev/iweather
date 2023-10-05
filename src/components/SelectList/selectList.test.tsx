import { render, screen, fireEvent  } from "@testing-library/react-native"

import { SelectList } from '@components/SelectList'
import { CityProps } from "@services/getCityByNameService"

describe("Component: SelectList", () =>{
  it('should be return city details selected', async() => {
    const data = [
      { id: '1', name: 'Morro Agudo', latitude: 123, longitude: 456 },
      { id: '2', name: 'Ribeirão Preto', latitude: 123, longitude: 456 }
    ]

    const onPress = jest.fn();

   render(
      <SelectList 
        data={data}
        onChange={() =>{}}
        onPress={onPress}
      />
    )
    const selectedCity = screen.getByText(/Ribeirão/i)
    fireEvent.press(selectedCity)
    // expect(onPress).toBeCalledTimes(1)
    expect(onPress).toBeCalledWith(data[1])
  })

  it('Not should be show options when data props is empty', () => {
    render(
      <SelectList 
        data={[]}
        onChange={() => {}}
        onPress={()=>{}}
      />
    )

    const options = screen.getByTestId('options')
    // console.log(options.children)
    expect(options.children).toHaveLength(0)// 1 tem filhos
  })

})