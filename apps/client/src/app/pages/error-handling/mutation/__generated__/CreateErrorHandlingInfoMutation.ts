/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageInput } from "./../../../../../types/globalTypesGraphql";

// ====================================================
// GraphQL mutation operation: CreateErrorHandlingInfoMutation
// ====================================================

export interface CreateErrorHandlingInfoMutation_updatePage {
  __typename: "Page";
  heading: string | null;
}

export interface CreateErrorHandlingInfoMutation {
  updatePage: CreateErrorHandlingInfoMutation_updatePage | null;
}

export interface CreateErrorHandlingInfoMutationVariables {
  input: PageInput;
}
