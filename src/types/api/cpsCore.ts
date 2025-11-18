// src/types/api/cpsCore.ts

// Helper for ISO datetime strings from the backend
export type ISODateTimeString = string;

/* ============================================
   ENUM LIKE UNION TYPES
   These mirror your SQL CHECK constraints and
   backend union types.
============================================ */

export type CratingAreaStatus =
    | "Idle"
    | "Occupied"
    | "Calling"
    | "Maintenance";

export type CratingJobStatus =
    | "Booked"
    | "WaitingConfirmation"
    | "Confirmed"
    | "Calling"
    | "Crating"
    | "Crated"
    | "ReadyForCollection"
    | "Collected"
    | "Cancelled"
    | "Expired";

export type BookingStatus =
    | "Pending"
    | "Confirmed"
    | "Cancelled"
    | "Expired"
    | "Completed";

export type CratingJobStageName =
    | "Booking"
    | "ConfirmationPending"
    | "Confirmed"
    | "Calling"
    | "Crating"
    | "CratingComplete"
    | "ReadyForCollection"
    | "Collected"
    | "Cancelled"
    | "Expired";

export type ActivityEntityType =
    | "Job"
    | "Booking"
    | "Area"
    | "Vendor"
    | "Workcell"
    | "Plant";

export type RoleName = "Admin" | "SuperAdmin" | "User" | "Vendor" | "Viewer";

/* ============================================
   REF SCHEMA TYPES
   These are the core reference entities.
============================================ */

export interface Plant {
    plantId: number;
    plantName: string;
    location: string | null;
    createdAt: ISODateTimeString;
}

export interface CratingArea {
    areaId: number;
    plantId: number;
    areaName: string;
    status: CratingAreaStatus;
    updatedAt: ISODateTimeString;
}

export interface Vendor {
    vendorId: number;
    vendorName: string;
    contactName: string | null;
    contactPhone: string | null;
    isActive: boolean;
    createdAt: ISODateTimeString;
}

export interface Workcell {
    workcellId: number;
    workcellName: string;
    division: string | null;
    isActive: boolean;
    createdAt: ISODateTimeString;
}

/* ============================================
   AUTH SCHEMA TYPES
============================================ */

export interface User {
    userId: number;
    username: string;
    fullName: string | null;
    email: string | null;
    passwordHash: string | null;
    isActive: boolean;
    createdAt: ISODateTimeString;
    lastLogin: ISODateTimeString | null;
}

export interface Role {
    roleId: number;
    roleName: RoleName;
    description: string | null;
}

export interface UserRole {
    userRoleId: number;
    userId: number;
    roleId: number;
}

/* ============================================
   CORE SCHEMA TYPES
============================================ */

export interface CratingJob {
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

export interface Booking {
    bookingId: number;
    jobId: number | null;
    areaId: number;

    startDateTime: ISODateTimeString;
    endDateTime: ISODateTimeString;

    status: BookingStatus;

    createdBy: string | null;
    createdAt: ISODateTimeString;
}

export interface CratingJobStage {
    stageId: number;
    jobId: number;
    stageName: CratingJobStageName;
    startedAt: ISODateTimeString;
    endedAt: ISODateTimeString | null;
    pic: string | null;
    remarks: string | null;
}

/* ============================================
   OPS SCHEMA TYPES
============================================ */

export interface ActivityLog {
    activityId: number;
    entityType: ActivityEntityType;
    entityId: number;
    action: string;
    oldValue: string | null; // JSON from DB
    newValue: string | null; // JSON from DB
    userId: string | null;
    timestamp: ISODateTimeString;
}
