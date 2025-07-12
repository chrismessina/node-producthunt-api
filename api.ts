export interface ProductHuntSingleTopicResponse {
    data?: SingleTopicData;
}

export interface SingleTopicData {
    topic?: Topic;
}

import globalAxios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from 'axios'
import { API_V, BASE_PATH, BaseAPI, RequestArgs } from './base'
import { DUMMY_BASE_URL, createRequestFunction, toPathString } from './common'
import { Configuration } from './configuration'
import { postsQuery, postQuery } from './queries/post'
import type { PostOrder, TopicOrder } from './types'
import { topicsQuery, topicQuery } from './queries/topic'
import { collectionsQuery, collectionQuery } from './queries/collection'
import { commentQuery } from './queries/comment'
import { userQuery, viewerQuery } from './queries/user'
import { votePost, unvotePost, followTopic, unfollowTopic, followCollection, unfollowCollection, userFollow, userFollowUndo, voteComment, unvoteComment } from './queries/mutation'

/**
 * Represents the response object for a ProductHunt post.
 */
export interface ProductHuntPostResponse {
  data?: PostData
}

/**
 * Represents the data object within the ProductHunt post response.
 */
export interface PostData {
  post?: Post
}

/**
 * Represents the post object within the ProductHunt post data.
 */
export interface Post {
  /**
   * The number of comments on the post.
   * @type {number}
   */
  commentsCount?: number;

  /**
   * The timestamp when the post was created.
   * @type {Date}
   */
  createdAt?: Date;

  /**
   * The timestamp when the post was featured.
   * @type {Date}
   */
  featuredAt?: Date;

  /**
   * The description of the post.
   * @type {string}
   */
  description: string;

  /**
   * Indicates whether the post has been collected.
   * @type {boolean}
   */
  isCollected?: boolean;

  /**
   * The unique identifier of the post.
   * @type {string}
   */
  id?: string;

  /**
   * The name or title of the post.
   * @type {string}
   */
  name?: string;

  /**
   * Indicates whether the user has voted on the post.
   * @type {boolean}
   */
  isVoted?: boolean;

  /**
   * The rating given to the post in reviews.
   * @type {number}
   */
  reviewsRating?: number;

  /**
   * The number of reviews for the post.
   * @type {number}
   */
  reviewsCount?: number;

  /**
   * The tagline associated with the post.
   * @type {string}
   */
  tagline?: string;

  /**
   * The slug (short URL) of the post.
   * @type {string}
   */
  slug?: string;

  /**
   * The unique identifier of the user who created the post.
   * @type {string}
   */
  userId?: string;

  /**
   * The URL associated with the post.
   * @type {string}
   */
  url?: string;

  /**
   * The website URL associated with the post.
   * @type {string}
   */
  website?: string;

  /**
   * The number of votes received by the post.
   * @type {number}
   */
  votesCount?: number;

  /**
   * Information about collections associated with the post.
   * @type {CollectionInfo}
   */
  collections?: {
    /**
     * The total number of collections associated with the post.
     * @type {number}
     */
    totalCount?: number;
  };

  /**
   * Information about comments on the post.
   * @type {CommentInfo}
   */
  comments?: {
    /**
     * The total number of comments on the post.
     * @type {number}
     */
    totalCount?: number;
  };

  /**
   * Information about makers associated with the post.
   * @type {Maker[]}
   */
  makers?: Maker[];

  /**
   * Information about media content associated with the post.
   * @type {MediaInfo[]}
   */
  media?: Media[];

  /**
   * Information about product links associated with the post.
   * @type {ProductLinkInfo[]}
   */
  productLinks?: ProductLink[];

  /**
   * Information about the post's thumbnail.
   * @type {Thumbnail}
   */
  thumbnail?: Thumbnail;

  /**
   * Information about topics associated with the post.
   * @type {Topic[]}
   */
  topics?: Topic[];

  /**
   * Information about the user who created the post.
   * @type {User}
   */
  user?: User;

  /**
   * Information about votes received by the post.
   * @type {VoteInfo}
   */
  votes?: {
    /**
     * The total number of votes received by the post.
     * @type {number}
     */
    totalCount?: number;
  };
}

