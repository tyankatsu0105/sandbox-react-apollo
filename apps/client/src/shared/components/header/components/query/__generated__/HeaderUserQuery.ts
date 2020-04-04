/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HeaderUserQuery
// ====================================================

export interface HeaderUserQuery_viewer {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The HTTP URL for this user
   */
  url: any;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
}

export interface HeaderUserQuery {
  /**
   * The currently authenticated user.
   */
  viewer: HeaderUserQuery_viewer;
}
