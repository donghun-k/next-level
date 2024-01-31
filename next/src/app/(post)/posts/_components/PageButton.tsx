interface Props {
  text: string;
  onClick: () => void;
}

const PageButton = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="rounded-sm bg-gray-50 px-8 py-1 font-bold text-gray-500 shadow-sm duration-300 hover:bg-gray-100 hover:text-gray-700 hover:shadow-md"
    >
      {text}
    </button>
  );
};

export default PageButton;