/**
 * Represents the response object for a ProductHunt post.
 */
export interface ProductHuntPostsResponse {
  data?: PostsData
}

/**
 * Represents the data object within the ProductHunt post response.
 */
export interface PostsData {
  posts?: Posts
}

/**
 * Represents the posts object within the ProductHunt post data.
 */
export interface PageInfo {
  /**
   * The end cursor value of the posts.
   * @type {string}
   * @memberof PageInfo
   */
  endCursor?: string

  /**
   * If there is a next page of posts.
   * @type {boolean}
   * @memberof PageInfo
   */
  hasNextPage?: boolean

  /**
   * If there is a previous page of posts.
   * @type {boolean}
   * @memberof PageInfo
   */
  hasPreviousPage?: boolean

  /**
   * The start cursor value of the posts.
   * @type {string}
   * @memberof PageInfo
   */
  startCursor?: string
}

/**
 * Represents the posts object within the ProductHunt post data.
 */
export interface Posts {
  /**
   * The total count value of the posts.
   * @type {number}
   * @memberof Posts
   */
  totalCount?: number

  /**
   * The page info object of the posts.
   * @type {PageInfo}
   * @memberof Posts
   */
  pageInfo?: PageInfo

  /**
   * The edges object of the posts.
   * @type {PostEdge[]}
   * @memberof Posts
   */
  edges?: PostEdge[]
}

/**
 * Represents an edge object within the posts data.
 */
export interface PostEdge {
  /**
   * The cursor value of the edge.
   * @type {string}
   * @memberof PostEdge
   */
  cursor?: string

  /**
   * The node object within the edge.
   * @type {PostNode}
   * @memberof PostEdge
   */
  node?: PostNode
}

/**
 * Represents a node object within the posts data.
 */
export interface PostNode {
  /**
   * The ID of the node.
   * @type {string}
   * @memberof PostNode
   */
  id?: string

  /**
   * The name of the node.
   * @type {string}
   * @memberof PostNode
   */
  name?: string

  /**
   * The tagline of the node.
   * @type {string}
   * @memberof PostNode
   */
  tagline?: string

  /**
   * The description of the node.
   * @type {string}
   * @memberof PostNode
   */
  description?: string

  /**
   * The URL of the node.
   * @type {string}
   * @memberof PostNode
   */
  url?: string

  /**
   * The slug of the node.
   * @type {string}
   * @memberof PostNode
   */
  slug?: string

  /**
   * The number of votes for the node.
   * @type {number}
   * @memberof PostNode
   */
  votesCount?: number

  /**
   * The thumbnail object of the node.
   * @type {Thumbnail}
   * @memberof PostNode
   */
  thumbnail?: Thumbnail

  /**
   * The website URL of the node.
   * @type {string}
   * @memberof PostNode
   */
  website?: string

  /**
   * The rating of the reviews for the node.
   * @type {number}
   * @memberof PostNode
   */
  reviewsRating?: number

  /**
   * The number of reviews for the node.
   * @type {number}
   * @memberof PostNode
   */
  reviewsCount?: number

  /**
   * The creation date of the node.
   * @type {Date}
   * @memberof PostNode
   */
  createdAt?: Date

  /**
   * The makers associated with the node.
   * @type {Maker[]}
   * @memberof PostNode
   */
  makers?: Maker[]

  /**
   * The product links associated with the node.
   * @type {Thumbnail[]}
   * @memberof PostNode
   */
  productLinks?: Thumbnail[]

  /**
   * The user object associated with the node.
   * @type {User}
   * @memberof PostNode
   */
  user?: User

  /**
   * The number of comments for the node.
   * @type {number}
   * @memberof PostNode
   */
  commentsCount?: number

  /**
   * The featured date of the node.
   * @type {Date}
   * @memberof PostNode
   */
  featuredAt?: Date

  /**
   * Indicates if the node is collected.
   * @type {boolean}
   * @memberof PostNode
   */
  isCollected?: boolean

