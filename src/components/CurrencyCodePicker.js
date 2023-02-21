import { useDispatch } from "react-redux";
import { changeCurrencyCode } from "../redux/currencySlice";
export function CurrencyCodePicker({
  supportedCurrencies,
  currencyCode,
}) {

  const dispatch = useDispatch()

  const handleCurrencyCode = (event) => {
    dispatch(changeCurrencyCode(event.target.value))
  }

  return (
    <select className="currencyCode" value={currencyCode} onChange={handleCurrencyCode}>
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
