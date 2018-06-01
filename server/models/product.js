module.exports = mongoose.model('Product', new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  price: Number,
  categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  vat: Number,
  artnr: {type: String, unique: true}
}));
