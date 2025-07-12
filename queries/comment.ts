export const commentQuery = `
query Comment ($id: ID!) {
    comment (
        id: $id
    ) {
        body
        createdAt
        id
        isVoted
        parentId
        url
        userId
        user {
            coverImage
            createdAt
            headline
            id
            isFollowing
            isMaker
            isViewer
            name
            profileImage
            twitterUsername
            url
            username
            websiteUrl
        }
        votes {
            totalCount
        }
    }
}
`
