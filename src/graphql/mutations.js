export const createUser = `mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
        id
        username
        email
    }
}`

export const updateUser = `mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
        id
        username
        email
    }
}`

export const deleteUser = `mutation deleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
        id
    }
}`

export const createScore = `mutation createScore($input: CreateScoreInput!) {
    createScore(input: $input) {
        id
        createdDate
        updatedDate
        status
        scoreUserId
    }
}`

export const updateScore = `mutation updateScore($input: UpdateScoreInput!) {
    updateScore(input: $input) {
        id
        createdDate
        updatedDate
        status
        scoreUserId
    }
}`

export const deleteScore = `mutation deleteScore($input: DeleteScoreInput!) {
    deleteScore(input: $input) {
        id
    }
}`

export const createNote = `mutation createNote($input: CreateNoteInput!) {
    createNote(input: $input) {
        number
        dot
        doubleDot
        line
        doubleLine
        curve
        position
        noteScoreId
    }
}`

export const updateNote = `mutation updateNote($input: UpdateNoteInput!) {
    updateNote(input: $input) {
        number
        dot
        doubleDot
        line
        doubleLine
        curve
        position
        noteScoreId
    }
}`

export const deleteNote = `mutation deleteNote($input: DeleteNoteInput!) {
    deleteNote(input: $input) {
        id
    }
}`

