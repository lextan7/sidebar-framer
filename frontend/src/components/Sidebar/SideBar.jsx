import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },

  {
    path: "/location",
    name: "Location",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/location/region",
        name: "Region",
        icon: <FaUser />,
      },
      {
        path: "/location/province",
        name: "Province",
        icon: <FaLock />,
      },
      {
        path: "/location/city",
        name: "City",
        icon: <FaMoneyBill />,
      },
      {
        path: "/location/district",
        name: "District",
        icon: <FaMoneyBill />,
      },    
      {
        path: "/location/barangay",
        name: "Barangay",
        icon: <FaMoneyBill />,
      },           
    ],
  },
  {
    path: "/barangay",
    name: "Barangay Setup",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/barangay/citizenship",
        name: "Citizenship",
        icon: <FaUser />,
      },
      {
        path: "/barangay/occupation",
        name: "Occupation",
        icon: <FaLock />,
      },
      {
        path: "/barangay/pwdcondiction",
        name: "PWD Condition",
        icon: <FaMoneyBill />,
      },
      {
        path: "/barangay/businesstype",
        name: "Business Type",
        icon: <FaMoneyBill />,
      },
      {
        path: "/barangay/vehicletype",
        name: "Vehicle Type",
        icon: <FaMoneyBill />,
      },           
      {
        path: "/barangay/socialorganization",
        name: "Social Organization",
        icon: <FaMoneyBill />,
      },      
      {
        path: "/barangay/benebarangayfitcard",
        name: "Benefit Card",
        icon: <FaMoneyBill />,
      },      
      {
        path: "/barangay/scholarship",
        name: "Scholarship",
        icon: <FaMoneyBill />,
      },      
    ],
  },

  {
    path: "/rpt",
    name: "RPT Setup",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/rpt/classification",
        name: "Classification",
        icon: <FaUser />,
      },
      {
        path: "/rpt/subclass",
        name: "Subclass",
        icon: <FaLock />,
      },
    ],
  },

  {
    path: "/resident",
    name: "Residents",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/businesspermit",
    name: "Business Permit",
    icon: <AiTwotoneFileExclamation />,
  },

  {
    path: "/payment",
    name: "Payments",
    icon: <MdMessage />,
  },
  {
    path: "/disaster",
    name: "Disaster/Rescue",
    icon: <BiAnalyse />,
  },

  {
    path: "/lupon",
    name: "Lupon/Peace&Order",
    icon: <BiAnalyse />,
  },
  {
    path: "/project",
    name: "Projects/Programs",
    icon: <BiAnalyse />,
  },
  {
    path: "/violation",
    name: "Violations",
    icon: <BiAnalyse />,
  },  
  {
    path: "/certificate",
    name: "Certificate/Clearance",
    icon: <BiAnalyse />,
  },    
  {
    path: "/report",
    name: "Reports",
    icon: <BiAnalyse />,
  },    

  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/mrt",
    name: "Material React Table",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/mrt/tablegrid",
        name: "Material React Table",
        icon: <FaUser />,
      },
      {
        path: "/mrt/enable_editing_row",
        name: "Editing Row",
        icon: <FaLock />,
      },
      {
        path: "/mrt/editing_crud",
        name: "Editing Crud",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },







];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  e Barangay
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
