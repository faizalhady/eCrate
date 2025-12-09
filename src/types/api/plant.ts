// src/types/api/plant.ts
import type { ISODateTimeString } from "./cpsCore";

/**
 * Query params for GET /api/plants
 * Empty for now, ready to be extended.
 */
// export interface ListPlantsQuery {
//     // later: isActive?: string;
//     // later: search?: string;
// }

/**
 * DTO returned by plantController (toPlantDto)
 */
export interface PlantDto {
    plantId: number;
    plantName: string;
    location: string | null;
    createdAt: ISODateTimeString;
}
