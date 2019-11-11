export const onCreateUser = `
    subscription onCreateUser {
        onCreateUser {
            id
            username
            email
        }
    }
`

export const onUpdateUser = `
    subscription onUpdateUser {
        onUpdateUser {
            id
            username
            email
        }
    }
`

export const onDeleteUser = `
    subscription onDeleteUser {
        onDeleteUser {
            id
        }
    }
`

export const onCreateScore = `
    subscription onCreateScore {
        onCreateScore {
            id
            createdDate
            updatedDate
            status
            scoreUserId
        }
    }
`

export const onUpdateScore = `
    subscription onUpdateScore {
        onUpdateScore {
            id
            createdDate
            updatedDate
            status
            scoreUserId
        }
    }
`

export const onDeleteScore = `
    subscription onDeleteScore {
        onDeleteScore {
            id
        }
    }
`

export const onCreateNote = `
    subscription onCreateNote {
        onCreateNote {
            number
            dot
            doubleDot
            line
            doubleLine
            curve
            position
            noteScoreId
        }
    }
`

export const onUpdateNote = `
    subscription onUpdateNote {
        onUpdateNote {
            number
            dot
            doubleDot
            line
            doubleLine
            curve
            position
            noteScoreId
        }
    }
`

export const onDeleteNote = `
    subscription onDeleteNote {
        onDeleteNote {
            id
        }
    }
`