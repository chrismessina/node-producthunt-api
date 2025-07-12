export const userQuery = `
query User ($id: ID, $username: String) {
    user (
        id: $id
        username: $username
    ) {
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
        followers {
            totalCount
        }
        following {
            totalCount
        }
        followedCollections {
            totalCount
        }
        madePosts {
            totalCount
        }
        submittedPosts {
            totalCount
        }
        votedPosts {
            totalCount
        }
    }
}
`

export const viewerQuery = `
query Viewer {
    viewer {
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
            followers {
                totalCount
            }
            following {
                totalCount
            }
            followedCollections {
                totalCount
            }
            madePosts {
                totalCount
            }
            submittedPosts {
                totalCount
            }
            votedPosts {
                totalCount
            }
        }
    }
}
`
