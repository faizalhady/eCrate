// src/api/workcellApi.ts
import { axiosClient } from "@/lib/axiosClient";
import type {
    ApiListResponse,
    ApiResponse,
    ListWorkcellsQuery,
    WorkcellDto,
} from "@/types/api";

/**
 * GET /api/workcells
 */
export async function listWorkcells(
    params?: ListWorkcellsQuery
): Promise<WorkcellDto[]> {
    const res = await axiosClient.get<ApiListResponse<WorkcellDto>>(
        "/workcells",
        { params }
    )
    return res.data.data
}

/**
 * GET /api/workcells/:id
 */
export async function getWorkcellById(
    workcellId: number
): Promise<WorkcellDto> {
    const res = await axiosClient.get<ApiResponse<WorkcellDto>>(
        `/workcells/${workcellId}`
    )
    return res.data.data
}
