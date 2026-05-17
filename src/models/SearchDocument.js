import mongoose from 'mongoose';

const searchDocumentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

searchDocumentSchema.index({
  title: 'text',
  content: 'text',
});

export default mongoose.model('SearchDocument', searchDocumentSchema);
