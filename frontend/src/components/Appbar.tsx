import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
export function Appbar() {
 const navigate = useNavigate();

 const handleLogout = () => {
    
     localStorage.removeItem("token");
     navigate("/");
   };
 
    return (
    <div className="border-b flex justify-between items-center px-4 md:px-9 py-3 shadow-sm">
      <Link to="/blogs">
        <div className="text-xl font-bold cursor-pointer hover:opacity-80 transition-all">
          CodeNotes
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <Link to="/publish">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
            font-medium rounded-full text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-all"
          >
            New
          </button>
        </Link>
        <button
  onClick={handleLogout}
  type="button"
  className="flex items-center gap-2 text-white bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 
             focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold rounded-full text-sm px-6 py-2.5 
             shadow-md hover:shadow-lg transition duration-200 ease-in-out"
>
  <LogOut className="w-4 h-4" />
  Logout
</button>

      </div>
    </div>
  );
}
