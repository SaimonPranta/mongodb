let adsList = await Ads.paginate(
      {},
      {
        populate: [
          {
            path: "user",
            model: User,
            select: "username",
          },
          {
            path: "profilePost",
            select: "username approved banned rejected media gender",
            model: Post,
            //  match: {_id: {$eq: "6610c64e26c8c9db57bc187e"}}
            populate: [
              {
                path: "media",
                model: Media,
                match: { type: new RegExp("image/", "i") }, 
              },
            ],
          },
        ],
      }
    );











// Collection schema
// const adsSchema = new mongoose.Schema(
//   {
//     user: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     adsID: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     title: {
//       type: String,
//     },
//     age: {
//       type: Number, // If all age people will be allowed for this ads then no need to set ads
//     },
//     gender: {
//       type: String,
//       required: true,
//       enum: ["Male", "Female", "All"],
//     },
//     actionType: {
//       type: String,
//       // enum: ["Click", "View", "Reaction", "Comments", "Share"],
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     subCategory: {
//       type: String, 
//     },
//     time: {
//       //time will be minutes
//       type: Number,
//       required: true,
//     },
//     expireDate: {
//       type: Date,
//     },
//     status: {
//       // 0 -> Promote, 1 -> Approved, 3 ->Payment , 4 ---> Processing , 5 -----> Running, 6 -----> Complete , 10------> Rejected, 11 -----------> Banned
//       type: String,
//       default: "Applied",
//       enum: ["Applied", "Approved", "Payment Processing", "Payment Approved"],
//       // enum: ["Applied", "Approved", "Payment Processing", "Payment Approved", "Running", "Complete", "Rejected", "Banned"]
//     },
//     profilePost: {
//       type: Schema.Types.ObjectId,
//       ref: "Post",
//     },
//     ban: {
//       type: Boolean,
//       default: false,
//     },
//     location: new mongoose.Schema({
//       country: {
//         type: String,
//         required: true,
//       },
//       state: {
//         type: String,
//       },
//       city: {
//         type: String,
//       },
//     }),
//     paymentInfo: new mongoose.Schema({
//       rate: {
//         type: Number,
//         required: true,
//         default: 0,
//       },
//       vat: {
//         type: Number,
//         required: true,
//         default: 0,
//       },
//       budget: {
//         type: Number,
//         required: true,
//         default: 0,
//       },
//       currentPaymentInfo: {
//         type: Schema.Types.ObjectId,
//         ref: "main_balance_history",
//       },
//       paymentHistory: [
//         new mongoose.Schema({
//           paymentInfo: {
//             type: Schema.Types.ObjectId,
//             ref: "main_balance_history",
//           },
//         }),
//       ],
//     }),
//     statiscics: new mongoose.Schema({
//       targetAudience: {
//         type: Number,
//         required: true,
//         default: 0,
//       },
//       reach: {
//         type: Number,
//         required: true,
//         default: 0,
//       },
//       goalComplited: {
//         type: Number,
//         required: true,
//         default: 0,
//       },
//     }),
//     seen: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
