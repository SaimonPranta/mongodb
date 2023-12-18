 

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const pageSize = 10; // Number of items per page
const pageNumber = 1; // Page number (adjust as needed)

const userId = "650205290152c6d3eb546b09"; // Replace with the actual user ID

const User = mongoose.model('User', yourSchema); // Replace 'yourSchema' with the actual schema

User.findOne({ '_id': ObjectId(userId) })
  .select('reports') // Select only the 'reports' field
  .slice('reports', [pageSize * (pageNumber - 1), pageSize]) // Paginate using slice
  .exec((err, user) => {
    if (err) {
      console.error(err);
      return;
    }
    
    if (!user) {
      console.log('User not found');
      return;
    }

    console.log('Paginated Reports:', user.reports);
  });







