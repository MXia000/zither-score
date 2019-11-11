import * as mutations from './graphql/mutations';
import { graphqlOperation, Analytics, API } from 'aws-amplify';

const assertErrors = (response) => {
    if (response && response.errors && response.errors.length > 0) {
        throw new Error(response.errors.join('\n'))
    }
}

export const createUser = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.createUser, { user })
        );
        assertErrors(response);
        return response.data.createUser;
    } catch (e) {
        Analytics.record({
            name: 'createUserError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const updateUser = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.updateUser, { user })
        );
        assertErrors(response);
        return response.data.updateUser;
    } catch (e) {
        Analytics.record({
            name: 'updateUserError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const deleteUser = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.deleteUser, { user })
        );
        assertErrors(response);
        return response.data.deleteUser;
    } catch (e) {
        Analytics.record({
            name: 'deleteUserError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const createScore = async (score) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.createScore, { score })
        );
        assertErrors(response);
        return response.data.createScore;
    } catch (e) {
        Analytics.record({
            name: 'createScoreError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const updateScore = async (score) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.updateScore, { score })
        );
        assertErrors(response);
        return response.data.updateScore;
    } catch (e) {
        Analytics.record({
            name: 'updateScoreError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const deleteScore = async (score) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.deleteScore, { score })
        );
        assertErrors(response);
        return response.data.deleteScore;
    } catch (e) {
        Analytics.record({
            name: 'deleteScoreError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const createNote = async (note) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.createNote, { note })
        );
        assertErrors(response);
        return response.data.createNote;
    } catch (e) {
        Analytics.record({
            name: 'createNoteError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const updateNote = async (note) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.updateNote, { note })
        );
        assertErrors(response);
        return response.data.updateNote;
    } catch (e) {
        Analytics.record({
            name: 'updateNoteError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const deleteNote = async (note) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.deleteNote, { note })
        );
        assertErrors(response);
        return response.data.deleteNote;
    } catch (e) {
        Analytics.record({
            name: 'deleteNoteError',
            attributes: {
                error: e.message
            }
        })
    }
}