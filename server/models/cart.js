module.exports = mongoose.model('Cart', new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    new mongoose.Schema({
      amount: Number,
      product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
    })
  ]
}));
