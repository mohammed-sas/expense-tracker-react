import { GlobalContext } from "../context/GlobalState"
import { useContext,useEffect } from "react"
import Transaction from "./Transaction";
const TransactionList = () => {
    const {transactions,getTransaction} = useContext(GlobalContext);
    useEffect(() => {
        getTransaction();
    },[])
   
    return (
        <>
            <h3>History</h3>
            <ul  className="list">
                {transactions.map((transaction) =>(
                        <Transaction key={transaction.id} transaction={transaction}/>
                ))}
                
            </ul>
            
        </>
    )
}

export default TransactionList
