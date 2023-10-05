import "./../styles/header.scss";

function Header() {
  return (
    <div className="header">
      <svg
        className="header__img"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#D1BCFF" d="M0 0h200v200H0z" />
        <path
          d="m43.5 82 45 86S168 45.5 172 36.5s-12-17.5-21.5-7-64 90-64 90L43.5 82Z"
          fill="#FDFFA8"
          stroke="#FFAB7C"
        />
      </svg>

      <div className="header__text">To Do List</div>
    </div>
  );
}

export default Header;
