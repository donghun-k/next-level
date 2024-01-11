interface Props {
  page: number;
  totalPages: number;
  handlePageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Pagination = ({ page, totalPages, handlePageChange }: Props) => {
  const optionArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      Page
      <select
        value={page}
        onChange={handlePageChange}
        className="w-[60px] rounded-md border-2 border-gray-500 px-2 font-bold text-black"
      >
        {optionArray.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      of
      <span className="text-lg font-bold text-black">{totalPages}</span>
    </>
  );
};

export default Pagination;
