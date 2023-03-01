// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    Comment: {
      id: "kjzl6hvfrbw6c9c9nqd3y40naqrc99b1nxn5302bs0xzk06knv4r667fw0vz20d",
      accountRelation: { type: "list" },
    },
    Person: {
      id: "kjzl6hvfrbw6c7dtog0fqvdllwdte27kd40qnj3s6m5rccku4dfpjt0w0dm3rkj",
      accountRelation: { type: "single" },
    },
  },
  objects: {
    Comment: {
      text: { type: "string", required: false },
      author: { type: "view", viewType: "documentAccount" },
      version: { type: "view", viewType: "documentVersion" },
    },
    Person: {
      lastName: { type: "string", required: false },
      firstName: { type: "string", required: false },
      displayName: { type: "string", required: true },
    },
  },
  enums: {},
  accountData: {
    commentList: { type: "connection", name: "Comment" },
    person: { type: "node", name: "Person" },
  },
};
