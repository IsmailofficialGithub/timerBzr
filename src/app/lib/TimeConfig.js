// lib/timerConfig.js

// Hardcoded timer start date: April 30, 2025 at 12:00 PM UTC
export const TIMER_START = new Date("2025-04-30T12:00:00Z");

// Countdown duration: 15 days
const DURATION_IN_MS = 15 * 24 * 60 * 60 * 1000;

// Final target date
export const TARGET_DATE = new Date(TIMER_START.getTime() + DURATION_IN_MS);
