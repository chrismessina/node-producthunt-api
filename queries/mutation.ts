export const votePost = `
mutation VotePost ($postId: ID!, $clientMutationId: String) {
    votePost (
        input: {
            postId: $postId
            clientMutationId: $clientMutationId
        }
    ) {
        clientMutationId
        errors {
            field
            message
        }
        node {
            id
            isVoted
            votesCount
        }
    }
}
`

export const unvotePost = `
mutation UnvotePost ($postId: ID!, $clientMutationId: String) {
    unvotePost (
        input: {
            postId: $postId
            clientMutationId: $clientMutationId
        }
    ) {
        clientMutationId
        errors {
            field
            message
        }
        node {
            id
            isVoted
            votesCount
        }
    }
}
`

export const followTopic = `
mutation FollowTopic ($topicId: ID!, $clientMutationId: String) {
    followTopic (
        input: {
            topicId: $topicId
            clientMutationId: $clientMutationId
        }
    ) {
        clientMutationId
        errors {
            field
            message
        }
        node {
            id
            isFollowing
            followersCount
        }
    }
}
`

export const unfollowTopic = `
mutation UnfollowTopic ($topicId: ID!, $clientMutationId: String) {
    unfollowTopic (
        input: {
            topicId: $topicId
            clientMutationId: $clientMutationId
        }
    ) {
        clientMutationId
        errors {
            field
            message
        }
        node {
            id
            isFollowing
            followersCount
        }
    }
}
`

export const followCollection = `
mutation FollowCollection ($collectionId: ID!, $clientMutationId: String) {
    followCollection (
        input: {
            collectionId: $collectionId
            clientMutationId: $clientMutationId
        }
    ) {
        clientMutationId
        errors {
            field
            message
        }
        node {
            id
            isFollowing
            followersCount
        }
    }
}
`

export const unfollowCollection = `
mutation UnfollowCollection ($collectionId: ID!, $clientMutationId: String) {
    unfollowCollection (
        input: {
            collectionId: $collectionId
            clientMutationId: $clientMutationId
        }
    ) {
        clientMutationId
        errors {
            field
            message
        }
        node {
            id
            isFollowing
            followersCount
        }
    }
}
`

export const userFollow = `
mutation UserFollow ($userId: ID!, $clientMutationId: String) {
    userFollow (
        input: {
            userId: $userId
            clientMutationId: $clientMutationId
        }
    ) {
        clientMutationId
        errors {
            field
            message
        }
        node {
            id
            isFollowing
            name
            username
        }
    }
}
`

export const userFollowUndo = `
mutation UserFollowUndo ($userId: ID!, $clientMutationId: String) {
    userFollowUndo (
        input: {
            userId: $userId
            clientMutationId: $clientMutationId
        }
    ) {
        clientMutationId
        errors {
            field
            message
        }
        node {
            id
            isFollowing
            name
            username
        }
    }
}
`

export const voteComment = `
mutation VoteComment ($commentId: ID!, $clientMutationId: String) {
    voteComment (
        input: {
            commentId: $commentId
            clientMutationId: $clientMutationId
        }
    ) {
        clientMutationId
        errors {
            field
            message
        }
        node {
            id
            isVoted
            votesCount
        }
    }
}
`

export const unvoteComment = `
mutation UnvoteComment ($commentId: ID!, $clientMutationId: String) {
    unvoteComment (
        input: {
            commentId: $commentId
            clientMutationId: $clientMutationId
        }
    ) {
        clientMutationId
        errors {
            field
            message
        }
        node {
            id
            isVoted
            votesCount
        }
    }
}
`
