import React, { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import ShopAll from "./components/ShopAll";
import Categories from "./components/Categories/Categories";
import CategoryDetails from "./components/Categories/CategoryDetails";
import Cart from "./components/CartComponents/Cart";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import SearchResults from "./components/SearchResults";

///
function App() {
  const [value, setValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    fetch("/items", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const feedArray = Object.values(data)[1];
        setAllItems(feedArray);
      });
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header
        value={value}
        setValue={setValue}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        allItems={allItems}
      />
      <Switch>
        {/* <Route exact path="/">
          <div className="App">
            <Navbar />
          </div> */}
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/category/:categoryName">
          <CategoryDetails />
        </Route>
        <Route exact path="/shop/shop-all">
          <ShopAll allItems={allItems} setAllItems={setAllItems} />
        </Route>
        <Route exact path="/shop/cart">
          <Cart />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/search-results">
          <SearchResults
            value={value}
            setValue={setValue}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
