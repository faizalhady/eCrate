// src/types/api/job.ts
import type {
    CratingJobStatus,
    ISODateTimeString,
} from "./cpsCore";

/**
 * Query params for GET /api/jobs
 * Optional filters: areaId, workcellId, vendorId, status, from, to
 */
export interface ListJobsQuery {
    areaId?: string;
    workcellId?: string;
    vendorId?: string;
    status?: CratingJobStatus;
    from?: string;
    to?: string;
}

/**
 * Request body for POST /api/jobs
 */
export interface CreateJobBody {
    serialNumber: string;
    model?: string | null;

    workcellId: number;
    vendorId?: number | null;
    areaId?: number | null;

    startTime?: ISODateTimeString | null;
    endTime?: ISODateTimeString | null;
}

/**
 * Request body for PATCH /api/jobs/:id/status
 */
export interface UpdateJobStatusBody {
    status: CratingJobStatus;
}

/**
 * DTO returned for each job (toCratingJobDto)
 */
export interface CratingJobDto {
    jobId: number;
    serialNumber: string;
    model: string | null;

    workcellId: number;
    vendorId: number | null;
    areaId: number | null;

    status: CratingJobStatus;
    startTime: ISODateTimeString | null;
    endTime: ISODateTimeString | null;

    createdBy: string | null;
    createdAt: ISODateTimeString;
}
