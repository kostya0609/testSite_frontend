import {BaseRepository} from "./BaseRepository";

export class QuestionRepository extends BaseRepository {
    constructor() {
        super('questions');
    }

    /**
     * @param {FormData} payload
     * @return Promise<any>
     */
    async create(payload) {
        const result = await this._query({
            payload,
            nestedEndpoint: 'create',
        });

        if (!result.success)
            throw new Error(result.message);

        return result;
    }

    /**
     * @param {FormData} payload
     * @return Promise<any>
     */
    async delete(payload) {
        const result = await this._query({
            payload,
            nestedEndpoint: 'delete',
        });

        if (!result.success)
            throw new Error(result.message);

        return result;
    }

    /**
     * @param {object} payload
     * @return Promise<any>
     */
    async list(payload) {
        const result = await this._query({
            payload,
            nestedEndpoint: 'list',
        });

        if (!result.success)
            throw new Error(result.message);

        return result;
    }




}