// src/types/api/stage.ts
import type {
    CratingJobStageName,
    ISODateTimeString,
} from "./cpsCore";

/**
 * Query params for GET /api/jobs/:id/stages
 */
export interface ListJobStagesQuery {
    from?: string;
    to?: string;
    stageName?: CratingJobStageName;
}

/**
 * Request body for POST /api/jobs/:id/stages
 */
export interface CreateJobStageBody {
    stageName: CratingJobStageName;

    startedAt?: ISODateTimeString | null;
    endedAt?: ISODateTimeString | null;

    pic?: string | null;
    remarks?: string | null;
}

/**
 * DTO returned for each stage (toCratingJobStageDto)
 */
export interface CratingJobStageDto {
    stageId: number;
    jobId: number;
    stageName: CratingJobStageName;
    startedAt: ISODateTimeString;
    endedAt: ISODateTimeString | null;
    pic: string | null;
    remarks: string | null;
}
