import React from "react";
import { map } from "lodash";
import ReactPaginate from "react-paginate";
import { categorys } from "../../data/category";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const CategoryProducts = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6; //nece denesin gostermek isdediyimiz eded
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = categorys.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(categorys.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % categorys.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="category-itmes">
      <div>
        {map(currentItems, (item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </div>
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel={<GrFormNext />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<GrFormPrevious />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