  /**
   * Indicates if the node is voted.
   * @type {boolean}
   * @memberof PostNode
   */
  isVoted?: boolean

  /**
   * The ID of the user associated with the node.
   * @type {string}
   * @memberof PostNode
   */
  userId?: string
}

/**
 * Represents a product link object.
 */
export interface ProductLink {
  /**
   * The type of the product link.
   * @type {string}
   * @memberof ProductLink
   */
  type?: string

  /**
   * The url of the product link.
   * @type {string}
   * @memberof ProductLink
   */
  url?: string
}

/**
 * Represents a media object.
 */
export interface Media {
  /**
   * The type of the media.
   * @type {string}
   * @memberof Media
   */
  type?: string

  /**
   * The url of the media.
   * @type {string}
   * @memberof Media
   */
  url?: string

  /**
   * The video url of the media.
   * @type {string}
   * @memberof Media
   */
  videoUrl?: string
}

/**
 * Represents a maker object.
 */
export interface Maker {
  /**
   * The ID of the maker.
   * @type {string}
   * @memberof Maker
   */
  id?: string

  /**
   * The name of the maker.
   * @type {string}
   * @memberof Maker
   */
  name?: string
}

/**
 * Represents a thumbnail object.
 */
export interface Thumbnail {
  /**
   * The type of the thumbnail.
   * @type {string}
   * @memberof Thumbnail
   */
  type?: string

  /**
   * The URL of the thumbnail.
   * @type {string}
   * @memberof Thumbnail
   */
  url?: string

  /**
   * The video URL of the thumbnail.
   * @type {string}
   * @memberof Thumbnail
   */
  videoUrl?: string
}

/**
 * Represents a user object.
 */
export interface User {
  /**
   * The cover image URL of the user.
   * @type {(string | null)}
   * @memberof User
   */
  coverImage?: string | null

  /**
   * The creation date of the user.
   * @type {Date}
   * @memberof User
   */
  createdAt?: Date

  /**
   * The headline of the user.
   * @type {(string | null)}
   * @memberof User
   */
  headline?: string | null

  /**
   * Indicates if the user is being followed.
   * @type {boolean}
   * @memberof User
   */
  isFollowing?: boolean

  /**
   * Indicates if the user is a maker.
   * @type {boolean}
   * @memberof User
   */
  isMaker?: boolean

  /**
   * Indicates if the user is the viewer.
   * @type {boolean}
   * @memberof User
   */
  isViewer?: boolean

  /**
   * The profile image URL of the user.
   * @type {(string | null)}
   * @memberof User
   */
  profileImage?: string | null

  /**
   * The Twitter username of the user.
   * @type {(string | null)}
   * @memberof User
   */
  twitterUsername?: string | null

  /**
   * The URL of the user.
   * @type {string}
   * @memberof User
   */
  url?: string

  /**
   * The username of the user.
   * @type {string}
   * @memberof User
   */
  username?: string

  /**
   * The website URL of the user.
   * @type {string}
   * @memberof User
   */
  websiteUrl?: string

  /**
   * The ID of the user.
   * @type {string}
   * @memberof User
   */
  id?: string

  /**
   * The name of the user.
   * @type {string}
   * @memberof User
   */
  name?: string

  /**
   * Information about user's followers.
   * @type {object}
   * @memberof User
   */
  followers?: {
    /**
     * The total number of followers.
     * @type {number}
     */
    totalCount?: number;
  }

  /**
   * Information about users being followed.
   * @type {object}
   * @memberof User
   */
  following?: {
    /**
     * The total number of users being followed.
     * @type {number}
     */
    totalCount?: number;
  }

  /**
   * Information about followed collections.
   * @type {object}
   * @memberof User
   */
  followedCollections?: {
    /**
     * The total number of followed collections.
     * @type {number}
     */
    totalCount?: number;
  }

  /**
   * Information about posts made by the user.
   * @type {object}
   * @memberof User
   */
  madePosts?: {
    /**
     * The total number of posts made.
     * @type {number}
     */
    totalCount?: number;
  }

