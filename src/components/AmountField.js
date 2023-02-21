import { useDispatch } from 'react-redux'
import { amountCurrency } from '../currencySlice'
export function AmountField({ amount }) {
  const dispatch = useDispatch()

  function handleChangeCurrency(e) {
    dispatch(amountCurrency(e.target.value)
    )
  }
  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={handleChangeCurrency}
      />
    </form>
  );
}
