import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { fetchData } from '../graphqlFetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bytea: any;
  citext: any;
  date: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: authProviders */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: authRoles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};

/** User webauthn authenticators. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserAuthenticators = {
  __typename?: 'authUserAuthenticators';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  nickname?: Maybe<Scalars['String']>;
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_authenticators" */
export type AuthUserAuthenticators_Aggregate = {
  __typename?: 'authUserAuthenticators_aggregate';
  aggregate?: Maybe<AuthUserAuthenticators_Aggregate_Fields>;
  nodes: Array<AuthUserAuthenticators>;
};

/** aggregate fields of "auth.user_authenticators" */
export type AuthUserAuthenticators_Aggregate_Fields = {
  __typename?: 'authUserAuthenticators_aggregate_fields';
  avg?: Maybe<AuthUserAuthenticators_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserAuthenticators_Max_Fields>;
  min?: Maybe<AuthUserAuthenticators_Min_Fields>;
  stddev?: Maybe<AuthUserAuthenticators_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserAuthenticators_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserAuthenticators_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserAuthenticators_Sum_Fields>;
  var_pop?: Maybe<AuthUserAuthenticators_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserAuthenticators_Var_Samp_Fields>;
  variance?: Maybe<AuthUserAuthenticators_Variance_Fields>;
};


/** aggregate fields of "auth.user_authenticators" */
export type AuthUserAuthenticators_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserAuthenticators_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserAuthenticators_Max_Order_By>;
  min?: InputMaybe<AuthUserAuthenticators_Min_Order_By>;
  stddev?: InputMaybe<AuthUserAuthenticators_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserAuthenticators_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserAuthenticators_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserAuthenticators_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserAuthenticators_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserAuthenticators_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserAuthenticators_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_authenticators" */
export type AuthUserAuthenticators_Arr_Rel_Insert_Input = {
  data: Array<AuthUserAuthenticators_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserAuthenticators_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserAuthenticators_Avg_Fields = {
  __typename?: 'authUserAuthenticators_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_authenticators". All fields are combined with a logical 'AND'. */
export type AuthUserAuthenticators_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserAuthenticators_Bool_Exp>>;
  _not?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserAuthenticators_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_authenticators" */
export enum AuthUserAuthenticators_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserAuthenticatorsCredentialIdKey = 'user_authenticators_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserAuthenticatorsPkey = 'user_authenticators_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_authenticators" */
export type AuthUserAuthenticators_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_authenticators" */
export type AuthUserAuthenticators_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserAuthenticators_Max_Fields = {
  __typename?: 'authUserAuthenticators_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserAuthenticators_Min_Fields = {
  __typename?: 'authUserAuthenticators_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_authenticators" */
export type AuthUserAuthenticators_Mutation_Response = {
  __typename?: 'authUserAuthenticators_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserAuthenticators>;
};

/** on_conflict condition type for table "auth.user_authenticators" */
export type AuthUserAuthenticators_On_Conflict = {
  constraint: AuthUserAuthenticators_Constraint;
  update_columns?: Array<AuthUserAuthenticators_Update_Column>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_authenticators". */
export type AuthUserAuthenticators_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserAuthenticators */
export type AuthUserAuthenticators_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_authenticators" */
export enum AuthUserAuthenticators_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_authenticators" */
export type AuthUserAuthenticators_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserAuthenticators_Stddev_Fields = {
  __typename?: 'authUserAuthenticators_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserAuthenticators_Stddev_Pop_Fields = {
  __typename?: 'authUserAuthenticators_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserAuthenticators_Stddev_Samp_Fields = {
  __typename?: 'authUserAuthenticators_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type AuthUserAuthenticators_Sum_Fields = {
  __typename?: 'authUserAuthenticators_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_authenticators" */
export enum AuthUserAuthenticators_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserAuthenticators_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserAuthenticators_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserAuthenticators_Set_Input>;
  where: AuthUserAuthenticators_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserAuthenticators_Var_Pop_Fields = {
  __typename?: 'authUserAuthenticators_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserAuthenticators_Var_Samp_Fields = {
  __typename?: 'authUserAuthenticators_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserAuthenticators_Variance_Fields = {
  __typename?: 'authUserAuthenticators_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "club" */
export type Club = {
  __typename?: 'club';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  exercise_club_mns: Array<Exercise_Club_Mn>;
  /** An aggregate relationship */
  exercise_club_mns_aggregate: Exercise_Club_Mn_Aggregate;
  id: Scalars['String'];
  name: Scalars['String'];
  owner_id: Scalars['uuid'];
  owner_id_bak: Scalars['String'];
  /** An array relationship */
  payments: Array<Payment>;
  /** An aggregate relationship */
  payments_aggregate: Payment_Aggregate;
  sport: Enum_Sport_Enum;
  /** An object relationship */
  sport_enum: Enum_Sport;
  /** An array relationship */
  teams: Array<Team>;
  /** An aggregate relationship */
  teams_aggregate: Team_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users_Old;
  /** An object relationship */
  userByOwnerId: Users;
  /** An array relationship */
  user_permissions: Array<User_Permission>;
  /** An aggregate relationship */
  user_permissions_aggregate: User_Permission_Aggregate;
};


/** columns and relationships of "club" */
export type ClubExercise_Club_MnsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Club_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Club_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
};


/** columns and relationships of "club" */
export type ClubExercise_Club_Mns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Club_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Club_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
};


/** columns and relationships of "club" */
export type ClubPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};


/** columns and relationships of "club" */
export type ClubPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};


/** columns and relationships of "club" */
export type ClubTeamsArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** columns and relationships of "club" */
export type ClubTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** columns and relationships of "club" */
export type ClubUser_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


/** columns and relationships of "club" */
export type ClubUser_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};

/** aggregated selection of "club" */
export type Club_Aggregate = {
  __typename?: 'club_aggregate';
  aggregate?: Maybe<Club_Aggregate_Fields>;
  nodes: Array<Club>;
};

/** aggregate fields of "club" */
export type Club_Aggregate_Fields = {
  __typename?: 'club_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Club_Max_Fields>;
  min?: Maybe<Club_Min_Fields>;
};


/** aggregate fields of "club" */
export type Club_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Club_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "club" */
export type Club_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Club_Max_Order_By>;
  min?: InputMaybe<Club_Min_Order_By>;
};

/** input type for inserting array relation for remote table "club" */
export type Club_Arr_Rel_Insert_Input = {
  data: Array<Club_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Club_On_Conflict>;
};

/** Boolean expression to filter rows from the table "club". All fields are combined with a logical 'AND'. */
export type Club_Bool_Exp = {
  _and?: InputMaybe<Array<Club_Bool_Exp>>;
  _not?: InputMaybe<Club_Bool_Exp>;
  _or?: InputMaybe<Array<Club_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exercise_club_mns?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  owner_id_bak?: InputMaybe<String_Comparison_Exp>;
  payments?: InputMaybe<Payment_Bool_Exp>;
  sport?: InputMaybe<Enum_Sport_Enum_Comparison_Exp>;
  sport_enum?: InputMaybe<Enum_Sport_Bool_Exp>;
  teams?: InputMaybe<Team_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Old_Bool_Exp>;
  userByOwnerId?: InputMaybe<Users_Bool_Exp>;
  user_permissions?: InputMaybe<User_Permission_Bool_Exp>;
};

/** unique or primary key constraints on table "club" */
export enum Club_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClubPkey = 'club_pkey'
}

/** input type for inserting data into table "club" */
export type Club_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exercise_club_mns?: InputMaybe<Exercise_Club_Mn_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  owner_id_bak?: InputMaybe<Scalars['String']>;
  payments?: InputMaybe<Payment_Arr_Rel_Insert_Input>;
  sport?: InputMaybe<Enum_Sport_Enum>;
  sport_enum?: InputMaybe<Enum_Sport_Obj_Rel_Insert_Input>;
  teams?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Old_Obj_Rel_Insert_Input>;
  userByOwnerId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_permissions?: InputMaybe<User_Permission_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Club_Max_Fields = {
  __typename?: 'club_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  owner_id_bak?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "club" */
export type Club_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  owner_id_bak?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Club_Min_Fields = {
  __typename?: 'club_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  owner_id_bak?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "club" */
export type Club_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  owner_id_bak?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "club" */
export type Club_Mutation_Response = {
  __typename?: 'club_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Club>;
};

/** input type for inserting object relation for remote table "club" */
export type Club_Obj_Rel_Insert_Input = {
  data: Club_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Club_On_Conflict>;
};

/** on_conflict condition type for table "club" */
export type Club_On_Conflict = {
  constraint: Club_Constraint;
  update_columns?: Array<Club_Update_Column>;
  where?: InputMaybe<Club_Bool_Exp>;
};

/** Ordering options when selecting data from "club". */
export type Club_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exercise_club_mns_aggregate?: InputMaybe<Exercise_Club_Mn_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  owner_id_bak?: InputMaybe<Order_By>;
  payments_aggregate?: InputMaybe<Payment_Aggregate_Order_By>;
  sport?: InputMaybe<Order_By>;
  sport_enum?: InputMaybe<Enum_Sport_Order_By>;
  teams_aggregate?: InputMaybe<Team_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Old_Order_By>;
  userByOwnerId?: InputMaybe<Users_Order_By>;
  user_permissions_aggregate?: InputMaybe<User_Permission_Aggregate_Order_By>;
};

/** primary key columns input for table: club */
export type Club_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "club" */
export enum Club_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  OwnerIdBak = 'owner_id_bak',
  /** column name */
  Sport = 'sport',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "club" */
export type Club_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  owner_id_bak?: InputMaybe<Scalars['String']>;
  sport?: InputMaybe<Enum_Sport_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "club" */
export enum Club_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  OwnerIdBak = 'owner_id_bak',
  /** column name */
  Sport = 'sport',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Club_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Club_Set_Input>;
  where: Club_Bool_Exp;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "editor_type" */
export type Editor_Type = {
  __typename?: 'editor_type';
  name: Scalars['String'];
};

/** aggregated selection of "editor_type" */
export type Editor_Type_Aggregate = {
  __typename?: 'editor_type_aggregate';
  aggregate?: Maybe<Editor_Type_Aggregate_Fields>;
  nodes: Array<Editor_Type>;
};

/** aggregate fields of "editor_type" */
export type Editor_Type_Aggregate_Fields = {
  __typename?: 'editor_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Editor_Type_Max_Fields>;
  min?: Maybe<Editor_Type_Min_Fields>;
};


/** aggregate fields of "editor_type" */
export type Editor_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Editor_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "editor_type". All fields are combined with a logical 'AND'. */
export type Editor_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Editor_Type_Bool_Exp>>;
  _not?: InputMaybe<Editor_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Editor_Type_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "editor_type" */
export enum Editor_Type_Constraint {
  /** unique or primary key constraint on columns "name" */
  ExerciseEditorTypePkey = 'exercise_editor_type_pkey'
}

/** input type for inserting data into table "editor_type" */
export type Editor_Type_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Editor_Type_Max_Fields = {
  __typename?: 'editor_type_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Editor_Type_Min_Fields = {
  __typename?: 'editor_type_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "editor_type" */
export type Editor_Type_Mutation_Response = {
  __typename?: 'editor_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Editor_Type>;
};

/** on_conflict condition type for table "editor_type" */
export type Editor_Type_On_Conflict = {
  constraint: Editor_Type_Constraint;
  update_columns?: Array<Editor_Type_Update_Column>;
  where?: InputMaybe<Editor_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "editor_type". */
export type Editor_Type_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: editor_type */
export type Editor_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "editor_type" */
export enum Editor_Type_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "editor_type" */
export type Editor_Type_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "editor_type" */
export enum Editor_Type_Update_Column {
  /** column name */
  Name = 'name'
}

export type Editor_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Editor_Type_Set_Input>;
  where: Editor_Type_Bool_Exp;
};

/** columns and relationships of "enum_exercise_categories" */
export type Enum_Exercise_Categories = {
  __typename?: 'enum_exercise_categories';
  /** An array relationship */
  exercise_taxonomies: Array<Exercise_Taxonomy>;
  /** An aggregate relationship */
  exercise_taxonomies_aggregate: Exercise_Taxonomy_Aggregate;
  name: Scalars['String'];
};


/** columns and relationships of "enum_exercise_categories" */
export type Enum_Exercise_CategoriesExercise_TaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
};


/** columns and relationships of "enum_exercise_categories" */
export type Enum_Exercise_CategoriesExercise_Taxonomies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
};

/** aggregated selection of "enum_exercise_categories" */
export type Enum_Exercise_Categories_Aggregate = {
  __typename?: 'enum_exercise_categories_aggregate';
  aggregate?: Maybe<Enum_Exercise_Categories_Aggregate_Fields>;
  nodes: Array<Enum_Exercise_Categories>;
};

/** aggregate fields of "enum_exercise_categories" */
export type Enum_Exercise_Categories_Aggregate_Fields = {
  __typename?: 'enum_exercise_categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Enum_Exercise_Categories_Max_Fields>;
  min?: Maybe<Enum_Exercise_Categories_Min_Fields>;
};


/** aggregate fields of "enum_exercise_categories" */
export type Enum_Exercise_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Enum_Exercise_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "enum_exercise_categories". All fields are combined with a logical 'AND'. */
export type Enum_Exercise_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Enum_Exercise_Categories_Bool_Exp>>;
  _not?: InputMaybe<Enum_Exercise_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Enum_Exercise_Categories_Bool_Exp>>;
  exercise_taxonomies?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "enum_exercise_categories" */
export enum Enum_Exercise_Categories_Constraint {
  /** unique or primary key constraint on columns "name" */
  EnumExerciseCategoriesPkey = 'enum_exercise_categories_pkey'
}

export enum Enum_Exercise_Categories_Enum {
  Age = 'age',
  ChipLabels = 'chip_labels',
  Focus = 'focus',
  Goalkeeper = 'goalkeeper',
  GroupSize = 'group_size',
  More = 'more',
  Phase = 'phase',
  Setter = 'setter',
  Tactics = 'tactics'
}

/** Boolean expression to compare columns of type "enum_exercise_categories_enum". All fields are combined with logical 'AND'. */
export type Enum_Exercise_Categories_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Enum_Exercise_Categories_Enum>;
  _in?: InputMaybe<Array<Enum_Exercise_Categories_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Enum_Exercise_Categories_Enum>;
  _nin?: InputMaybe<Array<Enum_Exercise_Categories_Enum>>;
};

/** input type for inserting data into table "enum_exercise_categories" */
export type Enum_Exercise_Categories_Insert_Input = {
  exercise_taxonomies?: InputMaybe<Exercise_Taxonomy_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Enum_Exercise_Categories_Max_Fields = {
  __typename?: 'enum_exercise_categories_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Enum_Exercise_Categories_Min_Fields = {
  __typename?: 'enum_exercise_categories_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "enum_exercise_categories" */
export type Enum_Exercise_Categories_Mutation_Response = {
  __typename?: 'enum_exercise_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Enum_Exercise_Categories>;
};

/** input type for inserting object relation for remote table "enum_exercise_categories" */
export type Enum_Exercise_Categories_Obj_Rel_Insert_Input = {
  data: Enum_Exercise_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Enum_Exercise_Categories_On_Conflict>;
};

/** on_conflict condition type for table "enum_exercise_categories" */
export type Enum_Exercise_Categories_On_Conflict = {
  constraint: Enum_Exercise_Categories_Constraint;
  update_columns?: Array<Enum_Exercise_Categories_Update_Column>;
  where?: InputMaybe<Enum_Exercise_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "enum_exercise_categories". */
export type Enum_Exercise_Categories_Order_By = {
  exercise_taxonomies_aggregate?: InputMaybe<Exercise_Taxonomy_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: enum_exercise_categories */
export type Enum_Exercise_Categories_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "enum_exercise_categories" */
export enum Enum_Exercise_Categories_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "enum_exercise_categories" */
export type Enum_Exercise_Categories_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "enum_exercise_categories" */
export enum Enum_Exercise_Categories_Update_Column {
  /** column name */
  Name = 'name'
}

export type Enum_Exercise_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Enum_Exercise_Categories_Set_Input>;
  where: Enum_Exercise_Categories_Bool_Exp;
};

/** columns and relationships of "enum_languages" */
export type Enum_Languages = {
  __typename?: 'enum_languages';
  name: Scalars['String'];
};

/** aggregated selection of "enum_languages" */
export type Enum_Languages_Aggregate = {
  __typename?: 'enum_languages_aggregate';
  aggregate?: Maybe<Enum_Languages_Aggregate_Fields>;
  nodes: Array<Enum_Languages>;
};

/** aggregate fields of "enum_languages" */
export type Enum_Languages_Aggregate_Fields = {
  __typename?: 'enum_languages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Enum_Languages_Max_Fields>;
  min?: Maybe<Enum_Languages_Min_Fields>;
};


/** aggregate fields of "enum_languages" */
export type Enum_Languages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Enum_Languages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "enum_languages". All fields are combined with a logical 'AND'. */
export type Enum_Languages_Bool_Exp = {
  _and?: InputMaybe<Array<Enum_Languages_Bool_Exp>>;
  _not?: InputMaybe<Enum_Languages_Bool_Exp>;
  _or?: InputMaybe<Array<Enum_Languages_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "enum_languages" */
export enum Enum_Languages_Constraint {
  /** unique or primary key constraint on columns "name" */
  EnumLanguagesPkey = 'enum_languages_pkey'
}

/** input type for inserting data into table "enum_languages" */
export type Enum_Languages_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Enum_Languages_Max_Fields = {
  __typename?: 'enum_languages_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Enum_Languages_Min_Fields = {
  __typename?: 'enum_languages_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "enum_languages" */
export type Enum_Languages_Mutation_Response = {
  __typename?: 'enum_languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Enum_Languages>;
};

/** on_conflict condition type for table "enum_languages" */
export type Enum_Languages_On_Conflict = {
  constraint: Enum_Languages_Constraint;
  update_columns?: Array<Enum_Languages_Update_Column>;
  where?: InputMaybe<Enum_Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "enum_languages". */
export type Enum_Languages_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: enum_languages */
export type Enum_Languages_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "enum_languages" */
export enum Enum_Languages_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "enum_languages" */
export type Enum_Languages_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "enum_languages" */
export enum Enum_Languages_Update_Column {
  /** column name */
  Name = 'name'
}

export type Enum_Languages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Enum_Languages_Set_Input>;
  where: Enum_Languages_Bool_Exp;
};

/** columns and relationships of "enum_sport" */
export type Enum_Sport = {
  __typename?: 'enum_sport';
  /** An array relationship */
  clubs: Array<Club>;
  /** An aggregate relationship */
  clubs_aggregate: Club_Aggregate;
  /** An array relationship */
  exercise_taxonomies: Array<Exercise_Taxonomy>;
  /** An aggregate relationship */
  exercise_taxonomies_aggregate: Exercise_Taxonomy_Aggregate;
  name: Scalars['String'];
};


/** columns and relationships of "enum_sport" */
export type Enum_SportClubsArgs = {
  distinct_on?: InputMaybe<Array<Club_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Order_By>>;
  where?: InputMaybe<Club_Bool_Exp>;
};


/** columns and relationships of "enum_sport" */
export type Enum_SportClubs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Order_By>>;
  where?: InputMaybe<Club_Bool_Exp>;
};


/** columns and relationships of "enum_sport" */
export type Enum_SportExercise_TaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
};


/** columns and relationships of "enum_sport" */
export type Enum_SportExercise_Taxonomies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
};

/** aggregated selection of "enum_sport" */
export type Enum_Sport_Aggregate = {
  __typename?: 'enum_sport_aggregate';
  aggregate?: Maybe<Enum_Sport_Aggregate_Fields>;
  nodes: Array<Enum_Sport>;
};

/** aggregate fields of "enum_sport" */
export type Enum_Sport_Aggregate_Fields = {
  __typename?: 'enum_sport_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Enum_Sport_Max_Fields>;
  min?: Maybe<Enum_Sport_Min_Fields>;
};


/** aggregate fields of "enum_sport" */
export type Enum_Sport_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Enum_Sport_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "enum_sport". All fields are combined with a logical 'AND'. */
export type Enum_Sport_Bool_Exp = {
  _and?: InputMaybe<Array<Enum_Sport_Bool_Exp>>;
  _not?: InputMaybe<Enum_Sport_Bool_Exp>;
  _or?: InputMaybe<Array<Enum_Sport_Bool_Exp>>;
  clubs?: InputMaybe<Club_Bool_Exp>;
  exercise_taxonomies?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "enum_sport" */
export enum Enum_Sport_Constraint {
  /** unique or primary key constraint on columns "name" */
  SportPkey = 'sport_pkey'
}

export enum Enum_Sport_Enum {
  FieldHockey = 'FIELD_HOCKEY',
  Handball = 'HANDBALL',
  Soccer = 'SOCCER',
  Volleyball = 'VOLLEYBALL'
}

/** Boolean expression to compare columns of type "enum_sport_enum". All fields are combined with logical 'AND'. */
export type Enum_Sport_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Enum_Sport_Enum>;
  _in?: InputMaybe<Array<Enum_Sport_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Enum_Sport_Enum>;
  _nin?: InputMaybe<Array<Enum_Sport_Enum>>;
};

/** input type for inserting data into table "enum_sport" */
export type Enum_Sport_Insert_Input = {
  clubs?: InputMaybe<Club_Arr_Rel_Insert_Input>;
  exercise_taxonomies?: InputMaybe<Exercise_Taxonomy_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Enum_Sport_Max_Fields = {
  __typename?: 'enum_sport_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Enum_Sport_Min_Fields = {
  __typename?: 'enum_sport_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "enum_sport" */
export type Enum_Sport_Mutation_Response = {
  __typename?: 'enum_sport_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Enum_Sport>;
};

/** input type for inserting object relation for remote table "enum_sport" */
export type Enum_Sport_Obj_Rel_Insert_Input = {
  data: Enum_Sport_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Enum_Sport_On_Conflict>;
};

/** on_conflict condition type for table "enum_sport" */
export type Enum_Sport_On_Conflict = {
  constraint: Enum_Sport_Constraint;
  update_columns?: Array<Enum_Sport_Update_Column>;
  where?: InputMaybe<Enum_Sport_Bool_Exp>;
};

/** Ordering options when selecting data from "enum_sport". */
export type Enum_Sport_Order_By = {
  clubs_aggregate?: InputMaybe<Club_Aggregate_Order_By>;
  exercise_taxonomies_aggregate?: InputMaybe<Exercise_Taxonomy_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: enum_sport */
export type Enum_Sport_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "enum_sport" */
export enum Enum_Sport_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "enum_sport" */
export type Enum_Sport_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "enum_sport" */
export enum Enum_Sport_Update_Column {
  /** column name */
  Name = 'name'
}

export type Enum_Sport_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Enum_Sport_Set_Input>;
  where: Enum_Sport_Bool_Exp;
};

/** columns and relationships of "exercise" */
export type Exercise = {
  __typename?: 'exercise';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  exercise_club_mns: Array<Exercise_Club_Mn>;
  /** An aggregate relationship */
  exercise_club_mns_aggregate: Exercise_Club_Mn_Aggregate;
  /** An array relationship */
  exercise_content_media_mns: Array<Exercise_Content_Media_Mn>;
  /** An aggregate relationship */
  exercise_content_media_mns_aggregate: Exercise_Content_Media_Mn_Aggregate;
  /** An array relationship */
  exercise_taxonomy_mns: Array<Exercise_Taxonomy_Mn>;
  /** An aggregate relationship */
  exercise_taxonomy_mns_aggregate: Exercise_Taxonomy_Mn_Aggregate;
  fitness_stars: Scalars['Int'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  owner_id: Scalars['uuid'];
  owner_id_bak?: Maybe<Scalars['String']>;
  tactics_stars: Scalars['Int'];
  technique_stars: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<Users_Old>;
  /** An object relationship */
  userByOwnerId: Users;
};


/** columns and relationships of "exercise" */
export type ExerciseExercise_Club_MnsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Club_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Club_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
};


/** columns and relationships of "exercise" */
export type ExerciseExercise_Club_Mns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Club_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Club_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
};


/** columns and relationships of "exercise" */
export type ExerciseExercise_Content_Media_MnsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
};


/** columns and relationships of "exercise" */
export type ExerciseExercise_Content_Media_Mns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
};


/** columns and relationships of "exercise" */
export type ExerciseExercise_Taxonomy_MnsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
};


/** columns and relationships of "exercise" */
export type ExerciseExercise_Taxonomy_Mns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
};

/** aggregated selection of "exercise" */
export type Exercise_Aggregate = {
  __typename?: 'exercise_aggregate';
  aggregate?: Maybe<Exercise_Aggregate_Fields>;
  nodes: Array<Exercise>;
};

/** aggregate fields of "exercise" */
export type Exercise_Aggregate_Fields = {
  __typename?: 'exercise_aggregate_fields';
  avg?: Maybe<Exercise_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Exercise_Max_Fields>;
  min?: Maybe<Exercise_Min_Fields>;
  stddev?: Maybe<Exercise_Stddev_Fields>;
  stddev_pop?: Maybe<Exercise_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exercise_Stddev_Samp_Fields>;
  sum?: Maybe<Exercise_Sum_Fields>;
  var_pop?: Maybe<Exercise_Var_Pop_Fields>;
  var_samp?: Maybe<Exercise_Var_Samp_Fields>;
  variance?: Maybe<Exercise_Variance_Fields>;
};


