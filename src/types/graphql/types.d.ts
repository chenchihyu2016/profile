export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Date` scalar type represents a year, month and day in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
    Date: any;
    /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
    DateTime: any;
    /** The `DateTimeOffset` scalar type represents a date, time and offset from UTC. `DateTimeOffset` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
    DateTimeOffset: any;
    Decimal: any;
    /** The `Milliseconds` scalar type represents a period of time represented as the total number of milliseconds. */
    Milliseconds: any;
    /** The `Seconds` scalar type represents a period of time represented as the total number of seconds. */
    Seconds: any;
};

/** 訂閱Model */
export type MovieEvent = {
    __typename?: 'MovieEvent';
    eventTime: Scalars['Date'];
    id: Scalars['String'];
    message: Scalars['String'];
    movieId: Scalars['Int'];
};

/** 新增/修改/刪除 */
export type Mutation = {
    __typename?: 'Mutation';
    /** 新增 */
    addMovie?: Maybe<Movie>;
    /** 刪除 */
    delMovie?: Maybe<Movie>;
};

/** 新增/修改/刪除 */
export type MutationAddMovieArgs = {
    movie: MovieInput;
};

/** 新增/修改/刪除 */
export type MutationDelMovieArgs = {
    id: Scalars['Int'];
};

/** 查詢 */
export type Query = {
    __typename?: 'Query';
    /** 查詢單筆 */
    movie?: Maybe<Movie>;
    /** 查詢全部 */
    movies?: Maybe<Array<Maybe<Movie>>>;
};

/** 查詢 */
export type QueryMovieArgs = {
    id: Scalars['Int'];
};

/** 訂閱 open WebSocket */
export type Subscription = {
    __typename?: 'Subscription';
    movieEvent?: Maybe<MovieEvent>;
};

export type Movie = {
    __typename?: 'movie';
    /** Company */
    company: Scalars['String'];
    /** Id */
    id: Scalars['Int'];
    /** Name */
    name: Scalars['String'];
    /** Url */
    url: Scalars['String'];
};

/** 新增Model */
export type MovieInput = {
    /** Company */
    company: Scalars['String'];
    /** Name */
    name: Scalars['String'];
    /** Url */
    url: Scalars['String'];
};
