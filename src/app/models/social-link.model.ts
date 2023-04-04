import { Developer } from "./developer.model";

export class SocialLink {
    id: number;
    developer: Developer;
    title: string;
    icon: string;
    link: string;
    isActive: boolean;
}