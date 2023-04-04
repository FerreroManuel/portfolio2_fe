import { Developer } from "./developer.model";
import { Repository } from "./repository.model";

export class Education {
    id: number;
    developer: Developer;
    title: string;
    place: string;
    link: string;
    startDate: Date;
    finishDate: Date;
    isPresent: boolean;
    description: string;
    certificate: string;
    repository: Repository;
    isActive: boolean;
}