import { Schema, model, models, Document, Types } from "mongoose";

// TypeScript interface for Booking document
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  fullName: string;
  email: string;
  phoneNumber: string;
  bookingDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "Event ID is required"],
      index: true, // Index for faster queries
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: (email: string) => {
          // RFC 5322 compliant email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        },
        message: "Please provide a valid email address",
      },
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    bookingDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

// Pre-save hook: Validate that the referenced Event exists
BookingSchema.pre("save", async function () {
  // Only validate eventId if it's new or modified
  if (this.isNew || this.isModified("eventId")) {
    // Dynamically import Event model to avoid circular dependency
    const Event = models.Event || (await import("./event.model")).default;

    const eventExists = await Event.exists({ _id: this.eventId });

    if (!eventExists) {
      throw new Error(`Event with ID ${this.eventId} does not exist`);
    }
  }

  // Normalize bookingDate to start of day (midnight UTC)
  if (this.isModified("bookingDate")) {
    const date = new Date(this.bookingDate);
    date.setUTCHours(0, 0, 0, 0);
    this.bookingDate = date;
  }
});

// Use existing model if available (prevents OverwriteModelError in development)
const Booking = models.Booking || model<IBooking>("Booking", BookingSchema);

export default Booking;
