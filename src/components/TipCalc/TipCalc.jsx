import { useState } from "react";
import ButtonCom from "../ButtonCom/ButtonCom";
import CustomerList from "../CustomerList/CustomerList";
import DropDown from "../DropDown/DropDown";
import Input from "../Input/Input";
import TotalTable from "../TotalTable/TotalTable";
import styles from "./TipCalc.module.css";

const TipCalc = () => {
  const [amount, setAmount] = useState(0);
  const [serRating, setServRat] = useState("");
  const [custName, setCustName] = useState("");
  const [totalTip, setTotalTip] = useState(0);
  const [custList, setCustList] = useState([]);
  const [finalTip, setFinalTip] = useState(0);
  const [noOfCust, setNoOfCust] = useState(0);

  return (
    <div className={styles.divMain}>
      <div className={styles.divInner1}>
        <Input
          inputLbl="number"
          inputplaceholder="enter the tip amount"
          changeHandler={(data) => {
            setAmount(data);
          }}
          val={amount}
        />
      </div>
      <div className={styles.divInner2}>
        <DropDown
          dropDownHandler={(data) => {
            setServRat(data);
          }}
          val={serRating}
        />
        <Input
          inputLbl="text"
          inputplaceholder="Customer Name"
          changeHandler={(data) => {
            setCustName(data);
          }}
          val={custName}
        />
        <ButtonCom
          btnLbl="Add Customer"
          clickHandler={() => {
            let tip2 = 0;
            if (serRating == "20") {
              tip2 = (amount * 20) / 100;
            } else if (serRating == "10") {
              tip2 = (amount * 10) / 100;
            } else if (serRating == "5") {
              tip2 = (amount * 5) / 100;
            }

            let list = custList;
            console.log(tip2);
            list.push(custName + " offering a tip of " + tip2);
            setCustList(list);
            setTotalTip(totalTip + tip2);
          }}
        />
      </div>
      <div className={styles.divInner3}>
        <CustomerList listHandler={custList} />
        <ButtonCom
          btnLbl="Calculate Tip and Customer"
          clickHandler={() => {
            setFinalTip(totalTip);
            setNoOfCust(custList.length);
          }}
        />
        <TotalTable value={finalTip} val={noOfCust} />
      </div>
    </div>
  );
};

export default TipCalc;