  /**
   * Information about posts submitted by the user.
   * @type {object}
   * @memberof User
   */
  submittedPosts?: {
    /**
     * The total number of posts submitted.
     * @type {number}
     */
    totalCount?: number;
  }

  /**
   * Information about posts voted by the user.
   * @type {object}
   * @memberof User
   */
  votedPosts?: {
    /**
     * The total number of posts voted.
     * @type {number}
     */
    totalCount?: number;
  }
}

/**
 * @export
 * @interface GetPostsRequestVariables
 */
export interface GetPostsRequestVariables {
  featured?: boolean
  postedBefore?: Date
  postedAfter?: Date
  topic?: string
  order?: PostOrder
  after?: string
  before?: string
  first?: number
  twitterUrl?: string
  url?: string
}

/**
 *
 * @export
 * @interface GetPostsRequest
 */
export interface GetPostsRequest {
  query?: string
  variables?: GetPostsRequestVariables
}

/**
 * @export
 * @interface GetPostRequestVariables
 */
export interface GetPostRequestVariables {
  id?: string
  slug?: string
}

/**
 *
 * @export
 * @interface GetPostRequest
 */
export interface GetPostRequest {
  query?: string
  variables?: GetPostRequestVariables
}

/**
 * Represents the response object for a ProductHunt topic.
 */
export interface ProductHuntTopicResponse {
  data?: TopicData
}

/**
 * Represents the data object within the ProductHunt topic response.
 */
export interface TopicData {
  topics?: Topics
}

/**
 * Represents the topics object within the ProductHunt topic data.
 */
export interface Topics {
  /**
   * The total count value of the topics.
   * @type {number}
   * @memberof Topics
   */
  totalCount?: number

  /**
   * The page info object of the topics.
   * @type {PageInfo}
   * @memberof Topics
   */
  pageInfo?: PageInfo

  /**
   * The edges object of the topics.
   * @type {PostEdge[]}
   * @memberof Topics
   */
  nodes?: Topic[]
}

/**
 * Represents a Topic object within the topics data.
 * @interface Topic
 */
export interface Topic {
  /**
   * The name of the topic.
   * @type {string}
   * @memberof Topic
   */
  name?: string

  /**
   * The creation date of the topic.
   * @type {Date}
   * @memberof Topic
   */
  createdAt?: Date

  /**
   * The description of the topic.
   * @type {string}
   * @memberof Topic
   */
  description?: string

  /**
   * The number of followers of the topic.
   * @type {number}
   * @memberof Topic
   */
  followersCount?: number

  /**
   * The unique identifier of the topic.
   * @type {string}
   * @memberof Topic
   */
  id?: string

  /**
   * The image associated with the topic.
   * @type {string}
   * @memberof Topic
   */
  image?: string

  /**
   * Indicates if the user is following the topic.
   * @type {boolean}
   * @memberof Topic
   */
  isFollowing?: boolean

  /**
   * The number of posts related to the topic.
   * @type {number}
   * @memberof Topic
   */
  postsCount?: number

  /**
   * The slug of the topic.
   * @type {string}
   * @memberof Topic
   */
  slug?: string

  /**
   * The URL associated with the topic.
   * @type {string}
   * @memberof Topic
   */
  url?: string
}

/**
 * @export
 * @interface GetTopicsRequestVariables
 */
export interface GetTopicsRequestVariables {
  followedByUserid?: string
  query?: string
  order?: TopicOrder
  after?: string
  before?: string
  first?: number
  last?: number
}

/**
 *
 * @export
 * @interface GetTopicsRequest
 */
export interface GetTopicsRequest {
  query?: string
  variables?: GetTopicsRequestVariables
}

/**
 * Represents the response object for a ProductHunt collection.
 */
export interface ProductHuntCollectionResponse {
  data?: CollectionData
}

/**
 * Represents the data object within the ProductHunt collection response.
 */
export interface CollectionData {
  collection?: Collection
}

/**
 * Represents the response object for ProductHunt collections.
 */
export interface ProductHuntCollectionsResponse {
  data?: CollectionsData
}

/**
 * Represents the data object within the ProductHunt collections response.
 */
