# Sync Folders
Keep two folders synchronized. The destination folder is updated when a change is detected on the origin folder.

## Configuration
Edit gruntfile.js
```js
files: {
  origin: 'D:/workspace/project01/src/',
  pattern: '**/*',
  destination: 'D:/workspace/project01/target/'
}
```

## Usage
```sh
npm run keepInSync
```
