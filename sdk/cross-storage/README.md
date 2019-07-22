# Table of contents

* [crossStorage.ts][SourceFile-0]
    * Interfaces
        * [CrossStorageProps][InterfaceDeclaration-0]
        * [CrossStorage][InterfaceDeclaration-1]
    * Variables
        * [CrossStorage][VariableDeclaration-0]

# crossStorage.ts

## Interfaces

### CrossStorageProps

```typescript
interface CrossStorageProps {
    baseURL: string;
}
```

**Properties**

| Name    | Type   | Optional |
| ------- | ------ | -------- |
| baseURL | string | false    |

----------

### CrossStorage

```typescript
interface CrossStorage {
    read(key: string): Promise<any>;
    write(key: string, value: any): Promise<void>;
    writeMany(pairs?: CrossStorageItem[]): Promise<void>;
    del(key: string): Promise<void>;
    clear(): Promise<void>;
    close(): Promise<void>;
}
```
#### Method

```typescript
read(key: string): Promise<any>;
```

**Parameters**

| Name | Type   |
| ---- | ------ |
| key  | string |

**Return type**

Promise<any>

```typescript
write(key: string, value: any): Promise<void>;
```

**Parameters**

| Name  | Type   |
| ----- | ------ |
| key   | string |
| value | any    |

**Return type**

Promise<void>

```typescript
writeMany(pairs?: CrossStorageItem[]): Promise<void>;
```

**Parameters**

| Name  | Type                                         |
| ----- | -------------------------------------------- |
| pairs | [CrossStorageItem][InterfaceDeclaration-2][] |

**Return type**

Promise<void>

```typescript
del(key: string): Promise<void>;
```

**Parameters**

| Name | Type   |
| ---- | ------ |
| key  | string |

**Return type**

Promise<void>

```typescript
clear(): Promise<void>;
```

**Return type**

Promise<void>

```typescript
close(): Promise<void>;
```

**Return type**

Promise<void>


## Variables

### CrossStorage

```typescript
const CrossStorage: (__0: CrossStorageProps) => CrossStorage;
```

**Type**

(__0: CrossStorageProps) => [CrossStorage][InterfaceDeclaration-1]

[SourceFile-0]: crossStorage.md#crossstoragets
[InterfaceDeclaration-0]: crossStorage.md#crossstorageprops
[InterfaceDeclaration-1]: crossStorage.md#crossstorage
[InterfaceDeclaration-2]: crossStorage.md#crossstoragets
[VariableDeclaration-0]: crossStorage.md#crossstorage
[InterfaceDeclaration-1]: crossStorage.md#crossstorage