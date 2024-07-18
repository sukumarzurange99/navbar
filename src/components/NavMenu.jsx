import { Menu, Transition, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

const NavMenu = () => {
  return (
    <nav>
      <ul className="hidden lg:flex lg:space-x-7 lg:ml-14 bg-stone-500">
        <li>
          <Menu>
            <MenuButton>
              Services{" "}
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
                        src="images/CSD.svg"
                        alt="Software Dev icon"
                        className="inline w-4 mr-3"
                      />
                      Custom Software Development
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
                        src="images/Team-Hiring.svg"
                        alt="Team-Hiring icon"
                        className="inline w-4 mr-3"
                      />
                      Team Hiring
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
                        src="images/App-dev.svg"
                        alt="App Development"
                        className="inline w-4 mr-3"
                      />
                      Mobile App Development
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
                        src="images/Engg&assu.svg"
                        alt="Assurance icon"
                        className="inline w-4 mr-3"
                      />
                      Engineering and Assurance
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
                        src="images/device-IOTsvg"
                        alt="Device and IOT"
                        className="inline w-4 mr-3"
                      />
                      Connected Devices & IoT Engineering
                    </a>
                  )}
                </MenuItem>
             
             
              </MenuItems>
            </Transition>
          </Menu>
        </li>





        <li>


        <Menu>
            <MenuButton>
              Industries{" "}
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
                        src="images/HealthC.svg"
                        alt="Healthcareicon"
                        className="inline w-4 mr-3"
                      />
                      Health care 
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
                        src="images/retail.svg"
                        alt="retail icon"
                        className="inline w-4 mr-3"
                      />
                      Retail and E-commerce
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
                        src="images/icon-Software.svg"
                        alt="Software icon"
                        className="inline w-4 mr-3"
                      />
                      Software and Hi-Tech
                    </a>
                  )}
                </MenuItem>



               
             
             
              </MenuItems>
            </Transition>
          </Menu>



        </li>




        <li>


<Menu>
    <MenuButton>
      Technologies{" "}
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
              Web Development
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
                alt="calendor icon"
                className="inline w-4 mr-3"
              />
              Mobile Development
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
                src="images/icon-reminder.svg"
                alt="reminder icon"
                className="inline w-4 mr-3"
              />
              Front end Development
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
                src="images/icon-Testing.svg"
                alt="Software Testing"
                className="inline w-4 mr-3"
              />
              Software Testing
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
                src="images/Technologies.svg"
                alt="Trending Technologies"
                className="inline w-4 mr-3"
              />
              Trending Technologies
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
                src="images/ai-ml.svg"
                alt="AI/ML TEch"
                className="inline w-4 mr-3"
              />
              Ai/ML Technologies
            </a>
          )}
        </MenuItem>




     
     
      </MenuItems>
    </Transition>
  </Menu>



</li>







<li>


        <Menu>
            <MenuButton>
              Our Work{" "}
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
                        src="images/icon-blog.svg"
                        alt="blog icon"
                        className="inline w-4 mr-3"
                      />
                      Blogs
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
                        src="images/icon-clents.svg"
                        alt="clients icon"
                        className="inline w-4 mr-3"
                      />
                      Clients
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
                        src="images/case-studies.svg"
                        alt="case studies icon"
                        className="inline w-4 mr-3"
                      />
                      Case Studies
                    </a>
                  )}
                </MenuItem>



                
             
             
              </MenuItems>
            </Transition>
          </Menu>



        </li>






        <li>


<Menu>
    <MenuButton>
      Company{" "}
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
                src="images/icon-about.svg"
                alt="About Us icon"
                className="inline w-4 mr-3"
              />
              ABout us
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
                src="images/icon-thinkitive-life.svg"
                alt="Thinkitive-life icon"
                className="inline w-4 mr-3"
              />
              Life at Thinkitive
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
                src="images/icon-reminder.svg"
                alt="reminder icon"
                className="inline w-4 mr-3"
              />
              Reminder
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
                src="images/icon-mission    .svg"
                alt="misison icon"
                className="inline w-4 mr-3"
              />
              Our mission & values
            </a>
          )}
        </MenuItem>
     
     
      </MenuItems>
    </Transition>
  </Menu>



</li>






<li>


        <Menu>
            <MenuButton>
              Contact   {" "}
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
                
             
             
              </MenuItems>
            </Transition>
          </Menu>



        </li>













      </ul>
    </nav>
  );
};
export default NavMenu;
