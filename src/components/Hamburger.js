import React from 'react'

const Hamburger = ({open, handleClick}) => {
  return (
    <div
        className={open ? "menu menu-open" : "menu"}
        onClick={handleClick}
    >
        <div className="first"></div>
        <div className="middle"></div>
        <div className="last"></div>
    </div>
  )
}

export default Hamburger