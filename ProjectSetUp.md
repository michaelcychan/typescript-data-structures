# My Own TypeScript Exercises

## To start a new project

```bash
npm init -y
npm add -D jest ts-jest @types/jest @types/node typescript
npx tsc --init

```

in `package.json`, add `"build": "npx tsc"` inside `"script"`

Create `/src` directory for source codes and `/spec` for spec files

Create `tsconfig.json`, and add the following:

```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "target": "ES2020",
    "moduleResolution": "NodeNext",
    "sourceMap": true, 
    "outDir": "dist",  
    "strict": true,
  },
  "include": ["./src/**/*"],
}

```

Create `jest.config.js` with the following content:  

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

## Allow debugging in VS Code

Create `./.vscode/launch.json` and use codes:

```json
{
  "version": "0.2.0",
  "configurations": [
      {
          "type": "node",
          "request": "launch",
          "name": "Testing Debugger",
          "program": "${workspaceFolder}/src/index.ts",
          "preLaunchTask": "npm: build",
          "sourceMaps": true,
          "smartStep": true,
          "internalConsoleOptions": "openOnSessionStart",
          "outFiles": [
              "${workspaceFolder}/dist/**/*.js"
          ]
      },
      {
        "type": "node",
        "request": "launch",
        "name": "Jest with Debugger",
        "runtimeArgs": [
            "--inspect-brk",
            "${workspaceRoot}/node_modules/jest/bin/jest.js",
            "--config",
            "${workspaceRoot}/jest.config.js",
            "--runInBand"
          ],
        "preLaunchTask": "npm: build",
        "sourceMaps": true,
        "smartStep": true,
        "internalConsoleOptions": "openOnSessionStart",
        "outFiles": [
            "${workspaceFolder}/dist/**/*.js"
        ]
    }
  ]
}
```

## Assisting VS Code IntelliSense

create `jsconfig.json` inside `./spec` directory:  

```json
{
  "typeAcquisition": {
      "include": [
          "jest"
      ]
  }
}
```
