import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    timeout: 30 * 1000,
    testDir: './tests',
    fullyParallel: true,
    reporter: 'html',

    use: {
        headless: true,
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});