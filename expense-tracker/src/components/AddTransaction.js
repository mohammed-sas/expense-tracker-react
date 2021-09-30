import {useState} from 'react'
const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    return (
        <>
            <h3>Add new transation</h3>
            <form>
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
