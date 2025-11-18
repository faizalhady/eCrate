// src/types/api/example.ts
import type { ISODateTimeString } from "./cpsCore";

/**
 * Query params for GET /api/items
 */
export interface GetItemsQuery {
    limit?: string;
    search?: string;
}

/**
 * Request body for POST /api/items
 */
export interface CreateItemBody {
    title: string;
    body: string;
}

/**
 * Request body for PUT /api/items/:id
 */
export interface UpdateItemBody {
    title?: string;
    body?: string;
}

/**
 * DTO shape returned from ExampleItems table
 */
export interface ExampleItemDto {
    id: number;
    title: string;
    body: string;
    createdAt: ISODateTimeString;
}
