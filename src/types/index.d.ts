// filepath: /express-mysql-migration-app/express-mysql-migration-app/src/types/index.d.ts
declare module 'express' {
    interface Request {
        user?: any; // Add user type if using authentication
    }

    interface Response {
        sendResponse: (data: any, statusCode?: number) => void;
    }
}

export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
}

export interface CreateUserRequest {
    username: string;
    password: string;
    email: string;
}

export interface UpdateUserRequest {
    username?: string;
    password?: string;
    email?: string;
}