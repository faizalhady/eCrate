// src/api/healthApi.ts
import { axiosClient } from "@/lib/axiosClient";
import type { HealthStatusDto } from "@/types/api";

/**
 * GET /health
 *
 * Note: if your Express app mounts this under /api/health
 * instead of /health, change the path accordingly.
 */
export async function getHealthStatus(): Promise<HealthStatusDto> {
    const res = await axiosClient.get<HealthStatusDto>("/health")
    return res.data
}
