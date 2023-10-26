
import { type } from "os";
import { IconType, icons } from "react-icons";




export interface  Iskill{
    name:string,
    level: string,
    Icon:IconType,
}
export interface Iproject{
    name:string,
    description:string,
    image_path:string,
    deployed_url:string,
    github_url:string,
    category:category[],
    key_tech:string[],
}
export type category ="react" | "node" | "express" | "mongo";