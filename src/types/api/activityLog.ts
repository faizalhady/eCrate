// src/types/api/activityLog.ts
import type {
    ActivityEntityType,
    ISODateTimeString,
} from "./cpsCore";

/**
 * Query params for a future GET /api/activity-logs
 * (not wired yet, but typed for later)
 */
export interface ListActivityLogsQuery {
    entityType?: ActivityEntityType;
    entityId?: number;
    action?: string;
    userId?: string;
    from?: ISODateTimeString;
    to?: ISODateTimeString;
}

/**
 * DTO for activity log entries (read side)
 */
export interface ActivityLogDto {
    activityId: number;
    entityType: ActivityEntityType;
    entityId: number;
    action: string;
    oldValue: string | null;
    newValue: string | null;
    userId: string | null;
    timestamp: ISODateTimeString;
}
