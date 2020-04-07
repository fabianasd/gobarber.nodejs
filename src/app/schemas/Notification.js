import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Number,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
    default: false,
  },
  timestamps: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

export default mongoose.model('Notification', NotificationSchema);
