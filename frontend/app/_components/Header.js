import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="px-18 py-6">
      <div className="flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
