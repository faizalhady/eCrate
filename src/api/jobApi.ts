// src/api/jobApi.ts
import { axiosClient } from "@/lib/axiosClient";
import type {
    ApiListResponse,
    ApiResponse,
    CratingJobDto,
    CreateJobBody,
    ListJobsQuery,
    UpdateJobStatusBody,
} from "@/types/api";

/**
 * POST /api/jobs
 */
export async function createJob(
    body: CreateJobBody
): Promise<CratingJobDto> {
    const res = await axiosClient.post<ApiResponse<CratingJobDto>>(
        "/jobs",
        body
    )
    return res.data.data
}

/**
 * GET /api/jobs/:id
 */
export async function getJobById(jobId: number): Promise<CratingJobDto> {
    const res = await axiosClient.get<ApiResponse<CratingJobDto>>(
        `/jobs/${jobId}`
    )
    return res.data.data
}

/**
 * GET /api/jobs
 * Optional filters: areaId, workcellId, vendorId, status, from, to
 */
export async function listJobs(
    params?: ListJobsQuery
): Promise<CratingJobDto[]> {
    const res = await axiosClient.get<ApiListResponse<CratingJobDto>>(
        "/jobs",
        { params }
    )
    return res.data.data
}

/**
 * PATCH /api/jobs/:id/status
 */
export async function updateJobStatus(
    jobId: number,
    body: UpdateJobStatusBody
): Promise<CratingJobDto> {
    const res = await axiosClient.patch<ApiResponse<CratingJobDto>>(
        `/jobs/${jobId}/status`,
        body
    )
    return res.data.data
}
