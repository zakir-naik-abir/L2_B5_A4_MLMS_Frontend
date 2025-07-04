import { NavLink } from "react-router-dom";
import { ModeToggle } from "../ui/moodToggler";

export const Navbar = () => {
  return (
    <nav className="flex justify-between h-12 items-center px-5 w-full text-slate-600 bg-gray-100 z-10 shadow-sm ">
      <NavLink to={"/"} className={"flex items-center gap-1 group"}>
        <div className="text-2xl group-hover:scale-105">📚</div>
        <div className="font-semibold">
          Book<i className="text-red-500">House</i>
        </div>
      </NavLink>
      <div className="flex gap-8">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold bg-black px-2 rounded-[2px]"
              : " px-2 font-semibold hover:text-red-500 transition-all"
          }
        >
          All Books
        </NavLink>
        <NavLink
          to={"/create-book"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold bg-black px-2 rounded-[2px]"
              : " px-2 font-semibold hover:text-red-500 transition-all"
          }
        >
          Add Book
        </NavLink>
        <NavLink
          to={"/borrow-summary"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold bg-black px-2 rounded-[2px]"
              : "font-semibold px-2 hover:text-red-500 transition-all"
          }
        >
          Borrow Summary
        </NavLink>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};
