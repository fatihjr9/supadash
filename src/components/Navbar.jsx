import { Link } from "react-router-dom";
import NavLink from "./NavLink"
import { Dropdown, Input } from "antd"

function Navbar() {
    const items = [
        {
          key: '1',
          label: (
            <Link to="/">Logout</Link>
          ),
        },
      ];
    return (
      <div className="flex flex-col bg-white drop-shadow-sm fixed top-0 w-full z-50">
          <section className="px-16 py-4 flex flex-row items-center justify-between border-b">
              <img src="./logos.svg" alt="" />
              <div className="flex flex-row items-center gap-x-4">
                <Input placeholder="Search.." className="w-80"/>
                <Dropdown menu={{ items,}}>
                    <h5>Halo, Admin</h5>
                </Dropdown>
              </div>
          </section>
          <section className="px-16 py-4 flex flex-row items-center gap-x-4 border-b">
              <NavLink to="/">Dashboard</NavLink>
              <NavLink to="/schedule">Schedules</NavLink>
              <NavLink to="/project">Projects</NavLink>
              <NavLink to="/member">Members</NavLink>
              <NavLink to="/application">Application</NavLink>
          </section>
      </div>
    )
}

export default Navbar