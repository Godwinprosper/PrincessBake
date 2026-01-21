export function formatMoney(priceCent){
  return(
    `$${(priceCent/100).toFixed(2)}`
  )
}