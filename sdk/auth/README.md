# Table of contents

* [auth.ts][SourceFile-0]
    * Interfaces
        * [AuthInterfaceProps][InterfaceDeclaration-0]
        * [Credentials][InterfaceDeclaration-2]
        * [LoginInput][InterfaceDeclaration-3]
        * [AuthUser][InterfaceDeclaration-1]
        * [AuthInterface][InterfaceDeclaration-4]
    * Variables
        * [Auth][VariableDeclaration-0]

# auth.ts

## Interfaces

### AuthInterfaceProps

```typescript
interface AuthInterfaceProps {
    baseURL: string;
    isAccount?: boolean;
    keepAlive?: boolean;
    refreshRequiresUserInteraction?: boolean;
    useOldLogin?: boolean;
    onUpdate(user: AuthUser): void;
}
```
#### Method

```typescript
onUpdate(user: AuthUser): void;
```

**Parameters**

| Name | Type                               |
| ---- | ---------------------------------- |
| user | [AuthUser][InterfaceDeclaration-1] |

**Return type**

void


**Properties**

| Name                           | Type    | Optional |
| ------------------------------ | ------- | -------- |
| baseURL                        | string  | false    |
| isAccount                      | boolean | true     |
| keepAlive                      | boolean | true     |
| refreshRequiresUserInteraction | boolean | true     |
| useOldLogin                    | boolean | true     |

----------

### Credentials

```typescript
interface Credentials {
    document_number?: string;
    email?: string;
    password: string;
}
```

**Properties**

| Name            | Type   | Optional |
| --------------- | ------ | -------- |
| document_number | string | true     |
| email           | string | true     |
| password        | string | false    |

----------

### LoginInput

```typescript
interface LoginInput {
    emailOrCPF: string;
    password: string;
    rememberMe: boolean;
}
```

**Properties**

| Name       | Type    | Optional |
| ---------- | ------- | -------- |
| emailOrCPF | string  | false    |
| password   | string  | false    |
| rememberMe | boolean | false    |

----------

### AuthUser

```typescript
interface AuthUser {
    token?: string;
    tenant?: string;
    refreshToken?: string;
}
```

**Properties**

| Name         | Type   | Optional |
| ------------ | ------ | -------- |
| token        | string | true     |
| tenant       | string | true     |
| refreshToken | string | true     |

----------

### AuthInterface

```typescript
interface AuthInterface {
    login(input: LoginInput): Promise<void>;
    logout(token?: string): AxiosPromise;
    ensure(): AxiosPromise;
    recoverPassword(email: string): AxiosPromise;
    onUpdateProxy(currentRefresher: any): Promise<any>;
    resetSession(): Promise<void>;
    setSession(data: any): Promise<void>;
    getPreferences(): Promise<any>;
}
```
#### Method

```typescript
login(input: LoginInput): Promise<void>;
```

**Parameters**

| Name  | Type                                 |
| ----- | ------------------------------------ |
| input | [LoginInput][InterfaceDeclaration-3] |

**Return type**

Promise<void>

```typescript
logout(token?: string): AxiosPromise;
```

**Parameters**

| Name  | Type   |
| ----- | ------ |
| token | string |

**Return type**

AxiosPromise

```typescript
ensure(): AxiosPromise;
```

**Return type**

AxiosPromise

```typescript
recoverPassword(email: string): AxiosPromise;
```

**Parameters**

| Name  | Type   |
| ----- | ------ |
| email | string |

**Return type**

AxiosPromise

```typescript
onUpdateProxy(currentRefresher: any): Promise<any>;
```

**Parameters**

| Name             | Type |
| ---------------- | ---- |
| currentRefresher | any  |

**Return type**

Promise<any>

```typescript
resetSession(): Promise<void>;
```

**Return type**

Promise<void>

```typescript
setSession(data: any): Promise<void>;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| data | any  |

**Return type**

Promise<void>

```typescript
getPreferences(): Promise<any>;
```

**Return type**

Promise<any>


## Variables

### Auth

```typescript
const Auth: (__0: AuthInterfaceProps) => AuthInterface;
```

**Type**

(__0: AuthInterfaceProps) => [AuthInterface][InterfaceDeclaration-4]

[SourceFile-0]: auth.md#authts
[InterfaceDeclaration-0]: auth.md#authinterfaceprops
[InterfaceDeclaration-1]: auth.md#authuser
[InterfaceDeclaration-2]: auth.md#credentials
[InterfaceDeclaration-3]: auth.md#logininput
[InterfaceDeclaration-1]: auth.md#authuser
[InterfaceDeclaration-4]: auth.md#authinterface
[InterfaceDeclaration-3]: auth.md#logininput
[VariableDeclaration-0]: auth.md#auth
[InterfaceDeclaration-4]: auth.md#authinterface