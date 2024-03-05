
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cards
 * 
 */
export type Cards = $Result.DefaultSelection<Prisma.$CardsPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Responsible
 * 
 */
export type Responsible = $Result.DefaultSelection<Prisma.$ResponsiblePayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.cards`: Exposes CRUD operations for the **Cards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.cards.findMany()
    * ```
    */
  get cards(): Prisma.CardsDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.responsible`: Exposes CRUD operations for the **Responsible** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responsibles
    * const responsibles = await prisma.responsible.findMany()
    * ```
    */
  get responsible(): Prisma.ResponsibleDelegate<ExtArgs>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Cards: 'Cards',
    Task: 'Task',
    Comment: 'Comment',
    Client: 'Client',
    Responsible: 'Responsible',
    File: 'File'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'cards' | 'task' | 'comment' | 'client' | 'responsible' | 'file'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cards: {
        payload: Prisma.$CardsPayload<ExtArgs>
        fields: Prisma.CardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          findFirst: {
            args: Prisma.CardsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          findMany: {
            args: Prisma.CardsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>[]
          }
          create: {
            args: Prisma.CardsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          createMany: {
            args: Prisma.CardsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CardsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          update: {
            args: Prisma.CardsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          deleteMany: {
            args: Prisma.CardsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CardsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CardsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CardsPayload>
          }
          aggregate: {
            args: Prisma.CardsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCards>
          }
          groupBy: {
            args: Prisma.CardsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardsCountArgs<ExtArgs>,
            result: $Utils.Optional<CardsCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Responsible: {
        payload: Prisma.$ResponsiblePayload<ExtArgs>
        fields: Prisma.ResponsibleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponsibleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsiblePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponsibleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsiblePayload>
          }
          findFirst: {
            args: Prisma.ResponsibleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsiblePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponsibleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsiblePayload>
          }
          findMany: {
            args: Prisma.ResponsibleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsiblePayload>[]
          }
          create: {
            args: Prisma.ResponsibleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsiblePayload>
          }
          createMany: {
            args: Prisma.ResponsibleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ResponsibleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsiblePayload>
          }
          update: {
            args: Prisma.ResponsibleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsiblePayload>
          }
          deleteMany: {
            args: Prisma.ResponsibleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResponsibleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResponsibleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResponsiblePayload>
          }
          aggregate: {
            args: Prisma.ResponsibleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResponsible>
          }
          groupBy: {
            args: Prisma.ResponsibleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResponsibleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponsibleCountArgs<ExtArgs>,
            result: $Utils.Optional<ResponsibleCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>,
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cards: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | UserCountOutputTypeCountCardsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }



  /**
   * Count Type CardsCountOutputType
   */

  export type CardsCountOutputType = {
    tasks: number
    files: number
  }

  export type CardsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | CardsCountOutputTypeCountTasksArgs
    files?: boolean | CardsCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes

  /**
   * CardsCountOutputType without action
   */
  export type CardsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardsCountOutputType
     */
    select?: CardsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CardsCountOutputType without action
   */
  export type CardsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * CardsCountOutputType without action
   */
  export type CardsCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }



  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    responsibles: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsibles?: boolean | ClientCountOutputTypeCountResponsiblesArgs
  }

  // Custom InputTypes

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountResponsiblesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponsibleWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    function: number
    isAdmin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    function?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    function: string[]
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    function?: boolean
    isAdmin?: boolean
    cards?: boolean | User$cardsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    function?: boolean
    isAdmin?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | User$cardsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cards: Prisma.$CardsPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      function: string[]
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cards<T extends User$cardsArgs<ExtArgs> = {}>(args?: Subset<T, User$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly function: FieldRef<"User", 'String[]'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.cards
   */
  export type User$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
    where?: CardsWhereInput
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    cursor?: CardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }


  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Cards
   */

  export type AggregateCards = {
    _count: CardsCountAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  export type CardsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    solution: string | null
    priority: string | null
    status: string | null
    createdAt: string | null
    updatedAt: string | null
    deleteAt: string | null
    userId: string | null
  }

  export type CardsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    solution: string | null
    priority: string | null
    status: string | null
    createdAt: string | null
    updatedAt: string | null
    deleteAt: string | null
    userId: string | null
  }

  export type CardsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    solution: number
    priority: number
    status: number
    createdAt: number
    updatedAt: number
    deleteAt: number
    type: number
    clients: number
    worker: number
    userId: number
    _all: number
  }


  export type CardsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    solution?: true
    priority?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deleteAt?: true
    userId?: true
  }

  export type CardsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    solution?: true
    priority?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deleteAt?: true
    userId?: true
  }

  export type CardsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    solution?: true
    priority?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deleteAt?: true
    type?: true
    clients?: true
    worker?: true
    userId?: true
    _all?: true
  }

  export type CardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to aggregate.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardsMaxAggregateInputType
  }

  export type GetCardsAggregateType<T extends CardsAggregateArgs> = {
        [P in keyof T & keyof AggregateCards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCards[P]>
      : GetScalarType<T[P], AggregateCards[P]>
  }




  export type CardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardsWhereInput
    orderBy?: CardsOrderByWithAggregationInput | CardsOrderByWithAggregationInput[]
    by: CardsScalarFieldEnum[] | CardsScalarFieldEnum
    having?: CardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardsCountAggregateInputType | true
    _min?: CardsMinAggregateInputType
    _max?: CardsMaxAggregateInputType
  }

  export type CardsGroupByOutputType = {
    id: string
    title: string
    description: string | null
    solution: string | null
    priority: string | null
    status: string | null
    createdAt: string
    updatedAt: string | null
    deleteAt: string | null
    type: string[]
    clients: string[]
    worker: string[]
    userId: string
    _count: CardsCountAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  type GetCardsGroupByPayload<T extends CardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardsGroupByOutputType[P]>
            : GetScalarType<T[P], CardsGroupByOutputType[P]>
        }
      >
    >


  export type CardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    solution?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleteAt?: boolean
    type?: boolean
    clients?: boolean
    worker?: boolean
    userId?: boolean
    tasks?: boolean | Cards$tasksArgs<ExtArgs>
    files?: boolean | Cards$filesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CardsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cards"]>

  export type CardsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    solution?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleteAt?: boolean
    type?: boolean
    clients?: boolean
    worker?: boolean
    userId?: boolean
  }

  export type CardsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Cards$tasksArgs<ExtArgs>
    files?: boolean | Cards$filesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CardsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cards"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      solution: string | null
      priority: string | null
      status: string | null
      createdAt: string
      updatedAt: string | null
      deleteAt: string | null
      type: string[]
      clients: string[]
      worker: string[]
      userId: string
    }, ExtArgs["result"]["cards"]>
    composites: {}
  }


  type CardsGetPayload<S extends boolean | null | undefined | CardsDefaultArgs> = $Result.GetResult<Prisma.$CardsPayload, S>

  type CardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CardsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CardsCountAggregateInputType | true
    }

  export interface CardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cards'], meta: { name: 'Cards' } }
    /**
     * Find zero or one Cards that matches the filter.
     * @param {CardsFindUniqueArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CardsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CardsFindUniqueArgs<ExtArgs>>
    ): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cards that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CardsFindUniqueOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CardsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CardsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindFirstArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CardsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CardsFindFirstArgs<ExtArgs>>
    ): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindFirstOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CardsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CardsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.cards.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.cards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardsWithIdOnly = await prisma.cards.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CardsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CardsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cards.
     * @param {CardsCreateArgs} args - Arguments to create a Cards.
     * @example
     * // Create one Cards
     * const Cards = await prisma.cards.create({
     *   data: {
     *     // ... data to create a Cards
     *   }
     * })
     * 
    **/
    create<T extends CardsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CardsCreateArgs<ExtArgs>>
    ): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cards.
     *     @param {CardsCreateManyArgs} args - Arguments to create many Cards.
     *     @example
     *     // Create many Cards
     *     const cards = await prisma.cards.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CardsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CardsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cards.
     * @param {CardsDeleteArgs} args - Arguments to delete one Cards.
     * @example
     * // Delete one Cards
     * const Cards = await prisma.cards.delete({
     *   where: {
     *     // ... filter to delete one Cards
     *   }
     * })
     * 
    **/
    delete<T extends CardsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CardsDeleteArgs<ExtArgs>>
    ): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cards.
     * @param {CardsUpdateArgs} args - Arguments to update one Cards.
     * @example
     * // Update one Cards
     * const cards = await prisma.cards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CardsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CardsUpdateArgs<ExtArgs>>
    ): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cards.
     * @param {CardsDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.cards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CardsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CardsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const cards = await prisma.cards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CardsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CardsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cards.
     * @param {CardsUpsertArgs} args - Arguments to update or create a Cards.
     * @example
     * // Update or create a Cards
     * const cards = await prisma.cards.upsert({
     *   create: {
     *     // ... data to create a Cards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cards we want to update
     *   }
     * })
    **/
    upsert<T extends CardsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CardsUpsertArgs<ExtArgs>>
    ): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.cards.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardsCountArgs>(
      args?: Subset<T, CardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardsAggregateArgs>(args: Subset<T, CardsAggregateArgs>): Prisma.PrismaPromise<GetCardsAggregateType<T>>

    /**
     * Group by Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardsGroupByArgs['orderBy'] }
        : { orderBy?: CardsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cards model
   */
  readonly fields: CardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tasks<T extends Cards$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Cards$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    files<T extends Cards$filesArgs<ExtArgs> = {}>(args?: Subset<T, Cards$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cards model
   */ 
  interface CardsFieldRefs {
    readonly id: FieldRef<"Cards", 'String'>
    readonly title: FieldRef<"Cards", 'String'>
    readonly description: FieldRef<"Cards", 'String'>
    readonly solution: FieldRef<"Cards", 'String'>
    readonly priority: FieldRef<"Cards", 'String'>
    readonly status: FieldRef<"Cards", 'String'>
    readonly createdAt: FieldRef<"Cards", 'String'>
    readonly updatedAt: FieldRef<"Cards", 'String'>
    readonly deleteAt: FieldRef<"Cards", 'String'>
    readonly type: FieldRef<"Cards", 'String[]'>
    readonly clients: FieldRef<"Cards", 'String[]'>
    readonly worker: FieldRef<"Cards", 'String[]'>
    readonly userId: FieldRef<"Cards", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Cards findUnique
   */
  export type CardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where: CardsWhereUniqueInput
  }


  /**
   * Cards findUniqueOrThrow
   */
  export type CardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where: CardsWhereUniqueInput
  }


  /**
   * Cards findFirst
   */
  export type CardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }


  /**
   * Cards findFirstOrThrow
   */
  export type CardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }


  /**
   * Cards findMany
   */
  export type CardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardsOrderByWithRelationInput | CardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }


  /**
   * Cards create
   */
  export type CardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cards.
     */
    data: XOR<CardsCreateInput, CardsUncheckedCreateInput>
  }


  /**
   * Cards createMany
   */
  export type CardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardsCreateManyInput | CardsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Cards update
   */
  export type CardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cards.
     */
    data: XOR<CardsUpdateInput, CardsUncheckedUpdateInput>
    /**
     * Choose, which Cards to update.
     */
    where: CardsWhereUniqueInput
  }


  /**
   * Cards updateMany
   */
  export type CardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardsUpdateManyMutationInput, CardsUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardsWhereInput
  }


  /**
   * Cards upsert
   */
  export type CardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cards to update in case it exists.
     */
    where: CardsWhereUniqueInput
    /**
     * In case the Cards found by the `where` argument doesn't exist, create a new Cards with this data.
     */
    create: XOR<CardsCreateInput, CardsUncheckedCreateInput>
    /**
     * In case the Cards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardsUpdateInput, CardsUncheckedUpdateInput>
  }


  /**
   * Cards delete
   */
  export type CardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
    /**
     * Filter which Cards to delete.
     */
    where: CardsWhereUniqueInput
  }


  /**
   * Cards deleteMany
   */
  export type CardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardsWhereInput
  }


  /**
   * Cards.tasks
   */
  export type Cards$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Cards.files
   */
  export type Cards$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * Cards without action
   */
  export type CardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cards
     */
    select?: CardsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CardsInclude<ExtArgs> | null
  }



  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    task: string | null
    completed: boolean | null
    createdAt: string | null
    updatedAt: string | null
    cardsId: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    task: string | null
    completed: boolean | null
    createdAt: string | null
    updatedAt: string | null
    cardsId: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    task: number
    completed: number
    createdAt: number
    updatedAt: number
    cardsId: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    task?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    cardsId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    task?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    cardsId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    task?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    cardsId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    task: string
    completed: boolean
    createdAt: string
    updatedAt: string
    cardsId: string
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cardsId?: boolean
    card?: boolean | CardsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    task?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cardsId?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardsDefaultArgs<ExtArgs>
  }


  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      card: Prisma.$CardsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      task: string
      completed: boolean
      createdAt: string
      updatedAt: string
      cardsId: string
    }, ExtArgs["result"]["task"]>
    composites: {}
  }


  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    card<T extends CardsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardsDefaultArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly task: FieldRef<"Task", 'String'>
    readonly completed: FieldRef<"Task", 'Boolean'>
    readonly createdAt: FieldRef<"Task", 'String'>
    readonly updatedAt: FieldRef<"Task", 'String'>
    readonly cardsId: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }


  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }


  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }


  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }


  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
  }



  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    title: string | null
    comment: string | null
    createdAt: string | null
    updatedAt: string | null
    priority: string | null
    userId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    comment: string | null
    createdAt: string | null
    updatedAt: string | null
    priority: string | null
    userId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    title: number
    comment: number
    createdAt: number
    updatedAt: number
    priority: number
    userId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    title?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    priority?: true
    userId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    title?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    priority?: true
    userId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    title?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    priority?: true
    userId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    title: string
    comment: string
    createdAt: string
    updatedAt: string
    priority: string | null
    userId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priority?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    title?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priority?: boolean
    userId?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      comment: string
      createdAt: string
      updatedAt: string
      priority: string | null
      userId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }


  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly title: FieldRef<"Comment", 'String'>
    readonly comment: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'String'>
    readonly updatedAt: FieldRef<"Comment", 'String'>
    readonly priority: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
  }



  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    codigo: string | null
    companyName: string | null
    socialName: string | null
    cnpj: string | null
    businessPhone: string | null
    businessEmail: string | null
    comment: string | null
    cep: string | null
    state: string | null
    city: string | null
    street: string | null
    neighborhood: string | null
    number: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    codigo: string | null
    companyName: string | null
    socialName: string | null
    cnpj: string | null
    businessPhone: string | null
    businessEmail: string | null
    comment: string | null
    cep: string | null
    state: string | null
    city: string | null
    street: string | null
    neighborhood: string | null
    number: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    codigo: number
    companyName: number
    socialName: number
    cnpj: number
    businessPhone: number
    businessEmail: number
    comment: number
    cep: number
    state: number
    city: number
    street: number
    neighborhood: number
    number: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    codigo?: true
    companyName?: true
    socialName?: true
    cnpj?: true
    businessPhone?: true
    businessEmail?: true
    comment?: true
    cep?: true
    state?: true
    city?: true
    street?: true
    neighborhood?: true
    number?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    codigo?: true
    companyName?: true
    socialName?: true
    cnpj?: true
    businessPhone?: true
    businessEmail?: true
    comment?: true
    cep?: true
    state?: true
    city?: true
    street?: true
    neighborhood?: true
    number?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    codigo?: true
    companyName?: true
    socialName?: true
    cnpj?: true
    businessPhone?: true
    businessEmail?: true
    comment?: true
    cep?: true
    state?: true
    city?: true
    street?: true
    neighborhood?: true
    number?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    codigo: string
    companyName: string
    socialName: string
    cnpj: string
    businessPhone: string
    businessEmail: string
    comment: string
    cep: string
    state: string
    city: string
    street: string
    neighborhood: string
    number: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    companyName?: boolean
    socialName?: boolean
    cnpj?: boolean
    businessPhone?: boolean
    businessEmail?: boolean
    comment?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    street?: boolean
    neighborhood?: boolean
    number?: boolean
    responsibles?: boolean | Client$responsiblesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    codigo?: boolean
    companyName?: boolean
    socialName?: boolean
    cnpj?: boolean
    businessPhone?: boolean
    businessEmail?: boolean
    comment?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    street?: boolean
    neighborhood?: boolean
    number?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsibles?: boolean | Client$responsiblesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      responsibles: Prisma.$ResponsiblePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo: string
      companyName: string
      socialName: string
      cnpj: string
      businessPhone: string
      businessEmail: string
      comment: string
      cep: string
      state: string
      city: string
      street: string
      neighborhood: string
      number: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }


  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends ClientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientCreateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clients.
     *     @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends ClientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends ClientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    responsibles<T extends Client$responsiblesArgs<ExtArgs> = {}>(args?: Subset<T, Client$responsiblesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsiblePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly codigo: FieldRef<"Client", 'String'>
    readonly companyName: FieldRef<"Client", 'String'>
    readonly socialName: FieldRef<"Client", 'String'>
    readonly cnpj: FieldRef<"Client", 'String'>
    readonly businessPhone: FieldRef<"Client", 'String'>
    readonly businessEmail: FieldRef<"Client", 'String'>
    readonly comment: FieldRef<"Client", 'String'>
    readonly cep: FieldRef<"Client", 'String'>
    readonly state: FieldRef<"Client", 'String'>
    readonly city: FieldRef<"Client", 'String'>
    readonly street: FieldRef<"Client", 'String'>
    readonly neighborhood: FieldRef<"Client", 'String'>
    readonly number: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }


  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }


  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }


  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }


  /**
   * Client.responsibles
   */
  export type Client$responsiblesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
    where?: ResponsibleWhereInput
    orderBy?: ResponsibleOrderByWithRelationInput | ResponsibleOrderByWithRelationInput[]
    cursor?: ResponsibleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponsibleScalarFieldEnum | ResponsibleScalarFieldEnum[]
  }


  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
  }



  /**
   * Model Responsible
   */

  export type AggregateResponsible = {
    _count: ResponsibleCountAggregateOutputType | null
    _min: ResponsibleMinAggregateOutputType | null
    _max: ResponsibleMaxAggregateOutputType | null
  }

  export type ResponsibleMinAggregateOutputType = {
    id: string | null
    name: string | null
    function: string | null
    email: string | null
    phone: string | null
    clientId: string | null
  }

  export type ResponsibleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    function: string | null
    email: string | null
    phone: string | null
    clientId: string | null
  }

  export type ResponsibleCountAggregateOutputType = {
    id: number
    name: number
    function: number
    email: number
    phone: number
    clientId: number
    _all: number
  }


  export type ResponsibleMinAggregateInputType = {
    id?: true
    name?: true
    function?: true
    email?: true
    phone?: true
    clientId?: true
  }

  export type ResponsibleMaxAggregateInputType = {
    id?: true
    name?: true
    function?: true
    email?: true
    phone?: true
    clientId?: true
  }

  export type ResponsibleCountAggregateInputType = {
    id?: true
    name?: true
    function?: true
    email?: true
    phone?: true
    clientId?: true
    _all?: true
  }

  export type ResponsibleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responsible to aggregate.
     */
    where?: ResponsibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsibles to fetch.
     */
    orderBy?: ResponsibleOrderByWithRelationInput | ResponsibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponsibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responsibles
    **/
    _count?: true | ResponsibleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponsibleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponsibleMaxAggregateInputType
  }

  export type GetResponsibleAggregateType<T extends ResponsibleAggregateArgs> = {
        [P in keyof T & keyof AggregateResponsible]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponsible[P]>
      : GetScalarType<T[P], AggregateResponsible[P]>
  }




  export type ResponsibleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponsibleWhereInput
    orderBy?: ResponsibleOrderByWithAggregationInput | ResponsibleOrderByWithAggregationInput[]
    by: ResponsibleScalarFieldEnum[] | ResponsibleScalarFieldEnum
    having?: ResponsibleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponsibleCountAggregateInputType | true
    _min?: ResponsibleMinAggregateInputType
    _max?: ResponsibleMaxAggregateInputType
  }

  export type ResponsibleGroupByOutputType = {
    id: string
    name: string
    function: string
    email: string
    phone: string
    clientId: string | null
    _count: ResponsibleCountAggregateOutputType | null
    _min: ResponsibleMinAggregateOutputType | null
    _max: ResponsibleMaxAggregateOutputType | null
  }

  type GetResponsibleGroupByPayload<T extends ResponsibleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponsibleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponsibleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponsibleGroupByOutputType[P]>
            : GetScalarType<T[P], ResponsibleGroupByOutputType[P]>
        }
      >
    >


  export type ResponsibleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    function?: boolean
    email?: boolean
    phone?: boolean
    clientId?: boolean
    client?: boolean | Responsible$clientArgs<ExtArgs>
  }, ExtArgs["result"]["responsible"]>

  export type ResponsibleSelectScalar = {
    id?: boolean
    name?: boolean
    function?: boolean
    email?: boolean
    phone?: boolean
    clientId?: boolean
  }

  export type ResponsibleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Responsible$clientArgs<ExtArgs>
  }


  export type $ResponsiblePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Responsible"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      function: string
      email: string
      phone: string
      clientId: string | null
    }, ExtArgs["result"]["responsible"]>
    composites: {}
  }


  type ResponsibleGetPayload<S extends boolean | null | undefined | ResponsibleDefaultArgs> = $Result.GetResult<Prisma.$ResponsiblePayload, S>

  type ResponsibleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResponsibleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ResponsibleCountAggregateInputType | true
    }

  export interface ResponsibleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Responsible'], meta: { name: 'Responsible' } }
    /**
     * Find zero or one Responsible that matches the filter.
     * @param {ResponsibleFindUniqueArgs} args - Arguments to find a Responsible
     * @example
     * // Get one Responsible
     * const responsible = await prisma.responsible.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResponsibleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResponsibleFindUniqueArgs<ExtArgs>>
    ): Prisma__ResponsibleClient<$Result.GetResult<Prisma.$ResponsiblePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Responsible that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResponsibleFindUniqueOrThrowArgs} args - Arguments to find a Responsible
     * @example
     * // Get one Responsible
     * const responsible = await prisma.responsible.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResponsibleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponsibleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResponsibleClient<$Result.GetResult<Prisma.$ResponsiblePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Responsible that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibleFindFirstArgs} args - Arguments to find a Responsible
     * @example
     * // Get one Responsible
     * const responsible = await prisma.responsible.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResponsibleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponsibleFindFirstArgs<ExtArgs>>
    ): Prisma__ResponsibleClient<$Result.GetResult<Prisma.$ResponsiblePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Responsible that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibleFindFirstOrThrowArgs} args - Arguments to find a Responsible
     * @example
     * // Get one Responsible
     * const responsible = await prisma.responsible.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResponsibleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponsibleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResponsibleClient<$Result.GetResult<Prisma.$ResponsiblePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Responsibles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responsibles
     * const responsibles = await prisma.responsible.findMany()
     * 
     * // Get first 10 Responsibles
     * const responsibles = await prisma.responsible.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responsibleWithIdOnly = await prisma.responsible.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResponsibleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponsibleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsiblePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Responsible.
     * @param {ResponsibleCreateArgs} args - Arguments to create a Responsible.
     * @example
     * // Create one Responsible
     * const Responsible = await prisma.responsible.create({
     *   data: {
     *     // ... data to create a Responsible
     *   }
     * })
     * 
    **/
    create<T extends ResponsibleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResponsibleCreateArgs<ExtArgs>>
    ): Prisma__ResponsibleClient<$Result.GetResult<Prisma.$ResponsiblePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Responsibles.
     *     @param {ResponsibleCreateManyArgs} args - Arguments to create many Responsibles.
     *     @example
     *     // Create many Responsibles
     *     const responsible = await prisma.responsible.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResponsibleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponsibleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Responsible.
     * @param {ResponsibleDeleteArgs} args - Arguments to delete one Responsible.
     * @example
     * // Delete one Responsible
     * const Responsible = await prisma.responsible.delete({
     *   where: {
     *     // ... filter to delete one Responsible
     *   }
     * })
     * 
    **/
    delete<T extends ResponsibleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResponsibleDeleteArgs<ExtArgs>>
    ): Prisma__ResponsibleClient<$Result.GetResult<Prisma.$ResponsiblePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Responsible.
     * @param {ResponsibleUpdateArgs} args - Arguments to update one Responsible.
     * @example
     * // Update one Responsible
     * const responsible = await prisma.responsible.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResponsibleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResponsibleUpdateArgs<ExtArgs>>
    ): Prisma__ResponsibleClient<$Result.GetResult<Prisma.$ResponsiblePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Responsibles.
     * @param {ResponsibleDeleteManyArgs} args - Arguments to filter Responsibles to delete.
     * @example
     * // Delete a few Responsibles
     * const { count } = await prisma.responsible.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResponsibleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResponsibleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responsibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responsibles
     * const responsible = await prisma.responsible.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResponsibleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResponsibleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Responsible.
     * @param {ResponsibleUpsertArgs} args - Arguments to update or create a Responsible.
     * @example
     * // Update or create a Responsible
     * const responsible = await prisma.responsible.upsert({
     *   create: {
     *     // ... data to create a Responsible
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Responsible we want to update
     *   }
     * })
    **/
    upsert<T extends ResponsibleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResponsibleUpsertArgs<ExtArgs>>
    ): Prisma__ResponsibleClient<$Result.GetResult<Prisma.$ResponsiblePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Responsibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibleCountArgs} args - Arguments to filter Responsibles to count.
     * @example
     * // Count the number of Responsibles
     * const count = await prisma.responsible.count({
     *   where: {
     *     // ... the filter for the Responsibles we want to count
     *   }
     * })
    **/
    count<T extends ResponsibleCountArgs>(
      args?: Subset<T, ResponsibleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponsibleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Responsible.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResponsibleAggregateArgs>(args: Subset<T, ResponsibleAggregateArgs>): Prisma.PrismaPromise<GetResponsibleAggregateType<T>>

    /**
     * Group by Responsible.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResponsibleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponsibleGroupByArgs['orderBy'] }
        : { orderBy?: ResponsibleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResponsibleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponsibleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Responsible model
   */
  readonly fields: ResponsibleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Responsible.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponsibleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends Responsible$clientArgs<ExtArgs> = {}>(args?: Subset<T, Responsible$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Responsible model
   */ 
  interface ResponsibleFieldRefs {
    readonly id: FieldRef<"Responsible", 'String'>
    readonly name: FieldRef<"Responsible", 'String'>
    readonly function: FieldRef<"Responsible", 'String'>
    readonly email: FieldRef<"Responsible", 'String'>
    readonly phone: FieldRef<"Responsible", 'String'>
    readonly clientId: FieldRef<"Responsible", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Responsible findUnique
   */
  export type ResponsibleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
    /**
     * Filter, which Responsible to fetch.
     */
    where: ResponsibleWhereUniqueInput
  }


  /**
   * Responsible findUniqueOrThrow
   */
  export type ResponsibleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
    /**
     * Filter, which Responsible to fetch.
     */
    where: ResponsibleWhereUniqueInput
  }


  /**
   * Responsible findFirst
   */
  export type ResponsibleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
    /**
     * Filter, which Responsible to fetch.
     */
    where?: ResponsibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsibles to fetch.
     */
    orderBy?: ResponsibleOrderByWithRelationInput | ResponsibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responsibles.
     */
    cursor?: ResponsibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responsibles.
     */
    distinct?: ResponsibleScalarFieldEnum | ResponsibleScalarFieldEnum[]
  }


  /**
   * Responsible findFirstOrThrow
   */
  export type ResponsibleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
    /**
     * Filter, which Responsible to fetch.
     */
    where?: ResponsibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsibles to fetch.
     */
    orderBy?: ResponsibleOrderByWithRelationInput | ResponsibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responsibles.
     */
    cursor?: ResponsibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responsibles.
     */
    distinct?: ResponsibleScalarFieldEnum | ResponsibleScalarFieldEnum[]
  }


  /**
   * Responsible findMany
   */
  export type ResponsibleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
    /**
     * Filter, which Responsibles to fetch.
     */
    where?: ResponsibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsibles to fetch.
     */
    orderBy?: ResponsibleOrderByWithRelationInput | ResponsibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responsibles.
     */
    cursor?: ResponsibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsibles.
     */
    skip?: number
    distinct?: ResponsibleScalarFieldEnum | ResponsibleScalarFieldEnum[]
  }


  /**
   * Responsible create
   */
  export type ResponsibleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
    /**
     * The data needed to create a Responsible.
     */
    data: XOR<ResponsibleCreateInput, ResponsibleUncheckedCreateInput>
  }


  /**
   * Responsible createMany
   */
  export type ResponsibleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responsibles.
     */
    data: ResponsibleCreateManyInput | ResponsibleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Responsible update
   */
  export type ResponsibleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
    /**
     * The data needed to update a Responsible.
     */
    data: XOR<ResponsibleUpdateInput, ResponsibleUncheckedUpdateInput>
    /**
     * Choose, which Responsible to update.
     */
    where: ResponsibleWhereUniqueInput
  }


  /**
   * Responsible updateMany
   */
  export type ResponsibleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responsibles.
     */
    data: XOR<ResponsibleUpdateManyMutationInput, ResponsibleUncheckedUpdateManyInput>
    /**
     * Filter which Responsibles to update
     */
    where?: ResponsibleWhereInput
  }


  /**
   * Responsible upsert
   */
  export type ResponsibleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
    /**
     * The filter to search for the Responsible to update in case it exists.
     */
    where: ResponsibleWhereUniqueInput
    /**
     * In case the Responsible found by the `where` argument doesn't exist, create a new Responsible with this data.
     */
    create: XOR<ResponsibleCreateInput, ResponsibleUncheckedCreateInput>
    /**
     * In case the Responsible was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponsibleUpdateInput, ResponsibleUncheckedUpdateInput>
  }


  /**
   * Responsible delete
   */
  export type ResponsibleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
    /**
     * Filter which Responsible to delete.
     */
    where: ResponsibleWhereUniqueInput
  }


  /**
   * Responsible deleteMany
   */
  export type ResponsibleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responsibles to delete
     */
    where?: ResponsibleWhereInput
  }


  /**
   * Responsible.client
   */
  export type Responsible$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }


  /**
   * Responsible without action
   */
  export type ResponsibleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsible
     */
    select?: ResponsibleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResponsibleInclude<ExtArgs> | null
  }



  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    filename: string | null
    url: string | null
    createdAt: string | null
    updatedAt: string | null
    cardId: string | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    url: string | null
    createdAt: string | null
    updatedAt: string | null
    cardId: string | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    filename: number
    url: number
    createdAt: number
    updatedAt: number
    cardId: number
    _all: number
  }


  export type FileMinAggregateInputType = {
    id?: true
    filename?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    cardId?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    filename?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    cardId?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    filename?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    cardId?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    filename: string
    url: string
    createdAt: string
    updatedAt: string
    cardId: string
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cardId?: boolean
    card?: boolean | CardsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    filename?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cardId?: boolean
  }

  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardsDefaultArgs<ExtArgs>
  }


  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      card: Prisma.$CardsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      url: string
      createdAt: string
      updatedAt: string
      cardId: string
    }, ExtArgs["result"]["file"]>
    composites: {}
  }


  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one File that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
    **/
    create<T extends FileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FileCreateArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Files.
     *     @param {FileCreateManyArgs} args - Arguments to create many Files.
     *     @example
     *     // Create many Files
     *     const file = await prisma.file.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
    **/
    delete<T extends FileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FileDeleteArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpdateArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
    **/
    upsert<T extends FileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpsertArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    card<T extends CardsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardsDefaultArgs<ExtArgs>>): Prisma__CardsClient<$Result.GetResult<Prisma.$CardsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the File model
   */ 
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'String'>
    readonly filename: FieldRef<"File", 'String'>
    readonly url: FieldRef<"File", 'String'>
    readonly createdAt: FieldRef<"File", 'String'>
    readonly updatedAt: FieldRef<"File", 'String'>
    readonly cardId: FieldRef<"File", 'String'>
  }
    

  // Custom InputTypes

  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }


  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }


  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }


  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }


  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    function: 'function',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CardsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    solution: 'solution',
    priority: 'priority',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleteAt: 'deleteAt',
    type: 'type',
    clients: 'clients',
    worker: 'worker',
    userId: 'userId'
  };

  export type CardsScalarFieldEnum = (typeof CardsScalarFieldEnum)[keyof typeof CardsScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    task: 'task',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    cardsId: 'cardsId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    priority: 'priority',
    userId: 'userId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    companyName: 'companyName',
    socialName: 'socialName',
    cnpj: 'cnpj',
    businessPhone: 'businessPhone',
    businessEmail: 'businessEmail',
    comment: 'comment',
    cep: 'cep',
    state: 'state',
    city: 'city',
    street: 'street',
    neighborhood: 'neighborhood',
    number: 'number'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ResponsibleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    function: 'function',
    email: 'email',
    phone: 'phone',
    clientId: 'clientId'
  };

  export type ResponsibleScalarFieldEnum = (typeof ResponsibleScalarFieldEnum)[keyof typeof ResponsibleScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    cardId: 'cardId'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    function?: StringNullableListFilter<"User">
    isAdmin?: BoolFilter<"User"> | boolean
    cards?: CardsListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    function?: SortOrder
    isAdmin?: SortOrder
    cards?: CardsOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    function?: StringNullableListFilter<"User">
    isAdmin?: BoolFilter<"User"> | boolean
    cards?: CardsListRelationFilter
    comments?: CommentListRelationFilter
  }, "id" | "name" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    function?: SortOrder
    isAdmin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    function?: StringNullableListFilter<"User">
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CardsWhereInput = {
    AND?: CardsWhereInput | CardsWhereInput[]
    OR?: CardsWhereInput[]
    NOT?: CardsWhereInput | CardsWhereInput[]
    id?: StringFilter<"Cards"> | string
    title?: StringFilter<"Cards"> | string
    description?: StringNullableFilter<"Cards"> | string | null
    solution?: StringNullableFilter<"Cards"> | string | null
    priority?: StringNullableFilter<"Cards"> | string | null
    status?: StringNullableFilter<"Cards"> | string | null
    createdAt?: StringFilter<"Cards"> | string
    updatedAt?: StringNullableFilter<"Cards"> | string | null
    deleteAt?: StringNullableFilter<"Cards"> | string | null
    type?: StringNullableListFilter<"Cards">
    clients?: StringNullableListFilter<"Cards">
    worker?: StringNullableListFilter<"Cards">
    userId?: StringFilter<"Cards"> | string
    tasks?: TaskListRelationFilter
    files?: FileListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CardsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deleteAt?: SortOrderInput | SortOrder
    type?: SortOrder
    clients?: SortOrder
    worker?: SortOrder
    userId?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type CardsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: CardsWhereInput | CardsWhereInput[]
    OR?: CardsWhereInput[]
    NOT?: CardsWhereInput | CardsWhereInput[]
    description?: StringNullableFilter<"Cards"> | string | null
    solution?: StringNullableFilter<"Cards"> | string | null
    priority?: StringNullableFilter<"Cards"> | string | null
    status?: StringNullableFilter<"Cards"> | string | null
    createdAt?: StringFilter<"Cards"> | string
    updatedAt?: StringNullableFilter<"Cards"> | string | null
    deleteAt?: StringNullableFilter<"Cards"> | string | null
    type?: StringNullableListFilter<"Cards">
    clients?: StringNullableListFilter<"Cards">
    worker?: StringNullableListFilter<"Cards">
    userId?: StringFilter<"Cards"> | string
    tasks?: TaskListRelationFilter
    files?: FileListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "title">

  export type CardsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deleteAt?: SortOrderInput | SortOrder
    type?: SortOrder
    clients?: SortOrder
    worker?: SortOrder
    userId?: SortOrder
    _count?: CardsCountOrderByAggregateInput
    _max?: CardsMaxOrderByAggregateInput
    _min?: CardsMinOrderByAggregateInput
  }

  export type CardsScalarWhereWithAggregatesInput = {
    AND?: CardsScalarWhereWithAggregatesInput | CardsScalarWhereWithAggregatesInput[]
    OR?: CardsScalarWhereWithAggregatesInput[]
    NOT?: CardsScalarWhereWithAggregatesInput | CardsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cards"> | string
    title?: StringWithAggregatesFilter<"Cards"> | string
    description?: StringNullableWithAggregatesFilter<"Cards"> | string | null
    solution?: StringNullableWithAggregatesFilter<"Cards"> | string | null
    priority?: StringNullableWithAggregatesFilter<"Cards"> | string | null
    status?: StringNullableWithAggregatesFilter<"Cards"> | string | null
    createdAt?: StringWithAggregatesFilter<"Cards"> | string
    updatedAt?: StringNullableWithAggregatesFilter<"Cards"> | string | null
    deleteAt?: StringNullableWithAggregatesFilter<"Cards"> | string | null
    type?: StringNullableListFilter<"Cards">
    clients?: StringNullableListFilter<"Cards">
    worker?: StringNullableListFilter<"Cards">
    userId?: StringWithAggregatesFilter<"Cards"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    task?: StringFilter<"Task"> | string
    completed?: BoolFilter<"Task"> | boolean
    createdAt?: StringFilter<"Task"> | string
    updatedAt?: StringFilter<"Task"> | string
    cardsId?: StringFilter<"Task"> | string
    card?: XOR<CardsRelationFilter, CardsWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    task?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardsId?: SortOrder
    card?: CardsOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    task?: StringFilter<"Task"> | string
    completed?: BoolFilter<"Task"> | boolean
    createdAt?: StringFilter<"Task"> | string
    updatedAt?: StringFilter<"Task"> | string
    cardsId?: StringFilter<"Task"> | string
    card?: XOR<CardsRelationFilter, CardsWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    task?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardsId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    task?: StringWithAggregatesFilter<"Task"> | string
    completed?: BoolWithAggregatesFilter<"Task"> | boolean
    createdAt?: StringWithAggregatesFilter<"Task"> | string
    updatedAt?: StringWithAggregatesFilter<"Task"> | string
    cardsId?: StringWithAggregatesFilter<"Task"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    title?: StringFilter<"Comment"> | string
    comment?: StringFilter<"Comment"> | string
    createdAt?: StringFilter<"Comment"> | string
    updatedAt?: StringFilter<"Comment"> | string
    priority?: StringNullableFilter<"Comment"> | string | null
    userId?: StringFilter<"Comment"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priority?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    comment?: StringFilter<"Comment"> | string
    createdAt?: StringFilter<"Comment"> | string
    updatedAt?: StringFilter<"Comment"> | string
    priority?: StringNullableFilter<"Comment"> | string | null
    userId?: StringFilter<"Comment"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "title">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priority?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    title?: StringWithAggregatesFilter<"Comment"> | string
    comment?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: StringWithAggregatesFilter<"Comment"> | string
    updatedAt?: StringWithAggregatesFilter<"Comment"> | string
    priority?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    userId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    codigo?: StringFilter<"Client"> | string
    companyName?: StringFilter<"Client"> | string
    socialName?: StringFilter<"Client"> | string
    cnpj?: StringFilter<"Client"> | string
    businessPhone?: StringFilter<"Client"> | string
    businessEmail?: StringFilter<"Client"> | string
    comment?: StringFilter<"Client"> | string
    cep?: StringFilter<"Client"> | string
    state?: StringFilter<"Client"> | string
    city?: StringFilter<"Client"> | string
    street?: StringFilter<"Client"> | string
    neighborhood?: StringFilter<"Client"> | string
    number?: StringFilter<"Client"> | string
    responsibles?: ResponsibleListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    companyName?: SortOrder
    socialName?: SortOrder
    cnpj?: SortOrder
    businessPhone?: SortOrder
    businessEmail?: SortOrder
    comment?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    street?: SortOrder
    neighborhood?: SortOrder
    number?: SortOrder
    responsibles?: ResponsibleOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    companyName?: string
    cnpj?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    socialName?: StringFilter<"Client"> | string
    businessPhone?: StringFilter<"Client"> | string
    businessEmail?: StringFilter<"Client"> | string
    comment?: StringFilter<"Client"> | string
    cep?: StringFilter<"Client"> | string
    state?: StringFilter<"Client"> | string
    city?: StringFilter<"Client"> | string
    street?: StringFilter<"Client"> | string
    neighborhood?: StringFilter<"Client"> | string
    number?: StringFilter<"Client"> | string
    responsibles?: ResponsibleListRelationFilter
  }, "id" | "codigo" | "companyName" | "cnpj">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    companyName?: SortOrder
    socialName?: SortOrder
    cnpj?: SortOrder
    businessPhone?: SortOrder
    businessEmail?: SortOrder
    comment?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    street?: SortOrder
    neighborhood?: SortOrder
    number?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    codigo?: StringWithAggregatesFilter<"Client"> | string
    companyName?: StringWithAggregatesFilter<"Client"> | string
    socialName?: StringWithAggregatesFilter<"Client"> | string
    cnpj?: StringWithAggregatesFilter<"Client"> | string
    businessPhone?: StringWithAggregatesFilter<"Client"> | string
    businessEmail?: StringWithAggregatesFilter<"Client"> | string
    comment?: StringWithAggregatesFilter<"Client"> | string
    cep?: StringWithAggregatesFilter<"Client"> | string
    state?: StringWithAggregatesFilter<"Client"> | string
    city?: StringWithAggregatesFilter<"Client"> | string
    street?: StringWithAggregatesFilter<"Client"> | string
    neighborhood?: StringWithAggregatesFilter<"Client"> | string
    number?: StringWithAggregatesFilter<"Client"> | string
  }

  export type ResponsibleWhereInput = {
    AND?: ResponsibleWhereInput | ResponsibleWhereInput[]
    OR?: ResponsibleWhereInput[]
    NOT?: ResponsibleWhereInput | ResponsibleWhereInput[]
    id?: StringFilter<"Responsible"> | string
    name?: StringFilter<"Responsible"> | string
    function?: StringFilter<"Responsible"> | string
    email?: StringFilter<"Responsible"> | string
    phone?: StringFilter<"Responsible"> | string
    clientId?: StringNullableFilter<"Responsible"> | string | null
    client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
  }

  export type ResponsibleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    function?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    clientId?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type ResponsibleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResponsibleWhereInput | ResponsibleWhereInput[]
    OR?: ResponsibleWhereInput[]
    NOT?: ResponsibleWhereInput | ResponsibleWhereInput[]
    name?: StringFilter<"Responsible"> | string
    function?: StringFilter<"Responsible"> | string
    email?: StringFilter<"Responsible"> | string
    phone?: StringFilter<"Responsible"> | string
    clientId?: StringNullableFilter<"Responsible"> | string | null
    client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
  }, "id">

  export type ResponsibleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    function?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    clientId?: SortOrderInput | SortOrder
    _count?: ResponsibleCountOrderByAggregateInput
    _max?: ResponsibleMaxOrderByAggregateInput
    _min?: ResponsibleMinOrderByAggregateInput
  }

  export type ResponsibleScalarWhereWithAggregatesInput = {
    AND?: ResponsibleScalarWhereWithAggregatesInput | ResponsibleScalarWhereWithAggregatesInput[]
    OR?: ResponsibleScalarWhereWithAggregatesInput[]
    NOT?: ResponsibleScalarWhereWithAggregatesInput | ResponsibleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Responsible"> | string
    name?: StringWithAggregatesFilter<"Responsible"> | string
    function?: StringWithAggregatesFilter<"Responsible"> | string
    email?: StringWithAggregatesFilter<"Responsible"> | string
    phone?: StringWithAggregatesFilter<"Responsible"> | string
    clientId?: StringNullableWithAggregatesFilter<"Responsible"> | string | null
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: StringFilter<"File"> | string
    filename?: StringFilter<"File"> | string
    url?: StringFilter<"File"> | string
    createdAt?: StringFilter<"File"> | string
    updatedAt?: StringFilter<"File"> | string
    cardId?: StringFilter<"File"> | string
    card?: XOR<CardsRelationFilter, CardsWhereInput>
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardId?: SortOrder
    card?: CardsOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    filename?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    url?: StringFilter<"File"> | string
    createdAt?: StringFilter<"File"> | string
    updatedAt?: StringFilter<"File"> | string
    cardId?: StringFilter<"File"> | string
    card?: XOR<CardsRelationFilter, CardsWhereInput>
  }, "id" | "filename">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardId?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"File"> | string
    filename?: StringWithAggregatesFilter<"File"> | string
    url?: StringWithAggregatesFilter<"File"> | string
    createdAt?: StringWithAggregatesFilter<"File"> | string
    updatedAt?: StringWithAggregatesFilter<"File"> | string
    cardId?: StringWithAggregatesFilter<"File"> | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    password: string
    function?: UserCreatefunctionInput | string[]
    isAdmin: boolean
    cards?: CardsCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    password: string
    function?: UserCreatefunctionInput | string[]
    isAdmin: boolean
    cards?: CardsUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    function?: UserUpdatefunctionInput | string[]
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    cards?: CardsUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    function?: UserUpdatefunctionInput | string[]
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    cards?: CardsUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    password: string
    function?: UserCreatefunctionInput | string[]
    isAdmin: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    function?: UserUpdatefunctionInput | string[]
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    function?: UserUpdatefunctionInput | string[]
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CardsCreateInput = {
    id: string
    title: string
    description?: string | null
    solution?: string | null
    priority?: string | null
    status?: string | null
    createdAt: string
    updatedAt?: string | null
    deleteAt?: string | null
    type?: CardsCreatetypeInput | string[]
    clients?: CardsCreateclientsInput | string[]
    worker?: CardsCreateworkerInput | string[]
    tasks?: TaskCreateNestedManyWithoutCardInput
    files?: FileCreateNestedManyWithoutCardInput
    user: UserCreateNestedOneWithoutCardsInput
  }

  export type CardsUncheckedCreateInput = {
    id: string
    title: string
    description?: string | null
    solution?: string | null
    priority?: string | null
    status?: string | null
    createdAt: string
    updatedAt?: string | null
    deleteAt?: string | null
    type?: CardsCreatetypeInput | string[]
    clients?: CardsCreateclientsInput | string[]
    worker?: CardsCreateworkerInput | string[]
    userId: string
    tasks?: TaskUncheckedCreateNestedManyWithoutCardInput
    files?: FileUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
    tasks?: TaskUpdateManyWithoutCardNestedInput
    files?: FileUpdateManyWithoutCardNestedInput
    user?: UserUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutCardNestedInput
    files?: FileUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardsCreateManyInput = {
    id: string
    title: string
    description?: string | null
    solution?: string | null
    priority?: string | null
    status?: string | null
    createdAt: string
    updatedAt?: string | null
    deleteAt?: string | null
    type?: CardsCreatetypeInput | string[]
    clients?: CardsCreateclientsInput | string[]
    worker?: CardsCreateworkerInput | string[]
    userId: string
  }

  export type CardsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
  }

  export type CardsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    id: string
    task: string
    completed: boolean
    createdAt: string
    updatedAt: string
    card: CardsCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id: string
    task: string
    completed: boolean
    createdAt: string
    updatedAt: string
    cardsId: string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    card?: CardsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    cardsId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyInput = {
    id: string
    task: string
    completed: boolean
    createdAt: string
    updatedAt: string
    cardsId: string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    cardsId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id: string
    title: string
    comment: string
    createdAt: string
    updatedAt: string
    priority?: string | null
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id: string
    title: string
    comment: string
    createdAt: string
    updatedAt: string
    priority?: string | null
    userId: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id: string
    title: string
    comment: string
    createdAt: string
    updatedAt: string
    priority?: string | null
    userId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    priority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateInput = {
    id: string
    codigo: string
    companyName: string
    socialName: string
    cnpj: string
    businessPhone: string
    businessEmail: string
    comment: string
    cep: string
    state: string
    city: string
    street: string
    neighborhood: string
    number: string
    responsibles?: ResponsibleCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id: string
    codigo: string
    companyName: string
    socialName: string
    cnpj: string
    businessPhone: string
    businessEmail: string
    comment: string
    cep: string
    state: string
    city: string
    street: string
    neighborhood: string
    number: string
    responsibles?: ResponsibleUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    socialName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    businessPhone?: StringFieldUpdateOperationsInput | string
    businessEmail?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    responsibles?: ResponsibleUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    socialName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    businessPhone?: StringFieldUpdateOperationsInput | string
    businessEmail?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    responsibles?: ResponsibleUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id: string
    codigo: string
    companyName: string
    socialName: string
    cnpj: string
    businessPhone: string
    businessEmail: string
    comment: string
    cep: string
    state: string
    city: string
    street: string
    neighborhood: string
    number: string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    socialName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    businessPhone?: StringFieldUpdateOperationsInput | string
    businessEmail?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    socialName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    businessPhone?: StringFieldUpdateOperationsInput | string
    businessEmail?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsibleCreateInput = {
    id: string
    name: string
    function: string
    email: string
    phone: string
    client?: ClientCreateNestedOneWithoutResponsiblesInput
  }

  export type ResponsibleUncheckedCreateInput = {
    id: string
    name: string
    function: string
    email: string
    phone: string
    clientId?: string | null
  }

  export type ResponsibleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneWithoutResponsiblesNestedInput
  }

  export type ResponsibleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResponsibleCreateManyInput = {
    id: string
    name: string
    function: string
    email: string
    phone: string
    clientId?: string | null
  }

  export type ResponsibleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsibleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileCreateInput = {
    id: string
    filename: string
    url: string
    createdAt: string
    updatedAt: string
    card: CardsCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    id: string
    filename: string
    url: string
    createdAt: string
    updatedAt: string
    cardId: string
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    card?: CardsUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
  }

  export type FileCreateManyInput = {
    id: string
    filename: string
    url: string
    createdAt: string
    updatedAt: string
    cardId: string
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CardsListRelationFilter = {
    every?: CardsWhereInput
    some?: CardsWhereInput
    none?: CardsWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CardsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    function?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    solution?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleteAt?: SortOrder
    type?: SortOrder
    clients?: SortOrder
    worker?: SortOrder
    userId?: SortOrder
  }

  export type CardsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    solution?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleteAt?: SortOrder
    userId?: SortOrder
  }

  export type CardsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    solution?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleteAt?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CardsRelationFilter = {
    is?: CardsWhereInput
    isNot?: CardsWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardsId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardsId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardsId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
  }

  export type ResponsibleListRelationFilter = {
    every?: ResponsibleWhereInput
    some?: ResponsibleWhereInput
    none?: ResponsibleWhereInput
  }

  export type ResponsibleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    companyName?: SortOrder
    socialName?: SortOrder
    cnpj?: SortOrder
    businessPhone?: SortOrder
    businessEmail?: SortOrder
    comment?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    street?: SortOrder
    neighborhood?: SortOrder
    number?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    companyName?: SortOrder
    socialName?: SortOrder
    cnpj?: SortOrder
    businessPhone?: SortOrder
    businessEmail?: SortOrder
    comment?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    street?: SortOrder
    neighborhood?: SortOrder
    number?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    companyName?: SortOrder
    socialName?: SortOrder
    cnpj?: SortOrder
    businessPhone?: SortOrder
    businessEmail?: SortOrder
    comment?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    street?: SortOrder
    neighborhood?: SortOrder
    number?: SortOrder
  }

  export type ClientNullableRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type ResponsibleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    function?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    clientId?: SortOrder
  }

  export type ResponsibleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    function?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    clientId?: SortOrder
  }

  export type ResponsibleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    function?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    clientId?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardId?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardId?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardId?: SortOrder
  }

  export type UserCreatefunctionInput = {
    set: string[]
  }

  export type CardsCreateNestedManyWithoutUserInput = {
    create?: XOR<CardsCreateWithoutUserInput, CardsUncheckedCreateWithoutUserInput> | CardsCreateWithoutUserInput[] | CardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutUserInput | CardsCreateOrConnectWithoutUserInput[]
    createMany?: CardsCreateManyUserInputEnvelope
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CardsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CardsCreateWithoutUserInput, CardsUncheckedCreateWithoutUserInput> | CardsCreateWithoutUserInput[] | CardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutUserInput | CardsCreateOrConnectWithoutUserInput[]
    createMany?: CardsCreateManyUserInputEnvelope
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdatefunctionInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CardsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardsCreateWithoutUserInput, CardsUncheckedCreateWithoutUserInput> | CardsCreateWithoutUserInput[] | CardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutUserInput | CardsCreateOrConnectWithoutUserInput[]
    upsert?: CardsUpsertWithWhereUniqueWithoutUserInput | CardsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardsCreateManyUserInputEnvelope
    set?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    disconnect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    delete?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    update?: CardsUpdateWithWhereUniqueWithoutUserInput | CardsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardsUpdateManyWithWhereWithoutUserInput | CardsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardsScalarWhereInput | CardsScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CardsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardsCreateWithoutUserInput, CardsUncheckedCreateWithoutUserInput> | CardsCreateWithoutUserInput[] | CardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardsCreateOrConnectWithoutUserInput | CardsCreateOrConnectWithoutUserInput[]
    upsert?: CardsUpsertWithWhereUniqueWithoutUserInput | CardsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardsCreateManyUserInputEnvelope
    set?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    disconnect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    delete?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    connect?: CardsWhereUniqueInput | CardsWhereUniqueInput[]
    update?: CardsUpdateWithWhereUniqueWithoutUserInput | CardsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardsUpdateManyWithWhereWithoutUserInput | CardsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardsScalarWhereInput | CardsScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CardsCreatetypeInput = {
    set: string[]
  }

  export type CardsCreateclientsInput = {
    set: string[]
  }

  export type CardsCreateworkerInput = {
    set: string[]
  }

  export type TaskCreateNestedManyWithoutCardInput = {
    create?: XOR<TaskCreateWithoutCardInput, TaskUncheckedCreateWithoutCardInput> | TaskCreateWithoutCardInput[] | TaskUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCardInput | TaskCreateOrConnectWithoutCardInput[]
    createMany?: TaskCreateManyCardInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutCardInput = {
    create?: XOR<FileCreateWithoutCardInput, FileUncheckedCreateWithoutCardInput> | FileCreateWithoutCardInput[] | FileUncheckedCreateWithoutCardInput[]
    connectOrCreate?: FileCreateOrConnectWithoutCardInput | FileCreateOrConnectWithoutCardInput[]
    createMany?: FileCreateManyCardInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCardsInput = {
    create?: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<TaskCreateWithoutCardInput, TaskUncheckedCreateWithoutCardInput> | TaskCreateWithoutCardInput[] | TaskUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCardInput | TaskCreateOrConnectWithoutCardInput[]
    createMany?: TaskCreateManyCardInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<FileCreateWithoutCardInput, FileUncheckedCreateWithoutCardInput> | FileCreateWithoutCardInput[] | FileUncheckedCreateWithoutCardInput[]
    connectOrCreate?: FileCreateOrConnectWithoutCardInput | FileCreateOrConnectWithoutCardInput[]
    createMany?: FileCreateManyCardInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CardsUpdatetypeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CardsUpdateclientsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CardsUpdateworkerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TaskUpdateManyWithoutCardNestedInput = {
    create?: XOR<TaskCreateWithoutCardInput, TaskUncheckedCreateWithoutCardInput> | TaskCreateWithoutCardInput[] | TaskUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCardInput | TaskCreateOrConnectWithoutCardInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCardInput | TaskUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: TaskCreateManyCardInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCardInput | TaskUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCardInput | TaskUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type FileUpdateManyWithoutCardNestedInput = {
    create?: XOR<FileCreateWithoutCardInput, FileUncheckedCreateWithoutCardInput> | FileCreateWithoutCardInput[] | FileUncheckedCreateWithoutCardInput[]
    connectOrCreate?: FileCreateOrConnectWithoutCardInput | FileCreateOrConnectWithoutCardInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutCardInput | FileUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: FileCreateManyCardInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutCardInput | FileUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: FileUpdateManyWithWhereWithoutCardInput | FileUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardsInput
    upsert?: UserUpsertWithoutCardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCardsInput, UserUpdateWithoutCardsInput>, UserUncheckedUpdateWithoutCardsInput>
  }

  export type TaskUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<TaskCreateWithoutCardInput, TaskUncheckedCreateWithoutCardInput> | TaskCreateWithoutCardInput[] | TaskUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCardInput | TaskCreateOrConnectWithoutCardInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCardInput | TaskUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: TaskCreateManyCardInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCardInput | TaskUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCardInput | TaskUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<FileCreateWithoutCardInput, FileUncheckedCreateWithoutCardInput> | FileCreateWithoutCardInput[] | FileUncheckedCreateWithoutCardInput[]
    connectOrCreate?: FileCreateOrConnectWithoutCardInput | FileCreateOrConnectWithoutCardInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutCardInput | FileUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: FileCreateManyCardInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutCardInput | FileUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: FileUpdateManyWithWhereWithoutCardInput | FileUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type CardsCreateNestedOneWithoutTasksInput = {
    create?: XOR<CardsCreateWithoutTasksInput, CardsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CardsCreateOrConnectWithoutTasksInput
    connect?: CardsWhereUniqueInput
  }

  export type CardsUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<CardsCreateWithoutTasksInput, CardsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CardsCreateOrConnectWithoutTasksInput
    upsert?: CardsUpsertWithoutTasksInput
    connect?: CardsWhereUniqueInput
    update?: XOR<XOR<CardsUpdateToOneWithWhereWithoutTasksInput, CardsUpdateWithoutTasksInput>, CardsUncheckedUpdateWithoutTasksInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type ResponsibleCreateNestedManyWithoutClientInput = {
    create?: XOR<ResponsibleCreateWithoutClientInput, ResponsibleUncheckedCreateWithoutClientInput> | ResponsibleCreateWithoutClientInput[] | ResponsibleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ResponsibleCreateOrConnectWithoutClientInput | ResponsibleCreateOrConnectWithoutClientInput[]
    createMany?: ResponsibleCreateManyClientInputEnvelope
    connect?: ResponsibleWhereUniqueInput | ResponsibleWhereUniqueInput[]
  }

  export type ResponsibleUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ResponsibleCreateWithoutClientInput, ResponsibleUncheckedCreateWithoutClientInput> | ResponsibleCreateWithoutClientInput[] | ResponsibleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ResponsibleCreateOrConnectWithoutClientInput | ResponsibleCreateOrConnectWithoutClientInput[]
    createMany?: ResponsibleCreateManyClientInputEnvelope
    connect?: ResponsibleWhereUniqueInput | ResponsibleWhereUniqueInput[]
  }

  export type ResponsibleUpdateManyWithoutClientNestedInput = {
    create?: XOR<ResponsibleCreateWithoutClientInput, ResponsibleUncheckedCreateWithoutClientInput> | ResponsibleCreateWithoutClientInput[] | ResponsibleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ResponsibleCreateOrConnectWithoutClientInput | ResponsibleCreateOrConnectWithoutClientInput[]
    upsert?: ResponsibleUpsertWithWhereUniqueWithoutClientInput | ResponsibleUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ResponsibleCreateManyClientInputEnvelope
    set?: ResponsibleWhereUniqueInput | ResponsibleWhereUniqueInput[]
    disconnect?: ResponsibleWhereUniqueInput | ResponsibleWhereUniqueInput[]
    delete?: ResponsibleWhereUniqueInput | ResponsibleWhereUniqueInput[]
    connect?: ResponsibleWhereUniqueInput | ResponsibleWhereUniqueInput[]
    update?: ResponsibleUpdateWithWhereUniqueWithoutClientInput | ResponsibleUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ResponsibleUpdateManyWithWhereWithoutClientInput | ResponsibleUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ResponsibleScalarWhereInput | ResponsibleScalarWhereInput[]
  }

  export type ResponsibleUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ResponsibleCreateWithoutClientInput, ResponsibleUncheckedCreateWithoutClientInput> | ResponsibleCreateWithoutClientInput[] | ResponsibleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ResponsibleCreateOrConnectWithoutClientInput | ResponsibleCreateOrConnectWithoutClientInput[]
    upsert?: ResponsibleUpsertWithWhereUniqueWithoutClientInput | ResponsibleUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ResponsibleCreateManyClientInputEnvelope
    set?: ResponsibleWhereUniqueInput | ResponsibleWhereUniqueInput[]
    disconnect?: ResponsibleWhereUniqueInput | ResponsibleWhereUniqueInput[]
    delete?: ResponsibleWhereUniqueInput | ResponsibleWhereUniqueInput[]
    connect?: ResponsibleWhereUniqueInput | ResponsibleWhereUniqueInput[]
    update?: ResponsibleUpdateWithWhereUniqueWithoutClientInput | ResponsibleUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ResponsibleUpdateManyWithWhereWithoutClientInput | ResponsibleUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ResponsibleScalarWhereInput | ResponsibleScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutResponsiblesInput = {
    create?: XOR<ClientCreateWithoutResponsiblesInput, ClientUncheckedCreateWithoutResponsiblesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutResponsiblesInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneWithoutResponsiblesNestedInput = {
    create?: XOR<ClientCreateWithoutResponsiblesInput, ClientUncheckedCreateWithoutResponsiblesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutResponsiblesInput
    upsert?: ClientUpsertWithoutResponsiblesInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutResponsiblesInput, ClientUpdateWithoutResponsiblesInput>, ClientUncheckedUpdateWithoutResponsiblesInput>
  }

  export type CardsCreateNestedOneWithoutFilesInput = {
    create?: XOR<CardsCreateWithoutFilesInput, CardsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: CardsCreateOrConnectWithoutFilesInput
    connect?: CardsWhereUniqueInput
  }

  export type CardsUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<CardsCreateWithoutFilesInput, CardsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: CardsCreateOrConnectWithoutFilesInput
    upsert?: CardsUpsertWithoutFilesInput
    connect?: CardsWhereUniqueInput
    update?: XOR<XOR<CardsUpdateToOneWithWhereWithoutFilesInput, CardsUpdateWithoutFilesInput>, CardsUncheckedUpdateWithoutFilesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CardsCreateWithoutUserInput = {
    id: string
    title: string
    description?: string | null
    solution?: string | null
    priority?: string | null
    status?: string | null
    createdAt: string
    updatedAt?: string | null
    deleteAt?: string | null
    type?: CardsCreatetypeInput | string[]
    clients?: CardsCreateclientsInput | string[]
    worker?: CardsCreateworkerInput | string[]
    tasks?: TaskCreateNestedManyWithoutCardInput
    files?: FileCreateNestedManyWithoutCardInput
  }

  export type CardsUncheckedCreateWithoutUserInput = {
    id: string
    title: string
    description?: string | null
    solution?: string | null
    priority?: string | null
    status?: string | null
    createdAt: string
    updatedAt?: string | null
    deleteAt?: string | null
    type?: CardsCreatetypeInput | string[]
    clients?: CardsCreateclientsInput | string[]
    worker?: CardsCreateworkerInput | string[]
    tasks?: TaskUncheckedCreateNestedManyWithoutCardInput
    files?: FileUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardsCreateOrConnectWithoutUserInput = {
    where: CardsWhereUniqueInput
    create: XOR<CardsCreateWithoutUserInput, CardsUncheckedCreateWithoutUserInput>
  }

  export type CardsCreateManyUserInputEnvelope = {
    data: CardsCreateManyUserInput | CardsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id: string
    title: string
    comment: string
    createdAt: string
    updatedAt: string
    priority?: string | null
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id: string
    title: string
    comment: string
    createdAt: string
    updatedAt: string
    priority?: string | null
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CardsUpsertWithWhereUniqueWithoutUserInput = {
    where: CardsWhereUniqueInput
    update: XOR<CardsUpdateWithoutUserInput, CardsUncheckedUpdateWithoutUserInput>
    create: XOR<CardsCreateWithoutUserInput, CardsUncheckedCreateWithoutUserInput>
  }

  export type CardsUpdateWithWhereUniqueWithoutUserInput = {
    where: CardsWhereUniqueInput
    data: XOR<CardsUpdateWithoutUserInput, CardsUncheckedUpdateWithoutUserInput>
  }

  export type CardsUpdateManyWithWhereWithoutUserInput = {
    where: CardsScalarWhereInput
    data: XOR<CardsUpdateManyMutationInput, CardsUncheckedUpdateManyWithoutUserInput>
  }

  export type CardsScalarWhereInput = {
    AND?: CardsScalarWhereInput | CardsScalarWhereInput[]
    OR?: CardsScalarWhereInput[]
    NOT?: CardsScalarWhereInput | CardsScalarWhereInput[]
    id?: StringFilter<"Cards"> | string
    title?: StringFilter<"Cards"> | string
    description?: StringNullableFilter<"Cards"> | string | null
    solution?: StringNullableFilter<"Cards"> | string | null
    priority?: StringNullableFilter<"Cards"> | string | null
    status?: StringNullableFilter<"Cards"> | string | null
    createdAt?: StringFilter<"Cards"> | string
    updatedAt?: StringNullableFilter<"Cards"> | string | null
    deleteAt?: StringNullableFilter<"Cards"> | string | null
    type?: StringNullableListFilter<"Cards">
    clients?: StringNullableListFilter<"Cards">
    worker?: StringNullableListFilter<"Cards">
    userId?: StringFilter<"Cards"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    title?: StringFilter<"Comment"> | string
    comment?: StringFilter<"Comment"> | string
    createdAt?: StringFilter<"Comment"> | string
    updatedAt?: StringFilter<"Comment"> | string
    priority?: StringNullableFilter<"Comment"> | string | null
    userId?: StringFilter<"Comment"> | string
  }

  export type TaskCreateWithoutCardInput = {
    id: string
    task: string
    completed: boolean
    createdAt: string
    updatedAt: string
  }

  export type TaskUncheckedCreateWithoutCardInput = {
    id: string
    task: string
    completed: boolean
    createdAt: string
    updatedAt: string
  }

  export type TaskCreateOrConnectWithoutCardInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCardInput, TaskUncheckedCreateWithoutCardInput>
  }

  export type TaskCreateManyCardInputEnvelope = {
    data: TaskCreateManyCardInput | TaskCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutCardInput = {
    id: string
    filename: string
    url: string
    createdAt: string
    updatedAt: string
  }

  export type FileUncheckedCreateWithoutCardInput = {
    id: string
    filename: string
    url: string
    createdAt: string
    updatedAt: string
  }

  export type FileCreateOrConnectWithoutCardInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutCardInput, FileUncheckedCreateWithoutCardInput>
  }

  export type FileCreateManyCardInputEnvelope = {
    data: FileCreateManyCardInput | FileCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCardsInput = {
    id: string
    name: string
    email: string
    password: string
    function?: UserCreatefunctionInput | string[]
    isAdmin: boolean
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCardsInput = {
    id: string
    name: string
    email: string
    password: string
    function?: UserCreatefunctionInput | string[]
    isAdmin: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutCardInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCardInput, TaskUncheckedUpdateWithoutCardInput>
    create: XOR<TaskCreateWithoutCardInput, TaskUncheckedCreateWithoutCardInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCardInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCardInput, TaskUncheckedUpdateWithoutCardInput>
  }

  export type TaskUpdateManyWithWhereWithoutCardInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCardInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    task?: StringFilter<"Task"> | string
    completed?: BoolFilter<"Task"> | boolean
    createdAt?: StringFilter<"Task"> | string
    updatedAt?: StringFilter<"Task"> | string
    cardsId?: StringFilter<"Task"> | string
  }

  export type FileUpsertWithWhereUniqueWithoutCardInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutCardInput, FileUncheckedUpdateWithoutCardInput>
    create: XOR<FileCreateWithoutCardInput, FileUncheckedCreateWithoutCardInput>
  }

  export type FileUpdateWithWhereUniqueWithoutCardInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutCardInput, FileUncheckedUpdateWithoutCardInput>
  }

  export type FileUpdateManyWithWhereWithoutCardInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutCardInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: StringFilter<"File"> | string
    filename?: StringFilter<"File"> | string
    url?: StringFilter<"File"> | string
    createdAt?: StringFilter<"File"> | string
    updatedAt?: StringFilter<"File"> | string
    cardId?: StringFilter<"File"> | string
  }

  export type UserUpsertWithoutCardsInput = {
    update: XOR<UserUpdateWithoutCardsInput, UserUncheckedUpdateWithoutCardsInput>
    create: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCardsInput, UserUncheckedUpdateWithoutCardsInput>
  }

  export type UserUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    function?: UserUpdatefunctionInput | string[]
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    function?: UserUpdatefunctionInput | string[]
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CardsCreateWithoutTasksInput = {
    id: string
    title: string
    description?: string | null
    solution?: string | null
    priority?: string | null
    status?: string | null
    createdAt: string
    updatedAt?: string | null
    deleteAt?: string | null
    type?: CardsCreatetypeInput | string[]
    clients?: CardsCreateclientsInput | string[]
    worker?: CardsCreateworkerInput | string[]
    files?: FileCreateNestedManyWithoutCardInput
    user: UserCreateNestedOneWithoutCardsInput
  }

  export type CardsUncheckedCreateWithoutTasksInput = {
    id: string
    title: string
    description?: string | null
    solution?: string | null
    priority?: string | null
    status?: string | null
    createdAt: string
    updatedAt?: string | null
    deleteAt?: string | null
    type?: CardsCreatetypeInput | string[]
    clients?: CardsCreateclientsInput | string[]
    worker?: CardsCreateworkerInput | string[]
    userId: string
    files?: FileUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardsCreateOrConnectWithoutTasksInput = {
    where: CardsWhereUniqueInput
    create: XOR<CardsCreateWithoutTasksInput, CardsUncheckedCreateWithoutTasksInput>
  }

  export type CardsUpsertWithoutTasksInput = {
    update: XOR<CardsUpdateWithoutTasksInput, CardsUncheckedUpdateWithoutTasksInput>
    create: XOR<CardsCreateWithoutTasksInput, CardsUncheckedCreateWithoutTasksInput>
    where?: CardsWhereInput
  }

  export type CardsUpdateToOneWithWhereWithoutTasksInput = {
    where?: CardsWhereInput
    data: XOR<CardsUpdateWithoutTasksInput, CardsUncheckedUpdateWithoutTasksInput>
  }

  export type CardsUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
    files?: FileUpdateManyWithoutCardNestedInput
    user?: UserUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardsUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutCardNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    id: string
    name: string
    email: string
    password: string
    function?: UserCreatefunctionInput | string[]
    isAdmin: boolean
    cards?: CardsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id: string
    name: string
    email: string
    password: string
    function?: UserCreatefunctionInput | string[]
    isAdmin: boolean
    cards?: CardsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    function?: UserUpdatefunctionInput | string[]
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    cards?: CardsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    function?: UserUpdatefunctionInput | string[]
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    cards?: CardsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResponsibleCreateWithoutClientInput = {
    id: string
    name: string
    function: string
    email: string
    phone: string
  }

  export type ResponsibleUncheckedCreateWithoutClientInput = {
    id: string
    name: string
    function: string
    email: string
    phone: string
  }

  export type ResponsibleCreateOrConnectWithoutClientInput = {
    where: ResponsibleWhereUniqueInput
    create: XOR<ResponsibleCreateWithoutClientInput, ResponsibleUncheckedCreateWithoutClientInput>
  }

  export type ResponsibleCreateManyClientInputEnvelope = {
    data: ResponsibleCreateManyClientInput | ResponsibleCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ResponsibleUpsertWithWhereUniqueWithoutClientInput = {
    where: ResponsibleWhereUniqueInput
    update: XOR<ResponsibleUpdateWithoutClientInput, ResponsibleUncheckedUpdateWithoutClientInput>
    create: XOR<ResponsibleCreateWithoutClientInput, ResponsibleUncheckedCreateWithoutClientInput>
  }

  export type ResponsibleUpdateWithWhereUniqueWithoutClientInput = {
    where: ResponsibleWhereUniqueInput
    data: XOR<ResponsibleUpdateWithoutClientInput, ResponsibleUncheckedUpdateWithoutClientInput>
  }

  export type ResponsibleUpdateManyWithWhereWithoutClientInput = {
    where: ResponsibleScalarWhereInput
    data: XOR<ResponsibleUpdateManyMutationInput, ResponsibleUncheckedUpdateManyWithoutClientInput>
  }

  export type ResponsibleScalarWhereInput = {
    AND?: ResponsibleScalarWhereInput | ResponsibleScalarWhereInput[]
    OR?: ResponsibleScalarWhereInput[]
    NOT?: ResponsibleScalarWhereInput | ResponsibleScalarWhereInput[]
    id?: StringFilter<"Responsible"> | string
    name?: StringFilter<"Responsible"> | string
    function?: StringFilter<"Responsible"> | string
    email?: StringFilter<"Responsible"> | string
    phone?: StringFilter<"Responsible"> | string
    clientId?: StringNullableFilter<"Responsible"> | string | null
  }

  export type ClientCreateWithoutResponsiblesInput = {
    id: string
    codigo: string
    companyName: string
    socialName: string
    cnpj: string
    businessPhone: string
    businessEmail: string
    comment: string
    cep: string
    state: string
    city: string
    street: string
    neighborhood: string
    number: string
  }

  export type ClientUncheckedCreateWithoutResponsiblesInput = {
    id: string
    codigo: string
    companyName: string
    socialName: string
    cnpj: string
    businessPhone: string
    businessEmail: string
    comment: string
    cep: string
    state: string
    city: string
    street: string
    neighborhood: string
    number: string
  }

  export type ClientCreateOrConnectWithoutResponsiblesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutResponsiblesInput, ClientUncheckedCreateWithoutResponsiblesInput>
  }

  export type ClientUpsertWithoutResponsiblesInput = {
    update: XOR<ClientUpdateWithoutResponsiblesInput, ClientUncheckedUpdateWithoutResponsiblesInput>
    create: XOR<ClientCreateWithoutResponsiblesInput, ClientUncheckedCreateWithoutResponsiblesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutResponsiblesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutResponsiblesInput, ClientUncheckedUpdateWithoutResponsiblesInput>
  }

  export type ClientUpdateWithoutResponsiblesInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    socialName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    businessPhone?: StringFieldUpdateOperationsInput | string
    businessEmail?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateWithoutResponsiblesInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    socialName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    businessPhone?: StringFieldUpdateOperationsInput | string
    businessEmail?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type CardsCreateWithoutFilesInput = {
    id: string
    title: string
    description?: string | null
    solution?: string | null
    priority?: string | null
    status?: string | null
    createdAt: string
    updatedAt?: string | null
    deleteAt?: string | null
    type?: CardsCreatetypeInput | string[]
    clients?: CardsCreateclientsInput | string[]
    worker?: CardsCreateworkerInput | string[]
    tasks?: TaskCreateNestedManyWithoutCardInput
    user: UserCreateNestedOneWithoutCardsInput
  }

  export type CardsUncheckedCreateWithoutFilesInput = {
    id: string
    title: string
    description?: string | null
    solution?: string | null
    priority?: string | null
    status?: string | null
    createdAt: string
    updatedAt?: string | null
    deleteAt?: string | null
    type?: CardsCreatetypeInput | string[]
    clients?: CardsCreateclientsInput | string[]
    worker?: CardsCreateworkerInput | string[]
    userId: string
    tasks?: TaskUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardsCreateOrConnectWithoutFilesInput = {
    where: CardsWhereUniqueInput
    create: XOR<CardsCreateWithoutFilesInput, CardsUncheckedCreateWithoutFilesInput>
  }

  export type CardsUpsertWithoutFilesInput = {
    update: XOR<CardsUpdateWithoutFilesInput, CardsUncheckedUpdateWithoutFilesInput>
    create: XOR<CardsCreateWithoutFilesInput, CardsUncheckedCreateWithoutFilesInput>
    where?: CardsWhereInput
  }

  export type CardsUpdateToOneWithWhereWithoutFilesInput = {
    where?: CardsWhereInput
    data: XOR<CardsUpdateWithoutFilesInput, CardsUncheckedUpdateWithoutFilesInput>
  }

  export type CardsUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
    tasks?: TaskUpdateManyWithoutCardNestedInput
    user?: UserUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardsUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardsCreateManyUserInput = {
    id: string
    title: string
    description?: string | null
    solution?: string | null
    priority?: string | null
    status?: string | null
    createdAt: string
    updatedAt?: string | null
    deleteAt?: string | null
    type?: CardsCreatetypeInput | string[]
    clients?: CardsCreateclientsInput | string[]
    worker?: CardsCreateworkerInput | string[]
  }

  export type CommentCreateManyUserInput = {
    id: string
    title: string
    comment: string
    createdAt: string
    updatedAt: string
    priority?: string | null
  }

  export type CardsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
    tasks?: TaskUpdateManyWithoutCardNestedInput
    files?: FileUpdateManyWithoutCardNestedInput
  }

  export type CardsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
    tasks?: TaskUncheckedUpdateManyWithoutCardNestedInput
    files?: FileUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    deleteAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: CardsUpdatetypeInput | string[]
    clients?: CardsUpdateclientsInput | string[]
    worker?: CardsUpdateworkerInput | string[]
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    priority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    priority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    priority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyCardInput = {
    id: string
    task: string
    completed: boolean
    createdAt: string
    updatedAt: string
  }

  export type FileCreateManyCardInput = {
    id: string
    filename: string
    url: string
    createdAt: string
    updatedAt: string
  }

  export type TaskUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type FileUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsibleCreateManyClientInput = {
    id: string
    name: string
    function: string
    email: string
    phone: string
  }

  export type ResponsibleUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsibleUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsibleUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CardsCountOutputTypeDefaultArgs instead
     */
    export type CardsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CardsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CardsDefaultArgs instead
     */
    export type CardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CardsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResponsibleDefaultArgs instead
     */
    export type ResponsibleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResponsibleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileDefaultArgs instead
     */
    export type FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}