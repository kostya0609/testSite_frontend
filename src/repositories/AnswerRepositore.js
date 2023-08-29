import {BaseRepository} from "./BaseRepository";

export class AnswerRepository extends BaseRepository {
    constructor() {
        super('answers');
    }

    /**
     * @param {object} payload
     * @return Promise<any>
     */
    async add(payload) {
        const result = await this._query({
            payload,
            nestedEndpoint: 'add',
        });

        if (!result.success)
            throw new Error(result.message);

        return result;
    }

    /**
     * @param {object} payload
     * @return Promise<any>
     */
    async edit(payload) {
        const result = await this._query({
            payload,
            nestedEndpoint: 'edit',
        });

        if (!result.success)
            throw new Error(result.message);

        return result;
    }

    /**
     * @param {object} payload
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

}