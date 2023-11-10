/**
 * 用户类别
 */
export type userType = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    gender: number;
    profile?:string;
    phone: string;
    email: string;
    userStatus: number;
    userRole: number;
    tags: string[];
    createTime: Date;
};