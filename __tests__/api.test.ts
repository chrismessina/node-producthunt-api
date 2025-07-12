import { ProductHuntAPI, Configuration } from '../index';
import { postsQuery, postQuery } from '../queries/post';
import { topicsQuery, topicQuery } from '../queries/topic';
import { collectionsQuery, collectionQuery } from '../queries/collection';
import { commentQuery } from '../queries/comment';
import { userQuery, viewerQuery } from '../queries/user';
import { 
  votePost, 
  unvotePost, 
  followTopic, 
  unfollowTopic, 
  followCollection, 
  unfollowCollection, 
  userFollow, 
  userFollowUndo, 
  voteComment, 
  unvoteComment 
} from '../queries/mutation';

// Mock axios globally
jest.mock('axios', () => {
  const mockResponse = {
    data: { data: { success: true } },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {}
  };
  
  const mockAxiosInstance = {
    post: jest.fn().mockResolvedValue(mockResponse),
    request: jest.fn().mockResolvedValue(mockResponse),
    get: jest.fn().mockResolvedValue(mockResponse),
    put: jest.fn().mockResolvedValue(mockResponse),
    delete: jest.fn().mockResolvedValue(mockResponse),
    interceptors: {
      request: {
        use: jest.fn()
      },
      response: {
        use: jest.fn()
      }
    }
  };
  
  return {
    __esModule: true,
    default: mockAxiosInstance,
    ...mockAxiosInstance
  };
});

describe('ProductHunt API', () => {
  let api: ProductHuntAPI;
  const mockConfig = new Configuration({
    apiKey: 'test-token',
    basePath: 'https://api.producthunt.com'
  });

  beforeEach(() => {
    // Create API instance
    api = new ProductHuntAPI(mockConfig);
  });

  describe('API Endpoints', () => {
    it('should have GetPosts method that accepts parameters', async () => {
      const requestData = {
        variables: {
          first: 10,
          featured: true,
          order: 'VOTES' as const
        }
      };

      const result = await api.GetPosts(requestData);
      expect(result).toBeDefined();
      expect(result.data).toEqual({ data: { success: true } });
    });

    it('should handle GetPosts without variables', async () => {
      const result = await api.GetPosts();
      expect(result).toBeDefined();
      expect(result.data).toEqual({ data: { success: true } });
    });

    it('should have GetPost method', async () => {
      const result = await api.GetPost({ variables: { id: 'test-id' } });
      expect(result).toBeDefined();
    });

    it('should have GetTopics method', async () => {
      const result = await api.GetTopics({ variables: { first: 5 } });
      expect(result).toBeDefined();
    });

    it('should have GetTopic method', async () => {
      const result = await api.GetTopic({ variables: { id: 'test-topic' } });
      expect(result).toBeDefined();
    });

    it('should have GetCollections method', async () => {
      const result = await api.GetCollections({ variables: { first: 5 } });
      expect(result).toBeDefined();
    });

    it('should have GetCollection method', async () => {
      const result = await api.GetCollection({ variables: { id: 'test-collection' } });
      expect(result).toBeDefined();
    });

    it('should have GetComment method', async () => {
      const result = await api.GetComment({ variables: { id: 'test-comment' } });
      expect(result).toBeDefined();
    });

    it('should have GetUser method', async () => {
      const result = await api.GetUser({ variables: { username: 'testuser' } });
      expect(result).toBeDefined();
    });

    it('should have GetViewer method', async () => {
      const result = await api.GetViewer();
      expect(result).toBeDefined();
    });
  });

  describe('Mutation Tests', () => {
    it('should have Mutation method for votePost', async () => {
      const result = await api.Mutation({
        query: votePost,
        variables: { postId: 'test-post', clientMutationId: 'test' }
      });
      expect(result).toBeDefined();
    });

    it('should have Mutation method for unvotePost', async () => {
      const result = await api.Mutation({
        query: unvotePost,
        variables: { postId: 'test-post', clientMutationId: 'test' }
      });
      expect(result).toBeDefined();
    });

    it('should have Mutation method for followTopic', async () => {
      const result = await api.Mutation({
        query: followTopic,
        variables: { topicId: 'test-topic', clientMutationId: 'test' }
      });
      expect(result).toBeDefined();
    });

    it('should have Mutation method for unfollowTopic', async () => {
      const result = await api.Mutation({
        query: unfollowTopic,
        variables: { topicId: 'test-topic', clientMutationId: 'test' }
      });
      expect(result).toBeDefined();
    });

    it('should have Mutation method for followCollection', async () => {
      const result = await api.Mutation({
        query: followCollection,
        variables: { collectionId: 'test-collection', clientMutationId: 'test' }
      });
      expect(result).toBeDefined();
    });

    it('should have Mutation method for unfollowCollection', async () => {
      const result = await api.Mutation({
        query: unfollowCollection,
        variables: { collectionId: 'test-collection', clientMutationId: 'test' }
      });
      expect(result).toBeDefined();
    });

    it('should have Mutation method for userFollow', async () => {
      const result = await api.Mutation({
        query: userFollow,
        variables: { userId: 'test-user', clientMutationId: 'test' }
      });
      expect(result).toBeDefined();
    });

    it('should have Mutation method for userFollowUndo', async () => {
      const result = await api.Mutation({
        query: userFollowUndo,
        variables: { userId: 'test-user', clientMutationId: 'test' }
      });
      expect(result).toBeDefined();
    });

    it('should have Mutation method for voteComment', async () => {
      const result = await api.Mutation({
        query: voteComment,
        variables: { commentId: 'test-comment', clientMutationId: 'test' }
      });
      expect(result).toBeDefined();
    });

    it('should have Mutation method for unvoteComment', async () => {
      const result = await api.Mutation({
        query: unvoteComment,
        variables: { commentId: 'test-comment', clientMutationId: 'test' }
      });
      expect(result).toBeDefined();
    });
  });

  describe('Query Structure Tests', () => {
    it('should have valid query strings', () => {
      expect(postsQuery).toContain('posts');
      expect(postQuery).toContain('post');
      expect(topicsQuery).toContain('topics');
      expect(topicQuery).toContain('topic');
      expect(collectionsQuery).toContain('collections');
      expect(collectionQuery).toContain('collection');
      expect(commentQuery).toContain('comment');
      expect(userQuery).toContain('user');
      expect(viewerQuery).toContain('viewer');
    });

    it('should have valid mutation strings', () => {
      expect(votePost).toContain('votePost');
      expect(unvotePost).toContain('unvotePost');
      expect(followTopic).toContain('followTopic');
      expect(unfollowTopic).toContain('unfollowTopic');
      expect(followCollection).toContain('followCollection');
      expect(unfollowCollection).toContain('unfollowCollection');
      expect(userFollow).toContain('userFollow');
      expect(userFollowUndo).toContain('userFollowUndo');
      expect(voteComment).toContain('voteComment');
      expect(unvoteComment).toContain('unvoteComment');
    });
  });
});
