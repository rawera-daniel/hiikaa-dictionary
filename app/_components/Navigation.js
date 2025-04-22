import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/login" className="text-base text-gray-950">
            Login
          </Link>
        </li>
        <li>
          <Link
            // href="/signup"
            href="/dashboard"
            className="py-3 px-6 bg-red-600 text-base disabled:opacity-50  disabled:cursor-not-allowed duration-500 transition hover:bg-red-700 text-white rounded-full font-semibold"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
