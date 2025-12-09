// src/types/api/common.ts

/**
 * Generic API response envelope.
 * Matches your sendSuccess pattern:
 * { success, message?, data }
 */
export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data: T;
}

/**
 * Generic API response envelope for list endpoints.
 * You can extend this later with paging metadata.
 */
export type ApiListResponse<TItem> = ApiResponse<TItem[]>;

/**
 * Shape for error responses you might standardize later.
 * For now this is optional and not enforced.
 */
export interface ApiErrorResponse {
    success: false;
    message: string;
    // Optional extra info from backend
    details?: unknown;
}
