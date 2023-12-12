import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const MENU = ["All", "JavaScript", "TypeScript", "React"];

const CategorySidebar = ({ currentCategory }: { currentCategory?: string }) => {
  return (
    <aside className="sticky top-[140px] w-[180px] self-start px-4 py-6">
      <ul className="flex flex-col gap-4">
        {MENU.map((category) => (
          <li key={category}>
            <Link
              href={`/category/${category}`}
              className={`text-md flex items-center ${
                category === currentCategory
                  ? "font-extrabold text-black [text-shadow:_0_2px_2px_rgb(0_0_0_/_20%)]"
                  : "font-bold text-gray-500"
              }`}
            >
              {category === currentCategory && (
                <MdKeyboardArrowRight className="mt-0.5 h-6 w-6" />
              )}
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
