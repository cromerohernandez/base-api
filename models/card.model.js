const mongoose = require('mongoose')

const LABELS = ['Learning Unit', 'Kata', 'Example', 'Lab', 'Done!', 'Review', 'Bonus'];

const cardSchema = new mongoose.Schema (
  {
    position: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true},
    labels: [{ type: String, enum: LABELS }],
    column: { type: mongoose.Schema.Types.ObjectId, ref: 'Column', required: true},
  },
  {
    timestamps: true,
    toJSON: {
      transform: (ref, ret) => {
        ret.id = ref._id;
        delete ret._id;
        delete ret.__v;
        return ret
      }
    }
  }
)

const Card = new mongoose.model('Card', cardSchema)

module.exports = Card