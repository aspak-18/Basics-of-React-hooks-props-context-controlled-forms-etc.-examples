import React from 'react'

const Footer = (x) => {
    console.log(x.users[0].ename)
  return (
    <div>
      i am footer
    </div>
  )
}

export default Hoc(Footer)
