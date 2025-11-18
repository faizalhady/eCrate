// src/types/api/vendor.ts
import type { ISODateTimeString } from "./cpsCore";

/**
 * Query params for GET /api/vendors
 */
export interface ListVendorsQuery {
    isActive?: string; // "true" | "false"
    search?: string;
}

/**
 * DTO returned by vendorController (toVendorDto)
 */
export interface VendorDto {
    vendorId: number;
    vendorName: string;
    contactName: string | null;
    contactPhone: string | null;
    isActive: boolean;
    createdAt: ISODateTimeString;
}
