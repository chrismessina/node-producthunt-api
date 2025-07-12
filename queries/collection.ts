export const collectionsQuery = `
query Collections ($first: Int, $last: Int, $order: CollectionsOrder, $postId: ID, $userId: ID, $featured: Boolean, $after: String, $before: String) {
    collections (
        postId: $postId
        userId: $userId
        featured: $featured
        order: $order
        after: $after
        first: $first
        last: $last
        before: $before
    ) {
        totalCount
        pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
        }
        nodes {
            coverImage
            createdAt
            description
            featuredAt
            followersCount
            id
            isFollowing
            name
            tagline
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
            posts {
                totalCount
            }
            topics {
                totalCount
            }
        }
        edges {
            cursor
        }
    }
}
`

export const collectionQuery = `
query Collection ($id: ID, $slug: String) {
    collection (
        id: $id
        slug: $slug
    ) {
        coverImage
        createdAt
        description
        featuredAt
        followersCount
        id
        isFollowing
        name
        tagline
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
        posts {
            totalCount
        }
        topics {
            totalCount
        }
    }
}
`