export interface CollectionsData {
  collections?: Collections
}

/**
 * Represents the collections object within the ProductHunt collections data.
 */
export interface Collections {
  /**
   * The total count value of the collections.
   * @type {number}
   * @memberof Collections
   */
  totalCount?: number

  /**
   * The page info object of the collections.
   * @type {PageInfo}
   * @memberof Collections
   */
  pageInfo?: PageInfo

  /**
   * The nodes array of the collections.
   * @type {Collection[]}
   * @memberof Collections
   */
  nodes?: Collection[]

  /**
   * The edges object of the collections.
   * @type {CollectionEdge[]}
   * @memberof Collections
   */
  edges?: CollectionEdge[]
}

/**
 * Represents an edge object within the collections data.
 */
export interface CollectionEdge {
  /**
   * The cursor value of the edge.
   * @type {string}
   * @memberof CollectionEdge
   */
  cursor?: string

  /**
   * The node object within the edge.
   * @type {Collection}
   * @memberof CollectionEdge
   */
  node?: Collection
}

/**
 * Represents a Collection object within the collections data.
 * @interface Collection
 */
export interface Collection {
  /**
   * The cover image URL of the collection.
   * @type {string}
   * @memberof Collection
   */
  coverImage?: string

  /**
   * The creation date of the collection.
   * @type {Date}
   * @memberof Collection
   */
  createdAt?: Date

  /**
   * The description of the collection.
   * @type {string}
   * @memberof Collection
   */
  description?: string

  /**
   * The featured date of the collection.
   * @type {Date}
   * @memberof Collection
   */
  featuredAt?: Date

  /**
   * The number of followers of the collection.
   * @type {number}
   * @memberof Collection
   */
  followersCount?: number

  /**
   * The unique identifier of the collection.
   * @type {string}
   * @memberof Collection
   */
  id?: string

  /**
   * Indicates if the user is following the collection.
   * @type {boolean}
   * @memberof Collection
   */
  isFollowing?: boolean

  /**
   * The name of the collection.
   * @type {string}
   * @memberof Collection
   */
  name?: string

  /**
   * The tagline of the collection.
   * @type {string}
   * @memberof Collection
   */
  tagline?: string

  /**
   * The URL associated with the collection.
   * @type {string}
   * @memberof Collection
   */
  url?: string

  /**
   * The ID of the user who created the collection.
   * @type {string}
   * @memberof Collection
   */
  userId?: string

  /**
   * The user who created the collection.
   * @type {User}
   * @memberof Collection
   */
  user?: User

  /**
   * Information about posts in the collection.
   * @type {object}
   * @memberof Collection
   */
  posts?: {
    /**
     * The total number of posts in the collection.
     * @type {number}
     */
    totalCount?: number;
  }

  /**
   * Information about topics associated with the collection.
   * @type {object}
   * @memberof Collection
   */
  topics?: {
    /**
     * The total number of topics associated with the collection.
     * @type {number}
     */
    totalCount?: number;
  }
}

/**
 * @export
 * @interface GetCollectionsRequestVariables
 */
export interface GetCollectionsRequestVariables {
  postId?: string
  userId?: string
  featured?: boolean
  order?: string
  after?: string
  before?: string
  first?: number
  last?: number
}

/**
 *
 * @export
 * @interface GetCollectionsRequest
 */
export interface GetCollectionsRequest {
  query?: string
  variables?: GetCollectionsRequestVariables
}

/**
 * @export
 * @interface GetCollectionRequestVariables
 */
export interface GetCollectionRequestVariables {
  id?: string
  slug?: string
}

/**
 *
 * @export
 * @interface GetCollectionRequest
 */
export interface GetCollectionRequest {
  query?: string
  variables?: GetCollectionRequestVariables
}

/**
 * Represents the response object for a ProductHunt comment.
 */
export interface ProductHuntCommentResponse {
  data?: CommentData
}

/**
 * Represents the data object within the ProductHunt comment response.
 */
export interface CommentData {
  comment?: Comment
}

/**
 * Represents a Comment object.
 * @interface Comment
 */
