import React from "react"
import RoutePath from "./components/RoutePath"
import DateShow from "./components/DateShow"
import PassengersNumber from "./components/PassengersNumber"
import ChangeSearch from "./components/ChangeSearch"

const Header: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full px-50px] mx-auto h-24">
      <RoutePath />
      <PassengersNumber />
      <DateShow />
      <ChangeSearch />
    </div>
  )
}

export default Header
