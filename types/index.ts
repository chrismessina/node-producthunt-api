export type GrantType = 'client_credentials' | 'authorization_code' | 'refresh_token' | 'password'
export type PostOrder = "VOTES" | "FEATURED_AT" | "RANKING" | "NEWEST"
export type TopicOrder = "FOLLOWERS_COUNT" | "NEWEST"

// Order enums from schema
export type CollectionsOrder = "NEWEST" | "FOLLOWERS_COUNT" | "FEATURED_AT"
export type CommentsOrder = "NEWEST" | "VOTES_COUNT"
export type PostsOrder = "FEATURED_AT" | "VOTES" | "RANKING" | "NEWEST"
export type TopicsOrder = "NEWEST" | "FOLLOWERS_COUNT"
