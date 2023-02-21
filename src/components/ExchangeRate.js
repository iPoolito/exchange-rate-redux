import { useState, useCallback, useEffect } from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { getExchangeRates } from "../api";
import { useSelector } from 'react-redux'

const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export function ExchangeRate() {

  const amount = useSelector(state => state.currency.amount)
  const currencyCode = useSelector(state => state.currency.currencyCode)
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });
  console.log({ amount, currencyCode })
  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      console.log(rates)
      setCurrencyData(rates);
    });
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
