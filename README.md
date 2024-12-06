# Miniswitch

A declarative switch that returns the value. With `miniswitch` you can directly do switch cases when you just want to assign a value by directly creating a `const` instead of declaring a `let` and imperatively assign the value.

## Why miniswitch?

+ reduces boilerplate and improves readability
+ as lighter as thin air: just 2 lines of source code (4 lines compiled to js)
+ Typescript first
+ 2024 updated
+ Dependencyless

## Usage

Consider the following regular `switch` statement:

```typescript
let v = "success";
let result;
switch (v) {
case "success":
    result = "Operation successful";
    break;
case "error":
    result = "An error occurred";
    break;
case "warning":
    result = "Warning: Check inputs";
    break;
default:
    result = "Unknown type";
}
return result;

console.log(result); // "Operation successful"
```

With miniswitch it gets reduced to:

```typescript
let v = "success";
const result = miniswitch(v, {
    success: () => "Operation successful",
    error: () => "An error occurred",
    warning: () => "Warning: Check inputs",
  }, () => "Unknown type");

console.log(result); // "Operation successful"
```

## Changelog

* v0.1.0 - Initial release.
