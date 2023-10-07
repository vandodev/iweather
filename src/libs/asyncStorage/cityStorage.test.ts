import { getStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

describe('Storage: CityStorage', () => {
  it("should be return null when don't have a city storaged", async () => {
    const response = await getStorageCity()
    // console.log(response)
    expect(response).toBeNull()
    // expect(response).toHaveProperty("name")
  })

  it('shoul be return city storaged', async () => {
    const newCity: CityProps = {
      id: '1',
      name:'São Paulo',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(newCity)

    const response = await getStorageCity()

    // expect(response).toEqual({
    //     id: '2',
    //     name:'Morro Agudo',
    //     latitude: 123,
    //     longitude: 321
    //   }
    // )

    expect(response).toEqual(newCity)
  })

})