/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageInput } from "./../../../../../types/globalTypesGraphql";

// ====================================================
// GraphQL mutation operation: CreateHomeInfoMutation
// ====================================================

export interface CreateHomeInfoMutation_updatePage {
  __typename: "Page";
  heading: string | null;
}

export interface CreateHomeInfoMutation {
  updatePage: CreateHomeInfoMutation_updatePage | null;
}

export interface CreateHomeInfoMutationVariables {
  input: PageInput;
}
