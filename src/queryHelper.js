import * as queries from './graphql/queries';
import { graphqlOperation, Analytics, API } from 'aws-amplify';

const assertErrors = (response) => {
    if (response && response.errors && response.errors.length > 0) {
        throw new Error(response.errors.join('\n'))
    }
}

export const getUser = async (username: string) => {
    try {
        const response = await API.graphql(
            graphqlOperation(queries.getUser, { id: username })
        );
        assertErrors(response);
        return response.data.getUser;
    } catch (e) {
        Analytics.record({
            name: 'getUserError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const getScore = async (score_id: string) => {
    try {
        const response = await API.graphql(
            graphqlOperation(queries.getScore, { id: score_id })
        );
        assertErrors(response);
        return response.data.getScore;
    } catch (e) {
        Analytics.record({
            name: 'getScoreError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const getNote = async (pos: number) => {
    try {
        const response = await API.graphql(
            graphqlOperation(queries.getNote, { position: pos })
        );
        assertErrors(response);
        return response.data.getNote;
    } catch (e) {
        Analytics.record({
            name: 'getNoteError',
            attributes: {
                error: e.message
            }
        })
    }
}