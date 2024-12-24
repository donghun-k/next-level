import SearchBar from './SearchBar';
import TagFilter from './TagFilter';

const PostFilterSection = () => {
  return (
    <section className="flex items-center justify-center gap-4 max-md:flex-col">
      <TagFilter />
      <SearchBar />
    </section>
  );
};

export default PostFilterSection;
