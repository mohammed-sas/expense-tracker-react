import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={sign==='+' ? 'plus' : 'minus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)} </span><button onClick={()=> deleteTransaction(transaction._id)} className="delete-btn">x</button>
         </li>
    )
}

export default Transaction