/** aggregate fields of "exercise" */
export type Exercise_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercise_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exercise" */
export type Exercise_Aggregate_Order_By = {
  avg?: InputMaybe<Exercise_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exercise_Max_Order_By>;
  min?: InputMaybe<Exercise_Min_Order_By>;
  stddev?: InputMaybe<Exercise_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Exercise_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Exercise_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Exercise_Sum_Order_By>;
  var_pop?: InputMaybe<Exercise_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Exercise_Var_Samp_Order_By>;
  variance?: InputMaybe<Exercise_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "exercise" */
export type Exercise_Arr_Rel_Insert_Input = {
  data: Array<Exercise_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_On_Conflict>;
};

/** aggregate avg on columns */
export type Exercise_Avg_Fields = {
  __typename?: 'exercise_avg_fields';
  fitness_stars?: Maybe<Scalars['Float']>;
  tactics_stars?: Maybe<Scalars['Float']>;
  technique_stars?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "exercise" */
export type Exercise_Avg_Order_By = {
  fitness_stars?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exercise". All fields are combined with a logical 'AND'. */
export type Exercise_Bool_Exp = {
  _and?: InputMaybe<Array<Exercise_Bool_Exp>>;
  _not?: InputMaybe<Exercise_Bool_Exp>;
  _or?: InputMaybe<Array<Exercise_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exercise_club_mns?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
  exercise_content_media_mns?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
  exercise_taxonomy_mns?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
  fitness_stars?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  owner_id_bak?: InputMaybe<String_Comparison_Exp>;
  tactics_stars?: InputMaybe<Int_Comparison_Exp>;
  technique_stars?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Old_Bool_Exp>;
  userByOwnerId?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "exercise_club_mn" */
export type Exercise_Club_Mn = {
  __typename?: 'exercise_club_mn';
  /** An object relationship */
  club: Club;
  club_id: Scalars['String'];
  /** An object relationship */
  exercise: Exercise;
  exercise_id: Scalars['String'];
};

/** aggregated selection of "exercise_club_mn" */
export type Exercise_Club_Mn_Aggregate = {
  __typename?: 'exercise_club_mn_aggregate';
  aggregate?: Maybe<Exercise_Club_Mn_Aggregate_Fields>;
  nodes: Array<Exercise_Club_Mn>;
};

/** aggregate fields of "exercise_club_mn" */
export type Exercise_Club_Mn_Aggregate_Fields = {
  __typename?: 'exercise_club_mn_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Exercise_Club_Mn_Max_Fields>;
  min?: Maybe<Exercise_Club_Mn_Min_Fields>;
};


/** aggregate fields of "exercise_club_mn" */
export type Exercise_Club_Mn_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercise_Club_Mn_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exercise_club_mn" */
export type Exercise_Club_Mn_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exercise_Club_Mn_Max_Order_By>;
  min?: InputMaybe<Exercise_Club_Mn_Min_Order_By>;
};

/** input type for inserting array relation for remote table "exercise_club_mn" */
export type Exercise_Club_Mn_Arr_Rel_Insert_Input = {
  data: Array<Exercise_Club_Mn_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Club_Mn_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exercise_club_mn". All fields are combined with a logical 'AND'. */
export type Exercise_Club_Mn_Bool_Exp = {
  _and?: InputMaybe<Array<Exercise_Club_Mn_Bool_Exp>>;
  _not?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
  _or?: InputMaybe<Array<Exercise_Club_Mn_Bool_Exp>>;
  club?: InputMaybe<Club_Bool_Exp>;
  club_id?: InputMaybe<String_Comparison_Exp>;
  exercise?: InputMaybe<Exercise_Bool_Exp>;
  exercise_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercise_club_mn" */
export enum Exercise_Club_Mn_Constraint {
  /** unique or primary key constraint on columns "exercise_id", "club_id" */
  ExerciseClubMnPkey = 'exercise_club_mn_pkey'
}

/** input type for inserting data into table "exercise_club_mn" */
export type Exercise_Club_Mn_Insert_Input = {
  club?: InputMaybe<Club_Obj_Rel_Insert_Input>;
  club_id?: InputMaybe<Scalars['String']>;
  exercise?: InputMaybe<Exercise_Obj_Rel_Insert_Input>;
  exercise_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Exercise_Club_Mn_Max_Fields = {
  __typename?: 'exercise_club_mn_max_fields';
  club_id?: Maybe<Scalars['String']>;
  exercise_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "exercise_club_mn" */
export type Exercise_Club_Mn_Max_Order_By = {
  club_id?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exercise_Club_Mn_Min_Fields = {
  __typename?: 'exercise_club_mn_min_fields';
  club_id?: Maybe<Scalars['String']>;
  exercise_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "exercise_club_mn" */
export type Exercise_Club_Mn_Min_Order_By = {
  club_id?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exercise_club_mn" */
export type Exercise_Club_Mn_Mutation_Response = {
  __typename?: 'exercise_club_mn_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercise_Club_Mn>;
};

/** on_conflict condition type for table "exercise_club_mn" */
export type Exercise_Club_Mn_On_Conflict = {
  constraint: Exercise_Club_Mn_Constraint;
  update_columns?: Array<Exercise_Club_Mn_Update_Column>;
  where?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
};

/** Ordering options when selecting data from "exercise_club_mn". */
export type Exercise_Club_Mn_Order_By = {
  club?: InputMaybe<Club_Order_By>;
  club_id?: InputMaybe<Order_By>;
  exercise?: InputMaybe<Exercise_Order_By>;
  exercise_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exercise_club_mn */
export type Exercise_Club_Mn_Pk_Columns_Input = {
  club_id: Scalars['String'];
  exercise_id: Scalars['String'];
};

/** select columns of table "exercise_club_mn" */
export enum Exercise_Club_Mn_Select_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  ExerciseId = 'exercise_id'
}

/** input type for updating data in table "exercise_club_mn" */
export type Exercise_Club_Mn_Set_Input = {
  club_id?: InputMaybe<Scalars['String']>;
  exercise_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "exercise_club_mn" */
export enum Exercise_Club_Mn_Update_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  ExerciseId = 'exercise_id'
}

export type Exercise_Club_Mn_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercise_Club_Mn_Set_Input>;
  where: Exercise_Club_Mn_Bool_Exp;
};

/** unique or primary key constraints on table "exercise" */
export enum Exercise_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExercisePkey = 'exercise_pkey'
}

/** columns and relationships of "exercise_content_media" */
export type Exercise_Content_Media = {
  __typename?: 'exercise_content_media';
  created_at?: Maybe<Scalars['timestamptz']>;
  editor_animation_id?: Maybe<Scalars['String']>;
  editor_image_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  exercise_content_media_editor?: Maybe<Exercise_Content_Media_Editor>;
  /** An array relationship */
  exercise_content_media_mns: Array<Exercise_Content_Media_Mn>;
  /** An aggregate relationship */
  exercise_content_media_mns_aggregate: Exercise_Content_Media_Mn_Aggregate;
  /** An object relationship */
  exercise_content_media_type: Exercise_Content_Media_Type;
  /** An object relationship */
  file?: Maybe<Files>;
  file_id?: Maybe<Scalars['uuid']>;
  id: Scalars['String'];
  is_media_right?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  s3_file?: Maybe<S3_File>;
  s3_file_id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  type: Exercise_Content_Media_Type_Enum;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "exercise_content_media" */
export type Exercise_Content_MediaExercise_Content_Media_MnsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
};


/** columns and relationships of "exercise_content_media" */
export type Exercise_Content_MediaExercise_Content_Media_Mns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
};

/** aggregated selection of "exercise_content_media" */
export type Exercise_Content_Media_Aggregate = {
  __typename?: 'exercise_content_media_aggregate';
  aggregate?: Maybe<Exercise_Content_Media_Aggregate_Fields>;
  nodes: Array<Exercise_Content_Media>;
};

/** aggregate fields of "exercise_content_media" */
export type Exercise_Content_Media_Aggregate_Fields = {
  __typename?: 'exercise_content_media_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Exercise_Content_Media_Max_Fields>;
  min?: Maybe<Exercise_Content_Media_Min_Fields>;
};


/** aggregate fields of "exercise_content_media" */
export type Exercise_Content_Media_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exercise_content_media" */
export type Exercise_Content_Media_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exercise_Content_Media_Max_Order_By>;
  min?: InputMaybe<Exercise_Content_Media_Min_Order_By>;
};

/** input type for inserting array relation for remote table "exercise_content_media" */
export type Exercise_Content_Media_Arr_Rel_Insert_Input = {
  data: Array<Exercise_Content_Media_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Content_Media_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exercise_content_media". All fields are combined with a logical 'AND'. */
export type Exercise_Content_Media_Bool_Exp = {
  _and?: InputMaybe<Array<Exercise_Content_Media_Bool_Exp>>;
  _not?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
  _or?: InputMaybe<Array<Exercise_Content_Media_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  editor_animation_id?: InputMaybe<String_Comparison_Exp>;
  editor_image_id?: InputMaybe<String_Comparison_Exp>;
  exercise_content_media_editor?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
  exercise_content_media_mns?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
  exercise_content_media_type?: InputMaybe<Exercise_Content_Media_Type_Bool_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  file_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_media_right?: InputMaybe<Boolean_Comparison_Exp>;
  s3_file?: InputMaybe<S3_File_Bool_Exp>;
  s3_file_id?: InputMaybe<String_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Exercise_Content_Media_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  video_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercise_content_media" */
export enum Exercise_Content_Media_Constraint {
  /** unique or primary key constraint on columns "editor_animation_id" */
  ExerciseContentMediaEditorAnimationIdKey = 'exercise_content_media_editor_animation_id_key',
  /** unique or primary key constraint on columns "editor_image_id" */
  ExerciseContentMediaEditorImageIdKey = 'exercise_content_media_editor_image_id_key',
  /** unique or primary key constraint on columns "id" */
  ExerciseContentMediaPkey = 'exercise_content_media_pkey'
}

/** columns and relationships of "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor = {
  __typename?: 'exercise_content_media_editor';
  content_media_id: Scalars['String'];
  editor_data?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  exercise_content_media?: Maybe<Exercise_Content_Media>;
  /** An object relationship */
  file_image?: Maybe<Files>;
  /** An object relationship */
  file_video?: Maybe<Files>;
  id: Scalars['String'];
  image_file_id?: Maybe<Scalars['uuid']>;
  image_s3_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  s3_file_image?: Maybe<S3_File>;
  /** An object relationship */
  s3_file_video?: Maybe<S3_File>;
  video_file_id?: Maybe<Scalars['uuid']>;
  video_s3_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "exercise_content_media_editor" */
export type Exercise_Content_Media_EditorEditor_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Aggregate = {
  __typename?: 'exercise_content_media_editor_aggregate';
  aggregate?: Maybe<Exercise_Content_Media_Editor_Aggregate_Fields>;
  nodes: Array<Exercise_Content_Media_Editor>;
};

/** aggregate fields of "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Aggregate_Fields = {
  __typename?: 'exercise_content_media_editor_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Exercise_Content_Media_Editor_Max_Fields>;
  min?: Maybe<Exercise_Content_Media_Editor_Min_Fields>;
};


/** aggregate fields of "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exercise_Content_Media_Editor_Max_Order_By>;
  min?: InputMaybe<Exercise_Content_Media_Editor_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Exercise_Content_Media_Editor_Append_Input = {
  editor_data?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Arr_Rel_Insert_Input = {
  data: Array<Exercise_Content_Media_Editor_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Content_Media_Editor_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exercise_content_media_editor". All fields are combined with a logical 'AND'. */
export type Exercise_Content_Media_Editor_Bool_Exp = {
  _and?: InputMaybe<Array<Exercise_Content_Media_Editor_Bool_Exp>>;
  _not?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
  _or?: InputMaybe<Array<Exercise_Content_Media_Editor_Bool_Exp>>;
  content_media_id?: InputMaybe<String_Comparison_Exp>;
  editor_data?: InputMaybe<Jsonb_Comparison_Exp>;
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
  file_image?: InputMaybe<Files_Bool_Exp>;
  file_video?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image_file_id?: InputMaybe<Uuid_Comparison_Exp>;
  image_s3_id?: InputMaybe<String_Comparison_Exp>;
  s3_file_image?: InputMaybe<S3_File_Bool_Exp>;
  s3_file_video?: InputMaybe<S3_File_Bool_Exp>;
  video_file_id?: InputMaybe<Uuid_Comparison_Exp>;
  video_s3_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercise_content_media_editor" */
export enum Exercise_Content_Media_Editor_Constraint {
  /** unique or primary key constraint on columns "content_media_id" */
  ExerciseContentMediaEditorAnimationContentMediaIdKey = 'exercise_content_media_editor_animation_content_media_id_key',
  /** unique or primary key constraint on columns "id" */
  ExerciseContentMediaEditorAnimationPkey = 'exercise_content_media_editor_animation_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Exercise_Content_Media_Editor_Delete_At_Path_Input = {
  editor_data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Exercise_Content_Media_Editor_Delete_Elem_Input = {
  editor_data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Exercise_Content_Media_Editor_Delete_Key_Input = {
  editor_data?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Insert_Input = {
  content_media_id?: InputMaybe<Scalars['String']>;
  editor_data?: InputMaybe<Scalars['jsonb']>;
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Obj_Rel_Insert_Input>;
  file_image?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  file_video?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  image_file_id?: InputMaybe<Scalars['uuid']>;
  image_s3_id?: InputMaybe<Scalars['String']>;
  s3_file_image?: InputMaybe<S3_File_Obj_Rel_Insert_Input>;
  s3_file_video?: InputMaybe<S3_File_Obj_Rel_Insert_Input>;
  video_file_id?: InputMaybe<Scalars['uuid']>;
  video_s3_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Exercise_Content_Media_Editor_Max_Fields = {
  __typename?: 'exercise_content_media_editor_max_fields';
  content_media_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_file_id?: Maybe<Scalars['uuid']>;
  image_s3_id?: Maybe<Scalars['String']>;
  video_file_id?: Maybe<Scalars['uuid']>;
  video_s3_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Max_Order_By = {
  content_media_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_file_id?: InputMaybe<Order_By>;
  image_s3_id?: InputMaybe<Order_By>;
  video_file_id?: InputMaybe<Order_By>;
  video_s3_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exercise_Content_Media_Editor_Min_Fields = {
  __typename?: 'exercise_content_media_editor_min_fields';
  content_media_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_file_id?: Maybe<Scalars['uuid']>;
  image_s3_id?: Maybe<Scalars['String']>;
  video_file_id?: Maybe<Scalars['uuid']>;
  video_s3_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Min_Order_By = {
  content_media_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_file_id?: InputMaybe<Order_By>;
  image_s3_id?: InputMaybe<Order_By>;
  video_file_id?: InputMaybe<Order_By>;
  video_s3_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Mutation_Response = {
  __typename?: 'exercise_content_media_editor_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercise_Content_Media_Editor>;
};

/** input type for inserting object relation for remote table "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Obj_Rel_Insert_Input = {
  data: Exercise_Content_Media_Editor_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Content_Media_Editor_On_Conflict>;
};

/** on_conflict condition type for table "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_On_Conflict = {
  constraint: Exercise_Content_Media_Editor_Constraint;
  update_columns?: Array<Exercise_Content_Media_Editor_Update_Column>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};

/** Ordering options when selecting data from "exercise_content_media_editor". */
export type Exercise_Content_Media_Editor_Order_By = {
  content_media_id?: InputMaybe<Order_By>;
  editor_data?: InputMaybe<Order_By>;
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Order_By>;
  file_image?: InputMaybe<Files_Order_By>;
  file_video?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  image_file_id?: InputMaybe<Order_By>;
  image_s3_id?: InputMaybe<Order_By>;
  s3_file_image?: InputMaybe<S3_File_Order_By>;
  s3_file_video?: InputMaybe<S3_File_Order_By>;
  video_file_id?: InputMaybe<Order_By>;
  video_s3_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exercise_content_media_editor */
export type Exercise_Content_Media_Editor_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Exercise_Content_Media_Editor_Prepend_Input = {
  editor_data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "exercise_content_media_editor" */
export enum Exercise_Content_Media_Editor_Select_Column {
  /** column name */
  ContentMediaId = 'content_media_id',
  /** column name */
  EditorData = 'editor_data',
  /** column name */
  Id = 'id',
  /** column name */
  ImageFileId = 'image_file_id',
  /** column name */
  ImageS3Id = 'image_s3_id',
  /** column name */
  VideoFileId = 'video_file_id',
  /** column name */
  VideoS3Id = 'video_s3_id'
}

/** input type for updating data in table "exercise_content_media_editor" */
export type Exercise_Content_Media_Editor_Set_Input = {
  content_media_id?: InputMaybe<Scalars['String']>;
  editor_data?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['String']>;
  image_file_id?: InputMaybe<Scalars['uuid']>;
  image_s3_id?: InputMaybe<Scalars['String']>;
  video_file_id?: InputMaybe<Scalars['uuid']>;
  video_s3_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "exercise_content_media_editor" */
export enum Exercise_Content_Media_Editor_Update_Column {
  /** column name */
  ContentMediaId = 'content_media_id',
  /** column name */
  EditorData = 'editor_data',
  /** column name */
  Id = 'id',
  /** column name */
  ImageFileId = 'image_file_id',
  /** column name */
  ImageS3Id = 'image_s3_id',
  /** column name */
  VideoFileId = 'video_file_id',
  /** column name */
  VideoS3Id = 'video_s3_id'
}

export type Exercise_Content_Media_Editor_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Exercise_Content_Media_Editor_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Exercise_Content_Media_Editor_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Exercise_Content_Media_Editor_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Exercise_Content_Media_Editor_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Exercise_Content_Media_Editor_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercise_Content_Media_Editor_Set_Input>;
  where: Exercise_Content_Media_Editor_Bool_Exp;
};

/** input type for inserting data into table "exercise_content_media" */
export type Exercise_Content_Media_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  editor_animation_id?: InputMaybe<Scalars['String']>;
  editor_image_id?: InputMaybe<Scalars['String']>;
  exercise_content_media_editor?: InputMaybe<Exercise_Content_Media_Editor_Obj_Rel_Insert_Input>;
  exercise_content_media_mns?: InputMaybe<Exercise_Content_Media_Mn_Arr_Rel_Insert_Input>;
  exercise_content_media_type?: InputMaybe<Exercise_Content_Media_Type_Obj_Rel_Insert_Input>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['String']>;
  is_media_right?: InputMaybe<Scalars['Boolean']>;
  s3_file?: InputMaybe<S3_File_Obj_Rel_Insert_Input>;
  s3_file_id?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Exercise_Content_Media_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  video_url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Exercise_Content_Media_Max_Fields = {
  __typename?: 'exercise_content_media_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  editor_animation_id?: Maybe<Scalars['String']>;
  editor_image_id?: Maybe<Scalars['String']>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['String']>;
  s3_file_id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "exercise_content_media" */
export type Exercise_Content_Media_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  editor_animation_id?: InputMaybe<Order_By>;
  editor_image_id?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  s3_file_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exercise_Content_Media_Min_Fields = {
  __typename?: 'exercise_content_media_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  editor_animation_id?: Maybe<Scalars['String']>;
  editor_image_id?: Maybe<Scalars['String']>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['String']>;
  s3_file_id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "exercise_content_media" */
export type Exercise_Content_Media_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  editor_animation_id?: InputMaybe<Order_By>;
  editor_image_id?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  s3_file_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_url?: InputMaybe<Order_By>;
};

/** columns and relationships of "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn = {
  __typename?: 'exercise_content_media_mn';
  /** An object relationship */
  exercise: Exercise;
  /** An object relationship */
  exercise_content_media: Exercise_Content_Media;
  exercise_content_media_id: Scalars['String'];
  exercise_id: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Aggregate = {
  __typename?: 'exercise_content_media_mn_aggregate';
  aggregate?: Maybe<Exercise_Content_Media_Mn_Aggregate_Fields>;
  nodes: Array<Exercise_Content_Media_Mn>;
};

/** aggregate fields of "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Aggregate_Fields = {
  __typename?: 'exercise_content_media_mn_aggregate_fields';
  avg?: Maybe<Exercise_Content_Media_Mn_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Exercise_Content_Media_Mn_Max_Fields>;
  min?: Maybe<Exercise_Content_Media_Mn_Min_Fields>;
  stddev?: Maybe<Exercise_Content_Media_Mn_Stddev_Fields>;
  stddev_pop?: Maybe<Exercise_Content_Media_Mn_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exercise_Content_Media_Mn_Stddev_Samp_Fields>;
  sum?: Maybe<Exercise_Content_Media_Mn_Sum_Fields>;
  var_pop?: Maybe<Exercise_Content_Media_Mn_Var_Pop_Fields>;
  var_samp?: Maybe<Exercise_Content_Media_Mn_Var_Samp_Fields>;
  variance?: Maybe<Exercise_Content_Media_Mn_Variance_Fields>;
};


/** aggregate fields of "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercise_Content_Media_Mn_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Aggregate_Order_By = {
  avg?: InputMaybe<Exercise_Content_Media_Mn_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exercise_Content_Media_Mn_Max_Order_By>;
  min?: InputMaybe<Exercise_Content_Media_Mn_Min_Order_By>;
  stddev?: InputMaybe<Exercise_Content_Media_Mn_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Exercise_Content_Media_Mn_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Exercise_Content_Media_Mn_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Exercise_Content_Media_Mn_Sum_Order_By>;
  var_pop?: InputMaybe<Exercise_Content_Media_Mn_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Exercise_Content_Media_Mn_Var_Samp_Order_By>;
  variance?: InputMaybe<Exercise_Content_Media_Mn_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Arr_Rel_Insert_Input = {
  data: Array<Exercise_Content_Media_Mn_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Content_Media_Mn_On_Conflict>;
};

/** aggregate avg on columns */
export type Exercise_Content_Media_Mn_Avg_Fields = {
  __typename?: 'exercise_content_media_mn_avg_fields';
  sort?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Avg_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exercise_content_media_mn". All fields are combined with a logical 'AND'. */
export type Exercise_Content_Media_Mn_Bool_Exp = {
  _and?: InputMaybe<Array<Exercise_Content_Media_Mn_Bool_Exp>>;
  _not?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
  _or?: InputMaybe<Array<Exercise_Content_Media_Mn_Bool_Exp>>;
  exercise?: InputMaybe<Exercise_Bool_Exp>;
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
  exercise_content_media_id?: InputMaybe<String_Comparison_Exp>;
  exercise_id?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercise_content_media_mn" */
export enum Exercise_Content_Media_Mn_Constraint {
  /** unique or primary key constraint on columns "exercise_id", "exercise_content_media_id" */
  ExerciseContentMediaMnExerciseIdExerciseContentMediaId = 'exercise_content_media_mn_exercise_id_exercise_content_media_id',
  /** unique or primary key constraint on columns "exercise_id", "exercise_content_media_id" */
  ExerciseContentMediaMnPkey = 'exercise_content_media_mn_pkey'
}

/** input type for incrementing numeric columns in table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Inc_Input = {
  sort?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Insert_Input = {
  exercise?: InputMaybe<Exercise_Obj_Rel_Insert_Input>;
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Obj_Rel_Insert_Input>;
  exercise_content_media_id?: InputMaybe<Scalars['String']>;
  exercise_id?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Exercise_Content_Media_Mn_Max_Fields = {
  __typename?: 'exercise_content_media_mn_max_fields';
  exercise_content_media_id?: Maybe<Scalars['String']>;
  exercise_id?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Max_Order_By = {
  exercise_content_media_id?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exercise_Content_Media_Mn_Min_Fields = {
  __typename?: 'exercise_content_media_mn_min_fields';
  exercise_content_media_id?: Maybe<Scalars['String']>;
  exercise_id?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Min_Order_By = {
  exercise_content_media_id?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Mutation_Response = {
  __typename?: 'exercise_content_media_mn_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercise_Content_Media_Mn>;
};

/** on_conflict condition type for table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_On_Conflict = {
  constraint: Exercise_Content_Media_Mn_Constraint;
  update_columns?: Array<Exercise_Content_Media_Mn_Update_Column>;
  where?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
};

/** Ordering options when selecting data from "exercise_content_media_mn". */
export type Exercise_Content_Media_Mn_Order_By = {
  exercise?: InputMaybe<Exercise_Order_By>;
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Order_By>;
  exercise_content_media_id?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exercise_content_media_mn */
export type Exercise_Content_Media_Mn_Pk_Columns_Input = {
  exercise_content_media_id: Scalars['String'];
  exercise_id: Scalars['String'];
};

/** select columns of table "exercise_content_media_mn" */
export enum Exercise_Content_Media_Mn_Select_Column {
  /** column name */
  ExerciseContentMediaId = 'exercise_content_media_id',
  /** column name */
  ExerciseId = 'exercise_id',
  /** column name */
  Sort = 'sort'
}

/** input type for updating data in table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Set_Input = {
  exercise_content_media_id?: InputMaybe<Scalars['String']>;
  exercise_id?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Exercise_Content_Media_Mn_Stddev_Fields = {
  __typename?: 'exercise_content_media_mn_stddev_fields';
  sort?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Stddev_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Exercise_Content_Media_Mn_Stddev_Pop_Fields = {
  __typename?: 'exercise_content_media_mn_stddev_pop_fields';
  sort?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Stddev_Pop_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Exercise_Content_Media_Mn_Stddev_Samp_Fields = {
  __typename?: 'exercise_content_media_mn_stddev_samp_fields';
  sort?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Stddev_Samp_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Exercise_Content_Media_Mn_Sum_Fields = {
  __typename?: 'exercise_content_media_mn_sum_fields';
  sort?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Sum_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** update columns of table "exercise_content_media_mn" */
export enum Exercise_Content_Media_Mn_Update_Column {
  /** column name */
  ExerciseContentMediaId = 'exercise_content_media_id',
  /** column name */
  ExerciseId = 'exercise_id',
  /** column name */
  Sort = 'sort'
}

export type Exercise_Content_Media_Mn_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Exercise_Content_Media_Mn_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercise_Content_Media_Mn_Set_Input>;
  where: Exercise_Content_Media_Mn_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Exercise_Content_Media_Mn_Var_Pop_Fields = {
  __typename?: 'exercise_content_media_mn_var_pop_fields';
  sort?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Var_Pop_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Exercise_Content_Media_Mn_Var_Samp_Fields = {
  __typename?: 'exercise_content_media_mn_var_samp_fields';
  sort?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Var_Samp_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Exercise_Content_Media_Mn_Variance_Fields = {
  __typename?: 'exercise_content_media_mn_variance_fields';
  sort?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "exercise_content_media_mn" */
export type Exercise_Content_Media_Mn_Variance_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exercise_content_media" */
export type Exercise_Content_Media_Mutation_Response = {
  __typename?: 'exercise_content_media_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercise_Content_Media>;
};

/** input type for inserting object relation for remote table "exercise_content_media" */
export type Exercise_Content_Media_Obj_Rel_Insert_Input = {
  data: Exercise_Content_Media_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Content_Media_On_Conflict>;
};

/** on_conflict condition type for table "exercise_content_media" */
export type Exercise_Content_Media_On_Conflict = {
  constraint: Exercise_Content_Media_Constraint;
  update_columns?: Array<Exercise_Content_Media_Update_Column>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};

/** Ordering options when selecting data from "exercise_content_media". */
export type Exercise_Content_Media_Order_By = {
  created_at?: InputMaybe<Order_By>;
  editor_animation_id?: InputMaybe<Order_By>;
  editor_image_id?: InputMaybe<Order_By>;
  exercise_content_media_editor?: InputMaybe<Exercise_Content_Media_Editor_Order_By>;
  exercise_content_media_mns_aggregate?: InputMaybe<Exercise_Content_Media_Mn_Aggregate_Order_By>;
  exercise_content_media_type?: InputMaybe<Exercise_Content_Media_Type_Order_By>;
  file?: InputMaybe<Files_Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_media_right?: InputMaybe<Order_By>;
  s3_file?: InputMaybe<S3_File_Order_By>;
  s3_file_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exercise_content_media */
export type Exercise_Content_Media_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "exercise_content_media" */
export enum Exercise_Content_Media_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditorAnimationId = 'editor_animation_id',
  /** column name */
  EditorImageId = 'editor_image_id',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsMediaRight = 'is_media_right',
  /** column name */
  S3FileId = 's3_file_id',
  /** column name */
  Text = 'text',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoUrl = 'video_url'
}

/** input type for updating data in table "exercise_content_media" */
export type Exercise_Content_Media_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  editor_animation_id?: InputMaybe<Scalars['String']>;
  editor_image_id?: InputMaybe<Scalars['String']>;
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['String']>;
  is_media_right?: InputMaybe<Scalars['Boolean']>;
  s3_file_id?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Exercise_Content_Media_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  video_url?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "exercise_content_media_type" */
export type Exercise_Content_Media_Type = {
  __typename?: 'exercise_content_media_type';
  /** An array relationship */
  exercise_content_media: Array<Exercise_Content_Media>;
  /** An aggregate relationship */
  exercise_content_media_aggregate: Exercise_Content_Media_Aggregate;
  name: Scalars['String'];
};


/** columns and relationships of "exercise_content_media_type" */
export type Exercise_Content_Media_TypeExercise_Content_MediaArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};


/** columns and relationships of "exercise_content_media_type" */
export type Exercise_Content_Media_TypeExercise_Content_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};

/** aggregated selection of "exercise_content_media_type" */
export type Exercise_Content_Media_Type_Aggregate = {
  __typename?: 'exercise_content_media_type_aggregate';
  aggregate?: Maybe<Exercise_Content_Media_Type_Aggregate_Fields>;
  nodes: Array<Exercise_Content_Media_Type>;
};

/** aggregate fields of "exercise_content_media_type" */
export type Exercise_Content_Media_Type_Aggregate_Fields = {
  __typename?: 'exercise_content_media_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Exercise_Content_Media_Type_Max_Fields>;
  min?: Maybe<Exercise_Content_Media_Type_Min_Fields>;
};


/** aggregate fields of "exercise_content_media_type" */
export type Exercise_Content_Media_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercise_Content_Media_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "exercise_content_media_type". All fields are combined with a logical 'AND'. */
export type Exercise_Content_Media_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Exercise_Content_Media_Type_Bool_Exp>>;
  _not?: InputMaybe<Exercise_Content_Media_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Exercise_Content_Media_Type_Bool_Exp>>;
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercise_content_media_type" */
export enum Exercise_Content_Media_Type_Constraint {
  /** unique or primary key constraint on columns "name" */
  ExerciseContentMediaTypePkey = 'exercise_content_media_type_pkey'
}

export enum Exercise_Content_Media_Type_Enum {
  EditorAnimation = 'EDITOR_ANIMATION',
  EditorImage = 'EDITOR_IMAGE',
  S3File = 'S3_FILE',
  Text = 'TEXT',
  VideoUrl = 'VIDEO_URL'
}

/** Boolean expression to compare columns of type "exercise_content_media_type_enum". All fields are combined with logical 'AND'. */
export type Exercise_Content_Media_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Exercise_Content_Media_Type_Enum>;
  _in?: InputMaybe<Array<Exercise_Content_Media_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Exercise_Content_Media_Type_Enum>;
  _nin?: InputMaybe<Array<Exercise_Content_Media_Type_Enum>>;
};

/** input type for inserting data into table "exercise_content_media_type" */
export type Exercise_Content_Media_Type_Insert_Input = {
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Exercise_Content_Media_Type_Max_Fields = {
  __typename?: 'exercise_content_media_type_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Exercise_Content_Media_Type_Min_Fields = {
  __typename?: 'exercise_content_media_type_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "exercise_content_media_type" */
export type Exercise_Content_Media_Type_Mutation_Response = {
  __typename?: 'exercise_content_media_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercise_Content_Media_Type>;
};

/** input type for inserting object relation for remote table "exercise_content_media_type" */
export type Exercise_Content_Media_Type_Obj_Rel_Insert_Input = {
  data: Exercise_Content_Media_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Content_Media_Type_On_Conflict>;
};

/** on_conflict condition type for table "exercise_content_media_type" */
export type Exercise_Content_Media_Type_On_Conflict = {
  constraint: Exercise_Content_Media_Type_Constraint;
  update_columns?: Array<Exercise_Content_Media_Type_Update_Column>;
  where?: InputMaybe<Exercise_Content_Media_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "exercise_content_media_type". */
export type Exercise_Content_Media_Type_Order_By = {
  exercise_content_media_aggregate?: InputMaybe<Exercise_Content_Media_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exercise_content_media_type */
export type Exercise_Content_Media_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "exercise_content_media_type" */
export enum Exercise_Content_Media_Type_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "exercise_content_media_type" */
export type Exercise_Content_Media_Type_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "exercise_content_media_type" */
export enum Exercise_Content_Media_Type_Update_Column {
  /** column name */
  Name = 'name'
}

export type Exercise_Content_Media_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercise_Content_Media_Type_Set_Input>;
  where: Exercise_Content_Media_Type_Bool_Exp;
};

/** update columns of table "exercise_content_media" */
export enum Exercise_Content_Media_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditorAnimationId = 'editor_animation_id',
  /** column name */
  EditorImageId = 'editor_image_id',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsMediaRight = 'is_media_right',
  /** column name */
  S3FileId = 's3_file_id',
  /** column name */
  Text = 'text',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoUrl = 'video_url'
}

export type Exercise_Content_Media_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercise_Content_Media_Set_Input>;
  where: Exercise_Content_Media_Bool_Exp;
};

/** input type for incrementing numeric columns in table "exercise" */
export type Exercise_Inc_Input = {
  fitness_stars?: InputMaybe<Scalars['Int']>;
  tactics_stars?: InputMaybe<Scalars['Int']>;
  technique_stars?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "exercise" */
export type Exercise_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exercise_club_mns?: InputMaybe<Exercise_Club_Mn_Arr_Rel_Insert_Input>;
  exercise_content_media_mns?: InputMaybe<Exercise_Content_Media_Mn_Arr_Rel_Insert_Input>;
  exercise_taxonomy_mns?: InputMaybe<Exercise_Taxonomy_Mn_Arr_Rel_Insert_Input>;
  fitness_stars?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  owner_id_bak?: InputMaybe<Scalars['String']>;
  tactics_stars?: InputMaybe<Scalars['Int']>;
  technique_stars?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Old_Obj_Rel_Insert_Input>;
  userByOwnerId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Exercise_Max_Fields = {
  __typename?: 'exercise_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  fitness_stars?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  owner_id_bak?: Maybe<Scalars['String']>;
  tactics_stars?: Maybe<Scalars['Int']>;
  technique_stars?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "exercise" */
export type Exercise_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fitness_stars?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  owner_id_bak?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exercise_Min_Fields = {
  __typename?: 'exercise_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  fitness_stars?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  owner_id_bak?: Maybe<Scalars['String']>;
  tactics_stars?: Maybe<Scalars['Int']>;
  technique_stars?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "exercise" */
export type Exercise_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fitness_stars?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  owner_id_bak?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exercise" */
export type Exercise_Mutation_Response = {
  __typename?: 'exercise_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercise>;
};

/** input type for inserting object relation for remote table "exercise" */
export type Exercise_Obj_Rel_Insert_Input = {
  data: Exercise_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_On_Conflict>;
};

/** on_conflict condition type for table "exercise" */
export type Exercise_On_Conflict = {
  constraint: Exercise_Constraint;
  update_columns?: Array<Exercise_Update_Column>;
  where?: InputMaybe<Exercise_Bool_Exp>;
};

/** Ordering options when selecting data from "exercise". */
export type Exercise_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exercise_club_mns_aggregate?: InputMaybe<Exercise_Club_Mn_Aggregate_Order_By>;
  exercise_content_media_mns_aggregate?: InputMaybe<Exercise_Content_Media_Mn_Aggregate_Order_By>;
  exercise_taxonomy_mns_aggregate?: InputMaybe<Exercise_Taxonomy_Mn_Aggregate_Order_By>;
  fitness_stars?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  owner_id_bak?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Old_Order_By>;
  userByOwnerId?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: exercise */
export type Exercise_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "exercise" */
export enum Exercise_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FitnessStars = 'fitness_stars',
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  OwnerIdBak = 'owner_id_bak',
  /** column name */
  TacticsStars = 'tactics_stars',
  /** column name */
  TechniqueStars = 'technique_stars',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "exercise" */
export type Exercise_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  fitness_stars?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  owner_id_bak?: InputMaybe<Scalars['String']>;
  tactics_stars?: InputMaybe<Scalars['Int']>;
  technique_stars?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Exercise_Stddev_Fields = {
  __typename?: 'exercise_stddev_fields';
  fitness_stars?: Maybe<Scalars['Float']>;
  tactics_stars?: Maybe<Scalars['Float']>;
  technique_stars?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "exercise" */
export type Exercise_Stddev_Order_By = {
  fitness_stars?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Exercise_Stddev_Pop_Fields = {
  __typename?: 'exercise_stddev_pop_fields';
  fitness_stars?: Maybe<Scalars['Float']>;
  tactics_stars?: Maybe<Scalars['Float']>;
  technique_stars?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "exercise" */
export type Exercise_Stddev_Pop_Order_By = {
  fitness_stars?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Exercise_Stddev_Samp_Fields = {
  __typename?: 'exercise_stddev_samp_fields';
  fitness_stars?: Maybe<Scalars['Float']>;
  tactics_stars?: Maybe<Scalars['Float']>;
  technique_stars?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "exercise" */
export type Exercise_Stddev_Samp_Order_By = {
  fitness_stars?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Exercise_Sum_Fields = {
  __typename?: 'exercise_sum_fields';
  fitness_stars?: Maybe<Scalars['Int']>;
  tactics_stars?: Maybe<Scalars['Int']>;
  technique_stars?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "exercise" */
export type Exercise_Sum_Order_By = {
  fitness_stars?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
};

/** columns and relationships of "exercise_taxonomy" */
export type Exercise_Taxonomy = {
  __typename?: 'exercise_taxonomy';
  category: Enum_Exercise_Categories_Enum;
  club_id?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  enum_exercise_category: Enum_Exercise_Categories;
  /** An object relationship */
  enum_sport: Enum_Sport;
  /** An array relationship */
  exercise_taxonomy_mns: Array<Exercise_Taxonomy_Mn>;
  /** An aggregate relationship */
  exercise_taxonomy_mns_aggregate: Exercise_Taxonomy_Mn_Aggregate;
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  sport: Enum_Sport_Enum;
  translation_key: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "exercise_taxonomy" */
export type Exercise_TaxonomyExercise_Taxonomy_MnsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
};


/** columns and relationships of "exercise_taxonomy" */
export type Exercise_TaxonomyExercise_Taxonomy_Mns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
};

/** aggregated selection of "exercise_taxonomy" */
export type Exercise_Taxonomy_Aggregate = {
  __typename?: 'exercise_taxonomy_aggregate';
  aggregate?: Maybe<Exercise_Taxonomy_Aggregate_Fields>;
  nodes: Array<Exercise_Taxonomy>;
};

/** aggregate fields of "exercise_taxonomy" */
export type Exercise_Taxonomy_Aggregate_Fields = {
  __typename?: 'exercise_taxonomy_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Exercise_Taxonomy_Max_Fields>;
  min?: Maybe<Exercise_Taxonomy_Min_Fields>;
};


/** aggregate fields of "exercise_taxonomy" */
export type Exercise_Taxonomy_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercise_Taxonomy_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exercise_taxonomy" */
export type Exercise_Taxonomy_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exercise_Taxonomy_Max_Order_By>;
  min?: InputMaybe<Exercise_Taxonomy_Min_Order_By>;
};

/** input type for inserting array relation for remote table "exercise_taxonomy" */
export type Exercise_Taxonomy_Arr_Rel_Insert_Input = {
  data: Array<Exercise_Taxonomy_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Taxonomy_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exercise_taxonomy". All fields are combined with a logical 'AND'. */
export type Exercise_Taxonomy_Bool_Exp = {
  _and?: InputMaybe<Array<Exercise_Taxonomy_Bool_Exp>>;
  _not?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
  _or?: InputMaybe<Array<Exercise_Taxonomy_Bool_Exp>>;
  category?: InputMaybe<Enum_Exercise_Categories_Enum_Comparison_Exp>;
  club_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  enum_exercise_category?: InputMaybe<Enum_Exercise_Categories_Bool_Exp>;
  enum_sport?: InputMaybe<Enum_Sport_Bool_Exp>;
  exercise_taxonomy_mns?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  sport?: InputMaybe<Enum_Sport_Enum_Comparison_Exp>;
  translation_key?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercise_taxonomy" */
export enum Exercise_Taxonomy_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExerciseTaxonomyPkey = 'exercise_taxonomy_pkey'
}

/** input type for inserting data into table "exercise_taxonomy" */
export type Exercise_Taxonomy_Insert_Input = {
  category?: InputMaybe<Enum_Exercise_Categories_Enum>;
  club_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  enum_exercise_category?: InputMaybe<Enum_Exercise_Categories_Obj_Rel_Insert_Input>;
  enum_sport?: InputMaybe<Enum_Sport_Obj_Rel_Insert_Input>;
  exercise_taxonomy_mns?: InputMaybe<Exercise_Taxonomy_Mn_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  sport?: InputMaybe<Enum_Sport_Enum>;
  translation_key?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Exercise_Taxonomy_Max_Fields = {
  __typename?: 'exercise_taxonomy_max_fields';
  club_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  translation_key?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "exercise_taxonomy" */
export type Exercise_Taxonomy_Max_Order_By = {
  club_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  translation_key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exercise_Taxonomy_Min_Fields = {
  __typename?: 'exercise_taxonomy_min_fields';
  club_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  translation_key?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "exercise_taxonomy" */
export type Exercise_Taxonomy_Min_Order_By = {
  club_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  translation_key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn = {
  __typename?: 'exercise_taxonomy_mn';
  /** An object relationship */
  exercise: Exercise;
  exercise_id: Scalars['String'];
  /** An object relationship */
  exercise_taxonomy: Exercise_Taxonomy;
  taxonomy_id: Scalars['String'];
};

/** aggregated selection of "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_Aggregate = {
  __typename?: 'exercise_taxonomy_mn_aggregate';
  aggregate?: Maybe<Exercise_Taxonomy_Mn_Aggregate_Fields>;
  nodes: Array<Exercise_Taxonomy_Mn>;
};

/** aggregate fields of "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_Aggregate_Fields = {
  __typename?: 'exercise_taxonomy_mn_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Exercise_Taxonomy_Mn_Max_Fields>;
  min?: Maybe<Exercise_Taxonomy_Mn_Min_Fields>;
};


/** aggregate fields of "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercise_Taxonomy_Mn_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exercise_Taxonomy_Mn_Max_Order_By>;
  min?: InputMaybe<Exercise_Taxonomy_Mn_Min_Order_By>;
};

/** input type for inserting array relation for remote table "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_Arr_Rel_Insert_Input = {
  data: Array<Exercise_Taxonomy_Mn_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Taxonomy_Mn_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exercise_taxonomy_mn". All fields are combined with a logical 'AND'. */
export type Exercise_Taxonomy_Mn_Bool_Exp = {
  _and?: InputMaybe<Array<Exercise_Taxonomy_Mn_Bool_Exp>>;
  _not?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
  _or?: InputMaybe<Array<Exercise_Taxonomy_Mn_Bool_Exp>>;
  exercise?: InputMaybe<Exercise_Bool_Exp>;
  exercise_id?: InputMaybe<String_Comparison_Exp>;
  exercise_taxonomy?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
  taxonomy_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercise_taxonomy_mn" */
export enum Exercise_Taxonomy_Mn_Constraint {
  /** unique or primary key constraint on columns "exercise_id", "taxonomy_id" */
  ExerciseTaxonomyMnPkey = 'exercise_taxonomy_mn_pkey'
}

/** input type for inserting data into table "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_Insert_Input = {
  exercise?: InputMaybe<Exercise_Obj_Rel_Insert_Input>;
  exercise_id?: InputMaybe<Scalars['String']>;
  exercise_taxonomy?: InputMaybe<Exercise_Taxonomy_Obj_Rel_Insert_Input>;
  taxonomy_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Exercise_Taxonomy_Mn_Max_Fields = {
  __typename?: 'exercise_taxonomy_mn_max_fields';
  exercise_id?: Maybe<Scalars['String']>;
  taxonomy_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_Max_Order_By = {
  exercise_id?: InputMaybe<Order_By>;
  taxonomy_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exercise_Taxonomy_Mn_Min_Fields = {
  __typename?: 'exercise_taxonomy_mn_min_fields';
  exercise_id?: Maybe<Scalars['String']>;
  taxonomy_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_Min_Order_By = {
  exercise_id?: InputMaybe<Order_By>;
  taxonomy_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_Mutation_Response = {
  __typename?: 'exercise_taxonomy_mn_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercise_Taxonomy_Mn>;
};

/** on_conflict condition type for table "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_On_Conflict = {
  constraint: Exercise_Taxonomy_Mn_Constraint;
  update_columns?: Array<Exercise_Taxonomy_Mn_Update_Column>;
  where?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
};

/** Ordering options when selecting data from "exercise_taxonomy_mn". */
export type Exercise_Taxonomy_Mn_Order_By = {
  exercise?: InputMaybe<Exercise_Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  exercise_taxonomy?: InputMaybe<Exercise_Taxonomy_Order_By>;
  taxonomy_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exercise_taxonomy_mn */
export type Exercise_Taxonomy_Mn_Pk_Columns_Input = {
  exercise_id: Scalars['String'];
  taxonomy_id: Scalars['String'];
};

/** select columns of table "exercise_taxonomy_mn" */
export enum Exercise_Taxonomy_Mn_Select_Column {
  /** column name */
  ExerciseId = 'exercise_id',
  /** column name */
  TaxonomyId = 'taxonomy_id'
}

/** input type for updating data in table "exercise_taxonomy_mn" */
export type Exercise_Taxonomy_Mn_Set_Input = {
  exercise_id?: InputMaybe<Scalars['String']>;
  taxonomy_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "exercise_taxonomy_mn" */
export enum Exercise_Taxonomy_Mn_Update_Column {
  /** column name */
  ExerciseId = 'exercise_id',
  /** column name */
  TaxonomyId = 'taxonomy_id'
}

export type Exercise_Taxonomy_Mn_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercise_Taxonomy_Mn_Set_Input>;
  where: Exercise_Taxonomy_Mn_Bool_Exp;
};

/** response of any mutation on the table "exercise_taxonomy" */
export type Exercise_Taxonomy_Mutation_Response = {
  __typename?: 'exercise_taxonomy_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercise_Taxonomy>;
};

/** input type for inserting object relation for remote table "exercise_taxonomy" */
export type Exercise_Taxonomy_Obj_Rel_Insert_Input = {
  data: Exercise_Taxonomy_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Taxonomy_On_Conflict>;
};

/** on_conflict condition type for table "exercise_taxonomy" */
export type Exercise_Taxonomy_On_Conflict = {
  constraint: Exercise_Taxonomy_Constraint;
  update_columns?: Array<Exercise_Taxonomy_Update_Column>;
  where?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
};

/** Ordering options when selecting data from "exercise_taxonomy". */
export type Exercise_Taxonomy_Order_By = {
  category?: InputMaybe<Order_By>;
  club_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  enum_exercise_category?: InputMaybe<Enum_Exercise_Categories_Order_By>;
  enum_sport?: InputMaybe<Enum_Sport_Order_By>;
  exercise_taxonomy_mns_aggregate?: InputMaybe<Exercise_Taxonomy_Mn_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  sport?: InputMaybe<Order_By>;
  translation_key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exercise_taxonomy */
export type Exercise_Taxonomy_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "exercise_taxonomy" */
export enum Exercise_Taxonomy_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Sport = 'sport',
  /** column name */
  TranslationKey = 'translation_key',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "exercise_taxonomy" */
export type Exercise_Taxonomy_Set_Input = {
  category?: InputMaybe<Enum_Exercise_Categories_Enum>;
  club_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  sport?: InputMaybe<Enum_Sport_Enum>;
  translation_key?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "exercise_taxonomy" */
export enum Exercise_Taxonomy_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Sport = 'sport',
  /** column name */
  TranslationKey = 'translation_key',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Exercise_Taxonomy_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercise_Taxonomy_Set_Input>;
  where: Exercise_Taxonomy_Bool_Exp;
};

/** update columns of table "exercise" */
export enum Exercise_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FitnessStars = 'fitness_stars',
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  OwnerIdBak = 'owner_id_bak',
  /** column name */
  TacticsStars = 'tactics_stars',
  /** column name */
  TechniqueStars = 'technique_stars',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Exercise_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Exercise_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercise_Set_Input>;
  where: Exercise_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Exercise_Var_Pop_Fields = {
  __typename?: 'exercise_var_pop_fields';
  fitness_stars?: Maybe<Scalars['Float']>;
  tactics_stars?: Maybe<Scalars['Float']>;
  technique_stars?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "exercise" */
export type Exercise_Var_Pop_Order_By = {
  fitness_stars?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Exercise_Var_Samp_Fields = {
  __typename?: 'exercise_var_samp_fields';
  fitness_stars?: Maybe<Scalars['Float']>;
  tactics_stars?: Maybe<Scalars['Float']>;
  technique_stars?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "exercise" */
export type Exercise_Var_Samp_Order_By = {
  fitness_stars?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Exercise_Variance_Fields = {
  __typename?: 'exercise_variance_fields';
  fitness_stars?: Maybe<Scalars['Float']>;
  tactics_stars?: Maybe<Scalars['Float']>;
  technique_stars?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "exercise" */
export type Exercise_Variance_Order_By = {
  fitness_stars?: InputMaybe<Order_By>;
  tactics_stars?: InputMaybe<Order_By>;
  technique_stars?: InputMaybe<Order_By>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  /** An array relationship */
  exercise_content_media: Array<Exercise_Content_Media>;
  /** An aggregate relationship */
  exercise_content_media_aggregate: Exercise_Content_Media_Aggregate;
  /** An array relationship */
  exercise_content_media_editor_image: Array<Exercise_Content_Media_Editor>;
  /** An aggregate relationship */
  exercise_content_media_editor_image_aggregate: Exercise_Content_Media_Editor_Aggregate;
  /** An array relationship */
  exercise_content_media_editor_video: Array<Exercise_Content_Media_Editor>;
  /** An aggregate relationship */
  exercise_content_media_editor_video_aggregate: Exercise_Content_Media_Editor_Aggregate;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "storage.files" */
export type FilesExercise_Content_MediaArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};


/** columns and relationships of "storage.files" */
export type FilesExercise_Content_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};


/** columns and relationships of "storage.files" */
export type FilesExercise_Content_Media_Editor_ImageArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};


/** columns and relationships of "storage.files" */
export type FilesExercise_Content_Media_Editor_Image_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};


/** columns and relationships of "storage.files" */
export type FilesExercise_Content_Media_Editor_VideoArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};


/** columns and relationships of "storage.files" */
export type FilesExercise_Content_Media_Editor_Video_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
  exercise_content_media_editor_image?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
  exercise_content_media_editor_video?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Arr_Rel_Insert_Input>;
  exercise_content_media_editor_image?: InputMaybe<Exercise_Content_Media_Editor_Arr_Rel_Insert_Input>;
  exercise_content_media_editor_video?: InputMaybe<Exercise_Content_Media_Editor_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  exercise_content_media_aggregate?: InputMaybe<Exercise_Content_Media_Aggregate_Order_By>;
  exercise_content_media_editor_image_aggregate?: InputMaybe<Exercise_Content_Media_Editor_Aggregate_Order_By>;
  exercise_content_media_editor_video_aggregate?: InputMaybe<Exercise_Content_Media_Editor_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "license" */
export type License = {
  __typename?: 'license';
  name: Scalars['String'];
  /** An array relationship */
  payments: Array<Payment>;
  /** An aggregate relationship */
  payments_aggregate: Payment_Aggregate;
};


/** columns and relationships of "license" */
export type LicensePaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};


/** columns and relationships of "license" */
export type LicensePayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** aggregated selection of "license" */
export type License_Aggregate = {
  __typename?: 'license_aggregate';
  aggregate?: Maybe<License_Aggregate_Fields>;
  nodes: Array<License>;
};

/** aggregate fields of "license" */
export type License_Aggregate_Fields = {
  __typename?: 'license_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<License_Max_Fields>;
  min?: Maybe<License_Min_Fields>;
};


/** aggregate fields of "license" */
export type License_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<License_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "license". All fields are combined with a logical 'AND'. */
export type License_Bool_Exp = {
  _and?: InputMaybe<Array<License_Bool_Exp>>;
  _not?: InputMaybe<License_Bool_Exp>;
  _or?: InputMaybe<Array<License_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  payments?: InputMaybe<Payment_Bool_Exp>;
};

/** unique or primary key constraints on table "license" */
export enum License_Constraint {
  /** unique or primary key constraint on columns "name" */
  LicensePkey = 'license_pkey'
}

export enum License_Enum {
  Trial = 'TRIAL'
}

/** Boolean expression to compare columns of type "license_enum". All fields are combined with logical 'AND'. */
export type License_Enum_Comparison_Exp = {
  _eq?: InputMaybe<License_Enum>;
  _in?: InputMaybe<Array<License_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<License_Enum>;
  _nin?: InputMaybe<Array<License_Enum>>;
};

/** input type for inserting data into table "license" */
export type License_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  payments?: InputMaybe<Payment_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type License_Max_Fields = {
  __typename?: 'license_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type License_Min_Fields = {
  __typename?: 'license_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "license" */
export type License_Mutation_Response = {
  __typename?: 'license_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<License>;
};

/** input type for inserting object relation for remote table "license" */
export type License_Obj_Rel_Insert_Input = {
  data: License_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<License_On_Conflict>;
};

/** on_conflict condition type for table "license" */
export type License_On_Conflict = {
  constraint: License_Constraint;
  update_columns?: Array<License_Update_Column>;
  where?: InputMaybe<License_Bool_Exp>;
};

/** Ordering options when selecting data from "license". */
export type License_Order_By = {
  name?: InputMaybe<Order_By>;
  payments_aggregate?: InputMaybe<Payment_Aggregate_Order_By>;
};

/** primary key columns input for table: license */
export type License_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "license" */
export enum License_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "license" */
export type License_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "license" */
export enum License_Update_Column {
  /** column name */
  Name = 'name'
}

export type License_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<License_Set_Input>;
  where: License_Bool_Exp;
};

/** columns and relationships of "member" */
export type Member = {
  __typename?: 'member';
  email?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  id: Scalars['String'];
  last_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "member" */
export type Member_Aggregate = {
  __typename?: 'member_aggregate';
  aggregate?: Maybe<Member_Aggregate_Fields>;
  nodes: Array<Member>;
};

/** aggregate fields of "member" */
export type Member_Aggregate_Fields = {
  __typename?: 'member_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Member_Max_Fields>;
  min?: Maybe<Member_Min_Fields>;
};


/** aggregate fields of "member" */
export type Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'. */
export type Member_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Bool_Exp>>;
  _not?: InputMaybe<Member_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "member" */
export enum Member_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberPkey = 'member_pkey'
}

/** columns and relationships of "member_group" */
export type Member_Group = {
  __typename?: 'member_group';
  name: Scalars['String'];
};

/** aggregated selection of "member_group" */
export type Member_Group_Aggregate = {
  __typename?: 'member_group_aggregate';
  aggregate?: Maybe<Member_Group_Aggregate_Fields>;
  nodes: Array<Member_Group>;
};

/** aggregate fields of "member_group" */
export type Member_Group_Aggregate_Fields = {
  __typename?: 'member_group_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Member_Group_Max_Fields>;
  min?: Maybe<Member_Group_Min_Fields>;
};


/** aggregate fields of "member_group" */
export type Member_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "member_group". All fields are combined with a logical 'AND'. */
export type Member_Group_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Group_Bool_Exp>>;
  _not?: InputMaybe<Member_Group_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Group_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_group" */
export enum Member_Group_Constraint {
  /** unique or primary key constraint on columns "name" */
  MemberGroupPkey = 'member_group_pkey'
}

/** input type for inserting data into table "member_group" */
export type Member_Group_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Member_Group_Max_Fields = {
  __typename?: 'member_group_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Member_Group_Min_Fields = {
  __typename?: 'member_group_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** columns and relationships of "member_group_mn" */
export type Member_Group_Mn = {
  __typename?: 'member_group_mn';
  group_id: Scalars['String'];
  member_id: Scalars['String'];
};

/** aggregated selection of "member_group_mn" */
export type Member_Group_Mn_Aggregate = {
  __typename?: 'member_group_mn_aggregate';
  aggregate?: Maybe<Member_Group_Mn_Aggregate_Fields>;
  nodes: Array<Member_Group_Mn>;
};

/** aggregate fields of "member_group_mn" */
export type Member_Group_Mn_Aggregate_Fields = {
  __typename?: 'member_group_mn_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Member_Group_Mn_Max_Fields>;
  min?: Maybe<Member_Group_Mn_Min_Fields>;
};


/** aggregate fields of "member_group_mn" */
export type Member_Group_Mn_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Group_Mn_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "member_group_mn". All fields are combined with a logical 'AND'. */
export type Member_Group_Mn_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Group_Mn_Bool_Exp>>;
  _not?: InputMaybe<Member_Group_Mn_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Group_Mn_Bool_Exp>>;
  group_id?: InputMaybe<String_Comparison_Exp>;
  member_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_group_mn" */
export enum Member_Group_Mn_Constraint {
  /** unique or primary key constraint on columns "member_id", "group_id" */
  MemberGroupMnPkey = 'member_group_mn_pkey'
}

/** input type for inserting data into table "member_group_mn" */
export type Member_Group_Mn_Insert_Input = {
  group_id?: InputMaybe<Scalars['String']>;
  member_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Member_Group_Mn_Max_Fields = {
  __typename?: 'member_group_mn_max_fields';
  group_id?: Maybe<Scalars['String']>;
  member_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Member_Group_Mn_Min_Fields = {
  __typename?: 'member_group_mn_min_fields';
  group_id?: Maybe<Scalars['String']>;
  member_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "member_group_mn" */
export type Member_Group_Mn_Mutation_Response = {
  __typename?: 'member_group_mn_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Group_Mn>;
};

/** on_conflict condition type for table "member_group_mn" */
export type Member_Group_Mn_On_Conflict = {
  constraint: Member_Group_Mn_Constraint;
  update_columns?: Array<Member_Group_Mn_Update_Column>;
  where?: InputMaybe<Member_Group_Mn_Bool_Exp>;
};

/** Ordering options when selecting data from "member_group_mn". */
export type Member_Group_Mn_Order_By = {
  group_id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_group_mn */
export type Member_Group_Mn_Pk_Columns_Input = {
  group_id: Scalars['String'];
  member_id: Scalars['String'];
};

/** select columns of table "member_group_mn" */
export enum Member_Group_Mn_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  MemberId = 'member_id'
}

/** input type for updating data in table "member_group_mn" */
export type Member_Group_Mn_Set_Input = {
  group_id?: InputMaybe<Scalars['String']>;
  member_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "member_group_mn" */
export enum Member_Group_Mn_Update_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  MemberId = 'member_id'
}

export type Member_Group_Mn_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Group_Mn_Set_Input>;
  where: Member_Group_Mn_Bool_Exp;
};

/** response of any mutation on the table "member_group" */
export type Member_Group_Mutation_Response = {
  __typename?: 'member_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Group>;
};

/** on_conflict condition type for table "member_group" */
export type Member_Group_On_Conflict = {
  constraint: Member_Group_Constraint;
  update_columns?: Array<Member_Group_Update_Column>;
  where?: InputMaybe<Member_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "member_group". */
export type Member_Group_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_group */
export type Member_Group_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "member_group" */
export enum Member_Group_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "member_group" */
export type Member_Group_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "member_group" */
export enum Member_Group_Update_Column {
  /** column name */
  Name = 'name'
}

export type Member_Group_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Group_Set_Input>;
  where: Member_Group_Bool_Exp;
};

/** input type for inserting data into table "member" */
export type Member_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Member_Max_Fields = {
  __typename?: 'member_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Member_Min_Fields = {
  __typename?: 'member_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "member" */
export type Member_Mutation_Response = {
  __typename?: 'member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Member>;
};

/** on_conflict condition type for table "member" */
export type Member_On_Conflict = {
  constraint: Member_Constraint;
  update_columns?: Array<Member_Update_Column>;
  where?: InputMaybe<Member_Bool_Exp>;
};

/** Ordering options when selecting data from "member". */
export type Member_Order_By = {
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member */
export type Member_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "member" */
export enum Member_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "member" */
export type Member_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "member" */
export enum Member_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UserId = 'user_id'
}

export type Member_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_authenticators" */
  deleteAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** delete data from the table: "auth.user_authenticators" */
  deleteAuthUserAuthenticators?: Maybe<AuthUserAuthenticators_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "club" */
  delete_club?: Maybe<Club_Mutation_Response>;
  /** delete single row from the table: "club" */
  delete_club_by_pk?: Maybe<Club>;
  /** delete data from the table: "editor_type" */
  delete_editor_type?: Maybe<Editor_Type_Mutation_Response>;
  /** delete single row from the table: "editor_type" */
  delete_editor_type_by_pk?: Maybe<Editor_Type>;
  /** delete data from the table: "enum_exercise_categories" */
  delete_enum_exercise_categories?: Maybe<Enum_Exercise_Categories_Mutation_Response>;
  /** delete single row from the table: "enum_exercise_categories" */
  delete_enum_exercise_categories_by_pk?: Maybe<Enum_Exercise_Categories>;
  /** delete data from the table: "enum_languages" */
  delete_enum_languages?: Maybe<Enum_Languages_Mutation_Response>;
  /** delete single row from the table: "enum_languages" */
  delete_enum_languages_by_pk?: Maybe<Enum_Languages>;
  /** delete data from the table: "enum_sport" */
  delete_enum_sport?: Maybe<Enum_Sport_Mutation_Response>;
  /** delete single row from the table: "enum_sport" */
  delete_enum_sport_by_pk?: Maybe<Enum_Sport>;
  /** delete data from the table: "exercise" */
  delete_exercise?: Maybe<Exercise_Mutation_Response>;
  /** delete single row from the table: "exercise" */
  delete_exercise_by_pk?: Maybe<Exercise>;
  /** delete data from the table: "exercise_club_mn" */
  delete_exercise_club_mn?: Maybe<Exercise_Club_Mn_Mutation_Response>;
  /** delete single row from the table: "exercise_club_mn" */
  delete_exercise_club_mn_by_pk?: Maybe<Exercise_Club_Mn>;
  /** delete data from the table: "exercise_content_media" */
  delete_exercise_content_media?: Maybe<Exercise_Content_Media_Mutation_Response>;
  /** delete single row from the table: "exercise_content_media" */
  delete_exercise_content_media_by_pk?: Maybe<Exercise_Content_Media>;
  /** delete data from the table: "exercise_content_media_editor" */
  delete_exercise_content_media_editor?: Maybe<Exercise_Content_Media_Editor_Mutation_Response>;
  /** delete single row from the table: "exercise_content_media_editor" */
  delete_exercise_content_media_editor_by_pk?: Maybe<Exercise_Content_Media_Editor>;
  /** delete data from the table: "exercise_content_media_mn" */
  delete_exercise_content_media_mn?: Maybe<Exercise_Content_Media_Mn_Mutation_Response>;
  /** delete single row from the table: "exercise_content_media_mn" */
  delete_exercise_content_media_mn_by_pk?: Maybe<Exercise_Content_Media_Mn>;
  /** delete data from the table: "exercise_content_media_type" */
  delete_exercise_content_media_type?: Maybe<Exercise_Content_Media_Type_Mutation_Response>;
  /** delete single row from the table: "exercise_content_media_type" */
  delete_exercise_content_media_type_by_pk?: Maybe<Exercise_Content_Media_Type>;
  /** delete data from the table: "exercise_taxonomy" */
  delete_exercise_taxonomy?: Maybe<Exercise_Taxonomy_Mutation_Response>;
  /** delete single row from the table: "exercise_taxonomy" */
  delete_exercise_taxonomy_by_pk?: Maybe<Exercise_Taxonomy>;
  /** delete data from the table: "exercise_taxonomy_mn" */
  delete_exercise_taxonomy_mn?: Maybe<Exercise_Taxonomy_Mn_Mutation_Response>;
  /** delete single row from the table: "exercise_taxonomy_mn" */
  delete_exercise_taxonomy_mn_by_pk?: Maybe<Exercise_Taxonomy_Mn>;
  /** delete data from the table: "license" */
  delete_license?: Maybe<License_Mutation_Response>;
  /** delete single row from the table: "license" */
  delete_license_by_pk?: Maybe<License>;
  /** delete data from the table: "member" */
  delete_member?: Maybe<Member_Mutation_Response>;
  /** delete single row from the table: "member" */
  delete_member_by_pk?: Maybe<Member>;
  /** delete data from the table: "member_group" */
  delete_member_group?: Maybe<Member_Group_Mutation_Response>;
  /** delete single row from the table: "member_group" */
  delete_member_group_by_pk?: Maybe<Member_Group>;
  /** delete data from the table: "member_group_mn" */
  delete_member_group_mn?: Maybe<Member_Group_Mn_Mutation_Response>;
  /** delete single row from the table: "member_group_mn" */
  delete_member_group_mn_by_pk?: Maybe<Member_Group_Mn>;
  /** delete data from the table: "payment" */
  delete_payment?: Maybe<Payment_Mutation_Response>;
  /** delete single row from the table: "payment" */
  delete_payment_by_pk?: Maybe<Payment>;
  /** delete data from the table: "s3_file" */
  delete_s3_file?: Maybe<S3_File_Mutation_Response>;
  /** delete single row from the table: "s3_file" */
  delete_s3_file_by_pk?: Maybe<S3_File>;
  /** delete data from the table: "team" */
  delete_team?: Maybe<Team_Mutation_Response>;
  /** delete single row from the table: "team" */
  delete_team_by_pk?: Maybe<Team>;
  /** delete data from the table: "test" */
  delete_test?: Maybe<Test_Mutation_Response>;
  /** delete single row from the table: "test" */
  delete_test_by_pk?: Maybe<Test>;
  /** delete data from the table: "user_permission" */
  delete_user_permission?: Maybe<User_Permission_Mutation_Response>;
  /** delete single row from the table: "user_permission" */
  delete_user_permission_by_pk?: Maybe<User_Permission>;
  /** delete data from the table: "user_permission_role" */
  delete_user_permission_role?: Maybe<User_Permission_Role_Mutation_Response>;
  /** delete single row from the table: "user_permission_role" */
  delete_user_permission_role_by_pk?: Maybe<User_Permission_Role>;
  /** delete data from the table: "users_old" */
  delete_users_old?: Maybe<Users_Old_Mutation_Response>;
  /** delete single row from the table: "users_old" */
  delete_users_old_by_pk?: Maybe<Users_Old>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_authenticators" */
  insertAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** insert data into the table: "auth.user_authenticators" */
  insertAuthUserAuthenticators?: Maybe<AuthUserAuthenticators_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "club" */
  insert_club?: Maybe<Club_Mutation_Response>;
  /** insert a single row into the table: "club" */
  insert_club_one?: Maybe<Club>;
  /** insert data into the table: "editor_type" */
  insert_editor_type?: Maybe<Editor_Type_Mutation_Response>;
  /** insert a single row into the table: "editor_type" */
  insert_editor_type_one?: Maybe<Editor_Type>;
  /** insert data into the table: "enum_exercise_categories" */
  insert_enum_exercise_categories?: Maybe<Enum_Exercise_Categories_Mutation_Response>;
  /** insert a single row into the table: "enum_exercise_categories" */
  insert_enum_exercise_categories_one?: Maybe<Enum_Exercise_Categories>;
  /** insert data into the table: "enum_languages" */
  insert_enum_languages?: Maybe<Enum_Languages_Mutation_Response>;
  /** insert a single row into the table: "enum_languages" */
  insert_enum_languages_one?: Maybe<Enum_Languages>;
  /** insert data into the table: "enum_sport" */
  insert_enum_sport?: Maybe<Enum_Sport_Mutation_Response>;
  /** insert a single row into the table: "enum_sport" */
  insert_enum_sport_one?: Maybe<Enum_Sport>;
  /** insert data into the table: "exercise" */
  insert_exercise?: Maybe<Exercise_Mutation_Response>;
  /** insert data into the table: "exercise_club_mn" */
  insert_exercise_club_mn?: Maybe<Exercise_Club_Mn_Mutation_Response>;
  /** insert a single row into the table: "exercise_club_mn" */
  insert_exercise_club_mn_one?: Maybe<Exercise_Club_Mn>;
  /** insert data into the table: "exercise_content_media" */
  insert_exercise_content_media?: Maybe<Exercise_Content_Media_Mutation_Response>;
  /** insert data into the table: "exercise_content_media_editor" */
  insert_exercise_content_media_editor?: Maybe<Exercise_Content_Media_Editor_Mutation_Response>;
  /** insert a single row into the table: "exercise_content_media_editor" */
  insert_exercise_content_media_editor_one?: Maybe<Exercise_Content_Media_Editor>;
  /** insert data into the table: "exercise_content_media_mn" */
  insert_exercise_content_media_mn?: Maybe<Exercise_Content_Media_Mn_Mutation_Response>;
  /** insert a single row into the table: "exercise_content_media_mn" */
  insert_exercise_content_media_mn_one?: Maybe<Exercise_Content_Media_Mn>;
  /** insert a single row into the table: "exercise_content_media" */
  insert_exercise_content_media_one?: Maybe<Exercise_Content_Media>;
  /** insert data into the table: "exercise_content_media_type" */
  insert_exercise_content_media_type?: Maybe<Exercise_Content_Media_Type_Mutation_Response>;
  /** insert a single row into the table: "exercise_content_media_type" */
  insert_exercise_content_media_type_one?: Maybe<Exercise_Content_Media_Type>;
  /** insert a single row into the table: "exercise" */
  insert_exercise_one?: Maybe<Exercise>;
  /** insert data into the table: "exercise_taxonomy" */
  insert_exercise_taxonomy?: Maybe<Exercise_Taxonomy_Mutation_Response>;
  /** insert data into the table: "exercise_taxonomy_mn" */
  insert_exercise_taxonomy_mn?: Maybe<Exercise_Taxonomy_Mn_Mutation_Response>;
  /** insert a single row into the table: "exercise_taxonomy_mn" */
  insert_exercise_taxonomy_mn_one?: Maybe<Exercise_Taxonomy_Mn>;
  /** insert a single row into the table: "exercise_taxonomy" */
  insert_exercise_taxonomy_one?: Maybe<Exercise_Taxonomy>;
  /** insert data into the table: "license" */
  insert_license?: Maybe<License_Mutation_Response>;
  /** insert a single row into the table: "license" */
  insert_license_one?: Maybe<License>;
  /** insert data into the table: "member" */
  insert_member?: Maybe<Member_Mutation_Response>;
  /** insert data into the table: "member_group" */
  insert_member_group?: Maybe<Member_Group_Mutation_Response>;
  /** insert data into the table: "member_group_mn" */
  insert_member_group_mn?: Maybe<Member_Group_Mn_Mutation_Response>;
  /** insert a single row into the table: "member_group_mn" */
  insert_member_group_mn_one?: Maybe<Member_Group_Mn>;
  /** insert a single row into the table: "member_group" */
  insert_member_group_one?: Maybe<Member_Group>;
  /** insert a single row into the table: "member" */
  insert_member_one?: Maybe<Member>;
  /** insert data into the table: "payment" */
  insert_payment?: Maybe<Payment_Mutation_Response>;
  /** insert a single row into the table: "payment" */
  insert_payment_one?: Maybe<Payment>;
  /** insert data into the table: "s3_file" */
  insert_s3_file?: Maybe<S3_File_Mutation_Response>;
  /** insert a single row into the table: "s3_file" */
  insert_s3_file_one?: Maybe<S3_File>;
  /** insert data into the table: "team" */
  insert_team?: Maybe<Team_Mutation_Response>;
  /** insert a single row into the table: "team" */
  insert_team_one?: Maybe<Team>;
  /** insert data into the table: "test" */
  insert_test?: Maybe<Test_Mutation_Response>;
  /** insert a single row into the table: "test" */
  insert_test_one?: Maybe<Test>;
  /** insert data into the table: "user_permission" */
  insert_user_permission?: Maybe<User_Permission_Mutation_Response>;
  /** insert a single row into the table: "user_permission" */
  insert_user_permission_one?: Maybe<User_Permission>;
  /** insert data into the table: "user_permission_role" */
  insert_user_permission_role?: Maybe<User_Permission_Role_Mutation_Response>;
  /** insert a single row into the table: "user_permission_role" */
  insert_user_permission_role_one?: Maybe<User_Permission_Role>;
  /** insert data into the table: "users_old" */
  insert_users_old?: Maybe<Users_Old_Mutation_Response>;
  /** insert a single row into the table: "users_old" */
  insert_users_old_one?: Maybe<Users_Old>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_authenticators" */
  updateAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** update data of the table: "auth.user_authenticators" */
  updateAuthUserAuthenticators?: Maybe<AuthUserAuthenticators_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_authenticators" */
  update_authUserAuthenticators_many?: Maybe<Array<Maybe<AuthUserAuthenticators_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "club" */
  update_club?: Maybe<Club_Mutation_Response>;
  /** update single row of the table: "club" */
  update_club_by_pk?: Maybe<Club>;
  /** update multiples rows of table: "club" */
  update_club_many?: Maybe<Array<Maybe<Club_Mutation_Response>>>;
  /** update data of the table: "editor_type" */
  update_editor_type?: Maybe<Editor_Type_Mutation_Response>;
  /** update single row of the table: "editor_type" */
  update_editor_type_by_pk?: Maybe<Editor_Type>;
  /** update multiples rows of table: "editor_type" */
  update_editor_type_many?: Maybe<Array<Maybe<Editor_Type_Mutation_Response>>>;
  /** update data of the table: "enum_exercise_categories" */
  update_enum_exercise_categories?: Maybe<Enum_Exercise_Categories_Mutation_Response>;
  /** update single row of the table: "enum_exercise_categories" */
  update_enum_exercise_categories_by_pk?: Maybe<Enum_Exercise_Categories>;
  /** update multiples rows of table: "enum_exercise_categories" */
  update_enum_exercise_categories_many?: Maybe<Array<Maybe<Enum_Exercise_Categories_Mutation_Response>>>;
  /** update data of the table: "enum_languages" */
  update_enum_languages?: Maybe<Enum_Languages_Mutation_Response>;
  /** update single row of the table: "enum_languages" */
  update_enum_languages_by_pk?: Maybe<Enum_Languages>;
  /** update multiples rows of table: "enum_languages" */
  update_enum_languages_many?: Maybe<Array<Maybe<Enum_Languages_Mutation_Response>>>;
  /** update data of the table: "enum_sport" */
  update_enum_sport?: Maybe<Enum_Sport_Mutation_Response>;
  /** update single row of the table: "enum_sport" */
  update_enum_sport_by_pk?: Maybe<Enum_Sport>;
  /** update multiples rows of table: "enum_sport" */
  update_enum_sport_many?: Maybe<Array<Maybe<Enum_Sport_Mutation_Response>>>;
  /** update data of the table: "exercise" */
  update_exercise?: Maybe<Exercise_Mutation_Response>;
  /** update single row of the table: "exercise" */
  update_exercise_by_pk?: Maybe<Exercise>;
  /** update data of the table: "exercise_club_mn" */
  update_exercise_club_mn?: Maybe<Exercise_Club_Mn_Mutation_Response>;
  /** update single row of the table: "exercise_club_mn" */
  update_exercise_club_mn_by_pk?: Maybe<Exercise_Club_Mn>;
  /** update multiples rows of table: "exercise_club_mn" */
  update_exercise_club_mn_many?: Maybe<Array<Maybe<Exercise_Club_Mn_Mutation_Response>>>;
  /** update data of the table: "exercise_content_media" */
  update_exercise_content_media?: Maybe<Exercise_Content_Media_Mutation_Response>;
  /** update single row of the table: "exercise_content_media" */
  update_exercise_content_media_by_pk?: Maybe<Exercise_Content_Media>;
  /** update data of the table: "exercise_content_media_editor" */
  update_exercise_content_media_editor?: Maybe<Exercise_Content_Media_Editor_Mutation_Response>;
  /** update single row of the table: "exercise_content_media_editor" */
  update_exercise_content_media_editor_by_pk?: Maybe<Exercise_Content_Media_Editor>;
  /** update multiples rows of table: "exercise_content_media_editor" */
  update_exercise_content_media_editor_many?: Maybe<Array<Maybe<Exercise_Content_Media_Editor_Mutation_Response>>>;
  /** update multiples rows of table: "exercise_content_media" */
  update_exercise_content_media_many?: Maybe<Array<Maybe<Exercise_Content_Media_Mutation_Response>>>;
  /** update data of the table: "exercise_content_media_mn" */
  update_exercise_content_media_mn?: Maybe<Exercise_Content_Media_Mn_Mutation_Response>;
  /** update single row of the table: "exercise_content_media_mn" */
  update_exercise_content_media_mn_by_pk?: Maybe<Exercise_Content_Media_Mn>;
  /** update multiples rows of table: "exercise_content_media_mn" */
  update_exercise_content_media_mn_many?: Maybe<Array<Maybe<Exercise_Content_Media_Mn_Mutation_Response>>>;
  /** update data of the table: "exercise_content_media_type" */
  update_exercise_content_media_type?: Maybe<Exercise_Content_Media_Type_Mutation_Response>;
  /** update single row of the table: "exercise_content_media_type" */
  update_exercise_content_media_type_by_pk?: Maybe<Exercise_Content_Media_Type>;
  /** update multiples rows of table: "exercise_content_media_type" */
  update_exercise_content_media_type_many?: Maybe<Array<Maybe<Exercise_Content_Media_Type_Mutation_Response>>>;
  /** update multiples rows of table: "exercise" */
  update_exercise_many?: Maybe<Array<Maybe<Exercise_Mutation_Response>>>;
  /** update data of the table: "exercise_taxonomy" */
  update_exercise_taxonomy?: Maybe<Exercise_Taxonomy_Mutation_Response>;
  /** update single row of the table: "exercise_taxonomy" */
  update_exercise_taxonomy_by_pk?: Maybe<Exercise_Taxonomy>;
  /** update multiples rows of table: "exercise_taxonomy" */
  update_exercise_taxonomy_many?: Maybe<Array<Maybe<Exercise_Taxonomy_Mutation_Response>>>;
  /** update data of the table: "exercise_taxonomy_mn" */
  update_exercise_taxonomy_mn?: Maybe<Exercise_Taxonomy_Mn_Mutation_Response>;
  /** update single row of the table: "exercise_taxonomy_mn" */
  update_exercise_taxonomy_mn_by_pk?: Maybe<Exercise_Taxonomy_Mn>;
  /** update multiples rows of table: "exercise_taxonomy_mn" */
  update_exercise_taxonomy_mn_many?: Maybe<Array<Maybe<Exercise_Taxonomy_Mn_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "license" */
  update_license?: Maybe<License_Mutation_Response>;
  /** update single row of the table: "license" */
  update_license_by_pk?: Maybe<License>;
  /** update multiples rows of table: "license" */
  update_license_many?: Maybe<Array<Maybe<License_Mutation_Response>>>;
  /** update data of the table: "member" */
  update_member?: Maybe<Member_Mutation_Response>;
  /** update single row of the table: "member" */
  update_member_by_pk?: Maybe<Member>;
  /** update data of the table: "member_group" */
  update_member_group?: Maybe<Member_Group_Mutation_Response>;
  /** update single row of the table: "member_group" */
  update_member_group_by_pk?: Maybe<Member_Group>;
  /** update multiples rows of table: "member_group" */
  update_member_group_many?: Maybe<Array<Maybe<Member_Group_Mutation_Response>>>;
  /** update data of the table: "member_group_mn" */
  update_member_group_mn?: Maybe<Member_Group_Mn_Mutation_Response>;
  /** update single row of the table: "member_group_mn" */
  update_member_group_mn_by_pk?: Maybe<Member_Group_Mn>;
  /** update multiples rows of table: "member_group_mn" */
  update_member_group_mn_many?: Maybe<Array<Maybe<Member_Group_Mn_Mutation_Response>>>;
  /** update multiples rows of table: "member" */
  update_member_many?: Maybe<Array<Maybe<Member_Mutation_Response>>>;
  /** update data of the table: "payment" */
  update_payment?: Maybe<Payment_Mutation_Response>;
  /** update single row of the table: "payment" */
  update_payment_by_pk?: Maybe<Payment>;
  /** update multiples rows of table: "payment" */
  update_payment_many?: Maybe<Array<Maybe<Payment_Mutation_Response>>>;
  /** update data of the table: "s3_file" */
  update_s3_file?: Maybe<S3_File_Mutation_Response>;
  /** update single row of the table: "s3_file" */
  update_s3_file_by_pk?: Maybe<S3_File>;
  /** update multiples rows of table: "s3_file" */
  update_s3_file_many?: Maybe<Array<Maybe<S3_File_Mutation_Response>>>;
  /** update data of the table: "team" */
  update_team?: Maybe<Team_Mutation_Response>;
  /** update single row of the table: "team" */
  update_team_by_pk?: Maybe<Team>;
  /** update multiples rows of table: "team" */
  update_team_many?: Maybe<Array<Maybe<Team_Mutation_Response>>>;
  /** update data of the table: "test" */
  update_test?: Maybe<Test_Mutation_Response>;
  /** update single row of the table: "test" */
  update_test_by_pk?: Maybe<Test>;
  /** update multiples rows of table: "test" */
  update_test_many?: Maybe<Array<Maybe<Test_Mutation_Response>>>;
  /** update data of the table: "user_permission" */
  update_user_permission?: Maybe<User_Permission_Mutation_Response>;
  /** update single row of the table: "user_permission" */
  update_user_permission_by_pk?: Maybe<User_Permission>;
  /** update multiples rows of table: "user_permission" */
  update_user_permission_many?: Maybe<Array<Maybe<User_Permission_Mutation_Response>>>;
  /** update data of the table: "user_permission_role" */
  update_user_permission_role?: Maybe<User_Permission_Role_Mutation_Response>;
  /** update single row of the table: "user_permission_role" */
  update_user_permission_role_by_pk?: Maybe<User_Permission_Role>;
  /** update multiples rows of table: "user_permission_role" */
  update_user_permission_role_many?: Maybe<Array<Maybe<User_Permission_Role_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "users_old" */
  update_users_old?: Maybe<Users_Old_Mutation_Response>;
  /** update single row of the table: "users_old" */
  update_users_old_by_pk?: Maybe<Users_Old>;
  /** update multiples rows of table: "users_old" */
  update_users_old_many?: Maybe<Array<Maybe<Users_Old_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserAuthenticatorsArgs = {
  where: AuthUserAuthenticators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ClubArgs = {
  where: Club_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Club_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Editor_TypeArgs = {
  where: Editor_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Editor_Type_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Enum_Exercise_CategoriesArgs = {
  where: Enum_Exercise_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Enum_Exercise_Categories_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Enum_LanguagesArgs = {
  where: Enum_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Enum_Languages_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Enum_SportArgs = {
  where: Enum_Sport_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Enum_Sport_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ExerciseArgs = {
  where: Exercise_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Club_MnArgs = {
  where: Exercise_Club_Mn_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Club_Mn_By_PkArgs = {
  club_id: Scalars['String'];
  exercise_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Content_MediaArgs = {
  where: Exercise_Content_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Content_Media_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Content_Media_EditorArgs = {
  where: Exercise_Content_Media_Editor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Content_Media_Editor_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Content_Media_MnArgs = {
  where: Exercise_Content_Media_Mn_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Content_Media_Mn_By_PkArgs = {
  exercise_content_media_id: Scalars['String'];
  exercise_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Content_Media_TypeArgs = {
  where: Exercise_Content_Media_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Content_Media_Type_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Exercise_TaxonomyArgs = {
  where: Exercise_Taxonomy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Taxonomy_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Taxonomy_MnArgs = {
  where: Exercise_Taxonomy_Mn_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Taxonomy_Mn_By_PkArgs = {
  exercise_id: Scalars['String'];
  taxonomy_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_LicenseArgs = {
  where: License_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_License_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MemberArgs = {
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Member_GroupArgs = {
  where: Member_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Group_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Member_Group_MnArgs = {
  where: Member_Group_Mn_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Group_Mn_By_PkArgs = {
  group_id: Scalars['String'];
  member_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PaymentArgs = {
  where: Payment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_S3_FileArgs = {
  where: S3_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_S3_File_By_PkArgs = {
  s3key: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TeamArgs = {
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TestArgs = {
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_PermissionArgs = {
  where: User_Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Permission_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_Permission_RoleArgs = {
  where: User_Permission_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Permission_Role_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Users_OldArgs = {
  where: Users_Old_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Old_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserAuthenticatorArgs = {
  object: AuthUserAuthenticators_Insert_Input;
  on_conflict?: InputMaybe<AuthUserAuthenticators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserAuthenticatorsArgs = {
  objects: Array<AuthUserAuthenticators_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserAuthenticators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ClubArgs = {
  objects: Array<Club_Insert_Input>;
  on_conflict?: InputMaybe<Club_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_OneArgs = {
  object: Club_Insert_Input;
  on_conflict?: InputMaybe<Club_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Editor_TypeArgs = {
  objects: Array<Editor_Type_Insert_Input>;
  on_conflict?: InputMaybe<Editor_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Editor_Type_OneArgs = {
  object: Editor_Type_Insert_Input;
  on_conflict?: InputMaybe<Editor_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Enum_Exercise_CategoriesArgs = {
  objects: Array<Enum_Exercise_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Enum_Exercise_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Enum_Exercise_Categories_OneArgs = {
  object: Enum_Exercise_Categories_Insert_Input;
  on_conflict?: InputMaybe<Enum_Exercise_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Enum_LanguagesArgs = {
  objects: Array<Enum_Languages_Insert_Input>;
  on_conflict?: InputMaybe<Enum_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Enum_Languages_OneArgs = {
  object: Enum_Languages_Insert_Input;
  on_conflict?: InputMaybe<Enum_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Enum_SportArgs = {
  objects: Array<Enum_Sport_Insert_Input>;
  on_conflict?: InputMaybe<Enum_Sport_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Enum_Sport_OneArgs = {
  object: Enum_Sport_Insert_Input;
  on_conflict?: InputMaybe<Enum_Sport_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExerciseArgs = {
  objects: Array<Exercise_Insert_Input>;
  on_conflict?: InputMaybe<Exercise_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Club_MnArgs = {
  objects: Array<Exercise_Club_Mn_Insert_Input>;
  on_conflict?: InputMaybe<Exercise_Club_Mn_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Club_Mn_OneArgs = {
  object: Exercise_Club_Mn_Insert_Input;
  on_conflict?: InputMaybe<Exercise_Club_Mn_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Content_MediaArgs = {
  objects: Array<Exercise_Content_Media_Insert_Input>;
  on_conflict?: InputMaybe<Exercise_Content_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Content_Media_EditorArgs = {
  objects: Array<Exercise_Content_Media_Editor_Insert_Input>;
  on_conflict?: InputMaybe<Exercise_Content_Media_Editor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Content_Media_Editor_OneArgs = {
  object: Exercise_Content_Media_Editor_Insert_Input;
  on_conflict?: InputMaybe<Exercise_Content_Media_Editor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Content_Media_MnArgs = {
  objects: Array<Exercise_Content_Media_Mn_Insert_Input>;
  on_conflict?: InputMaybe<Exercise_Content_Media_Mn_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Content_Media_Mn_OneArgs = {
  object: Exercise_Content_Media_Mn_Insert_Input;
  on_conflict?: InputMaybe<Exercise_Content_Media_Mn_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Content_Media_OneArgs = {
  object: Exercise_Content_Media_Insert_Input;
  on_conflict?: InputMaybe<Exercise_Content_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Content_Media_TypeArgs = {
  objects: Array<Exercise_Content_Media_Type_Insert_Input>;
  on_conflict?: InputMaybe<Exercise_Content_Media_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Content_Media_Type_OneArgs = {
  object: Exercise_Content_Media_Type_Insert_Input;
  on_conflict?: InputMaybe<Exercise_Content_Media_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_OneArgs = {
  object: Exercise_Insert_Input;
  on_conflict?: InputMaybe<Exercise_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_TaxonomyArgs = {
  objects: Array<Exercise_Taxonomy_Insert_Input>;
  on_conflict?: InputMaybe<Exercise_Taxonomy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Taxonomy_MnArgs = {
  objects: Array<Exercise_Taxonomy_Mn_Insert_Input>;
  on_conflict?: InputMaybe<Exercise_Taxonomy_Mn_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Taxonomy_Mn_OneArgs = {
  object: Exercise_Taxonomy_Mn_Insert_Input;
  on_conflict?: InputMaybe<Exercise_Taxonomy_Mn_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Taxonomy_OneArgs = {
  object: Exercise_Taxonomy_Insert_Input;
  on_conflict?: InputMaybe<Exercise_Taxonomy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LicenseArgs = {
  objects: Array<License_Insert_Input>;
  on_conflict?: InputMaybe<License_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_License_OneArgs = {
  object: License_Insert_Input;
  on_conflict?: InputMaybe<License_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberArgs = {
  objects: Array<Member_Insert_Input>;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_GroupArgs = {
  objects: Array<Member_Group_Insert_Input>;
  on_conflict?: InputMaybe<Member_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Group_MnArgs = {
  objects: Array<Member_Group_Mn_Insert_Input>;
  on_conflict?: InputMaybe<Member_Group_Mn_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Group_Mn_OneArgs = {
  object: Member_Group_Mn_Insert_Input;
  on_conflict?: InputMaybe<Member_Group_Mn_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Group_OneArgs = {
  object: Member_Group_Insert_Input;
  on_conflict?: InputMaybe<Member_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_OneArgs = {
  object: Member_Insert_Input;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PaymentArgs = {
  objects: Array<Payment_Insert_Input>;
  on_conflict?: InputMaybe<Payment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_OneArgs = {
  object: Payment_Insert_Input;
  on_conflict?: InputMaybe<Payment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_S3_FileArgs = {
  objects: Array<S3_File_Insert_Input>;
  on_conflict?: InputMaybe<S3_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_S3_File_OneArgs = {
  object: S3_File_Insert_Input;
  on_conflict?: InputMaybe<S3_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamArgs = {
  objects: Array<Team_Insert_Input>;
  on_conflict?: InputMaybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_OneArgs = {
  object: Team_Insert_Input;
  on_conflict?: InputMaybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TestArgs = {
  objects: Array<Test_Insert_Input>;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_OneArgs = {
  object: Test_Insert_Input;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_PermissionArgs = {
  objects: Array<User_Permission_Insert_Input>;
  on_conflict?: InputMaybe<User_Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Permission_OneArgs = {
  object: User_Permission_Insert_Input;
  on_conflict?: InputMaybe<User_Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Permission_RoleArgs = {
  objects: Array<User_Permission_Role_Insert_Input>;
  on_conflict?: InputMaybe<User_Permission_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Permission_Role_OneArgs = {
  object: User_Permission_Role_Insert_Input;
  on_conflict?: InputMaybe<User_Permission_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OldArgs = {
  objects: Array<Users_Old_Insert_Input>;
  on_conflict?: InputMaybe<Users_Old_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Old_OneArgs = {
  object: Users_Old_Insert_Input;
  on_conflict?: InputMaybe<Users_Old_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserAuthenticatorArgs = {
  _inc?: InputMaybe<AuthUserAuthenticators_Inc_Input>;
  _set?: InputMaybe<AuthUserAuthenticators_Set_Input>;
  pk_columns: AuthUserAuthenticators_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserAuthenticatorsArgs = {
  _inc?: InputMaybe<AuthUserAuthenticators_Inc_Input>;
  _set?: InputMaybe<AuthUserAuthenticators_Set_Input>;
  where: AuthUserAuthenticators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserAuthenticators_ManyArgs = {
  updates: Array<AuthUserAuthenticators_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ClubArgs = {
  _set?: InputMaybe<Club_Set_Input>;
  where: Club_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Club_By_PkArgs = {
  _set?: InputMaybe<Club_Set_Input>;
  pk_columns: Club_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Club_ManyArgs = {
  updates: Array<Club_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Editor_TypeArgs = {
  _set?: InputMaybe<Editor_Type_Set_Input>;
  where: Editor_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Editor_Type_By_PkArgs = {
  _set?: InputMaybe<Editor_Type_Set_Input>;
  pk_columns: Editor_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Editor_Type_ManyArgs = {
  updates: Array<Editor_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_Exercise_CategoriesArgs = {
  _set?: InputMaybe<Enum_Exercise_Categories_Set_Input>;
  where: Enum_Exercise_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_Exercise_Categories_By_PkArgs = {
  _set?: InputMaybe<Enum_Exercise_Categories_Set_Input>;
  pk_columns: Enum_Exercise_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_Exercise_Categories_ManyArgs = {
  updates: Array<Enum_Exercise_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_LanguagesArgs = {
  _set?: InputMaybe<Enum_Languages_Set_Input>;
  where: Enum_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_Languages_By_PkArgs = {
  _set?: InputMaybe<Enum_Languages_Set_Input>;
  pk_columns: Enum_Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_Languages_ManyArgs = {
  updates: Array<Enum_Languages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_SportArgs = {
  _set?: InputMaybe<Enum_Sport_Set_Input>;
  where: Enum_Sport_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_Sport_By_PkArgs = {
  _set?: InputMaybe<Enum_Sport_Set_Input>;
  pk_columns: Enum_Sport_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_Sport_ManyArgs = {
  updates: Array<Enum_Sport_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ExerciseArgs = {
  _inc?: InputMaybe<Exercise_Inc_Input>;
  _set?: InputMaybe<Exercise_Set_Input>;
  where: Exercise_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_By_PkArgs = {
  _inc?: InputMaybe<Exercise_Inc_Input>;
  _set?: InputMaybe<Exercise_Set_Input>;
  pk_columns: Exercise_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Club_MnArgs = {
  _set?: InputMaybe<Exercise_Club_Mn_Set_Input>;
  where: Exercise_Club_Mn_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Club_Mn_By_PkArgs = {
  _set?: InputMaybe<Exercise_Club_Mn_Set_Input>;
  pk_columns: Exercise_Club_Mn_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Club_Mn_ManyArgs = {
  updates: Array<Exercise_Club_Mn_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_MediaArgs = {
  _set?: InputMaybe<Exercise_Content_Media_Set_Input>;
  where: Exercise_Content_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_By_PkArgs = {
  _set?: InputMaybe<Exercise_Content_Media_Set_Input>;
  pk_columns: Exercise_Content_Media_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_EditorArgs = {
  _append?: InputMaybe<Exercise_Content_Media_Editor_Append_Input>;
  _delete_at_path?: InputMaybe<Exercise_Content_Media_Editor_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Exercise_Content_Media_Editor_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Exercise_Content_Media_Editor_Delete_Key_Input>;
  _prepend?: InputMaybe<Exercise_Content_Media_Editor_Prepend_Input>;
  _set?: InputMaybe<Exercise_Content_Media_Editor_Set_Input>;
  where: Exercise_Content_Media_Editor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_Editor_By_PkArgs = {
  _append?: InputMaybe<Exercise_Content_Media_Editor_Append_Input>;
  _delete_at_path?: InputMaybe<Exercise_Content_Media_Editor_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Exercise_Content_Media_Editor_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Exercise_Content_Media_Editor_Delete_Key_Input>;
  _prepend?: InputMaybe<Exercise_Content_Media_Editor_Prepend_Input>;
  _set?: InputMaybe<Exercise_Content_Media_Editor_Set_Input>;
  pk_columns: Exercise_Content_Media_Editor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_Editor_ManyArgs = {
  updates: Array<Exercise_Content_Media_Editor_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_ManyArgs = {
  updates: Array<Exercise_Content_Media_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_MnArgs = {
  _inc?: InputMaybe<Exercise_Content_Media_Mn_Inc_Input>;
  _set?: InputMaybe<Exercise_Content_Media_Mn_Set_Input>;
  where: Exercise_Content_Media_Mn_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_Mn_By_PkArgs = {
  _inc?: InputMaybe<Exercise_Content_Media_Mn_Inc_Input>;
  _set?: InputMaybe<Exercise_Content_Media_Mn_Set_Input>;
  pk_columns: Exercise_Content_Media_Mn_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_Mn_ManyArgs = {
  updates: Array<Exercise_Content_Media_Mn_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_TypeArgs = {
  _set?: InputMaybe<Exercise_Content_Media_Type_Set_Input>;
  where: Exercise_Content_Media_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_Type_By_PkArgs = {
  _set?: InputMaybe<Exercise_Content_Media_Type_Set_Input>;
  pk_columns: Exercise_Content_Media_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Content_Media_Type_ManyArgs = {
  updates: Array<Exercise_Content_Media_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_ManyArgs = {
  updates: Array<Exercise_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_TaxonomyArgs = {
  _set?: InputMaybe<Exercise_Taxonomy_Set_Input>;
  where: Exercise_Taxonomy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Taxonomy_By_PkArgs = {
  _set?: InputMaybe<Exercise_Taxonomy_Set_Input>;
  pk_columns: Exercise_Taxonomy_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Taxonomy_ManyArgs = {
  updates: Array<Exercise_Taxonomy_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Taxonomy_MnArgs = {
  _set?: InputMaybe<Exercise_Taxonomy_Mn_Set_Input>;
  where: Exercise_Taxonomy_Mn_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Taxonomy_Mn_By_PkArgs = {
  _set?: InputMaybe<Exercise_Taxonomy_Mn_Set_Input>;
  pk_columns: Exercise_Taxonomy_Mn_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Taxonomy_Mn_ManyArgs = {
  updates: Array<Exercise_Taxonomy_Mn_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LicenseArgs = {
  _set?: InputMaybe<License_Set_Input>;
  where: License_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_License_By_PkArgs = {
  _set?: InputMaybe<License_Set_Input>;
  pk_columns: License_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_License_ManyArgs = {
  updates: Array<License_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberArgs = {
  _set?: InputMaybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_By_PkArgs = {
  _set?: InputMaybe<Member_Set_Input>;
  pk_columns: Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_GroupArgs = {
  _set?: InputMaybe<Member_Group_Set_Input>;
  where: Member_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Group_By_PkArgs = {
  _set?: InputMaybe<Member_Group_Set_Input>;
  pk_columns: Member_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Group_ManyArgs = {
  updates: Array<Member_Group_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Group_MnArgs = {
  _set?: InputMaybe<Member_Group_Mn_Set_Input>;
  where: Member_Group_Mn_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Group_Mn_By_PkArgs = {
  _set?: InputMaybe<Member_Group_Mn_Set_Input>;
  pk_columns: Member_Group_Mn_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Group_Mn_ManyArgs = {
  updates: Array<Member_Group_Mn_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_ManyArgs = {
  updates: Array<Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentArgs = {
  _set?: InputMaybe<Payment_Set_Input>;
  where: Payment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_By_PkArgs = {
  _set?: InputMaybe<Payment_Set_Input>;
  pk_columns: Payment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_ManyArgs = {
  updates: Array<Payment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_S3_FileArgs = {
  _inc?: InputMaybe<S3_File_Inc_Input>;
  _set?: InputMaybe<S3_File_Set_Input>;
  where: S3_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_S3_File_By_PkArgs = {
  _inc?: InputMaybe<S3_File_Inc_Input>;
  _set?: InputMaybe<S3_File_Set_Input>;
  pk_columns: S3_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_S3_File_ManyArgs = {
  updates: Array<S3_File_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TeamArgs = {
  _set?: InputMaybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_By_PkArgs = {
  _set?: InputMaybe<Team_Set_Input>;
  pk_columns: Team_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_ManyArgs = {
  updates: Array<Team_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TestArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_By_PkArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  pk_columns: Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Test_ManyArgs = {
  updates: Array<Test_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_PermissionArgs = {
  _inc?: InputMaybe<User_Permission_Inc_Input>;
  _set?: InputMaybe<User_Permission_Set_Input>;
  where: User_Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Permission_By_PkArgs = {
  _inc?: InputMaybe<User_Permission_Inc_Input>;
  _set?: InputMaybe<User_Permission_Set_Input>;
  pk_columns: User_Permission_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Permission_ManyArgs = {
  updates: Array<User_Permission_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Permission_RoleArgs = {
  _set?: InputMaybe<User_Permission_Role_Set_Input>;
  where: User_Permission_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Permission_Role_By_PkArgs = {
  _set?: InputMaybe<User_Permission_Role_Set_Input>;
  pk_columns: User_Permission_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Permission_Role_ManyArgs = {
  updates: Array<User_Permission_Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_OldArgs = {
  _set?: InputMaybe<Users_Old_Set_Input>;
  where: Users_Old_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Old_By_PkArgs = {
  _set?: InputMaybe<Users_Old_Set_Input>;
  pk_columns: Users_Old_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Old_ManyArgs = {
  updates: Array<Users_Old_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "payment" */
export type Payment = {
  __typename?: 'payment';
  active?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  club: Club;
  club_id: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  fastspring_id?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  is_trial?: Maybe<Scalars['Boolean']>;
  license?: Maybe<License_Enum>;
  /** An object relationship */
  licenseByLicense?: Maybe<License>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  valid_until?: Maybe<Scalars['date']>;
};

/** aggregated selection of "payment" */
export type Payment_Aggregate = {
  __typename?: 'payment_aggregate';
  aggregate?: Maybe<Payment_Aggregate_Fields>;
  nodes: Array<Payment>;
};

/** aggregate fields of "payment" */
export type Payment_Aggregate_Fields = {
  __typename?: 'payment_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Payment_Max_Fields>;
  min?: Maybe<Payment_Min_Fields>;
};


/** aggregate fields of "payment" */
export type Payment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "payment" */
export type Payment_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Payment_Max_Order_By>;
  min?: InputMaybe<Payment_Min_Order_By>;
};

/** input type for inserting array relation for remote table "payment" */
export type Payment_Arr_Rel_Insert_Input = {
  data: Array<Payment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Payment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "payment". All fields are combined with a logical 'AND'. */
export type Payment_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Bool_Exp>>;
  _not?: InputMaybe<Payment_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  club?: InputMaybe<Club_Bool_Exp>;
  club_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fastspring_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_trial?: InputMaybe<Boolean_Comparison_Exp>;
  license?: InputMaybe<License_Enum_Comparison_Exp>;
  licenseByLicense?: InputMaybe<License_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  valid_until?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment" */
export enum Payment_Constraint {
  /** unique or primary key constraint on columns "fastspring_id" */
  PaymentFastspringIdKey = 'payment_fastspring_id_key',
  /** unique or primary key constraint on columns "id" */
  PaymentPkey = 'payment_pkey'
}

/** input type for inserting data into table "payment" */
export type Payment_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  club?: InputMaybe<Club_Obj_Rel_Insert_Input>;
  club_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  fastspring_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_trial?: InputMaybe<Scalars['Boolean']>;
  license?: InputMaybe<License_Enum>;
  licenseByLicense?: InputMaybe<License_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  valid_until?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Payment_Max_Fields = {
  __typename?: 'payment_max_fields';
  club_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  fastspring_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  valid_until?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "payment" */
export type Payment_Max_Order_By = {
  club_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fastspring_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  valid_until?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Min_Fields = {
  __typename?: 'payment_min_fields';
  club_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  fastspring_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  valid_until?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "payment" */
export type Payment_Min_Order_By = {
  club_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fastspring_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  valid_until?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "payment" */
export type Payment_Mutation_Response = {
  __typename?: 'payment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment>;
};

/** on_conflict condition type for table "payment" */
export type Payment_On_Conflict = {
  constraint: Payment_Constraint;
  update_columns?: Array<Payment_Update_Column>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** Ordering options when selecting data from "payment". */
export type Payment_Order_By = {
  active?: InputMaybe<Order_By>;
  club?: InputMaybe<Club_Order_By>;
  club_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fastspring_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_trial?: InputMaybe<Order_By>;
  license?: InputMaybe<Order_By>;
  licenseByLicense?: InputMaybe<License_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  valid_until?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment */
export type Payment_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "payment" */
export enum Payment_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FastspringId = 'fastspring_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsTrial = 'is_trial',
  /** column name */
  License = 'license',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ValidUntil = 'valid_until'
}

/** input type for updating data in table "payment" */
export type Payment_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  club_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  fastspring_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_trial?: InputMaybe<Scalars['Boolean']>;
  license?: InputMaybe<License_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  valid_until?: InputMaybe<Scalars['date']>;
};

/** update columns of table "payment" */
export enum Payment_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FastspringId = 'fastspring_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsTrial = 'is_trial',
  /** column name */
  License = 'license',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ValidUntil = 'valid_until'
}

export type Payment_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_Set_Input>;
  where: Payment_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_authenticators" using primary key columns */
  authUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_authenticators" */
  authUserAuthenticators: Array<AuthUserAuthenticators>;
  /** fetch aggregated fields from the table: "auth.user_authenticators" */
  authUserAuthenticatorsAggregate: AuthUserAuthenticators_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "club" */
  club: Array<Club>;
  /** fetch aggregated fields from the table: "club" */
  club_aggregate: Club_Aggregate;
  /** fetch data from the table: "club" using primary key columns */
  club_by_pk?: Maybe<Club>;
  /** fetch data from the table: "editor_type" */
  editor_type: Array<Editor_Type>;
  /** fetch aggregated fields from the table: "editor_type" */
  editor_type_aggregate: Editor_Type_Aggregate;
  /** fetch data from the table: "editor_type" using primary key columns */
  editor_type_by_pk?: Maybe<Editor_Type>;
  /** fetch data from the table: "enum_exercise_categories" */
  enum_exercise_categories: Array<Enum_Exercise_Categories>;
  /** fetch aggregated fields from the table: "enum_exercise_categories" */
  enum_exercise_categories_aggregate: Enum_Exercise_Categories_Aggregate;
  /** fetch data from the table: "enum_exercise_categories" using primary key columns */
  enum_exercise_categories_by_pk?: Maybe<Enum_Exercise_Categories>;
  /** fetch data from the table: "enum_languages" */
  enum_languages: Array<Enum_Languages>;
  /** fetch aggregated fields from the table: "enum_languages" */
  enum_languages_aggregate: Enum_Languages_Aggregate;
  /** fetch data from the table: "enum_languages" using primary key columns */
  enum_languages_by_pk?: Maybe<Enum_Languages>;
  /** fetch data from the table: "enum_sport" */
  enum_sport: Array<Enum_Sport>;
  /** fetch aggregated fields from the table: "enum_sport" */
  enum_sport_aggregate: Enum_Sport_Aggregate;
  /** fetch data from the table: "enum_sport" using primary key columns */
  enum_sport_by_pk?: Maybe<Enum_Sport>;
  /** fetch data from the table: "exercise" */
  exercise: Array<Exercise>;
  /** fetch aggregated fields from the table: "exercise" */
  exercise_aggregate: Exercise_Aggregate;
  /** fetch data from the table: "exercise" using primary key columns */
  exercise_by_pk?: Maybe<Exercise>;
  /** fetch data from the table: "exercise_club_mn" */
  exercise_club_mn: Array<Exercise_Club_Mn>;
  /** fetch aggregated fields from the table: "exercise_club_mn" */
  exercise_club_mn_aggregate: Exercise_Club_Mn_Aggregate;
  /** fetch data from the table: "exercise_club_mn" using primary key columns */
  exercise_club_mn_by_pk?: Maybe<Exercise_Club_Mn>;
  /** An array relationship */
  exercise_content_media: Array<Exercise_Content_Media>;
  /** An aggregate relationship */
  exercise_content_media_aggregate: Exercise_Content_Media_Aggregate;
  /** fetch data from the table: "exercise_content_media" using primary key columns */
  exercise_content_media_by_pk?: Maybe<Exercise_Content_Media>;
  /** fetch data from the table: "exercise_content_media_editor" */
  exercise_content_media_editor: Array<Exercise_Content_Media_Editor>;
  /** fetch aggregated fields from the table: "exercise_content_media_editor" */
  exercise_content_media_editor_aggregate: Exercise_Content_Media_Editor_Aggregate;
  /** fetch data from the table: "exercise_content_media_editor" using primary key columns */
  exercise_content_media_editor_by_pk?: Maybe<Exercise_Content_Media_Editor>;
  /** fetch data from the table: "exercise_content_media_mn" */
  exercise_content_media_mn: Array<Exercise_Content_Media_Mn>;
  /** fetch aggregated fields from the table: "exercise_content_media_mn" */
  exercise_content_media_mn_aggregate: Exercise_Content_Media_Mn_Aggregate;
  /** fetch data from the table: "exercise_content_media_mn" using primary key columns */
  exercise_content_media_mn_by_pk?: Maybe<Exercise_Content_Media_Mn>;
  /** fetch data from the table: "exercise_content_media_type" */
  exercise_content_media_type: Array<Exercise_Content_Media_Type>;
  /** fetch aggregated fields from the table: "exercise_content_media_type" */
  exercise_content_media_type_aggregate: Exercise_Content_Media_Type_Aggregate;
  /** fetch data from the table: "exercise_content_media_type" using primary key columns */
  exercise_content_media_type_by_pk?: Maybe<Exercise_Content_Media_Type>;
  /** fetch data from the table: "exercise_taxonomy" */
  exercise_taxonomy: Array<Exercise_Taxonomy>;
  /** fetch aggregated fields from the table: "exercise_taxonomy" */
  exercise_taxonomy_aggregate: Exercise_Taxonomy_Aggregate;
  /** fetch data from the table: "exercise_taxonomy" using primary key columns */
  exercise_taxonomy_by_pk?: Maybe<Exercise_Taxonomy>;
  /** fetch data from the table: "exercise_taxonomy_mn" */
  exercise_taxonomy_mn: Array<Exercise_Taxonomy_Mn>;
  /** fetch aggregated fields from the table: "exercise_taxonomy_mn" */
  exercise_taxonomy_mn_aggregate: Exercise_Taxonomy_Mn_Aggregate;
  /** fetch data from the table: "exercise_taxonomy_mn" using primary key columns */
  exercise_taxonomy_mn_by_pk?: Maybe<Exercise_Taxonomy_Mn>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "license" */
  license: Array<License>;
  /** fetch aggregated fields from the table: "license" */
  license_aggregate: License_Aggregate;
  /** fetch data from the table: "license" using primary key columns */
  license_by_pk?: Maybe<License>;
  /** fetch data from the table: "member" */
  member: Array<Member>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: Member_Aggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<Member>;
  /** fetch data from the table: "member_group" */
  member_group: Array<Member_Group>;
  /** fetch aggregated fields from the table: "member_group" */
  member_group_aggregate: Member_Group_Aggregate;
  /** fetch data from the table: "member_group" using primary key columns */
  member_group_by_pk?: Maybe<Member_Group>;
  /** fetch data from the table: "member_group_mn" */
  member_group_mn: Array<Member_Group_Mn>;
  /** fetch aggregated fields from the table: "member_group_mn" */
  member_group_mn_aggregate: Member_Group_Mn_Aggregate;
  /** fetch data from the table: "member_group_mn" using primary key columns */
  member_group_mn_by_pk?: Maybe<Member_Group_Mn>;
  /** fetch data from the table: "payment" */
  payment: Array<Payment>;
  /** fetch aggregated fields from the table: "payment" */
  payment_aggregate: Payment_Aggregate;
  /** fetch data from the table: "payment" using primary key columns */
  payment_by_pk?: Maybe<Payment>;
  /** fetch data from the table: "s3_file" */
  s3_file: Array<S3_File>;
  /** fetch aggregated fields from the table: "s3_file" */
  s3_file_aggregate: S3_File_Aggregate;
  /** fetch data from the table: "s3_file" using primary key columns */
  s3_file_by_pk?: Maybe<S3_File>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_permission" */
  user_permission: Array<User_Permission>;
  /** fetch aggregated fields from the table: "user_permission" */
  user_permission_aggregate: User_Permission_Aggregate;
  /** fetch data from the table: "user_permission" using primary key columns */
  user_permission_by_pk?: Maybe<User_Permission>;
  /** fetch data from the table: "user_permission_role" */
  user_permission_role: Array<User_Permission_Role>;
  /** fetch aggregated fields from the table: "user_permission_role" */
  user_permission_role_aggregate: User_Permission_Role_Aggregate;
  /** fetch data from the table: "user_permission_role" using primary key columns */
  user_permission_role_by_pk?: Maybe<User_Permission_Role>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "users_old" */
  users_old: Array<Users_Old>;
  /** fetch aggregated fields from the table: "users_old" */
  users_old_aggregate: Users_Old_Aggregate;
  /** fetch data from the table: "users_old" using primary key columns */
  users_old_by_pk?: Maybe<Users_Old>;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


export type Query_RootAuthUserAuthenticatorsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootClubArgs = {
  distinct_on?: InputMaybe<Array<Club_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Order_By>>;
  where?: InputMaybe<Club_Bool_Exp>;
};


export type Query_RootClub_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Order_By>>;
  where?: InputMaybe<Club_Bool_Exp>;
};


export type Query_RootClub_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootEditor_TypeArgs = {
  distinct_on?: InputMaybe<Array<Editor_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Editor_Type_Order_By>>;
  where?: InputMaybe<Editor_Type_Bool_Exp>;
};


export type Query_RootEditor_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Editor_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Editor_Type_Order_By>>;
  where?: InputMaybe<Editor_Type_Bool_Exp>;
};


export type Query_RootEditor_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootEnum_Exercise_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Enum_Exercise_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Exercise_Categories_Order_By>>;
  where?: InputMaybe<Enum_Exercise_Categories_Bool_Exp>;
};


export type Query_RootEnum_Exercise_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Enum_Exercise_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Exercise_Categories_Order_By>>;
  where?: InputMaybe<Enum_Exercise_Categories_Bool_Exp>;
};


export type Query_RootEnum_Exercise_Categories_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootEnum_LanguagesArgs = {
  distinct_on?: InputMaybe<Array<Enum_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Languages_Order_By>>;
  where?: InputMaybe<Enum_Languages_Bool_Exp>;
};


export type Query_RootEnum_Languages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Enum_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Languages_Order_By>>;
  where?: InputMaybe<Enum_Languages_Bool_Exp>;
};


export type Query_RootEnum_Languages_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootEnum_SportArgs = {
  distinct_on?: InputMaybe<Array<Enum_Sport_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Sport_Order_By>>;
  where?: InputMaybe<Enum_Sport_Bool_Exp>;
};


export type Query_RootEnum_Sport_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Enum_Sport_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Sport_Order_By>>;
  where?: InputMaybe<Enum_Sport_Bool_Exp>;
};


export type Query_RootEnum_Sport_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootExerciseArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Order_By>>;
  where?: InputMaybe<Exercise_Bool_Exp>;
};


export type Query_RootExercise_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Order_By>>;
  where?: InputMaybe<Exercise_Bool_Exp>;
};


export type Query_RootExercise_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootExercise_Club_MnArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Club_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Club_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
};


export type Query_RootExercise_Club_Mn_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Club_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Club_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
};


export type Query_RootExercise_Club_Mn_By_PkArgs = {
  club_id: Scalars['String'];
  exercise_id: Scalars['String'];
};


export type Query_RootExercise_Content_MediaArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};


export type Query_RootExercise_Content_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};


export type Query_RootExercise_Content_Media_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootExercise_Content_Media_EditorArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};


export type Query_RootExercise_Content_Media_Editor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};


export type Query_RootExercise_Content_Media_Editor_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootExercise_Content_Media_MnArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
};


export type Query_RootExercise_Content_Media_Mn_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
};


export type Query_RootExercise_Content_Media_Mn_By_PkArgs = {
  exercise_content_media_id: Scalars['String'];
  exercise_id: Scalars['String'];
};


export type Query_RootExercise_Content_Media_TypeArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Type_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Type_Bool_Exp>;
};


export type Query_RootExercise_Content_Media_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Type_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Type_Bool_Exp>;
};


export type Query_RootExercise_Content_Media_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootExercise_TaxonomyArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
};


export type Query_RootExercise_Taxonomy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
};


export type Query_RootExercise_Taxonomy_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootExercise_Taxonomy_MnArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
};


export type Query_RootExercise_Taxonomy_Mn_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
};


export type Query_RootExercise_Taxonomy_Mn_By_PkArgs = {
  exercise_id: Scalars['String'];
  taxonomy_id: Scalars['String'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootLicenseArgs = {
  distinct_on?: InputMaybe<Array<License_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<License_Order_By>>;
  where?: InputMaybe<License_Bool_Exp>;
};


export type Query_RootLicense_AggregateArgs = {
  distinct_on?: InputMaybe<Array<License_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<License_Order_By>>;
  where?: InputMaybe<License_Bool_Exp>;
};


export type Query_RootLicense_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMember_GroupArgs = {
  distinct_on?: InputMaybe<Array<Member_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Group_Order_By>>;
  where?: InputMaybe<Member_Group_Bool_Exp>;
};


export type Query_RootMember_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Group_Order_By>>;
  where?: InputMaybe<Member_Group_Bool_Exp>;
};


export type Query_RootMember_Group_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootMember_Group_MnArgs = {
  distinct_on?: InputMaybe<Array<Member_Group_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Group_Mn_Order_By>>;
  where?: InputMaybe<Member_Group_Mn_Bool_Exp>;
};


export type Query_RootMember_Group_Mn_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Group_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Group_Mn_Order_By>>;
  where?: InputMaybe<Member_Group_Mn_Bool_Exp>;
};


export type Query_RootMember_Group_Mn_By_PkArgs = {
  group_id: Scalars['String'];
  member_id: Scalars['String'];
};


export type Query_RootPaymentArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};


export type Query_RootPayment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};


export type Query_RootPayment_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootS3_FileArgs = {
  distinct_on?: InputMaybe<Array<S3_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<S3_File_Order_By>>;
  where?: InputMaybe<S3_File_Bool_Exp>;
};


export type Query_RootS3_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<S3_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<S3_File_Order_By>>;
  where?: InputMaybe<S3_File_Bool_Exp>;
};


export type Query_RootS3_File_By_PkArgs = {
  s3key: Scalars['String'];
};


export type Query_RootTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Query_RootTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Query_RootTeam_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTest_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_PermissionArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


export type Query_RootUser_Permission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


export type Query_RootUser_Permission_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_Permission_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Role_Order_By>>;
  where?: InputMaybe<User_Permission_Role_Bool_Exp>;
};


export type Query_RootUser_Permission_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Role_Order_By>>;
  where?: InputMaybe<User_Permission_Role_Bool_Exp>;
};


export type Query_RootUser_Permission_Role_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_OldArgs = {
  distinct_on?: InputMaybe<Array<Users_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Old_Order_By>>;
  where?: InputMaybe<Users_Old_Bool_Exp>;
};


export type Query_RootUsers_Old_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Old_Order_By>>;
  where?: InputMaybe<Users_Old_Bool_Exp>;
};


export type Query_RootUsers_Old_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "s3_file" */
export type S3_File = {
  __typename?: 's3_file';
  /** An array relationship */
  exercise_content_media: Array<Exercise_Content_Media>;
  /** An aggregate relationship */
  exercise_content_media_aggregate: Exercise_Content_Media_Aggregate;
  /** An array relationship */
  exercise_content_media_editor_image: Array<Exercise_Content_Media_Editor>;
  /** An aggregate relationship */
  exercise_content_media_editor_image_aggregate: Exercise_Content_Media_Editor_Aggregate;
  /** An array relationship */
  exercise_content_media_editor_video: Array<Exercise_Content_Media_Editor>;
  /** An aggregate relationship */
  exercise_content_media_editor_video_aggregate: Exercise_Content_Media_Editor_Aggregate;
  name?: Maybe<Scalars['String']>;
  s3key: Scalars['String'];
  size: Scalars['bigint'];
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "s3_file" */
export type S3_FileExercise_Content_MediaArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};


/** columns and relationships of "s3_file" */
export type S3_FileExercise_Content_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};


/** columns and relationships of "s3_file" */
export type S3_FileExercise_Content_Media_Editor_ImageArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};


/** columns and relationships of "s3_file" */
export type S3_FileExercise_Content_Media_Editor_Image_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};


/** columns and relationships of "s3_file" */
export type S3_FileExercise_Content_Media_Editor_VideoArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};


/** columns and relationships of "s3_file" */
export type S3_FileExercise_Content_Media_Editor_Video_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};

/** aggregated selection of "s3_file" */
export type S3_File_Aggregate = {
  __typename?: 's3_file_aggregate';
  aggregate?: Maybe<S3_File_Aggregate_Fields>;
  nodes: Array<S3_File>;
};

/** aggregate fields of "s3_file" */
export type S3_File_Aggregate_Fields = {
  __typename?: 's3_file_aggregate_fields';
  avg?: Maybe<S3_File_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<S3_File_Max_Fields>;
  min?: Maybe<S3_File_Min_Fields>;
  stddev?: Maybe<S3_File_Stddev_Fields>;
  stddev_pop?: Maybe<S3_File_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<S3_File_Stddev_Samp_Fields>;
  sum?: Maybe<S3_File_Sum_Fields>;
  var_pop?: Maybe<S3_File_Var_Pop_Fields>;
  var_samp?: Maybe<S3_File_Var_Samp_Fields>;
  variance?: Maybe<S3_File_Variance_Fields>;
};


/** aggregate fields of "s3_file" */
export type S3_File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<S3_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type S3_File_Avg_Fields = {
  __typename?: 's3_file_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "s3_file". All fields are combined with a logical 'AND'. */
export type S3_File_Bool_Exp = {
  _and?: InputMaybe<Array<S3_File_Bool_Exp>>;
  _not?: InputMaybe<S3_File_Bool_Exp>;
  _or?: InputMaybe<Array<S3_File_Bool_Exp>>;
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
  exercise_content_media_editor_image?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
  exercise_content_media_editor_video?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  s3key?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Bigint_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "s3_file" */
export enum S3_File_Constraint {
  /** unique or primary key constraint on columns "s3key" */
  S3FilePkey = 's3_file_pkey'
}

/** input type for incrementing numeric columns in table "s3_file" */
export type S3_File_Inc_Input = {
  size?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "s3_file" */
export type S3_File_Insert_Input = {
  exercise_content_media?: InputMaybe<Exercise_Content_Media_Arr_Rel_Insert_Input>;
  exercise_content_media_editor_image?: InputMaybe<Exercise_Content_Media_Editor_Arr_Rel_Insert_Input>;
  exercise_content_media_editor_video?: InputMaybe<Exercise_Content_Media_Editor_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  s3key?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['bigint']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type S3_File_Max_Fields = {
  __typename?: 's3_file_max_fields';
  name?: Maybe<Scalars['String']>;
  s3key?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type S3_File_Min_Fields = {
  __typename?: 's3_file_min_fields';
  name?: Maybe<Scalars['String']>;
  s3key?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "s3_file" */
export type S3_File_Mutation_Response = {
  __typename?: 's3_file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<S3_File>;
};

/** input type for inserting object relation for remote table "s3_file" */
export type S3_File_Obj_Rel_Insert_Input = {
  data: S3_File_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<S3_File_On_Conflict>;
};

/** on_conflict condition type for table "s3_file" */
export type S3_File_On_Conflict = {
  constraint: S3_File_Constraint;
  update_columns?: Array<S3_File_Update_Column>;
  where?: InputMaybe<S3_File_Bool_Exp>;
};

/** Ordering options when selecting data from "s3_file". */
export type S3_File_Order_By = {
  exercise_content_media_aggregate?: InputMaybe<Exercise_Content_Media_Aggregate_Order_By>;
  exercise_content_media_editor_image_aggregate?: InputMaybe<Exercise_Content_Media_Editor_Aggregate_Order_By>;
  exercise_content_media_editor_video_aggregate?: InputMaybe<Exercise_Content_Media_Editor_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  s3key?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: s3_file */
export type S3_File_Pk_Columns_Input = {
  s3key: Scalars['String'];
};

/** select columns of table "s3_file" */
export enum S3_File_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  S3key = 's3key',
  /** column name */
  Size = 'size',
  /** column name */
  Type = 'type',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "s3_file" */
export type S3_File_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
  s3key?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['bigint']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type S3_File_Stddev_Fields = {
  __typename?: 's3_file_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type S3_File_Stddev_Pop_Fields = {
  __typename?: 's3_file_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type S3_File_Stddev_Samp_Fields = {
  __typename?: 's3_file_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type S3_File_Sum_Fields = {
  __typename?: 's3_file_sum_fields';
  size?: Maybe<Scalars['bigint']>;
};

/** update columns of table "s3_file" */
export enum S3_File_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  S3key = 's3key',
  /** column name */
  Size = 'size',
  /** column name */
  Type = 'type',
  /** column name */
  Url = 'url'
}

export type S3_File_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<S3_File_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<S3_File_Set_Input>;
  where: S3_File_Bool_Exp;
};

/** aggregate var_pop on columns */
export type S3_File_Var_Pop_Fields = {
  __typename?: 's3_file_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type S3_File_Var_Samp_Fields = {
  __typename?: 's3_file_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type S3_File_Variance_Fields = {
  __typename?: 's3_file_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_authenticators" using primary key columns */
  authUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_authenticators" */
  authUserAuthenticators: Array<AuthUserAuthenticators>;
  /** fetch aggregated fields from the table: "auth.user_authenticators" */
  authUserAuthenticatorsAggregate: AuthUserAuthenticators_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "club" */
  club: Array<Club>;
  /** fetch aggregated fields from the table: "club" */
  club_aggregate: Club_Aggregate;
  /** fetch data from the table: "club" using primary key columns */
  club_by_pk?: Maybe<Club>;
  /** fetch data from the table: "editor_type" */
  editor_type: Array<Editor_Type>;
  /** fetch aggregated fields from the table: "editor_type" */
  editor_type_aggregate: Editor_Type_Aggregate;
  /** fetch data from the table: "editor_type" using primary key columns */
  editor_type_by_pk?: Maybe<Editor_Type>;
  /** fetch data from the table: "enum_exercise_categories" */
  enum_exercise_categories: Array<Enum_Exercise_Categories>;
  /** fetch aggregated fields from the table: "enum_exercise_categories" */
  enum_exercise_categories_aggregate: Enum_Exercise_Categories_Aggregate;
  /** fetch data from the table: "enum_exercise_categories" using primary key columns */
  enum_exercise_categories_by_pk?: Maybe<Enum_Exercise_Categories>;
  /** fetch data from the table: "enum_languages" */
  enum_languages: Array<Enum_Languages>;
  /** fetch aggregated fields from the table: "enum_languages" */
  enum_languages_aggregate: Enum_Languages_Aggregate;
  /** fetch data from the table: "enum_languages" using primary key columns */
  enum_languages_by_pk?: Maybe<Enum_Languages>;
  /** fetch data from the table: "enum_sport" */
  enum_sport: Array<Enum_Sport>;
  /** fetch aggregated fields from the table: "enum_sport" */
  enum_sport_aggregate: Enum_Sport_Aggregate;
  /** fetch data from the table: "enum_sport" using primary key columns */
  enum_sport_by_pk?: Maybe<Enum_Sport>;
  /** fetch data from the table: "exercise" */
  exercise: Array<Exercise>;
  /** fetch aggregated fields from the table: "exercise" */
  exercise_aggregate: Exercise_Aggregate;
  /** fetch data from the table: "exercise" using primary key columns */
  exercise_by_pk?: Maybe<Exercise>;
  /** fetch data from the table: "exercise_club_mn" */
  exercise_club_mn: Array<Exercise_Club_Mn>;
  /** fetch aggregated fields from the table: "exercise_club_mn" */
  exercise_club_mn_aggregate: Exercise_Club_Mn_Aggregate;
  /** fetch data from the table: "exercise_club_mn" using primary key columns */
  exercise_club_mn_by_pk?: Maybe<Exercise_Club_Mn>;
  /** An array relationship */
  exercise_content_media: Array<Exercise_Content_Media>;
  /** An aggregate relationship */
  exercise_content_media_aggregate: Exercise_Content_Media_Aggregate;
  /** fetch data from the table: "exercise_content_media" using primary key columns */
  exercise_content_media_by_pk?: Maybe<Exercise_Content_Media>;
  /** fetch data from the table: "exercise_content_media_editor" */
  exercise_content_media_editor: Array<Exercise_Content_Media_Editor>;
  /** fetch aggregated fields from the table: "exercise_content_media_editor" */
  exercise_content_media_editor_aggregate: Exercise_Content_Media_Editor_Aggregate;
  /** fetch data from the table: "exercise_content_media_editor" using primary key columns */
  exercise_content_media_editor_by_pk?: Maybe<Exercise_Content_Media_Editor>;
  /** fetch data from the table: "exercise_content_media_mn" */
  exercise_content_media_mn: Array<Exercise_Content_Media_Mn>;
  /** fetch aggregated fields from the table: "exercise_content_media_mn" */
  exercise_content_media_mn_aggregate: Exercise_Content_Media_Mn_Aggregate;
  /** fetch data from the table: "exercise_content_media_mn" using primary key columns */
  exercise_content_media_mn_by_pk?: Maybe<Exercise_Content_Media_Mn>;
  /** fetch data from the table: "exercise_content_media_type" */
  exercise_content_media_type: Array<Exercise_Content_Media_Type>;
  /** fetch aggregated fields from the table: "exercise_content_media_type" */
  exercise_content_media_type_aggregate: Exercise_Content_Media_Type_Aggregate;
  /** fetch data from the table: "exercise_content_media_type" using primary key columns */
  exercise_content_media_type_by_pk?: Maybe<Exercise_Content_Media_Type>;
  /** fetch data from the table: "exercise_taxonomy" */
  exercise_taxonomy: Array<Exercise_Taxonomy>;
  /** fetch aggregated fields from the table: "exercise_taxonomy" */
  exercise_taxonomy_aggregate: Exercise_Taxonomy_Aggregate;
  /** fetch data from the table: "exercise_taxonomy" using primary key columns */
  exercise_taxonomy_by_pk?: Maybe<Exercise_Taxonomy>;
  /** fetch data from the table: "exercise_taxonomy_mn" */
  exercise_taxonomy_mn: Array<Exercise_Taxonomy_Mn>;
  /** fetch aggregated fields from the table: "exercise_taxonomy_mn" */
  exercise_taxonomy_mn_aggregate: Exercise_Taxonomy_Mn_Aggregate;
  /** fetch data from the table: "exercise_taxonomy_mn" using primary key columns */
  exercise_taxonomy_mn_by_pk?: Maybe<Exercise_Taxonomy_Mn>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "license" */
  license: Array<License>;
  /** fetch aggregated fields from the table: "license" */
  license_aggregate: License_Aggregate;
  /** fetch data from the table: "license" using primary key columns */
  license_by_pk?: Maybe<License>;
  /** fetch data from the table: "member" */
  member: Array<Member>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: Member_Aggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<Member>;
  /** fetch data from the table: "member_group" */
  member_group: Array<Member_Group>;
  /** fetch aggregated fields from the table: "member_group" */
  member_group_aggregate: Member_Group_Aggregate;
  /** fetch data from the table: "member_group" using primary key columns */
  member_group_by_pk?: Maybe<Member_Group>;
  /** fetch data from the table: "member_group_mn" */
  member_group_mn: Array<Member_Group_Mn>;
  /** fetch aggregated fields from the table: "member_group_mn" */
  member_group_mn_aggregate: Member_Group_Mn_Aggregate;
  /** fetch data from the table: "member_group_mn" using primary key columns */
  member_group_mn_by_pk?: Maybe<Member_Group_Mn>;
  /** fetch data from the table: "payment" */
  payment: Array<Payment>;
  /** fetch aggregated fields from the table: "payment" */
  payment_aggregate: Payment_Aggregate;
  /** fetch data from the table: "payment" using primary key columns */
  payment_by_pk?: Maybe<Payment>;
  /** fetch data from the table: "s3_file" */
  s3_file: Array<S3_File>;
  /** fetch aggregated fields from the table: "s3_file" */
  s3_file_aggregate: S3_File_Aggregate;
  /** fetch data from the table: "s3_file" using primary key columns */
  s3_file_by_pk?: Maybe<S3_File>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_permission" */
  user_permission: Array<User_Permission>;
  /** fetch aggregated fields from the table: "user_permission" */
  user_permission_aggregate: User_Permission_Aggregate;
  /** fetch data from the table: "user_permission" using primary key columns */
  user_permission_by_pk?: Maybe<User_Permission>;
  /** fetch data from the table: "user_permission_role" */
  user_permission_role: Array<User_Permission_Role>;
  /** fetch aggregated fields from the table: "user_permission_role" */
  user_permission_role_aggregate: User_Permission_Role_Aggregate;
  /** fetch data from the table: "user_permission_role" using primary key columns */
  user_permission_role_by_pk?: Maybe<User_Permission_Role>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "users_old" */
  users_old: Array<Users_Old>;
  /** fetch aggregated fields from the table: "users_old" */
  users_old_aggregate: Users_Old_Aggregate;
  /** fetch data from the table: "users_old" using primary key columns */
  users_old_by_pk?: Maybe<Users_Old>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


export type Subscription_RootAuthUserAuthenticatorsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootClubArgs = {
  distinct_on?: InputMaybe<Array<Club_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Order_By>>;
  where?: InputMaybe<Club_Bool_Exp>;
};


export type Subscription_RootClub_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Order_By>>;
  where?: InputMaybe<Club_Bool_Exp>;
};


export type Subscription_RootClub_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootEditor_TypeArgs = {
  distinct_on?: InputMaybe<Array<Editor_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Editor_Type_Order_By>>;
  where?: InputMaybe<Editor_Type_Bool_Exp>;
};


export type Subscription_RootEditor_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Editor_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Editor_Type_Order_By>>;
  where?: InputMaybe<Editor_Type_Bool_Exp>;
};


export type Subscription_RootEditor_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootEnum_Exercise_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Enum_Exercise_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Exercise_Categories_Order_By>>;
  where?: InputMaybe<Enum_Exercise_Categories_Bool_Exp>;
};


export type Subscription_RootEnum_Exercise_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Enum_Exercise_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Exercise_Categories_Order_By>>;
  where?: InputMaybe<Enum_Exercise_Categories_Bool_Exp>;
};


export type Subscription_RootEnum_Exercise_Categories_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootEnum_LanguagesArgs = {
  distinct_on?: InputMaybe<Array<Enum_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Languages_Order_By>>;
  where?: InputMaybe<Enum_Languages_Bool_Exp>;
};


export type Subscription_RootEnum_Languages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Enum_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Languages_Order_By>>;
  where?: InputMaybe<Enum_Languages_Bool_Exp>;
};


export type Subscription_RootEnum_Languages_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootEnum_SportArgs = {
  distinct_on?: InputMaybe<Array<Enum_Sport_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Sport_Order_By>>;
  where?: InputMaybe<Enum_Sport_Bool_Exp>;
};


export type Subscription_RootEnum_Sport_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Enum_Sport_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Sport_Order_By>>;
  where?: InputMaybe<Enum_Sport_Bool_Exp>;
};


export type Subscription_RootEnum_Sport_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootExerciseArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Order_By>>;
  where?: InputMaybe<Exercise_Bool_Exp>;
};


export type Subscription_RootExercise_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Order_By>>;
  where?: InputMaybe<Exercise_Bool_Exp>;
};


export type Subscription_RootExercise_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootExercise_Club_MnArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Club_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Club_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
};


export type Subscription_RootExercise_Club_Mn_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Club_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Club_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Club_Mn_Bool_Exp>;
};


export type Subscription_RootExercise_Club_Mn_By_PkArgs = {
  club_id: Scalars['String'];
  exercise_id: Scalars['String'];
};


export type Subscription_RootExercise_Content_MediaArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};


export type Subscription_RootExercise_Content_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Bool_Exp>;
};


export type Subscription_RootExercise_Content_Media_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootExercise_Content_Media_EditorArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};


export type Subscription_RootExercise_Content_Media_Editor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Editor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Editor_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Editor_Bool_Exp>;
};


export type Subscription_RootExercise_Content_Media_Editor_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootExercise_Content_Media_MnArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
};


export type Subscription_RootExercise_Content_Media_Mn_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Mn_Bool_Exp>;
};


export type Subscription_RootExercise_Content_Media_Mn_By_PkArgs = {
  exercise_content_media_id: Scalars['String'];
  exercise_id: Scalars['String'];
};


export type Subscription_RootExercise_Content_Media_TypeArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Type_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Type_Bool_Exp>;
};


export type Subscription_RootExercise_Content_Media_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Content_Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Content_Media_Type_Order_By>>;
  where?: InputMaybe<Exercise_Content_Media_Type_Bool_Exp>;
};


export type Subscription_RootExercise_Content_Media_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootExercise_TaxonomyArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
};


export type Subscription_RootExercise_Taxonomy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Bool_Exp>;
};


export type Subscription_RootExercise_Taxonomy_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootExercise_Taxonomy_MnArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
};


export type Subscription_RootExercise_Taxonomy_Mn_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Taxonomy_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Taxonomy_Mn_Order_By>>;
  where?: InputMaybe<Exercise_Taxonomy_Mn_Bool_Exp>;
};


export type Subscription_RootExercise_Taxonomy_Mn_By_PkArgs = {
  exercise_id: Scalars['String'];
  taxonomy_id: Scalars['String'];
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootLicenseArgs = {
  distinct_on?: InputMaybe<Array<License_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<License_Order_By>>;
  where?: InputMaybe<License_Bool_Exp>;
};


export type Subscription_RootLicense_AggregateArgs = {
  distinct_on?: InputMaybe<Array<License_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<License_Order_By>>;
  where?: InputMaybe<License_Bool_Exp>;
};


export type Subscription_RootLicense_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMember_GroupArgs = {
  distinct_on?: InputMaybe<Array<Member_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Group_Order_By>>;
  where?: InputMaybe<Member_Group_Bool_Exp>;
};


export type Subscription_RootMember_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Group_Order_By>>;
  where?: InputMaybe<Member_Group_Bool_Exp>;
};


export type Subscription_RootMember_Group_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootMember_Group_MnArgs = {
  distinct_on?: InputMaybe<Array<Member_Group_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Group_Mn_Order_By>>;
  where?: InputMaybe<Member_Group_Mn_Bool_Exp>;
};


export type Subscription_RootMember_Group_Mn_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Group_Mn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Group_Mn_Order_By>>;
  where?: InputMaybe<Member_Group_Mn_Bool_Exp>;
};


export type Subscription_RootMember_Group_Mn_By_PkArgs = {
  group_id: Scalars['String'];
  member_id: Scalars['String'];
};


export type Subscription_RootPaymentArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};


export type Subscription_RootPayment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};


export type Subscription_RootPayment_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootS3_FileArgs = {
  distinct_on?: InputMaybe<Array<S3_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<S3_File_Order_By>>;
  where?: InputMaybe<S3_File_Bool_Exp>;
};


export type Subscription_RootS3_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<S3_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<S3_File_Order_By>>;
  where?: InputMaybe<S3_File_Bool_Exp>;
};


export type Subscription_RootS3_File_By_PkArgs = {
  s3key: Scalars['String'];
};


export type Subscription_RootTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTest_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_PermissionArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


export type Subscription_RootUser_Permission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


export type Subscription_RootUser_Permission_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_Permission_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Role_Order_By>>;
  where?: InputMaybe<User_Permission_Role_Bool_Exp>;
};


export type Subscription_RootUser_Permission_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Role_Order_By>>;
  where?: InputMaybe<User_Permission_Role_Bool_Exp>;
};


export type Subscription_RootUser_Permission_Role_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_OldArgs = {
  distinct_on?: InputMaybe<Array<Users_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Old_Order_By>>;
  where?: InputMaybe<Users_Old_Bool_Exp>;
};


export type Subscription_RootUsers_Old_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Old_Order_By>>;
  where?: InputMaybe<Users_Old_Bool_Exp>;
};


export type Subscription_RootUsers_Old_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "team" */
export type Team = {
  __typename?: 'team';
  /** An object relationship */
  club: Club;
  club_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_permissions: Array<User_Permission>;
  /** An aggregate relationship */
  user_permissions_aggregate: User_Permission_Aggregate;
};


/** columns and relationships of "team" */
export type TeamUser_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamUser_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};

/** aggregated selection of "team" */
export type Team_Aggregate = {
  __typename?: 'team_aggregate';
  aggregate?: Maybe<Team_Aggregate_Fields>;
  nodes: Array<Team>;
};

/** aggregate fields of "team" */
export type Team_Aggregate_Fields = {
  __typename?: 'team_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Team_Max_Fields>;
  min?: Maybe<Team_Min_Fields>;
};


/** aggregate fields of "team" */
export type Team_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team" */
export type Team_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Max_Order_By>;
  min?: InputMaybe<Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "team" */
export type Team_Arr_Rel_Insert_Input = {
  data: Array<Team_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_On_Conflict>;
};

/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
export type Team_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Bool_Exp>>;
  _not?: InputMaybe<Team_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Bool_Exp>>;
  club?: InputMaybe<Club_Bool_Exp>;
  club_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_permissions?: InputMaybe<User_Permission_Bool_Exp>;
};

/** unique or primary key constraints on table "team" */
export enum Team_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeamPkey = 'team_pkey'
}

/** input type for inserting data into table "team" */
export type Team_Insert_Input = {
  club?: InputMaybe<Club_Obj_Rel_Insert_Input>;
  club_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_permissions?: InputMaybe<User_Permission_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Team_Max_Fields = {
  __typename?: 'team_max_fields';
  club_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "team" */
export type Team_Max_Order_By = {
  club_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Min_Fields = {
  __typename?: 'team_min_fields';
  club_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "team" */
export type Team_Min_Order_By = {
  club_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "team" */
export type Team_Mutation_Response = {
  __typename?: 'team_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Team>;
};

/** input type for inserting object relation for remote table "team" */
export type Team_Obj_Rel_Insert_Input = {
  data: Team_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_On_Conflict>;
};

/** on_conflict condition type for table "team" */
export type Team_On_Conflict = {
  constraint: Team_Constraint;
  update_columns?: Array<Team_Update_Column>;
  where?: InputMaybe<Team_Bool_Exp>;
};

/** Ordering options when selecting data from "team". */
export type Team_Order_By = {
  club?: InputMaybe<Club_Order_By>;
  club_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_permissions_aggregate?: InputMaybe<User_Permission_Aggregate_Order_By>;
};

/** primary key columns input for table: team */
export type Team_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "team" */
export enum Team_Select_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "team" */
export type Team_Set_Input = {
  club_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "team" */
export enum Team_Update_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Team_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};

/** columns and relationships of "test" */
export type Test = {
  __typename?: 'test';
  id: Scalars['uuid'];
};

/** aggregated selection of "test" */
export type Test_Aggregate = {
  __typename?: 'test_aggregate';
  aggregate?: Maybe<Test_Aggregate_Fields>;
  nodes: Array<Test>;
};

/** aggregate fields of "test" */
export type Test_Aggregate_Fields = {
  __typename?: 'test_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test_Max_Fields>;
  min?: Maybe<Test_Min_Fields>;
};


/** aggregate fields of "test" */
export type Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Bool_Exp>>;
  _not?: InputMaybe<Test_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "test" */
export enum Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestPkey = 'test_pkey'
}

/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Test_Max_Fields = {
  __typename?: 'test_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Test_Min_Fields = {
  __typename?: 'test_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "test" */
export type Test_Mutation_Response = {
  __typename?: 'test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test>;
};

/** on_conflict condition type for table "test" */
export type Test_On_Conflict = {
  constraint: Test_Constraint;
  update_columns?: Array<Test_Update_Column>;
  where?: InputMaybe<Test_Bool_Exp>;
};

/** Ordering options when selecting data from "test". */
export type Test_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test" */
export enum Test_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "test" */
export type Test_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "test" */
export enum Test_Update_Column {
  /** column name */
  Id = 'id'
}

export type Test_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Test_Set_Input>;
  where: Test_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_permission" */
export type User_Permission = {
  __typename?: 'user_permission';
  /** An object relationship */
  club: Club;
  club_id: Scalars['String'];
  id: Scalars['Int'];
  role: User_Permission_Role_Enum;
  /** An object relationship */
  team?: Maybe<Team>;
  team_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: Users_Old;
  /** An object relationship */
  userByUserId: Users;
  user_id: Scalars['uuid'];
  user_id_bak: Scalars['String'];
  /** An object relationship */
  user_permission_role: User_Permission_Role;
};

/** aggregated selection of "user_permission" */
export type User_Permission_Aggregate = {
  __typename?: 'user_permission_aggregate';
  aggregate?: Maybe<User_Permission_Aggregate_Fields>;
  nodes: Array<User_Permission>;
};

/** aggregate fields of "user_permission" */
export type User_Permission_Aggregate_Fields = {
  __typename?: 'user_permission_aggregate_fields';
  avg?: Maybe<User_Permission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Permission_Max_Fields>;
  min?: Maybe<User_Permission_Min_Fields>;
  stddev?: Maybe<User_Permission_Stddev_Fields>;
  stddev_pop?: Maybe<User_Permission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Permission_Stddev_Samp_Fields>;
  sum?: Maybe<User_Permission_Sum_Fields>;
  var_pop?: Maybe<User_Permission_Var_Pop_Fields>;
  var_samp?: Maybe<User_Permission_Var_Samp_Fields>;
  variance?: Maybe<User_Permission_Variance_Fields>;
};


/** aggregate fields of "user_permission" */
export type User_Permission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_permission" */
export type User_Permission_Aggregate_Order_By = {
  avg?: InputMaybe<User_Permission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Permission_Max_Order_By>;
  min?: InputMaybe<User_Permission_Min_Order_By>;
  stddev?: InputMaybe<User_Permission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Permission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Permission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Permission_Sum_Order_By>;
  var_pop?: InputMaybe<User_Permission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Permission_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Permission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_permission" */
export type User_Permission_Arr_Rel_Insert_Input = {
  data: Array<User_Permission_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Permission_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Permission_Avg_Fields = {
  __typename?: 'user_permission_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_permission" */
export type User_Permission_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_permission". All fields are combined with a logical 'AND'. */
export type User_Permission_Bool_Exp = {
  _and?: InputMaybe<Array<User_Permission_Bool_Exp>>;
  _not?: InputMaybe<User_Permission_Bool_Exp>;
  _or?: InputMaybe<Array<User_Permission_Bool_Exp>>;
  club?: InputMaybe<Club_Bool_Exp>;
  club_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  role?: InputMaybe<User_Permission_Role_Enum_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Old_Bool_Exp>;
  userByUserId?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id_bak?: InputMaybe<String_Comparison_Exp>;
  user_permission_role?: InputMaybe<User_Permission_Role_Bool_Exp>;
};

/** unique or primary key constraints on table "user_permission" */
export enum User_Permission_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPermissionPkey = 'user_permission_pkey'
}

/** input type for incrementing numeric columns in table "user_permission" */
export type User_Permission_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_permission" */
export type User_Permission_Insert_Input = {
  club?: InputMaybe<Club_Obj_Rel_Insert_Input>;
  club_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<User_Permission_Role_Enum>;
  team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Old_Obj_Rel_Insert_Input>;
  userByUserId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  user_id_bak?: InputMaybe<Scalars['String']>;
  user_permission_role?: InputMaybe<User_Permission_Role_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Permission_Max_Fields = {
  __typename?: 'user_permission_max_fields';
  club_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  user_id_bak?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_permission" */
export type User_Permission_Max_Order_By = {
  club_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_id_bak?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Permission_Min_Fields = {
  __typename?: 'user_permission_min_fields';
  club_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  user_id_bak?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_permission" */
export type User_Permission_Min_Order_By = {
  club_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_id_bak?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_permission" */
export type User_Permission_Mutation_Response = {
  __typename?: 'user_permission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Permission>;
};

/** on_conflict condition type for table "user_permission" */
export type User_Permission_On_Conflict = {
  constraint: User_Permission_Constraint;
  update_columns?: Array<User_Permission_Update_Column>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};

/** Ordering options when selecting data from "user_permission". */
export type User_Permission_Order_By = {
  club?: InputMaybe<Club_Order_By>;
  club_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Old_Order_By>;
  userByUserId?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_id_bak?: InputMaybe<Order_By>;
  user_permission_role?: InputMaybe<User_Permission_Role_Order_By>;
};

/** primary key columns input for table: user_permission */
export type User_Permission_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "user_permission_role" */
export type User_Permission_Role = {
  __typename?: 'user_permission_role';
  name: Scalars['String'];
  /** An array relationship */
  user_permissions: Array<User_Permission>;
  /** An aggregate relationship */
  user_permissions_aggregate: User_Permission_Aggregate;
};


/** columns and relationships of "user_permission_role" */
export type User_Permission_RoleUser_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


/** columns and relationships of "user_permission_role" */
export type User_Permission_RoleUser_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};

/** aggregated selection of "user_permission_role" */
export type User_Permission_Role_Aggregate = {
  __typename?: 'user_permission_role_aggregate';
  aggregate?: Maybe<User_Permission_Role_Aggregate_Fields>;
  nodes: Array<User_Permission_Role>;
};

/** aggregate fields of "user_permission_role" */
export type User_Permission_Role_Aggregate_Fields = {
  __typename?: 'user_permission_role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Permission_Role_Max_Fields>;
  min?: Maybe<User_Permission_Role_Min_Fields>;
};


/** aggregate fields of "user_permission_role" */
export type User_Permission_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Permission_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_permission_role". All fields are combined with a logical 'AND'. */
export type User_Permission_Role_Bool_Exp = {
  _and?: InputMaybe<Array<User_Permission_Role_Bool_Exp>>;
  _not?: InputMaybe<User_Permission_Role_Bool_Exp>;
  _or?: InputMaybe<Array<User_Permission_Role_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_permissions?: InputMaybe<User_Permission_Bool_Exp>;
};

/** unique or primary key constraints on table "user_permission_role" */
export enum User_Permission_Role_Constraint {
  /** unique or primary key constraint on columns "name" */
  UserPermissionRolePkey = 'user_permission_role_pkey'
}

export enum User_Permission_Role_Enum {
  ClubAdmin = 'CLUB_ADMIN',
  ClubAdminView = 'CLUB_ADMIN_VIEW',
  ClubExerciseCreate = 'CLUB_EXERCISE_CREATE',
  ClubExerciseDelete = 'CLUB_EXERCISE_DELETE',
  ClubExerciseUpdate = 'CLUB_EXERCISE_UPDATE',
  ClubExerciseView = 'CLUB_EXERCISE_VIEW'
}

/** Boolean expression to compare columns of type "user_permission_role_enum". All fields are combined with logical 'AND'. */
export type User_Permission_Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Permission_Role_Enum>;
  _in?: InputMaybe<Array<User_Permission_Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<User_Permission_Role_Enum>;
  _nin?: InputMaybe<Array<User_Permission_Role_Enum>>;
};

/** input type for inserting data into table "user_permission_role" */
export type User_Permission_Role_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  user_permissions?: InputMaybe<User_Permission_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Permission_Role_Max_Fields = {
  __typename?: 'user_permission_role_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Permission_Role_Min_Fields = {
  __typename?: 'user_permission_role_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_permission_role" */
export type User_Permission_Role_Mutation_Response = {
  __typename?: 'user_permission_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Permission_Role>;
};

/** input type for inserting object relation for remote table "user_permission_role" */
export type User_Permission_Role_Obj_Rel_Insert_Input = {
  data: User_Permission_Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Permission_Role_On_Conflict>;
};

/** on_conflict condition type for table "user_permission_role" */
export type User_Permission_Role_On_Conflict = {
  constraint: User_Permission_Role_Constraint;
  update_columns?: Array<User_Permission_Role_Update_Column>;
  where?: InputMaybe<User_Permission_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "user_permission_role". */
export type User_Permission_Role_Order_By = {
  name?: InputMaybe<Order_By>;
  user_permissions_aggregate?: InputMaybe<User_Permission_Aggregate_Order_By>;
};

/** primary key columns input for table: user_permission_role */
export type User_Permission_Role_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "user_permission_role" */
export enum User_Permission_Role_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user_permission_role" */
export type User_Permission_Role_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_permission_role" */
export enum User_Permission_Role_Update_Column {
  /** column name */
  Name = 'name'
}

export type User_Permission_Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Permission_Role_Set_Input>;
  where: User_Permission_Role_Bool_Exp;
};

/** select columns of table "user_permission" */
export enum User_Permission_Select_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserIdBak = 'user_id_bak'
}

/** input type for updating data in table "user_permission" */
export type User_Permission_Set_Input = {
  club_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<User_Permission_Role_Enum>;
  team_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  user_id_bak?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Permission_Stddev_Fields = {
  __typename?: 'user_permission_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_permission" */
export type User_Permission_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Permission_Stddev_Pop_Fields = {
  __typename?: 'user_permission_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_permission" */
export type User_Permission_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Permission_Stddev_Samp_Fields = {
  __typename?: 'user_permission_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_permission" */
export type User_Permission_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Permission_Sum_Fields = {
  __typename?: 'user_permission_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_permission" */
export type User_Permission_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "user_permission" */
export enum User_Permission_Update_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserIdBak = 'user_id_bak'
}

export type User_Permission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Permission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Permission_Set_Input>;
  where: User_Permission_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Permission_Var_Pop_Fields = {
  __typename?: 'user_permission_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_permission" */
export type User_Permission_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Permission_Var_Samp_Fields = {
  __typename?: 'user_permission_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_permission" */
export type User_Permission_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Permission_Variance_Fields = {
  __typename?: 'user_permission_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_permission" */
export type User_Permission_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  /** An array relationship */
  authenticators: Array<AuthUserAuthenticators>;
  /** An aggregate relationship */
  authenticators_aggregate: AuthUserAuthenticators_Aggregate;
  avatarUrl: Scalars['String'];
  /** An array relationship */
  clubs: Array<Club>;
  /** An aggregate relationship */
  clubs_aggregate: Club_Aggregate;
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  /** An array relationship */
  exercises: Array<Exercise>;
  /** An aggregate relationship */
  exercises_aggregate: Exercise_Aggregate;
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
  /** An array relationship */
  user_permissions: Array<User_Permission>;
  /** An aggregate relationship */
  user_permissions_aggregate: User_Permission_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAuthenticators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticators_Order_By>>;
  where?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersClubsArgs = {
  distinct_on?: InputMaybe<Array<Club_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Order_By>>;
  where?: InputMaybe<Club_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersClubs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Order_By>>;
  where?: InputMaybe<Club_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersExercisesArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Order_By>>;
  where?: InputMaybe<Exercise_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersExercises_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Order_By>>;
  where?: InputMaybe<Exercise_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUser_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUser_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  authenticators?: InputMaybe<AuthUserAuthenticators_Bool_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  clubs?: InputMaybe<Club_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  exercises?: InputMaybe<Exercise_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  user_permissions?: InputMaybe<User_Permission_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  authenticators?: InputMaybe<AuthUserAuthenticators_Arr_Rel_Insert_Input>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  clubs?: InputMaybe<Club_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  exercises?: InputMaybe<Exercise_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
  user_permissions?: InputMaybe<User_Permission_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** columns and relationships of "users_old" */
export type Users_Old = {
  __typename?: 'users_old';
  /** An array relationship */
  clubs: Array<Club>;
  /** An aggregate relationship */
  clubs_aggregate: Club_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  exercises: Array<Exercise>;
  /** An aggregate relationship */
  exercises_aggregate: Exercise_Aggregate;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  last_login?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  user_permissions: Array<User_Permission>;
  /** An aggregate relationship */
  user_permissions_aggregate: User_Permission_Aggregate;
};


/** columns and relationships of "users_old" */
export type Users_OldClubsArgs = {
  distinct_on?: InputMaybe<Array<Club_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Order_By>>;
  where?: InputMaybe<Club_Bool_Exp>;
};


/** columns and relationships of "users_old" */
export type Users_OldClubs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Club_Order_By>>;
  where?: InputMaybe<Club_Bool_Exp>;
};


/** columns and relationships of "users_old" */
export type Users_OldExercisesArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Order_By>>;
  where?: InputMaybe<Exercise_Bool_Exp>;
};


/** columns and relationships of "users_old" */
export type Users_OldExercises_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exercise_Order_By>>;
  where?: InputMaybe<Exercise_Bool_Exp>;
};


/** columns and relationships of "users_old" */
export type Users_OldUser_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


/** columns and relationships of "users_old" */
export type Users_OldUser_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};

/** aggregated selection of "users_old" */
export type Users_Old_Aggregate = {
  __typename?: 'users_old_aggregate';
  aggregate?: Maybe<Users_Old_Aggregate_Fields>;
  nodes: Array<Users_Old>;
};

/** aggregate fields of "users_old" */
export type Users_Old_Aggregate_Fields = {
  __typename?: 'users_old_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Old_Max_Fields>;
  min?: Maybe<Users_Old_Min_Fields>;
};


/** aggregate fields of "users_old" */
export type Users_Old_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Old_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users_old". All fields are combined with a logical 'AND'. */
export type Users_Old_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Old_Bool_Exp>>;
  _not?: InputMaybe<Users_Old_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Old_Bool_Exp>>;
  clubs?: InputMaybe<Club_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exercises?: InputMaybe<Exercise_Bool_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_login?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_permissions?: InputMaybe<User_Permission_Bool_Exp>;
};

/** unique or primary key constraints on table "users_old" */
export enum Users_Old_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "users_old" */
export type Users_Old_Insert_Input = {
  clubs?: InputMaybe<Club_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exercises?: InputMaybe<Exercise_Arr_Rel_Insert_Input>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_login?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_permissions?: InputMaybe<User_Permission_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Old_Max_Fields = {
  __typename?: 'users_old_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Old_Min_Fields = {
  __typename?: 'users_old_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users_old" */
export type Users_Old_Mutation_Response = {
  __typename?: 'users_old_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Old>;
};

/** input type for inserting object relation for remote table "users_old" */
export type Users_Old_Obj_Rel_Insert_Input = {
  data: Users_Old_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_Old_On_Conflict>;
};

/** on_conflict condition type for table "users_old" */
export type Users_Old_On_Conflict = {
  constraint: Users_Old_Constraint;
  update_columns?: Array<Users_Old_Update_Column>;
  where?: InputMaybe<Users_Old_Bool_Exp>;
};

/** Ordering options when selecting data from "users_old". */
export type Users_Old_Order_By = {
  clubs_aggregate?: InputMaybe<Club_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  exercises_aggregate?: InputMaybe<Exercise_Aggregate_Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_login?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_permissions_aggregate?: InputMaybe<User_Permission_Aggregate_Order_By>;
};

/** primary key columns input for table: users_old */
export type Users_Old_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users_old" */
export enum Users_Old_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users_old" */
export type Users_Old_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_login?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users_old" */
export enum Users_Old_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Old_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Old_Set_Input>;
  where: Users_Old_Bool_Exp;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  authenticators_aggregate?: InputMaybe<AuthUserAuthenticators_Aggregate_Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  clubs_aggregate?: InputMaybe<Club_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  exercises_aggregate?: InputMaybe<Exercise_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
  user_permissions_aggregate?: InputMaybe<User_Permission_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ClubFragment = { __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any };

export type DeleteClubByPkMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteClubByPkMutation = { __typename?: 'mutation_root', delete_club_by_pk?: { __typename?: 'club', id: string } | null };

export type InsertClubOneMutationVariables = Exact<{
  data: Club_Insert_Input;
  payment: Payment_Insert_Input;
}>;


export type InsertClubOneMutation = { __typename?: 'mutation_root', insert_club_one?: { __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any, payments: Array<{ __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string }>, user_permissions: Array<{ __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null }> } | null, insert_payment_one?: { __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string } | null };

export type PaymentFragment = { __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string };

export type UpdateClubMutationVariables = Exact<{
  data: Club_Set_Input;
  id: Scalars['String'];
}>;


export type UpdateClubMutation = { __typename?: 'mutation_root', update_club_by_pk?: { __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any } | null };

export type UserClubFragment = { __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any, payments: Array<{ __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string }>, user_permissions: Array<{ __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null }> };

export type UserPermissionFragment = { __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null };

export type UserClubPermissionsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type UserClubPermissionsQuery = { __typename?: 'query_root', club: Array<{ __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any, payments: Array<{ __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string }>, user_permissions: Array<{ __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null }> }> };

export type AllExercisesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllExercisesQuery = { __typename?: 'query_root', exercise: Array<{ __typename?: 'exercise', id: string, created_at: any, updated_at: any, owner_id: any, title: string, exercise_club_mns: Array<{ __typename: 'exercise_club_mn', club_id: string, exercise_id: string, club: { __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any, payments: Array<{ __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string }>, user_permissions: Array<{ __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null }> } }>, exercise_content_media_mns: Array<{ __typename: 'exercise_content_media_mn', exercise_id: string, exercise_content_media_id: string, sort?: number | null, exercise_content_media: { __typename?: 'exercise_content_media', id: string, type: Exercise_Content_Media_Type_Enum, text?: string | null, is_media_right?: boolean | null, video_url?: string | null, created_at?: any | null, updated_at?: any | null, file?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, exercise_content_media_editor?: { __typename?: 'exercise_content_media_editor', id: string, editor_data?: any | null, file_image?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, file_video?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null } | null } }> }> };

export type CreateExerciseMutationVariables = Exact<{
  object: Exercise_Insert_Input;
}>;


export type CreateExerciseMutation = { __typename?: 'mutation_root', insert_exercise_one?: { __typename?: 'exercise', id: string, created_at: any, updated_at: any, owner_id: any, title: string, fitness_stars: number, technique_stars: number, tactics_stars: number, locale?: string | null, exercise_club_mns: Array<{ __typename: 'exercise_club_mn', club_id: string, exercise_id: string, club: { __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any, payments: Array<{ __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string }>, user_permissions: Array<{ __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null }> } }>, exercise_content_media_mns: Array<{ __typename: 'exercise_content_media_mn', exercise_id: string, exercise_content_media_id: string, sort?: number | null, exercise_content_media: { __typename?: 'exercise_content_media', id: string, type: Exercise_Content_Media_Type_Enum, text?: string | null, is_media_right?: boolean | null, video_url?: string | null, created_at?: any | null, updated_at?: any | null, file?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, exercise_content_media_editor?: { __typename?: 'exercise_content_media_editor', id: string, editor_data?: any | null, file_image?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, file_video?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null } | null } }>, exercise_taxonomy_mns: Array<{ __typename?: 'exercise_taxonomy_mn', exercise_id: string, taxonomy_id: string, exercise_taxonomy: { __typename?: 'exercise_taxonomy', id: string, category: Enum_Exercise_Categories_Enum, locale?: string | null, translation_key: string, created_at: any, updated_at?: any | null } }> } | null };

export type DeleteExerciseMediaMnMutationVariables = Exact<{
  exerciseId: Scalars['String'];
  exerciseContentMediaId: Scalars['String'];
  updatedMn: Array<Exercise_Content_Media_Mn_Insert_Input> | Exercise_Content_Media_Mn_Insert_Input;
}>;


export type DeleteExerciseMediaMnMutation = { __typename?: 'mutation_root', delete_exercise_content_media_mn_by_pk?: { __typename: 'exercise_content_media_mn', exercise_content_media_id: string, exercise_id: string } | null, insert_exercise_content_media_mn?: { __typename: 'exercise_content_media_mn_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'exercise_content_media_mn', exercise_content_media_id: string, exercise_id: string, sort?: number | null }> } | null };

export type ExerciseByPkQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ExerciseByPkQuery = { __typename?: 'query_root', exercise_by_pk?: { __typename?: 'exercise', id: string, created_at: any, updated_at: any, owner_id: any, title: string, fitness_stars: number, technique_stars: number, tactics_stars: number, locale?: string | null, exercise_club_mns: Array<{ __typename: 'exercise_club_mn', club_id: string, exercise_id: string, club: { __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any, payments: Array<{ __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string }>, user_permissions: Array<{ __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null }> } }>, exercise_content_media_mns: Array<{ __typename: 'exercise_content_media_mn', exercise_id: string, exercise_content_media_id: string, sort?: number | null, exercise_content_media: { __typename?: 'exercise_content_media', id: string, type: Exercise_Content_Media_Type_Enum, text?: string | null, is_media_right?: boolean | null, video_url?: string | null, created_at?: any | null, updated_at?: any | null, file?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, exercise_content_media_editor?: { __typename?: 'exercise_content_media_editor', id: string, editor_data?: any | null, file_image?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, file_video?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null } | null } }>, exercise_taxonomy_mns: Array<{ __typename?: 'exercise_taxonomy_mn', exercise_id: string, taxonomy_id: string, exercise_taxonomy: { __typename?: 'exercise_taxonomy', id: string, category: Enum_Exercise_Categories_Enum, locale?: string | null, translation_key: string, created_at: any, updated_at?: any | null } }> } | null };

export type ExerciseClubMnsFragment = { __typename: 'exercise_club_mn', club_id: string, exercise_id: string };

export type ExerciseContentMediaEditorFragment = { __typename?: 'exercise_content_media_editor', id: string, editor_data?: any | null, file_image?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, file_video?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null };

export type ExerciseContentMediaFragment = { __typename?: 'exercise_content_media', id: string, text?: string | null, is_media_right?: boolean | null, type: Exercise_Content_Media_Type_Enum, video_url?: string | null, created_at?: any | null, updated_at?: any | null };

export type ExerciseContentMnsFragment = { __typename: 'exercise_content_media_mn', exercise_id: string, exercise_content_media_id: string, sort?: number | null, exercise_content_media: { __typename?: 'exercise_content_media', id: string, type: Exercise_Content_Media_Type_Enum } };

export type ExerciseDetailFragment = { __typename?: 'exercise', id: string, created_at: any, updated_at: any, owner_id: any, title: string, fitness_stars: number, technique_stars: number, tactics_stars: number, locale?: string | null, exercise_club_mns: Array<{ __typename: 'exercise_club_mn', club_id: string, exercise_id: string, club: { __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any, payments: Array<{ __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string }>, user_permissions: Array<{ __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null }> } }>, exercise_content_media_mns: Array<{ __typename: 'exercise_content_media_mn', exercise_id: string, exercise_content_media_id: string, sort?: number | null, exercise_content_media: { __typename?: 'exercise_content_media', id: string, type: Exercise_Content_Media_Type_Enum, text?: string | null, is_media_right?: boolean | null, video_url?: string | null, created_at?: any | null, updated_at?: any | null, file?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, exercise_content_media_editor?: { __typename?: 'exercise_content_media_editor', id: string, editor_data?: any | null, file_image?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, file_video?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null } | null } }>, exercise_taxonomy_mns: Array<{ __typename?: 'exercise_taxonomy_mn', exercise_id: string, taxonomy_id: string, exercise_taxonomy: { __typename?: 'exercise_taxonomy', id: string, category: Enum_Exercise_Categories_Enum, locale?: string | null, translation_key: string, created_at: any, updated_at?: any | null } }> };

export type ExerciseListFragment = { __typename?: 'exercise', id: string, created_at: any, updated_at: any, owner_id: any, title: string, exercise_club_mns: Array<{ __typename: 'exercise_club_mn', club_id: string, exercise_id: string, club: { __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any, payments: Array<{ __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string }>, user_permissions: Array<{ __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null }> } }>, exercise_content_media_mns: Array<{ __typename: 'exercise_content_media_mn', exercise_id: string, exercise_content_media_id: string, sort?: number | null, exercise_content_media: { __typename?: 'exercise_content_media', id: string, type: Exercise_Content_Media_Type_Enum, text?: string | null, is_media_right?: boolean | null, video_url?: string | null, created_at?: any | null, updated_at?: any | null, file?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, exercise_content_media_editor?: { __typename?: 'exercise_content_media_editor', id: string, editor_data?: any | null, file_image?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, file_video?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null } | null } }> };

export type ExerciseTaxonomiesBySportQueryVariables = Exact<{
  sport: Enum_Sport_Enum;
  category?: InputMaybe<Enum_Exercise_Categories_Enum>;
}>;


export type ExerciseTaxonomiesBySportQuery = { __typename?: 'query_root', exercise_taxonomy: Array<{ __typename: 'exercise_taxonomy', id: string, sport: Enum_Sport_Enum, category: Enum_Exercise_Categories_Enum, locale?: string | null, translation_key: string, exercise_taxonomy_mns: Array<{ __typename?: 'exercise_taxonomy_mn', exercise_id: string, taxonomy_id: string }> }> };

export type ExerciseTaxonomyFragment = { __typename: 'exercise_taxonomy', id: string, sport: Enum_Sport_Enum, category: Enum_Exercise_Categories_Enum, locale?: string | null, translation_key: string, exercise_taxonomy_mns: Array<{ __typename?: 'exercise_taxonomy_mn', exercise_id: string, taxonomy_id: string }> };

export type UpdateExerciseMutationVariables = Exact<{
  id: Scalars['String'];
  set: Exercise_Set_Input;
  exerciseClubMn: Array<Exercise_Club_Mn_Insert_Input> | Exercise_Club_Mn_Insert_Input;
  exerciseTaxonomyMn: Array<Exercise_Taxonomy_Mn_Insert_Input> | Exercise_Taxonomy_Mn_Insert_Input;
}>;


export type UpdateExerciseMutation = { __typename?: 'mutation_root', update_exercise_by_pk?: { __typename?: 'exercise', id: string, created_at: any, updated_at: any, owner_id: any, title: string, fitness_stars: number, technique_stars: number, tactics_stars: number, locale?: string | null, exercise_club_mns: Array<{ __typename: 'exercise_club_mn', club_id: string, exercise_id: string, club: { __typename?: 'club', id: string, name: string, sport: Enum_Sport_Enum, owner_id: any, payments: Array<{ __typename?: 'payment', id: string, active?: boolean | null, license?: License_Enum | null, is_trial?: boolean | null, valid_until?: any | null, fastspring_id?: string | null, club_id: string }>, user_permissions: Array<{ __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null }> } }>, exercise_content_media_mns: Array<{ __typename: 'exercise_content_media_mn', exercise_id: string, exercise_content_media_id: string, sort?: number | null, exercise_content_media: { __typename?: 'exercise_content_media', id: string, type: Exercise_Content_Media_Type_Enum, text?: string | null, is_media_right?: boolean | null, video_url?: string | null, created_at?: any | null, updated_at?: any | null, file?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, exercise_content_media_editor?: { __typename?: 'exercise_content_media_editor', id: string, editor_data?: any | null, file_image?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null, file_video?: { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null } | null } | null } }>, exercise_taxonomy_mns: Array<{ __typename?: 'exercise_taxonomy_mn', exercise_id: string, taxonomy_id: string, exercise_taxonomy: { __typename?: 'exercise_taxonomy', id: string, category: Enum_Exercise_Categories_Enum, locale?: string | null, translation_key: string, created_at: any, updated_at?: any | null } }> } | null, delete_exercise_club_mn?: { __typename?: 'exercise_club_mn_mutation_response', affected_rows: number } | null, delete_exercise_taxonomy_mn?: { __typename?: 'exercise_taxonomy_mn_mutation_response', affected_rows: number } | null, insert_exercise_club_mn?: { __typename?: 'exercise_club_mn_mutation_response', affected_rows: number } | null, insert_exercise_taxonomy_mn?: { __typename?: 'exercise_taxonomy_mn_mutation_response', affected_rows: number } | null };

export type UpdateExerciseTaxonomyMnMutationVariables = Exact<{
  exerciseId: Scalars['String'];
  variables: Array<Exercise_Taxonomy_Mn_Insert_Input> | Exercise_Taxonomy_Mn_Insert_Input;
}>;


export type UpdateExerciseTaxonomyMnMutation = { __typename?: 'mutation_root', delete_exercise_taxonomy_mn?: { __typename?: 'exercise_taxonomy_mn_mutation_response', affected_rows: number } | null, insert_exercise_taxonomy_mn?: { __typename?: 'exercise_taxonomy_mn_mutation_response', affected_rows: number } | null };

export type ExerciseMediaMnMutationVariables = Exact<{
  exerciseId: Scalars['String'];
  sort: Scalars['Int'];
  mediaId: Scalars['String'];
  mediaOne: Exercise_Content_Media_Insert_Input;
}>;


export type ExerciseMediaMnMutation = { __typename?: 'mutation_root', insert_exercise_content_media_one?: { __typename?: 'exercise_content_media', id: string, text?: string | null, is_media_right?: boolean | null, type: Exercise_Content_Media_Type_Enum, video_url?: string | null, created_at?: any | null, updated_at?: any | null } | null, insert_exercise_content_media_mn_one?: { __typename: 'exercise_content_media_mn', exercise_id: string, exercise_content_media_id: string, sort?: number | null, exercise_content_media: { __typename?: 'exercise_content_media', id: string, type: Exercise_Content_Media_Type_Enum } } | null };

export type FileFragmentFragment = { __typename?: 'files', name?: string | null, id: any, size?: number | null, mimeType?: string | null };

export type AllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTeamsQuery = { __typename?: 'query_root', team: Array<{ __typename?: 'team', created_at: any, updated_at: any, id: string, name: string, club_id: string, club: { __typename?: 'club', id: string, name: string } }> };

export type DeleteTeamByPkMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTeamByPkMutation = { __typename?: 'mutation_root', delete_team_by_pk?: { __typename?: 'team', id: string } | null };

export type InsertTeamOneMutationVariables = Exact<{
  data: Team_Insert_Input;
}>;


export type InsertTeamOneMutation = { __typename?: 'mutation_root', insert_team_one?: { __typename?: 'team', id: string, name: string, updated_at: any, created_at: any, user_permissions: Array<{ __typename?: 'user_permission', id: number, role: User_Permission_Role_Enum, user_id: any, team_id?: string | null, team?: { __typename?: 'team', id: string, name: string } | null }>, club: { __typename?: 'club', id: string, name: string } } | null };

export type TeamFragment = { __typename?: 'team', id: string, name: string, updated_at: any, created_at: any, club: { __typename?: 'club', id: string, name: string } };

export type TeamListFragment = { __typename?: 'team', created_at: any, updated_at: any, id: string, name: string, club_id: string, club: { __typename?: 'club', id: string, name: string } };

export type UpdateTeamMutationVariables = Exact<{
  data: Team_Set_Input;
  id: Scalars['String'];
}>;


export type UpdateTeamMutation = { __typename?: 'mutation_root', update_team_by_pk?: { __typename?: 'team', id: string, name: string, updated_at: any, created_at: any, club: { __typename?: 'club', id: string, name: string } } | null };

export type UserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserQuery = { __typename?: 'query_root', user?: { __typename?: 'users', id: any, email?: any | null, emailVerified: boolean } | null };

export const ExerciseClubMnsFragmentDoc = `
    fragment exerciseClubMns on exercise_club_mn {
  club_id
  exercise_id
  __typename
}
    `;
export const ClubFragmentDoc = `
    fragment club on club {
  id
  name
  sport
  owner_id
}
    `;
export const PaymentFragmentDoc = `
    fragment payment on payment {
  id
  active
  license
  is_trial
  valid_until
  fastspring_id
  club_id
}
    `;
export const UserPermissionFragmentDoc = `
    fragment userPermission on user_permission {
  id
  role
  user_id
  team_id
  team {
    id
    name
  }
}
    `;
export const UserClubFragmentDoc = `
    fragment userClub on club {
  ...club
  payments {
    ...payment
  }
  user_permissions {
    ...userPermission
  }
}
    ${ClubFragmentDoc}
${PaymentFragmentDoc}
${UserPermissionFragmentDoc}`;
export const ExerciseContentMnsFragmentDoc = `
    fragment exerciseContentMns on exercise_content_media_mn {
  exercise_id
  exercise_content_media_id
  exercise_content_media {
    id
    type
  }
  sort
  __typename
}
    `;
export const ExerciseContentMediaFragmentDoc = `
    fragment exerciseContentMedia on exercise_content_media {
  id
  text
  is_media_right
  type
  video_url
  created_at
  updated_at
}
    `;
export const FileFragmentFragmentDoc = `
    fragment fileFragment on files {
  name
  id
  size
  mimeType
}
    `;
export const ExerciseContentMediaEditorFragmentDoc = `
    fragment exerciseContentMediaEditor on exercise_content_media_editor {
  id
  editor_data
  file_image {
    ...fileFragment
  }
  file_video {
    ...fileFragment
  }
}
    ${FileFragmentFragmentDoc}`;
export const ExerciseDetailFragmentDoc = `
    fragment exerciseDetail on exercise {
  id
  created_at
  updated_at
  owner_id
  title
  fitness_stars
  technique_stars
  tactics_stars
  locale
  exercise_club_mns {
    ...exerciseClubMns
    club {
      ...userClub
    }
  }
  exercise_content_media_mns(order_by: [{sort: asc}]) {
    ...exerciseContentMns
    exercise_content_media {
      ...exerciseContentMedia
      file {
        ...fileFragment
      }
      exercise_content_media_editor {
        ...exerciseContentMediaEditor
      }
    }
  }
  exercise_taxonomy_mns {
    exercise_id
    taxonomy_id
    exercise_taxonomy {
      id
      category
      locale
      translation_key
      created_at
      updated_at
    }
  }
}
    ${ExerciseClubMnsFragmentDoc}
${UserClubFragmentDoc}
${ExerciseContentMnsFragmentDoc}
${ExerciseContentMediaFragmentDoc}
${FileFragmentFragmentDoc}
${ExerciseContentMediaEditorFragmentDoc}`;
export const ExerciseListFragmentDoc = `
    fragment exerciseList on exercise {
  id
  created_at
  updated_at
  owner_id
  title
  exercise_club_mns {
    ...exerciseClubMns
    club {
      ...userClub
    }
  }
  exercise_content_media_mns(limit: 1, order_by: [{sort: asc}]) {
    ...exerciseContentMns
    exercise_content_media {
      ...exerciseContentMedia
      file {
        ...fileFragment
      }
      exercise_content_media_editor {
        ...exerciseContentMediaEditor
      }
    }
  }
}
    ${ExerciseClubMnsFragmentDoc}
${UserClubFragmentDoc}
${ExerciseContentMnsFragmentDoc}
${ExerciseContentMediaFragmentDoc}
${FileFragmentFragmentDoc}
${ExerciseContentMediaEditorFragmentDoc}`;
export const ExerciseTaxonomyFragmentDoc = `
    fragment exerciseTaxonomy on exercise_taxonomy {
  id
  sport
  category
  locale
  translation_key
  __typename
  exercise_taxonomy_mns {
    exercise_id
    taxonomy_id
  }
}
    `;
export const TeamFragmentDoc = `
    fragment team on team {
  id
  name
  club {
    id
    name
  }
  updated_at
  created_at
}
    `;
export const TeamListFragmentDoc = `
    fragment teamList on team {
  created_at
  updated_at
  id
  name
  club_id
  club {
    id
    name
  }
}
    `;
export const DeleteClubByPkDocument = `
    mutation deleteClubByPk($id: String!) {
  delete_club_by_pk(id: $id) {
    id
  }
}
    `;
export const useDeleteClubByPkMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteClubByPkMutation, TError, DeleteClubByPkMutationVariables, TContext>) =>
    useMutation<DeleteClubByPkMutation, TError, DeleteClubByPkMutationVariables, TContext>(
      ['deleteClubByPk'],
      (variables?: DeleteClubByPkMutationVariables) => fetchData<DeleteClubByPkMutation, DeleteClubByPkMutationVariables>(DeleteClubByPkDocument, variables)(),
      options
    );
export const InsertClubOneDocument = `
    mutation insertClubOne($data: club_insert_input!, $payment: payment_insert_input!) {
  insert_club_one(object: $data) {
    ...club
    payments {
      ...payment
    }
    user_permissions {
      ...userPermission
    }
  }
  insert_payment_one(object: $payment) {
    ...payment
  }
}
    ${ClubFragmentDoc}
${PaymentFragmentDoc}
${UserPermissionFragmentDoc}`;
export const useInsertClubOneMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<InsertClubOneMutation, TError, InsertClubOneMutationVariables, TContext>) =>
    useMutation<InsertClubOneMutation, TError, InsertClubOneMutationVariables, TContext>(
      ['insertClubOne'],
      (variables?: InsertClubOneMutationVariables) => fetchData<InsertClubOneMutation, InsertClubOneMutationVariables>(InsertClubOneDocument, variables)(),
      options
    );
export const UpdateClubDocument = `
    mutation updateClub($data: club_set_input!, $id: String!) {
  update_club_by_pk(_set: $data, pk_columns: {id: $id}) {
    ...club
  }
}
    ${ClubFragmentDoc}`;
export const useUpdateClubMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateClubMutation, TError, UpdateClubMutationVariables, TContext>) =>
    useMutation<UpdateClubMutation, TError, UpdateClubMutationVariables, TContext>(
      ['updateClub'],
      (variables?: UpdateClubMutationVariables) => fetchData<UpdateClubMutation, UpdateClubMutationVariables>(UpdateClubDocument, variables)(),
      options
    );
export const UserClubPermissionsDocument = `
    query userClubPermissions($userId: uuid!) {
  club(
    where: {_or: [{owner_id: {_eq: $userId}}, {user_permissions: {user_id: {_eq: $userId}}}]}
    order_by: [{name: asc, created_at: desc}]
  ) {
    ...userClub
  }
}
    ${UserClubFragmentDoc}`;
export const useUserClubPermissionsQuery = <
      TData = UserClubPermissionsQuery,
      TError = unknown
    >(
      variables: UserClubPermissionsQueryVariables,
      options?: UseQueryOptions<UserClubPermissionsQuery, TError, TData>
    ) =>
    useQuery<UserClubPermissionsQuery, TError, TData>(
      ['userClubPermissions', variables],
      fetchData<UserClubPermissionsQuery, UserClubPermissionsQueryVariables>(UserClubPermissionsDocument, variables),
      options
    );
export const AllExercisesDocument = `
    query allExercises {
  exercise {
    ...exerciseList
  }
}
    ${ExerciseListFragmentDoc}`;
export const useAllExercisesQuery = <
      TData = AllExercisesQuery,
      TError = unknown
    >(
      variables?: AllExercisesQueryVariables,
      options?: UseQueryOptions<AllExercisesQuery, TError, TData>
    ) =>
    useQuery<AllExercisesQuery, TError, TData>(
      variables === undefined ? ['allExercises'] : ['allExercises', variables],
      fetchData<AllExercisesQuery, AllExercisesQueryVariables>(AllExercisesDocument, variables),
      options
    );
export const CreateExerciseDocument = `
    mutation createExercise($object: exercise_insert_input!) {
  insert_exercise_one(object: $object) {
    ...exerciseDetail
  }
}
    ${ExerciseDetailFragmentDoc}`;
export const useCreateExerciseMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateExerciseMutation, TError, CreateExerciseMutationVariables, TContext>) =>
    useMutation<CreateExerciseMutation, TError, CreateExerciseMutationVariables, TContext>(
      ['createExercise'],
      (variables?: CreateExerciseMutationVariables) => fetchData<CreateExerciseMutation, CreateExerciseMutationVariables>(CreateExerciseDocument, variables)(),
      options
    );
export const DeleteExerciseMediaMnDocument = `
    mutation deleteExerciseMediaMn($exerciseId: String!, $exerciseContentMediaId: String!, $updatedMn: [exercise_content_media_mn_insert_input!]!) {
  delete_exercise_content_media_mn_by_pk(
    exercise_id: $exerciseId
    exercise_content_media_id: $exerciseContentMediaId
  ) {
    exercise_content_media_id
    exercise_id
    __typename
  }
  insert_exercise_content_media_mn(
    objects: $updatedMn
    on_conflict: {constraint: exercise_content_media_mn_pkey, update_columns: [sort]}
  ) {
    __typename
    returning {
      exercise_content_media_id
      exercise_id
      sort
    }
    affected_rows
  }
}
    `;
export const useDeleteExerciseMediaMnMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteExerciseMediaMnMutation, TError, DeleteExerciseMediaMnMutationVariables, TContext>) =>
    useMutation<DeleteExerciseMediaMnMutation, TError, DeleteExerciseMediaMnMutationVariables, TContext>(
      ['deleteExerciseMediaMn'],
      (variables?: DeleteExerciseMediaMnMutationVariables) => fetchData<DeleteExerciseMediaMnMutation, DeleteExerciseMediaMnMutationVariables>(DeleteExerciseMediaMnDocument, variables)(),
      options
    );
export const ExerciseByPkDocument = `
    query exerciseByPk($id: String!) {
  exercise_by_pk(id: $id) {
    ...exerciseDetail
  }
}
    ${ExerciseDetailFragmentDoc}`;
export const useExerciseByPkQuery = <
      TData = ExerciseByPkQuery,
      TError = unknown
    >(
      variables: ExerciseByPkQueryVariables,
      options?: UseQueryOptions<ExerciseByPkQuery, TError, TData>
    ) =>
    useQuery<ExerciseByPkQuery, TError, TData>(
      ['exerciseByPk', variables],
      fetchData<ExerciseByPkQuery, ExerciseByPkQueryVariables>(ExerciseByPkDocument, variables),
      options
    );
export const ExerciseTaxonomiesBySportDocument = `
    query exerciseTaxonomiesBySport($sport: enum_sport_enum!, $category: enum_exercise_categories_enum) {
  exercise_taxonomy(where: {sport: {_eq: $sport}}) {
    ...exerciseTaxonomy
  }
}
    ${ExerciseTaxonomyFragmentDoc}`;
export const useExerciseTaxonomiesBySportQuery = <
      TData = ExerciseTaxonomiesBySportQuery,
      TError = unknown
    >(
      variables: ExerciseTaxonomiesBySportQueryVariables,
      options?: UseQueryOptions<ExerciseTaxonomiesBySportQuery, TError, TData>
    ) =>
    useQuery<ExerciseTaxonomiesBySportQuery, TError, TData>(
      ['exerciseTaxonomiesBySport', variables],
      fetchData<ExerciseTaxonomiesBySportQuery, ExerciseTaxonomiesBySportQueryVariables>(ExerciseTaxonomiesBySportDocument, variables),
      options
    );
export const UpdateExerciseDocument = `
    mutation updateExercise($id: String!, $set: exercise_set_input!, $exerciseClubMn: [exercise_club_mn_insert_input!]!, $exerciseTaxonomyMn: [exercise_taxonomy_mn_insert_input!]!) {
  update_exercise_by_pk(pk_columns: {id: $id}, _set: $set) {
    ...exerciseDetail
  }
  delete_exercise_club_mn(where: {exercise_id: {_eq: $id}}) {
    affected_rows
  }
  delete_exercise_taxonomy_mn(where: {exercise_id: {_eq: $id}}) {
    affected_rows
  }
  insert_exercise_club_mn(
    objects: $exerciseClubMn
    on_conflict: {constraint: exercise_club_mn_pkey, update_columns: []}
  ) {
    affected_rows
  }
  insert_exercise_taxonomy_mn(
    objects: $exerciseTaxonomyMn
    on_conflict: {constraint: exercise_taxonomy_mn_pkey, update_columns: []}
  ) {
    affected_rows
  }
}
    ${ExerciseDetailFragmentDoc}`;
export const useUpdateExerciseMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateExerciseMutation, TError, UpdateExerciseMutationVariables, TContext>) =>
    useMutation<UpdateExerciseMutation, TError, UpdateExerciseMutationVariables, TContext>(
      ['updateExercise'],
      (variables?: UpdateExerciseMutationVariables) => fetchData<UpdateExerciseMutation, UpdateExerciseMutationVariables>(UpdateExerciseDocument, variables)(),
      options
    );
export const UpdateExerciseTaxonomyMnDocument = `
    mutation updateExerciseTaxonomyMn($exerciseId: String!, $variables: [exercise_taxonomy_mn_insert_input!]!) {
  delete_exercise_taxonomy_mn(where: {exercise_id: {_eq: $exerciseId}}) {
    affected_rows
  }
  insert_exercise_taxonomy_mn(objects: $variables) {
    affected_rows
  }
}
    `;
export const useUpdateExerciseTaxonomyMnMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateExerciseTaxonomyMnMutation, TError, UpdateExerciseTaxonomyMnMutationVariables, TContext>) =>
    useMutation<UpdateExerciseTaxonomyMnMutation, TError, UpdateExerciseTaxonomyMnMutationVariables, TContext>(
      ['updateExerciseTaxonomyMn'],
      (variables?: UpdateExerciseTaxonomyMnMutationVariables) => fetchData<UpdateExerciseTaxonomyMnMutation, UpdateExerciseTaxonomyMnMutationVariables>(UpdateExerciseTaxonomyMnDocument, variables)(),
      options
    );
export const ExerciseMediaMnDocument = `
    mutation exerciseMediaMn($exerciseId: String!, $sort: Int!, $mediaId: String!, $mediaOne: exercise_content_media_insert_input!) {
  insert_exercise_content_media_one(
    object: $mediaOne
    on_conflict: {constraint: exercise_content_media_pkey, update_columns: [type, s3_file_id, editor_image_id, video_url, text, editor_animation_id]}
  ) {
    ...exerciseContentMedia
  }
  insert_exercise_content_media_mn_one(
    object: {exercise_id: $exerciseId, exercise_content_media_id: $mediaId, sort: $sort}
    on_conflict: {update_columns: [sort, exercise_content_media_id, exercise_id], constraint: exercise_content_media_mn_pkey}
  ) {
    ...exerciseContentMns
  }
}
    ${ExerciseContentMediaFragmentDoc}
${ExerciseContentMnsFragmentDoc}`;
export const useExerciseMediaMnMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ExerciseMediaMnMutation, TError, ExerciseMediaMnMutationVariables, TContext>) =>
    useMutation<ExerciseMediaMnMutation, TError, ExerciseMediaMnMutationVariables, TContext>(
      ['exerciseMediaMn'],
      (variables?: ExerciseMediaMnMutationVariables) => fetchData<ExerciseMediaMnMutation, ExerciseMediaMnMutationVariables>(ExerciseMediaMnDocument, variables)(),
      options
    );
export const AllTeamsDocument = `
    query allTeams {
  team {
    ...teamList
  }
}
    ${TeamListFragmentDoc}`;
export const useAllTeamsQuery = <
      TData = AllTeamsQuery,
      TError = unknown
    >(
      variables?: AllTeamsQueryVariables,
      options?: UseQueryOptions<AllTeamsQuery, TError, TData>
    ) =>
    useQuery<AllTeamsQuery, TError, TData>(
      variables === undefined ? ['allTeams'] : ['allTeams', variables],
      fetchData<AllTeamsQuery, AllTeamsQueryVariables>(AllTeamsDocument, variables),
      options
    );
export const DeleteTeamByPkDocument = `
    mutation deleteTeamByPk($id: String!) {
  delete_team_by_pk(id: $id) {
    id
  }
}
    `;
export const useDeleteTeamByPkMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteTeamByPkMutation, TError, DeleteTeamByPkMutationVariables, TContext>) =>
    useMutation<DeleteTeamByPkMutation, TError, DeleteTeamByPkMutationVariables, TContext>(
      ['deleteTeamByPk'],
      (variables?: DeleteTeamByPkMutationVariables) => fetchData<DeleteTeamByPkMutation, DeleteTeamByPkMutationVariables>(DeleteTeamByPkDocument, variables)(),
      options
    );
export const InsertTeamOneDocument = `
    mutation insertTeamOne($data: team_insert_input!) {
  insert_team_one(object: $data) {
    ...team
    user_permissions {
      ...userPermission
    }
  }
}
    ${TeamFragmentDoc}
${UserPermissionFragmentDoc}`;
export const useInsertTeamOneMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<InsertTeamOneMutation, TError, InsertTeamOneMutationVariables, TContext>) =>
    useMutation<InsertTeamOneMutation, TError, InsertTeamOneMutationVariables, TContext>(
      ['insertTeamOne'],
      (variables?: InsertTeamOneMutationVariables) => fetchData<InsertTeamOneMutation, InsertTeamOneMutationVariables>(InsertTeamOneDocument, variables)(),
      options
    );
export const UpdateTeamDocument = `
    mutation updateTeam($data: team_set_input!, $id: String!) {
  update_team_by_pk(_set: $data, pk_columns: {id: $id}) {
    ...team
  }
}
    ${TeamFragmentDoc}`;
export const useUpdateTeamMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateTeamMutation, TError, UpdateTeamMutationVariables, TContext>) =>
    useMutation<UpdateTeamMutation, TError, UpdateTeamMutationVariables, TContext>(
      ['updateTeam'],
      (variables?: UpdateTeamMutationVariables) => fetchData<UpdateTeamMutation, UpdateTeamMutationVariables>(UpdateTeamDocument, variables)(),
      options
    );
export const UserDocument = `
    query user($id: uuid!) {
  user(id: $id) {
    id
    email
    emailVerified
  }
}
    `;
export const useUserQuery = <
      TData = UserQuery,
      TError = unknown
    >(
      variables: UserQueryVariables,
      options?: UseQueryOptions<UserQuery, TError, TData>
    ) =>
    useQuery<UserQuery, TError, TData>(
      ['user', variables],
      fetchData<UserQuery, UserQueryVariables>(UserDocument, variables),
      options
    );