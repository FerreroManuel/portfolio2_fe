import { Developer } from "./developer.model";

export class Skill {
    id: number;
    developer: Developer;
    title: string;
    proficiency: number;
    isActive: boolean;
}