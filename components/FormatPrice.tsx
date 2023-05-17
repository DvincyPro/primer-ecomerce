import React from 'react'

interface Amount  {
  amount:Number;
}

const FormatPrice = ({amount}:Amount) => {
    const formattedAmount = new Number(amount).toLocaleString("en-US",{
      style:"currency",
      currency:"USD",
      minimumFractionDigits: 2
    })
  return (
    <span>{formattedAmount}</span>
  )
}

export default FormatPrice