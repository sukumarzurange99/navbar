import { Menu, Transition, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

const NavMenu = () => {
  return (
    <nav>
      <ul className="hidden lg:flex lg:space-x-7 lg:ml-14 ">
        <li>
          <Menu>
            <MenuButton>
              Features{" "}
              <img
                className="inline-block m1-1"
                src="images/icon-arrow-down.svg"
                alt="icon-arrow-down "
              ></img>{" "}
            </MenuButton>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <MenuItems className="absolute right-0 mt-4 w-40 py-3 rounded-md shadoww-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-gray-100 text-gray-900"
                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                      href="/acccount-settings"
                    >
                      <img
                        src="images/icon-todo.svg"
                        alt="Todo list icon"
                        className="inline w-4 mr-3"
                      />
                      ToDo list
                    </a>
                  )}
                </MenuItem>


                <MenuItem>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-gray-100 text-gray-900"
                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                      href="/acccount-settings"
                    >
                      <img
                        src="images/icon-calendor.svg"
                        alt=" icon"
                        className="inline w-4 mr-3"
                      />
                      Calendor
                    </a>
                  )}
                </MenuItem>



                {/* {<MenuItem>
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"}`}
                      href="/account-settings"
                    >
                      Documentation
                    </a>
                  )}
                </MenuItem>
                <MenuItem disabled>
                  <span className="opacity-75">
                    Invite a friend(coming soon!)
                  </span>
                </MenuItem> } */}
             
             
              </MenuItems>
            </Transition>
          </Menu>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
