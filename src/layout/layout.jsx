import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <a href={`/`}>/</a>
            </li>
            <li>
              <a href={`/main`}>main</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet/>
      </div>
    </>
  );
}