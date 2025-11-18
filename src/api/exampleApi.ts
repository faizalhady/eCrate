// src/api/exampleApi.ts
import { axiosClient } from "@/lib/axiosClient";
import type {
  ApiListResponse,
  ApiResponse,
  CreateItemBody,
  ExampleItemDto,
  GetItemsQuery,
  UpdateItemBody,
} from "@/types/api";

/**
 * GET /api/items
 */
export async function getItems(
  params?: GetItemsQuery
): Promise<ExampleItemDto[]> {
  const res = await axiosClient.get<ApiListResponse<ExampleItemDto>>(
    "/items",
    { params }
  )
  return res.data.data
}

/**
 * POST /api/items
 */
export async function createItem(
  body: CreateItemBody
): Promise<ExampleItemDto> {
  const res = await axiosClient.post<ApiResponse<ExampleItemDto>>(
    "/items",
    body
  )
  return res.data.data
}

/**
 * PUT /api/items/:id
 */
export async function updateItem(
  id: number,
  body: UpdateItemBody
): Promise<ExampleItemDto> {
  const res = await axiosClient.put<ApiResponse<ExampleItemDto>>(
    `/items/${id}`,
    body
  )
  return res.data.data
}

/**
 * DELETE /api/items/:id
 * Backend returns a string message in data, based on controller.
 */
export async function deleteItem(id: number): Promise<string> {
  const res = await axiosClient.delete<ApiResponse<string>>(
    `/items/${id}`
  )
  return res.data.data
}