export interface Comment {
  /**
   * The body/content of the comment.
   * @type {string}
   * @memberof Comment
   */
  body?: string

  /**
   * The creation date of the comment.
   * @type {Date}
   * @memberof Comment
   */
  createdAt?: Date

  /**
   * The unique identifier of the comment.
   * @type {string}
   * @memberof Comment
   */
  id?: string

  /**
   * Indicates if the user has voted on the comment.
   * @type {boolean}
   * @memberof Comment
   */
  isVoted?: boolean

  /**
   * The ID of the parent comment (null for top-level comments).
   * @type {string}
   * @memberof Comment
   */
  parentId?: string

  /**
   * The URL of the comment.
   * @type {string}
   * @memberof Comment
   */
  url?: string

  /**
   * The ID of the user who created the comment.
   * @type {string}
   * @memberof Comment
   */
  userId?: string

  /**
   * The user who created the comment.
   * @type {User}
   * @memberof Comment
   */
  user?: User

  /**
   * Information about votes on the comment.
   * @type {object}
   * @memberof Comment
   */
  votes?: {
    /**
     * The total number of votes on the comment.
     * @type {number}
     */
    totalCount?: number;
  }
}

/**
 * @export
 * @interface GetCommentRequestVariables
 */
export interface GetCommentRequestVariables {
  id: string
}

/**
 *
 * @export
 * @interface GetCommentRequest
 */
export interface GetCommentRequest {
  query?: string
  variables?: GetCommentRequestVariables
}

/**
 * Represents the response object for a ProductHunt viewer.
 */
export interface ProductHuntViewerResponse {
  data?: ViewerData
}

/**
 * Represents the data object within the ProductHunt viewer response.
 */
export interface ViewerData {
  viewer?: Viewer
}

/**
 * Represents a Viewer object.
 * @interface Viewer
 */
export interface Viewer {
  /**
   * The user associated with the viewer.
   * @type {User}
   * @memberof Viewer
   */
  user?: User
}

/**
 * Represents the response object for a ProductHunt user.
 */
export interface ProductHuntUserResponse {
  data?: UserData
}

/**
 * Represents the data object within the ProductHunt user response.
 */
export interface UserData {
  user?: User
}

/**
 * @export
 * @interface GetUserRequestVariables
 */
export interface GetUserRequestVariables {
  id?: string
  username?: string
}

/**
 *
 * @export
 * @interface GetUserRequest
 */
export interface GetUserRequest {
  query?: string
  variables?: GetUserRequestVariables
}

/**
 *
 * @export
 * @interface GetViewerRequest
 */
export interface GetViewerRequest {
  query?: string
}

export interface GetTopicRequest {
  query?: string
  variables?: GetTopicRequestVariables
}

export interface GetTopicRequestVariables {
  id?: string
  slug?: string
}

export interface MutationRequest {
  query?: string
  variables?: Record<string, any>
}

// Typed mutation helper interfaces
export interface VotePostVariables {
  postId: string
  clientMutationId?: string
}

export interface VotePostRequest {
  query?: string
  variables: VotePostVariables
}

export interface FollowTopicVariables {
  topicId: string
  clientMutationId?: string
}

export interface FollowTopicRequest {
  query?: string
  variables: FollowTopicVariables
}

export interface FollowCollectionVariables {
  collectionId: string
  clientMutationId?: string
}

export interface FollowCollectionRequest {
  query?: string
  variables: FollowCollectionVariables
}

export interface UserFollowVariables {
  userId: string
  clientMutationId?: string
}

export interface UserFollowRequest {
  query?: string
  variables: UserFollowVariables
}

export interface VoteCommentVariables {
  commentId: string
  clientMutationId?: string
}

export interface VoteCommentRequest {
  query?: string
  variables: VoteCommentVariables
}

/**
 * ProductHuntAPI - object-oriented interface
 * @export
 * @class ProductHuntAPI
 * @extends {BaseAPI}
 */
