module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateGenerationVideo {
  count: Int!
}

type AggregateInformation {
  count: Int!
}

type AggregateVideo {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type GenerationVideo {
  id: ID!
  division: String
  program: String
  duration: String
  singer: String
  thumbnail: String
  title: String
  videoId: String
  ranking: Int
  publishedAt: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GenerationVideoConnection {
  pageInfo: PageInfo!
  edges: [GenerationVideoEdge]!
  aggregate: AggregateGenerationVideo!
}

input GenerationVideoCreateInput {
  id: ID
  division: String
  program: String
  duration: String
  singer: String
  thumbnail: String
  title: String
  videoId: String
  ranking: Int
  publishedAt: DateTime
}

type GenerationVideoEdge {
  node: GenerationVideo!
  cursor: String!
}

enum GenerationVideoOrderByInput {
  id_ASC
  id_DESC
  division_ASC
  division_DESC
  program_ASC
  program_DESC
  duration_ASC
  duration_DESC
  singer_ASC
  singer_DESC
  thumbnail_ASC
  thumbnail_DESC
  title_ASC
  title_DESC
  videoId_ASC
  videoId_DESC
  ranking_ASC
  ranking_DESC
  publishedAt_ASC
  publishedAt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GenerationVideoPreviousValues {
  id: ID!
  division: String
  program: String
  duration: String
  singer: String
  thumbnail: String
  title: String
  videoId: String
  ranking: Int
  publishedAt: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GenerationVideoSubscriptionPayload {
  mutation: MutationType!
  node: GenerationVideo
  updatedFields: [String!]
  previousValues: GenerationVideoPreviousValues
}

input GenerationVideoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GenerationVideoWhereInput
  AND: [GenerationVideoSubscriptionWhereInput!]
  OR: [GenerationVideoSubscriptionWhereInput!]
  NOT: [GenerationVideoSubscriptionWhereInput!]
}

input GenerationVideoUpdateInput {
  division: String
  program: String
  duration: String
  singer: String
  thumbnail: String
  title: String
  videoId: String
  ranking: Int
  publishedAt: DateTime
}

input GenerationVideoUpdateManyMutationInput {
  division: String
  program: String
  duration: String
  singer: String
  thumbnail: String
  title: String
  videoId: String
  ranking: Int
  publishedAt: DateTime
}

input GenerationVideoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  division: String
  division_not: String
  division_in: [String!]
  division_not_in: [String!]
  division_lt: String
  division_lte: String
  division_gt: String
  division_gte: String
  division_contains: String
  division_not_contains: String
  division_starts_with: String
  division_not_starts_with: String
  division_ends_with: String
  division_not_ends_with: String
  program: String
  program_not: String
  program_in: [String!]
  program_not_in: [String!]
  program_lt: String
  program_lte: String
  program_gt: String
  program_gte: String
  program_contains: String
  program_not_contains: String
  program_starts_with: String
  program_not_starts_with: String
  program_ends_with: String
  program_not_ends_with: String
  duration: String
  duration_not: String
  duration_in: [String!]
  duration_not_in: [String!]
  duration_lt: String
  duration_lte: String
  duration_gt: String
  duration_gte: String
  duration_contains: String
  duration_not_contains: String
  duration_starts_with: String
  duration_not_starts_with: String
  duration_ends_with: String
  duration_not_ends_with: String
  singer: String
  singer_not: String
  singer_in: [String!]
  singer_not_in: [String!]
  singer_lt: String
  singer_lte: String
  singer_gt: String
  singer_gte: String
  singer_contains: String
  singer_not_contains: String
  singer_starts_with: String
  singer_not_starts_with: String
  singer_ends_with: String
  singer_not_ends_with: String
  thumbnail: String
  thumbnail_not: String
  thumbnail_in: [String!]
  thumbnail_not_in: [String!]
  thumbnail_lt: String
  thumbnail_lte: String
  thumbnail_gt: String
  thumbnail_gte: String
  thumbnail_contains: String
  thumbnail_not_contains: String
  thumbnail_starts_with: String
  thumbnail_not_starts_with: String
  thumbnail_ends_with: String
  thumbnail_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  videoId: String
  videoId_not: String
  videoId_in: [String!]
  videoId_not_in: [String!]
  videoId_lt: String
  videoId_lte: String
  videoId_gt: String
  videoId_gte: String
  videoId_contains: String
  videoId_not_contains: String
  videoId_starts_with: String
  videoId_not_starts_with: String
  videoId_ends_with: String
  videoId_not_ends_with: String
  ranking: Int
  ranking_not: Int
  ranking_in: [Int!]
  ranking_not_in: [Int!]
  ranking_lt: Int
  ranking_lte: Int
  ranking_gt: Int
  ranking_gte: Int
  publishedAt: DateTime
  publishedAt_not: DateTime
  publishedAt_in: [DateTime!]
  publishedAt_not_in: [DateTime!]
  publishedAt_lt: DateTime
  publishedAt_lte: DateTime
  publishedAt_gt: DateTime
  publishedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [GenerationVideoWhereInput!]
  OR: [GenerationVideoWhereInput!]
  NOT: [GenerationVideoWhereInput!]
}

input GenerationVideoWhereUniqueInput {
  id: ID
}

type Information {
  id: ID!
}

type InformationConnection {
  pageInfo: PageInfo!
  edges: [InformationEdge]!
  aggregate: AggregateInformation!
}

input InformationCreateInput {
  id: ID
}

type InformationEdge {
  node: Information!
  cursor: String!
}

enum InformationOrderByInput {
  id_ASC
  id_DESC
}

type InformationPreviousValues {
  id: ID!
}

type InformationSubscriptionPayload {
  mutation: MutationType!
  node: Information
  updatedFields: [String!]
  previousValues: InformationPreviousValues
}

input InformationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InformationWhereInput
  AND: [InformationSubscriptionWhereInput!]
  OR: [InformationSubscriptionWhereInput!]
  NOT: [InformationSubscriptionWhereInput!]
}

input InformationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [InformationWhereInput!]
  OR: [InformationWhereInput!]
  NOT: [InformationWhereInput!]
}

input InformationWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createGenerationVideo(data: GenerationVideoCreateInput!): GenerationVideo!
  updateGenerationVideo(data: GenerationVideoUpdateInput!, where: GenerationVideoWhereUniqueInput!): GenerationVideo
  updateManyGenerationVideos(data: GenerationVideoUpdateManyMutationInput!, where: GenerationVideoWhereInput): BatchPayload!
  upsertGenerationVideo(where: GenerationVideoWhereUniqueInput!, create: GenerationVideoCreateInput!, update: GenerationVideoUpdateInput!): GenerationVideo!
  deleteGenerationVideo(where: GenerationVideoWhereUniqueInput!): GenerationVideo
  deleteManyGenerationVideos(where: GenerationVideoWhereInput): BatchPayload!
  createInformation(data: InformationCreateInput!): Information!
  deleteInformation(where: InformationWhereUniqueInput!): Information
  deleteManyInformations(where: InformationWhereInput): BatchPayload!
  createVideo(data: VideoCreateInput!): Video!
  updateVideo(data: VideoUpdateInput!, where: VideoWhereUniqueInput!): Video
  updateManyVideos(data: VideoUpdateManyMutationInput!, where: VideoWhereInput): BatchPayload!
  upsertVideo(where: VideoWhereUniqueInput!, create: VideoCreateInput!, update: VideoUpdateInput!): Video!
  deleteVideo(where: VideoWhereUniqueInput!): Video
  deleteManyVideos(where: VideoWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  generationVideo(where: GenerationVideoWhereUniqueInput!): GenerationVideo
  generationVideos(where: GenerationVideoWhereInput, orderBy: GenerationVideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GenerationVideo]!
  generationVideosConnection(where: GenerationVideoWhereInput, orderBy: GenerationVideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GenerationVideoConnection!
  information(where: InformationWhereUniqueInput!): Information
  informations(where: InformationWhereInput, orderBy: InformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Information]!
  informationsConnection(where: InformationWhereInput, orderBy: InformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InformationConnection!
  video(where: VideoWhereUniqueInput!): Video
  videos(where: VideoWhereInput, orderBy: VideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Video]!
  videosConnection(where: VideoWhereInput, orderBy: VideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VideoConnection!
  node(id: ID!): Node
}

type Subscription {
  generationVideo(where: GenerationVideoSubscriptionWhereInput): GenerationVideoSubscriptionPayload
  information(where: InformationSubscriptionWhereInput): InformationSubscriptionPayload
  video(where: VideoSubscriptionWhereInput): VideoSubscriptionPayload
}

type Video {
  id: ID!
  division: String
  program: String
  duration: String
  singer: String
  thumbnail: String
  title: String
  videoId: String
  publishedAt: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type VideoConnection {
  pageInfo: PageInfo!
  edges: [VideoEdge]!
  aggregate: AggregateVideo!
}

input VideoCreateInput {
  id: ID
  division: String
  program: String
  duration: String
  singer: String
  thumbnail: String
  title: String
  videoId: String
  publishedAt: DateTime
}

type VideoEdge {
  node: Video!
  cursor: String!
}

enum VideoOrderByInput {
  id_ASC
  id_DESC
  division_ASC
  division_DESC
  program_ASC
  program_DESC
  duration_ASC
  duration_DESC
  singer_ASC
  singer_DESC
  thumbnail_ASC
  thumbnail_DESC
  title_ASC
  title_DESC
  videoId_ASC
  videoId_DESC
  publishedAt_ASC
  publishedAt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VideoPreviousValues {
  id: ID!
  division: String
  program: String
  duration: String
  singer: String
  thumbnail: String
  title: String
  videoId: String
  publishedAt: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type VideoSubscriptionPayload {
  mutation: MutationType!
  node: Video
  updatedFields: [String!]
  previousValues: VideoPreviousValues
}

input VideoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VideoWhereInput
  AND: [VideoSubscriptionWhereInput!]
  OR: [VideoSubscriptionWhereInput!]
  NOT: [VideoSubscriptionWhereInput!]
}

input VideoUpdateInput {
  division: String
  program: String
  duration: String
  singer: String
  thumbnail: String
  title: String
  videoId: String
  publishedAt: DateTime
}

input VideoUpdateManyMutationInput {
  division: String
  program: String
  duration: String
  singer: String
  thumbnail: String
  title: String
  videoId: String
  publishedAt: DateTime
}

input VideoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  division: String
  division_not: String
  division_in: [String!]
  division_not_in: [String!]
  division_lt: String
  division_lte: String
  division_gt: String
  division_gte: String
  division_contains: String
  division_not_contains: String
  division_starts_with: String
  division_not_starts_with: String
  division_ends_with: String
  division_not_ends_with: String
  program: String
  program_not: String
  program_in: [String!]
  program_not_in: [String!]
  program_lt: String
  program_lte: String
  program_gt: String
  program_gte: String
  program_contains: String
  program_not_contains: String
  program_starts_with: String
  program_not_starts_with: String
  program_ends_with: String
  program_not_ends_with: String
  duration: String
  duration_not: String
  duration_in: [String!]
  duration_not_in: [String!]
  duration_lt: String
  duration_lte: String
  duration_gt: String
  duration_gte: String
  duration_contains: String
  duration_not_contains: String
  duration_starts_with: String
  duration_not_starts_with: String
  duration_ends_with: String
  duration_not_ends_with: String
  singer: String
  singer_not: String
  singer_in: [String!]
  singer_not_in: [String!]
  singer_lt: String
  singer_lte: String
  singer_gt: String
  singer_gte: String
  singer_contains: String
  singer_not_contains: String
  singer_starts_with: String
  singer_not_starts_with: String
  singer_ends_with: String
  singer_not_ends_with: String
  thumbnail: String
  thumbnail_not: String
  thumbnail_in: [String!]
  thumbnail_not_in: [String!]
  thumbnail_lt: String
  thumbnail_lte: String
  thumbnail_gt: String
  thumbnail_gte: String
  thumbnail_contains: String
  thumbnail_not_contains: String
  thumbnail_starts_with: String
  thumbnail_not_starts_with: String
  thumbnail_ends_with: String
  thumbnail_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  videoId: String
  videoId_not: String
  videoId_in: [String!]
  videoId_not_in: [String!]
  videoId_lt: String
  videoId_lte: String
  videoId_gt: String
  videoId_gte: String
  videoId_contains: String
  videoId_not_contains: String
  videoId_starts_with: String
  videoId_not_starts_with: String
  videoId_ends_with: String
  videoId_not_ends_with: String
  publishedAt: DateTime
  publishedAt_not: DateTime
  publishedAt_in: [DateTime!]
  publishedAt_not_in: [DateTime!]
  publishedAt_lt: DateTime
  publishedAt_lte: DateTime
  publishedAt_gt: DateTime
  publishedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [VideoWhereInput!]
  OR: [VideoWhereInput!]
  NOT: [VideoWhereInput!]
}

input VideoWhereUniqueInput {
  id: ID
}
`
      }
    