# Table of contents

* [createClient.ts][SourceFile-0]
    * Interfaces
        * [CreateClientInterface][InterfaceDeclaration-0]
        * [AxiosPromise][InterfaceDeclaration-1]
    * Variables
        * [createClient][VariableDeclaration-0]

# createClient.ts

## Interfaces

### CreateClientInterface

```typescript
interface CreateClientInterface {
    baseURL: string;
    headers: any;
}
```

**Properties**

| Name    | Type   | Optional |
| ------- | ------ | -------- |
| baseURL | string | false    |
| headers | any    | false    |

----------

### AxiosPromise

```typescript
interface AxiosPromise {
}
```

## Variables

### createClient

```typescript
const createClient: (__0: CreateClientInterface) => AxiosInstance;
```

**Type**

(__0: CreateClientInterface) => AxiosInstance

[SourceFile-0]: createClient.md#createclientts
[InterfaceDeclaration-0]: createClient.md#createclientinterface
[InterfaceDeclaration-1]: createClient.md#axiospromise
[VariableDeclaration-0]: createClient.md#createclient