export class ProductHuntAPI extends BaseAPI {
  /**
   *
   * @summary Creates a completion for the provided prompt and parameters.
   * @param {GetPostsRequest} getPostsRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public GetPosts(
    getPostsRequest?: GetPostsRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .GetPosts(getPostsRequest, options)
      .then(request => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Creates a completion for the provided prompt and parameters.
   * @param {GetTopicsRequest} getTopicsRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public GetTopics(
    getTopicsRequest?: GetTopicsRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .GetTopics(getTopicsRequest, options)
      .then(request => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Creates a completion for the provided prompt and parameters.
   * @param {GetPostRequest} getPostRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public GetPost(
    getPostRequest?: GetPostRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .GetPost(getPostRequest, options)
      .then(request => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get a single topic from Product Hunt for the provided parameters.
   * @param {GetTopicRequest} getTopicRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public GetTopic(
    getTopicRequest?: GetTopicRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .GetTopic(getTopicRequest, options)
      .then(request => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get collections from Product Hunt for the provided parameters.
   * @param {GetCollectionsRequest} getCollectionsRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public GetCollections(
    getCollectionsRequest?: GetCollectionsRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .GetCollections(getCollectionsRequest, options)
      .then(request => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get a single collection from Product Hunt for the provided parameters.
   * @param {GetCollectionRequest} getCollectionRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public GetCollection(
    getCollectionRequest?: GetCollectionRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .GetCollection(getCollectionRequest, options)
      .then(request => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get a comment from Product Hunt for the provided parameters.
   * @param {GetCommentRequest} getCommentRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public GetComment(
    getCommentRequest?: GetCommentRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .GetComment(getCommentRequest, options)
      .then(request => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get a user from Product Hunt for the provided parameters.
   * @param {GetUserRequest} getUserRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public GetUser(
    getUserRequest?: GetUserRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .GetUser(getUserRequest, options)
      .then(request => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get the viewer from Product Hunt for the provided parameters.
   * @param {GetViewerRequest} getViewerRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public GetViewer(
    getViewerRequest?: GetViewerRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .GetViewer(getViewerRequest, options)
      .then(request => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Execute a mutation against Product Hunt for the provided parameters.
   * @param {MutationRequest} mutationRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProductHuntAPI
   */
  public Mutation(
    mutationRequest?: MutationRequest,
    options?: AxiosRequestConfig
  ) {
    return ProductHuntAPIFp(this.configuration)
      .Mutation(mutationRequest, options)
      .then(request => request(this.axios, this.basePath))
  }
}

/**
 * ProductHuntAPIAxiosParamCreator - parameter creator
 * @export
 */
