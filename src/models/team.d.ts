import {userType} from "./user";

/**
 * 队伍类别
 */
export type TeamType = {
    id: number;
    name: string
    description: strinr
    expireTime?: Date
    maxNum: Number
    password?: string
    //todo 定义枚举值 更规范
    status: Number
    createTime: Date;
    createUser?: userType;
};