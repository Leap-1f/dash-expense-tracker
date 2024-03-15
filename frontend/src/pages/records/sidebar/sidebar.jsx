import React from 'react'

import {
  FaEye,
  FaPlus,
  FaRegCircle,
} from "react-icons/fa";






const menuItems = [
  {
    title: "Types",
    list: [
      {
        title: "All",
        icon: <FaRegCircle />,
      },
      {
        title: "Income",
        icon: <FaRegCircle />
      },
      {
        title: "Expense",
        icons: <FaRegCircle />
      },
    ],
  },
  {
    title: "Category",
    list: [
      {
        title: "Food & Drinks",
        icons: <FaEye />,
      },
      {
        title: "Shopping",
        icons: <FaEye />,
      },
      {
        title: "Housing",
        icons: <FaEye />,
      },
      {
        title: "Transportation",
        icons: <FaEye />,
      },
      {
        title: "Vehicle",
        icons: <FaEye />,
      },
      {
        title: "Life & Entertainment",
        icons: <FaEye />,
      },
      {
        title: "Communication, PC",
        icons: <FaEye />,
      },
      {
        title: "Financial expenses",
        icons: <FaEye />,
      },
      {
        title: "Investments",
        icons: <FaEye />,
      },
      {
        title: "Income",
        icons: <FaEye />,
      },
      {
        title: "Others",
        icons: <FaEye />,
      },
      {
        title: "Add Category",
        icons: <FaPlus />,
      },
    ],
  },
]



const Sidebar = () => {
  return (
    <>
      <div className='bg-gray-100 w-full h-full'>
            <ul className=''>
              {menuItems.map((cat) => (
                <li key={cat.title}>
                  <span className="font-bold font-xl mx-auto"></span>
                  {cat.list.map((item) => (
                    <MenuLink item={item} key={item.title} />
                  ))}
                </li>
              ))}
            </ul>
      </div>
    </>
  )
}

export default Sidebar