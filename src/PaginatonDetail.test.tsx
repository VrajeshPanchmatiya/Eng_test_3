import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import PaginatonDetail from "./components/PaginatonDetail";
import { pageStore } from "./redux/pageStore";
const store = createStore(pageStore, applyMiddleware(thunk));
test("Pagination Detail Component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PaginatonDetail />
      </BrowserRouter>
    </Provider>
  );
  const h1Element = screen.getByText("Selected Row Data");
  expect(h1Element).toBeInTheDocument();
  const typo = screen.getByTestId("typography");
  expect(typo).toBeInTheDocument();
});
