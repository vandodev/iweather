import { getNextDays } from './getNextDays';

describe("Grupo de testes",() => {

  it("Teste 1", () => {
    const days = getNextDays();
    expect(days.length).toBe(5)
  })

  it("Teste 1", () => {
    const days = getNextDays();
    expect(days.length).toBe(5)
  })
}) 

