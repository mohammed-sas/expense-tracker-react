import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react"
const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext);
    const income = transactions.filter((transaction) =>  Number(transaction.amount)>0 ).reduce((acc,item) => (acc+=Math.abs(item.amount)),0);
   
    const expense = transactions.filter((transaction) =>  Number(transaction.amount)<0 ).reduce((acc,item) => (acc+=Math.abs(item.amount)),0);
    
   
    return (
        <div className="income-expense-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
            
        </div>
    )
}

export default IncomeExpense
