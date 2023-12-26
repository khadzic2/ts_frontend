import React, {useEffect, useState} from "react";

const initialFilters = {
  search: '',
  category: null,
};
const Filters = ({categories,onDataFromFilters}) => {
  const [filters,setFilters] = useState({
    ...initialFilters,
  });

  const updateFilters = (e) => {
    let value = e.target.value;
    console.log(e.target);
    if(value === "All") value = null;
    setFilters({
      ...filters,
      [e.target.name]: value
    });
  };

  useEffect(() => {
    onDataFromFilters(filters);
  }, [onDataFromFilters,filters]);


  return (
    <div className="sticky top-0">
        {/* search input */}
        <div className="mb-4">
          <input
              type="text"
              name="search"
              value={filters.search}
              placeholder="Search products"
              onChange={updateFilters}
              className="form-input rounded-lg bg-gray-200 border-0 pr-0"
          />
        </div>
        {/* category */}
        <div className="mb-6">
          <h4 className="mb-1 font-bold capitalize text-lg">category</h4>
          <button
              value={"All"}
              type="button"
              name="category"
              onClick={updateFilters}
              // className="block py-1 capitalize text-gray-600"
              className={`block py-1 capitalize text-gray-600 ${filters.category === "All" ? 'border-b-2 border-primary' : ''}`}
          >
            All
          </button>
          {categories?.map((c) => {
            return (
              <button
                key={c.id}
                value={c}
                type="button"
                name="category"
                onClick={updateFilters}
                // className="block py-1 capitalize text-gray-600"
                className={`block py-1 capitalize text-gray-600 ${filters.category === c.name ? 'border-b-2 border-primary' : ''}`}
              >
                {c.name}
              </button>
            );
          })}
        </div>
    </div>
  );
};

export default Filters;
