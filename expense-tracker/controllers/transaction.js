const Transaction = require('../models/Transaction');

exports.getTransaction = async (req,res,next) => {
   try{
        const transactions = await Transaction.find();
        return res.status(200).json({
            success : true,
            data : transactions
        })

   }catch(err){
        return res.status(500).json({
            success : false,
            error : 'Server error'
        })
   }
}


exports.addTransaction =async  (req,res,next) => {
    try{
        const {text, amount } = req.body;

        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success:true,
            data : transaction
        })
    }catch(err){
            console.log(err);
    }
}


exports.deleteTransaction = async (req,res,next) => {
    const transaction = await Transaction.findById(req.params.id);
    try{
        if(!transaction){
            return res.status(404).json({
                success : false,
                error : 'No transaction found'
            });
        }

        await transaction.remove();
        return res.status(200).json({
            success : true,
            data : {}
        })
    }catch(err){
        return res.status(500).json({
            success : false,
            error : 'server error'
        })
    }
        
}