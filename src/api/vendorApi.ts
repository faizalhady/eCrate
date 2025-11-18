// src/api/vendorApi.ts
import { axiosClient } from "@/lib/axiosClient";
import type {
    ApiListResponse,
    ApiResponse,
    ListVendorsQuery,
    VendorDto,
} from "@/types/api";

/**
 * GET /api/vendors
 */
export async function listVendors(
    params?: ListVendorsQuery
): Promise<VendorDto[]> {
    const res = await axiosClient.get<ApiListResponse<VendorDto>>(
        "/vendors",
        { params }
    )
    return res.data.data
}

/**
 * GET /api/vendors/:id
 */
export async function getVendorById(
    vendorId: number
): Promise<VendorDto> {
    const res = await axiosClient.get<ApiResponse<VendorDto>>(
        `/vendors/${vendorId}`
    )
    return res.data.data
}
