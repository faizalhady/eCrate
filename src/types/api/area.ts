// src/types/api/area.ts
import type { CratingAreaStatus, ISODateTimeString } from "./cpsCore";

/**
 * Query params for GET /api/areas
 * Optional filters: plantId, status
 */
export interface ListAreasQuery {
    plantId?: string;
    status?: CratingAreaStatus;
}

/**
 * DTO returned by areaController (toCratingAreaDto)
 */
export interface CratingAreaDto {
    areaId: number;
    plantId: number;
    areaName: string;
    status: CratingAreaStatus;
    updatedAt: ISODateTimeString;
}
