// src/api/stageApi.ts
import { axiosClient } from "@/lib/axiosClient";
import type {
    ApiListResponse,
    ApiResponse,
    CratingJobStageDto,
    CreateJobStageBody,
    ListJobStagesQuery,
} from "@/types/api";

/**
 * POST /api/jobs/:id/stages
 */
export async function createJobStage(
    jobId: number,
    body: CreateJobStageBody
): Promise<CratingJobStageDto> {
    const res = await axiosClient.post<ApiResponse<CratingJobStageDto>>(
        `/jobs/${jobId}/stages`,
        body
    )
    return res.data.data
}

/**
 * GET /api/jobs/:id/stages
 */
export async function listJobStages(
    jobId: number,
    params?: ListJobStagesQuery
): Promise<CratingJobStageDto[]> {
    const res = await axiosClient.get<
        ApiListResponse<CratingJobStageDto>
    >(`/jobs/${jobId}/stages`, { params })

    return res.data.data
}
