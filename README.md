# Product Hunt API V2 Node.js Library
The Product Hunt Node.js library provides convenient access to the Product Hunt Graphql V2 API from Node.js applications.

> ⚠️ **Important note: this library is meant for server-side usage only, as using it in client-side browser code will expose your secret API key. [See here](https://api.producthunt.com/v2/docs) for more details.**

## Installation

```bash
npm install node-producthunt-api
```

## Usage

The library needs to be configured with your account's secret key, which is available in your [Product Hunt account page]([https://platform.openai.com/account/api-keys](https://www.producthunt.com/v2/oauth/applications)). We recommend setting it as an environment variable. Here's an example of initializing the library with the API key loaded from an environment variable and creating a completion:

## Init client

You can use your app dev token directly:

```javascript
const { Configuration, ProductHuntAPI } = require("node-producthunt-api");

const configuration = new Configuration({
        apiKey: process.env.PRODUCT_HUNT_DEV_TOKEN,
})
```

or use your Oauth credentials If you have no token created:

```javascript
const { Configuration, ProductHuntAPI } = require("node-producthunt-api");

const configuration = new Configuration({
        clientId: process.env.PRODUCT_HUNT_CLIENT_ID,
        clientSecret: process.env.PRODUCT_HUNT_CLIENT_SECRET,
        grantType: "client_credentials",
})
```

```javascript
const { ProductHuntAPI } = require("node-producthunt-api");

const productHuntAPI = new ProductHuntAPI(configuration)

const { data } = await productHuntAPI
  .GetPosts({
    variables: {
      first: 20,
      order: "VOTES",
      postedAfter: new Date("2022/12/01"),
      after: "NjA",
      topic: "web3"
    }
  })
console.log(data.data.posts.edges)
```

### Additional Usage Examples

#### Query a specific topic

```javascript
const { data } = await productHuntAPI.GetTopic({ variables: { slug: "artificial-intelligence" } });
console.log(data.data.topic);
```

Check out the [full API documentation](http://api-v2-docs.producthunt.com.s3-website-us-east-1.amazonaws.com/object/post/) for examples of all the available functions.

### Request options

All of the available API request functions additionally contain an optional final parameter where you can pass custom [axios request options](https://axios-http.com/docs/req_config), for example:

```javascript
const completion = await productHuntAPI
  .GetPosts(
    {
      variables: {
        first: 20,
        order: "VOTES"
      }
    },
    {
      timeout: 1000,
      headers: {
        "Example-Header": "example",
      },
    }
  );
```

### CommonJs and ESModules Support

```javascript
const { Configuration, ProductHuntAPI } = require("node-producthunt-api");
```

```javascript
import { Configuration, ProductHuntAPI } from "node-producthunt-api"
```

### Error handling

API requests can potentially return errors due to invalid inputs or other issues. These errors can be handled with a `try...catch` statement, and the error details can be found in either `error.response` or `error.message`:

```javascript
try {
  const { data } = await productHuntAPI
  .GetPosts({
      variables: {
        first: 20,
        order: "VOTES"
      }
  });
  console.log(data.data.posts.edges);
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}
```


### Mutations

The library supports executing GraphQL mutations against the Product Hunt API. You can use mutations to perform actions like voting on posts, following topics, and more.

#### Generic Mutation Support

You can execute any custom mutation using the `Mutation` method:

```javascript
const { data } = await productHuntAPI.Mutation({
  query: `
    mutation VotePost($postId: ID!, $clientMutationId: String) {
      votePost(input: { postId: $postId, clientMutationId: $clientMutationId }) {
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
  `,
  variables: {
    postId: "POST_ID_HERE",
    clientMutationId: "unique-client-id"
  }
});
```

#### Typed Mutation Helpers

The library provides typed interfaces and pre-defined mutation strings for common operations:

```javascript
import { 
  ProductHuntAPI, 
  Configuration, 
  votePost, 
  followTopic, 
  VotePostRequest, 
  FollowTopicRequest 
} from "node-producthunt-api";

// Vote on a post
const votePostRequest: VotePostRequest = {
  query: votePost,
  variables: {
    postId: "POST_ID_HERE",
    clientMutationId: "unique-client-id"
  }
};

const { data } = await productHuntAPI.Mutation(votePostRequest);
console.log(data);

// Follow a topic
const followTopicRequest: FollowTopicRequest = {
  query: followTopic,
  variables: {
    topicId: "TOPIC_ID_HERE",
    clientMutationId: "unique-client-id"
  }
};

const { data } = await productHuntAPI.Mutation(followTopicRequest);
```

#### Available Mutation Strings

The library exports the following pre-defined mutation strings:

- `votePost` - Vote on a post
- `unvotePost` - Remove vote from a post
- `followTopic` - Follow a topic
- `unfollowTopic` - Unfollow a topic
- `followCollection` - Follow a collection
- `unfollowCollection` - Unfollow a collection
- `userFollow` - Follow a user
- `userFollowUndo` - Unfollow a user
- `voteComment` - Vote on a comment
- `unvoteComment` - Remove vote from a comment

#### Available Typed Interfaces

The library provides typed interfaces for common mutations:

- `VotePostRequest` / `VotePostVariables`
- `FollowTopicRequest` / `FollowTopicVariables`
- `FollowCollectionRequest` / `FollowCollectionVariables`
- `UserFollowRequest` / `UserFollowVariables`
- `VoteCommentRequest` / `VoteCommentVariables`

### Roadmap

- [x] Support Typescript typing
- [x] Support for Oauth token middleware
- [x] Add GetPosts query
- [x] Add GetTopics query
- [x] Add GetPost query
- [x] Support dev token
- [x] Add GetTopic query
- [x] Add GetCollection/s query
- [x] Add GetViewer/s query
- [x] Add GetUser/s query
- [ ] Add GetMakerGroup/s query
- [x] Add GetGoal/s query
- [x] Add GetComment/s query
- [x] Add mutation/s support
