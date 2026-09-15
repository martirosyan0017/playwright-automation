import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    timeout: 30 * 1000,
    testDir: './tests',
    fullyParallel: true,
    reporter: 'html',

    use: {
        // Allows APIRequestContext to resolve relative API paths, as well as
        // keeping page navigation on the same application host.
        baseURL: process.env.BASE_URL,
        headless: true,
        trace: 'on',
    },

    projects: [
        {
            name: 'setup',
            testMatch: /auth\.setup\.js/,
        },
        {
            name: 'chromium',
            dependencies: ['setup'],
            testIgnore: /auth\.setup\.js/,
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});
