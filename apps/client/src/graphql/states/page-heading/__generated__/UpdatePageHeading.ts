/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageInput } from "./../../../../../../../types/globalTypesGraphql";

// ====================================================
// GraphQL mutation operation: UpdatePageHeading
// ====================================================

export interface UpdatePageHeading_updatePageHeading {
  __typename: "Page";
  heading: string | null;
}

export interface UpdatePageHeading {
  updatePageHeading: UpdatePageHeading_updatePageHeading | null;
}

export interface UpdatePageHeadingVariables {
  input?: PageInput | null;
}
