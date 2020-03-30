/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageInput } from "./../../../../../../../../types/globalTypesGraphql";

// ====================================================
// GraphQL mutation operation: CreateHomeInfo
// ====================================================

export interface CreateHomeInfo_updatePage {
  __typename: "Page";
  heading: string;
}

export interface CreateHomeInfo {
  updatePage: CreateHomeInfo_updatePage | null;
}

export interface CreateHomeInfoVariables {
  input: PageInput;
}
