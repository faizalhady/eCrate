// src/types/api/bookings.ts
import type {
    BookingStatus,
    ISODateTimeString,
} from "./cpsCore";

/**
 * Request body for POST /api/bookings
 */
export interface CreateBookingBody {
    areaId: number;
    jobId?: number | null;
    startDateTime: ISODateTimeString;
    endDateTime: ISODateTimeString;
}

/**
 * Query params for GET /api/bookings
 */
export interface ListBookingsQuery {
    areaId?: string;
    status?: BookingStatus;
    from?: string;
    to?: string;
}

/**
 * DTO returned for each booking (toBookingDto)
 */
export interface BookingDto {
    bookingId: number;
    jobId: number | null;
    areaId: number;
    startDateTime: ISODateTimeString;
    endDateTime: ISODateTimeString;
    status: BookingStatus;
    createdBy: string | null;
    createdAt: ISODateTimeString;
}
