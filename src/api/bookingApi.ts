// src/api/bookingApi.ts
import { axiosClient } from "@/lib/axiosClient";
import type {
    ApiListResponse,
    ApiResponse,
    BookingDto,
    CreateBookingBody,
    ListBookingsQuery,
} from "@/types/api";

/**
 * POST /api/bookings
 */
export async function createBooking(
    body: CreateBookingBody
): Promise<BookingDto> {
    const res = await axiosClient.post<ApiResponse<BookingDto>>(
        "/bookings",
        body
    )
    return res.data.data
}

/**
 * GET /api/bookings/:id
 */
export async function getBookingById(
    bookingId: number
): Promise<BookingDto> {
    const res = await axiosClient.get<ApiResponse<BookingDto>>(
        `/bookings/${bookingId}`
    )
    return res.data.data
}

/**
 * GET /api/bookings
 * Optional filters: areaId, status, from, to
 */
export async function listBookings(
    params?: ListBookingsQuery
): Promise<BookingDto[]> {
    const res = await axiosClient.get<ApiListResponse<BookingDto>>(
        "/bookings",
        { params }
    )
    return res.data.data
}
