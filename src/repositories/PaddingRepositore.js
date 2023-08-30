import {BaseRepository} from "./BaseRepository";

export class PaddingRepository extends BaseRepository {
    constructor() {
        super('padding');
    }

    /**
     * @param {object} payload
     * @return Promise<any>
     */
    async get(payload) {
        const result = await this._query({
            payload,
            nestedEndpoint: 'get',
        });

        if (!result.success)
            throw new Error(result.message);

        return result;
    }

    /**
     * @param {object} payload
     * @return Promise<any>
     */
    async change(payload) {
        const result = await this._query({
            payload,
            nestedEndpoint: 'change',
        });

        if (!result.success)
            throw new Error(result.message);

        return result;
    }

}