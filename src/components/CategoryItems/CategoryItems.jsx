import { map } from "lodash";
import ReactPaginate from "react-paginate";
import { categorys } from "../../data/category";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { useCallback, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

export const CategoryItems = () => {

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6; //nece denesin gostermek isdediyimiz eded
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = categorys.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(categorys.length / itemsPerPage);


  const handlePaginationClick = useCallback((event) => {
    const newOffset = (event.selected * itemsPerPage) % categorys.length;
    setItemOffset(newOffset);
  }, []);


  const containerAn = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="category-itmes">

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerAn}
        className="category-itmes__wrapper"
      >
        {map(currentItems, (item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </motion.div>

      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel={<GrFormNext />}
        onPageChange={handlePaginationClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<GrFormPrevious />}
        renderOnZeroPageCount={null}
      />

    </div>
  );
};
