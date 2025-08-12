import React from 'react';

interface IPaginationProps  {
  page: number;
  pages: number;
  setPage: (page: number) => void;
};


const Pagination: React.FC<IPaginationProps> = ({ page, pages, setPage }: IPaginationProps) => {
 return (
    <nav className="mt-8 flex items-center justify-center gap-3 text-sm" aria-label="Paginação">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-3 py-2 rounded-md bg-white shadow disabled:opacity-50 hover:bg-indigo-700 hover:text-white"
      >
        Anterior
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: pages }).map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              aria-current={pageNum === page ? 'page' : undefined}
              className={`px-3 py-2 rounded-md shadow hover:bg-indigo-700 hover:text-white  ${pageNum === page ? 'bg-indigo-600 text-white' : 'bg-white'}`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => setPage(Math.min(pages, page + 1))}
        disabled={page === pages}
        className="px-3 py-2 rounded-md bg-white shadow disabled:opacity-50 hover:bg-indigo-700 hover:text-white"
      >
        Próximo
      </button>
    </nav>
  );
}

export default Pagination;