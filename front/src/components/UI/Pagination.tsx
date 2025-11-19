export type PaginationType = {
  currentPage?: number;
  itemsPerPage?: number;
  totalPages?: number;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function Pagination({ currentPage, totalPages, handleClick }: PaginationType) {
  if (!currentPage || !totalPages) return <></>;

  return (
    <div className="justify-center w-full text-center p-15">
      {Array.from({ length: totalPages! }, (_, i) => (
        <button
          onClick={(e) => handleClick(e)}
          key={i + 1}
          className={`join-item btn-xs btn ${i + 1 === currentPage ? "btn-active" : ""}`}
          disabled={i === currentPage! - 1}
          value={i + 1}
        >
          {i + 1}
        </button>
      ))}
      {/* <button className="join-item btn-xs btn">1</button>
      <button className="join-item btn-xs btn">2</button>
      <button className="join-item btn-xs btn btn-disabled">...</button>
      <button className="join-item btn-xs btn">99</button>
      <button className="join-item btn-xs btn">100</button> */}
    </div>
  );
}
