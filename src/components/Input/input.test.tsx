import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input"

describe("Component: Input", () => {
    it("should  be render without activity indicator if isLoading prop is undefined", () => {
      //render(<Input isLoading/>) com o getByTestId retorna exeção
      render(<Input />)
      //o get retorna exeção se não encontra o elemento com parâmetro passado
      //já o query retorna null
      //Pesquisar no google tabela gery x get jest
      //const activityIndicator = screen.getByTestId('activity-indicator')
      const activityIndicator = screen.queryByTestId('activity-indicator')
      expect(activityIndicator).toBeNull();      
    })
})