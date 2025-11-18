// src/api/areaApi.ts
import { axiosClient } from "@/lib/axiosClient";
import type {
    ApiListResponse,
    ApiResponse,
    AreaOverviewDto,
    CratingAreaDto,
    ListAreasQuery,
} from "@/types/api";

/**
 * GET /api/areas
 * Optional filters: plantId, status
 */
export async function listAreas(
    params?: ListAreasQuery
): Promise<CratingAreaDto[]> {
    const res = await axiosClient.get<ApiListResponse<CratingAreaDto>>(
        "/areas",
        { params }
    )
    return res.data.data
}

/**
 * GET /api/areas/:id
 */
export async function getAreaById(areaId: number): Promise<CratingAreaDto> {
    const res = await axiosClient.get<ApiResponse<CratingAreaDto>>(
        `/areas/${areaId}`
    )
    return res.data.data
}

/**
 * GET /api/areas/overview
 * Optional: plantId (string)
 */
export async function listAreaOverview(
    params?: { plantId?: string }
): Promise<AreaOverviewDto[]> {
    const res = await axiosClient.get<ApiListResponse<AreaOverviewDto>>(
        "/areas/overview",
        { params }
    )
    return res.data.data
}
