import { useEffect } from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from "../redux/currencySlice";
const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export function ExchangeRate() {
  const dispatch = useDispatch()
  const amount = useSelector(state => state.currency.amount)
  const currencyCode = useSelector(state => state.currency.currencyCode)
  const currencyData = useSelector(state => state.currency.data)

  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    dispatch(fetchData(currencyCode, supportedCurrencies))
  }, [currencyCode]);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
