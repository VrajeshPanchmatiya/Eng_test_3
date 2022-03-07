import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Paginaton from "./components/Paginaton";
import { pageStore } from "./redux/pageStore";
const store = createStore(pageStore, applyMiddleware(thunk));
test("Pagination Component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Paginaton />
      </BrowserRouter>
    </Provider>
  );
  const h1Element = screen.getByText("Table");
  expect(h1Element).toBeInTheDocument();
});
