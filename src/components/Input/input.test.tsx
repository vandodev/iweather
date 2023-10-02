import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input"

describe("Component: Input", () => {
    it("should  be render without activity indicator if isLoading prop is undefined", () => {
      //render(<Input isLoading/>) sem o is loading o teste não passa
      render(<Input />)
      //o screen é utilizado para fazer busca (query)
      const activityIndicator = screen.getByTestId('activity-indicator')
      console.log(activityIndicator)        
    })
})