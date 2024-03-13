import { shadcnPreset } from './resources/js/lib/shadcn/preset';
import type { Config } from 'tailwindcss';

const config = {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    presets: [shadcnPreset],

    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
