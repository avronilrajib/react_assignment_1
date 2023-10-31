import React from "react";

export default function () {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo">
              <h3>BD Shop</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="menuItem">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Shirt</a>
                </li>
                <li>
                  <a href="">T-Shirt</a>
                </li>
                <li>
                  <a href="">Panjabi</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serchItem">
              <input type="text" name="" id="" placeholder="Search Product.." />
              <span>
                <button className="SearchButton">Search</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
