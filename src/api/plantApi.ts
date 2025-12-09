// src/api/plantApi.ts
import { axiosClient } from "@/lib/axiosClient";
import type {
    ApiListResponse,
    ApiResponse,
    PlantDto,
} from "@/types/api";

/**
 * GET /api/plants
 */
export async function listPlants(): Promise<PlantDto[]> {
    const res = await axiosClient.get<ApiListResponse<PlantDto>>(
        "/plants"
    )
    return res.data.data
}

/**
 * GET /api/plants/:id
 */
export async function getPlantById(
    plantId: number
): Promise<PlantDto> {
    const res = await axiosClient.get<ApiResponse<PlantDto>>(
        `/plants/${plantId}`
    )
    return res.data.data
}
