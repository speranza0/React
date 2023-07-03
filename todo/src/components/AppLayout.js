import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="div-wrap">
      <div className="header">
        <h1>TODO APP</h1>
        <div>
          <Link to="/">
            <button>목록</button>
          </Link>
          <Link to="/create">
            <button>등록</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default AppLayout;
