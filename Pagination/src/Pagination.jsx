import { useState } from 'react';
import { tasks } from './data/data.js';
import './Pagination.css';

function Pagination() {
    const [pageNumber, setPageNumber] = useState(1);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(tasks.length / itemsPerPage);

    const getVisiblePages = (totalPages, currentPage) => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages = [];

        // Always show first page
        pages.push(1);

        const startPage = Math.max(2, currentPage - 2);
        const endPage = Math.min(totalPages - 1, currentPage + 2);

        // Left dots
        if (startPage > 2) {
            pages.push("...");
        }

        // Middle pages
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // Right dots
        if (endPage < totalPages - 1) {
            pages.push("...");
        }

        // Always show last page
        pages.push(totalPages);

        return pages;
    };

    const pages = getVisiblePages(totalPages, pageNumber);

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div className="Pagination">
            <h1>Pagination</h1>

            {tasks.slice(startIndex, endIndex).map((task) => (
                <div key={task.id} className="task">
                    <h2>{task.title}</h2>
                </div>
            ))}

            <div className="pagination-buttons">

                <button
                    disabled={pageNumber === 1}
                    onClick={() => setPageNumber(pageNumber - 1)}
                >
                    Previous
                </button>

                {pages.map((page, index) =>
                    page === "..." ? (
                        <span
                            key={`dots-${index}`}
                            className="dots"
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => setPageNumber(page)}
                            className={page === pageNumber ? "active" : ""}
                        >
                            {page}
                        </button>
                    )
                )}

                <button
                    disabled={pageNumber === totalPages}
                    onClick={() => setPageNumber(pageNumber + 1)}
                >
                    Next
                </button>

            </div>
        </div>
    );
}

export default Pagination;