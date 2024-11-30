import SearchBar from './SearchBar';
import TagFilter from './TagFilter';

const PostFilterSection = () => {
  return (
    <section className="flex items-center justify-center gap-4">
      <TagFilter />
      <SearchBar />
    </section>
  );
};

export default PostFilterSection;
