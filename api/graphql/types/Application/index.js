export default `
  type Application {
    _id: String!
    user: User!
    project: Project!
    status: AllowedMessageStatus!
    messages: [Message!]!
  }

  type Query {
    application(_id: ID!): Application!
    applications: [Application!]!
  }

  type Mutation {
    createApplication(application: CreateApplicationInput): Application!
    updateApplication(_id: String!, application: UpdateApplicationInput!): Application!
    deleteApplication(_id: String!): Application!    
  }

  input CreateApplicationInput {
    user: ID!
    project: ID!
    status: AllowedMessageStatus!
  }
  
  input UpdateApplicationInput {
    status: AllowedMessageStatus!
  } 
  
   enum AllowedMessageStatus {
    Proposed
    Accepted
    Refused
  }
`;
