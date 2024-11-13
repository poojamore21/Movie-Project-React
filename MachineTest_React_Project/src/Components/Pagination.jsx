import "../CSS/Pagination.css"; 

const Pagination = ({ totalPage, setPage, currentPage }) => {
  const pageNumbers = []; // Array to store the list of page numbers to display

  const pageLimit = 5; // Maximum number of pages to show at a time for simplicity

  // Logic to add page numbers to display based on total pages and current page
  if (totalPage <= pageLimit) {
    // If total pages are less than or equal to the limit, show all pages
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    // If there are more pages than the limit
    if (currentPage <= 3) {
      // Case 1: If current page is near the beginning
      for (let i = 1; i <= 3; i++) {
        pageNumbers.push(i); 
      }
      pageNumbers.push("..."); 
      pageNumbers.push(totalPage); 
    } else if (currentPage >= totalPage - 2) {
      // Case 2: If current page is near the end
      pageNumbers.push(1); 
      pageNumbers.push("..."); 
      for (let i = totalPage - 2; i <= totalPage; i++) {
        pageNumbers.push(i); 
      }
    } else {
      // Case 3: If current page is somewhere in the middle
      pageNumbers.push(1); 
      pageNumbers.push("..."); 
      pageNumbers.push(currentPage - 1); 
      pageNumbers.push(currentPage); 
      pageNumbers.push(currentPage + 1); 
      pageNumbers.push("..."); 
      pageNumbers.push(totalPage); 
    }
  }

  return (
    <div className="pagination">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* Render each page number or ellipsis in the pageNumbers array */}
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          // If the number is "...", render it as a span for visual separation
          <span key={index} className="ellipsis">
            ...
          </span>
        ) : (
          
          <button
            key={index}
            onClick={() => setPage(number)} 
            className={number === currentPage ? "active" : ""} 
          >
            {number}
          </button>
        )
      )}

      
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination; 
