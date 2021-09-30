import {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    function onSubmit(e){
        console.log(text,amount);
        e.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random*100000),
            text,
            amount : +amount
        }

        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Add new transation</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>
                    (negative - expense , positive - income)
                    </label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number"  placeholder="Enter amount..."/>
                    <input type="submit" value="Add Transaction" className="add-btn" />
                </div>
            </form>
            
        </>
    )
}

export default AddTransaction
