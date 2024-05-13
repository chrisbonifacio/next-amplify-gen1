/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource(
    $filter: ModelSubscriptionResourceFilterInput
    $tenantId: String
  ) {
    onCreateResource(filter: $filter, tenantId: $tenantId) {
      title
      tenantId
      actualHourlyRate
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource(
    $filter: ModelSubscriptionResourceFilterInput
    $tenantId: String
  ) {
    onUpdateResource(filter: $filter, tenantId: $tenantId) {
      title
      tenantId
      actualHourlyRate
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource(
    $filter: ModelSubscriptionResourceFilterInput
    $tenantId: String
  ) {
    onDeleteResource(filter: $filter, tenantId: $tenantId) {
      title
      tenantId
      actualHourlyRate
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
