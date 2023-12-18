 

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






// {
//   "_id": {
//     "$oid": "650205290152c6d3eb546b09"
//   },
//   "username": "symul_12345",
//   "country": "BD",
//   "reportType": "campaign",
//   "reports": [
//     {
//       "dayInfo": "13-12-2023",
//       "activities": [
//         {
//           "offerID": "3139",
//           "name": "Credit Score Hero ($1 Trial)",
//           "activitiesType": "click",
//           "clicks": 2,
//           "leads": 0,
//           "reversal": 0,
//           "reversalAmount": 0,
//           "incomes": 0,
//           "status": "active",
//           "_id": {
//             "$oid": "65798ab51fcc9f6568273b6e"
//           }
//         },
//         {
//           "offerID": "19030",
//           "name": "Mobile Xpression (iOS)",
//           "activitiesType": "click",
//           "clicks": 1,
//           "leads": 0,
//           "reversal": 0,
//           "reversalAmount": 0,
//           "incomes": 0,
//           "status": "active",
//           "_id": {
//             "$oid": "65798a7c1fcc9f6568273aab"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "65798a7c1fcc9f6568273aaa"
//       }
//     },
//     {
//       "dayInfo": "11-12-2023",
//       "activities": [
//         {
//           "offerID": "24669",
//           "name": "PaidResearchSurvey",
//           "activitiesType": "click",
//           "clicks": 1,
//           "leads": 0,
//           "reversal": 0,
//           "reversalAmount": 0,
//           "incomes": 0,
//           "status": "active",
//           "_id": {
//             "$oid": "6577c57ac765a7771dc422db"
//           }
//         },
//         {
//           "offerID": "3139",
//           "name": "Credit Score Hero ($1 Trial)",
//           "activitiesType": "click",
//           "clicks": 1,
//           "leads": 0,
//           "reversal": 0,
//           "reversalAmount": 0,
//           "incomes": 0,
//           "status": "active",
//           "_id": {
//             "$oid": "6577c55cc765a7771dc4214a"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "6577c55cc765a7771dc42149"
//       }
//     },
//     {
//       "dayInfo": "06-12-2023",
//       "activities": [
//         {
//           "offerID": "23221",
//           "name": "ConsumerTestConnect DoorDash",
//           "activitiesType": "click",
//           "clicks": 1,
//           "leads": 0,
//           "reversal": 0,
//           "reversalAmount": 0,
//           "incomes": 0,
//           "status": "active",
//           "_id": {
//             "$oid": "65704fd546f4c304067932af"
//           }
//         }
//       ],
//       "_id": {
//         "$oid": "65704fd546f4c304067932ae"
//       }
//     },
//       ],
//       "_id": {
//         "$oid": "650205290152c6d3eb546b0a"
//       }
//     }
//   ],
//   "createdAt": {
//     "$date": "2023-09-13T18:53:29.212Z"
//   },
//   "updatedAt": {
//     "$date": "2023-12-14T01:48:45.811Z"
//   },
//   "__v": 0,
//   "disableList": []
// }

