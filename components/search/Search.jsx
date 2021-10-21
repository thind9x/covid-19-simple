import React, { useState, useEffect } from "react";

const Search = ({ setValue, setEnd, setStart, subMit, handleCountry }) => {
  return (
    <div className="container-fluid" style={{ marginBottom: "20px" }}>
      <div className="row">
        <div className="col-sm-3">
          <input
            type="text"
            onChange={handleCountry}
            placeholder="Nhập từ khóa"
            className="form form-control"
            required={true}
          />
        </div>
        <div className="col-sm-3">
          <input
            type="date"
            onChange={(e) => {
              setStart(e.target.valueAsDate);
            }}
            placeholder="Nhập từ khóa"
            className="form form-control"
            required={true}
          />
        </div>
        <div className="col-sm-3">
          <input
            type="date"
            onChange={(e) => {
              setEnd(e.target.valueAsDate);
            }}
            placeholder="Nhập từ khóa"
            className="form form-control"
            required={true}
          />
        </div>
        <div className="col-sm-3">
          <button onClick={subMit} className="btn btn-dark btn-md">
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
};
export default Search;
