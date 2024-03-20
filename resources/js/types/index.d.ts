import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    avatar: string;
    fallback: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