export const ProductHuntAPIAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Creates a post response for the given params.
     * @param {GetPostsRequest} getPostsRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    GetPosts: async (
      getPostsRequest?: GetPostsRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'getPostsRequest' is not null or undefined
      //assertParamExists('getPosts', 'getPostsRequest', getPostsRequest)
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      //const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: getPostsRequest?.query ?? postsQuery,
        variables: { ...getPostsRequest?.variables },
      }

      //setVariables(data, getPostsRequest.variables)

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      /* localVarRequestOptions.data = serializeDataIfNeeded(
        getPostsRequest,
        localVarRequestOptions,
        configuration
      ) */
      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Creates a topic response for the given params.
     * @param {GetTopicsRequest} getTopicsRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    GetTopics: async (
      getTopicsRequest?: GetTopicsRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'getTopicsRequest' is not null or undefined
      //assertParamExists('getPosts', 'getTopicsRequest', getTopicsRequest)
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      //const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: getTopicsRequest?.query ?? topicsQuery,
        variables: { ...getTopicsRequest?.variables },
      }

      //setVariables(data, getTopicsRequest.variables)

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      /* localVarRequestOptions.data = serializeDataIfNeeded(
        getTopicsRequest,
        localVarRequestOptions,
        configuration
      ) */
      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Creates a post response for the given params.
     * @param {GetPostRequest} getPostRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    GetPost: async (
      getPostRequest?: GetPostRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'getPostsRequest' is not null or undefined
      //assertParamExists('getPosts', 'getPostsRequest', getPostsRequest)
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      //const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: getPostRequest?.query ?? postQuery,
        variables: { ...getPostRequest?.variables },
      }

      //setVariables(data, getPostsRequest.variables)

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      /* localVarRequestOptions.data = serializeDataIfNeeded(
        getPostsRequest,
        localVarRequestOptions,
        configuration
      ) */
      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Creates a topic response for the given params.
     * @param {GetTopicRequest} getTopicRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    GetTopic: async (
      getTopicRequest?: GetTopicRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: getTopicRequest?.query ?? topicQuery,
        variables: { ...getTopicRequest?.variables },
      }

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Creates collections response for the given params.
     * @param {GetCollectionsRequest} getCollectionsRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    GetCollections: async (
      getCollectionsRequest?: GetCollectionsRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: getCollectionsRequest?.query ?? collectionsQuery,
        variables: { ...getCollectionsRequest?.variables },
      }

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Creates collection response for the given params.
     * @param {GetCollectionRequest} getCollectionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    GetCollection: async (
      getCollectionRequest?: GetCollectionRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: getCollectionRequest?.query ?? collectionQuery,
        variables: { ...getCollectionRequest?.variables },
      }

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Creates comment response for the given params.
     * @param {GetCommentRequest} getCommentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    GetComment: async (
      getCommentRequest?: GetCommentRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: getCommentRequest?.query ?? commentQuery,
        variables: { ...getCommentRequest?.variables },
      }

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Creates user response for the given params.
     * @param {GetUserRequest} getUserRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    GetUser: async (
      getUserRequest?: GetUserRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: getUserRequest?.query ?? userQuery,
        variables: { ...getUserRequest?.variables },
      }

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Creates viewer response for the given params.
     * @param {GetViewerRequest} getViewerRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    GetViewer: async (
      getViewerRequest?: GetViewerRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: getViewerRequest?.query ?? viewerQuery,
        variables: {},
      }

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Creates mutation response for the given params.
     * @param {MutationRequest} mutationRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    Mutation: async (
      mutationRequest?: MutationRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `${API_V}/api/graphql`
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const data = {
        query: mutationRequest?.query,
        variables: { ...mutationRequest?.variables },
      }

      const headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      localVarRequestOptions.data = data

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    }
  }
}

/**
 * ProductHuntAPI - functional programming interface
 * @export
 */
export const ProductHuntAPIFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    ProductHuntAPIAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary Get posts from Product Hunt for the provided parameters.
     * @param {GetPosts} GetPosts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async GetPosts(
      getPostsRequest?: GetPostsRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProductHuntPostsResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.GetPosts(
        getPostsRequest,
        options
      )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      )
    },
    /**
     *
     * @summary Get topics from Product Hunt for the provided parameters.
     * @param {GetTopics} GetTopics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async GetTopics(
      getTopicsRequest?: GetTopicsRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProductHuntTopicResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.GetTopics(
        getTopicsRequest,
        options
      )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      )
    },
    /**
     *
     * @summary Get post from Product Hunt for the provided parameters.
     * @param {GetPost} GetPost
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
async GetPost(
      getPostRequest?: GetPostRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProductHuntPostResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.GetPost(
        getPostRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    
    async GetTopic(
      getTopicRequest?: GetTopicRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProductHuntSingleTopicResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.GetTopic(
        getTopicRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },

    async GetCollections(
      getCollectionsRequest?: GetCollectionsRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProductHuntCollectionsResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.GetCollections(
        getCollectionsRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },

    async GetCollection(
      getCollectionRequest?: GetCollectionRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProductHuntCollectionResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.GetCollection(
        getCollectionRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },

    async GetComment(
      getCommentRequest?: GetCommentRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProductHuntCommentResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.GetComment(
        getCommentRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },

    async GetUser(
      getUserRequest?: GetUserRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProductHuntUserResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.GetUser(
        getUserRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },

    async GetViewer(
      getViewerRequest?: GetViewerRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ProductHuntViewerResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.GetViewer(
        getViewerRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },

    async Mutation(
      mutationRequest?: MutationRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<any>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.Mutation(
        mutationRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  }
}
