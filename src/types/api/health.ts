// src/types/api/health.ts

/**
 * DTO returned by GET /health
 */
export interface HealthStatusDto {
    ok: boolean;
    db: boolean;
}
