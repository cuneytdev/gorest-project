export interface UserPostsResponse {
    code: number;
    meta: Meta;
    data: UserPost[];
}

export interface UserPost {
    id:         number;
    user_id:    number;
    title:      string;
    body:       string;
    created_at: Date;
    updated_at: Date;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    total: number;
    pages: number;
    page:  number;
    limit: number;
}