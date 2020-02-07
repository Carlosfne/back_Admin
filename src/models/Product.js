const mongoose = require('mongoose'),
      mongoosePaginate = require('mongoose-paginate');
      
const ProductShema = new mongoose.Schema({ 
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ProductShema.plugin(mongoosePaginate);

mongoose.model('Product', ProductShema);