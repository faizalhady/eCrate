// src/types/api/workcell.ts
import type { ISODateTimeString } from "./cpsCore";

/**
 * Query params for GET /api/workcells
 */
export interface ListWorkcellsQuery {
    isActive?: string; // "true" | "false"
    search?: string;
}

/**
 * DTO returned by workcellController (toWorkcellDto)
 */
export interface WorkcellDto {
    workcellId: number;
    workcellName: string;
    division: string | null;
    isActive: boolean;
    createdAt: ISODateTimeString;
}
