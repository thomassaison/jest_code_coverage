import ILike from "../interfaces/like.interface";
import IMatch from "../interfaces/match.interface";

export default class Bot {
    private matches: IMatch[];
    private likes: ILike[];

    constructor() {
        this.matches = [];
        this.likes = [];
    }

    getLikes(): ILike[] {
        return this.likes;
    }

    getMatches(): IMatch[] {
        return this.matches;
    }
}
