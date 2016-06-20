# Sync Folders
Keep two folders synchronized. The destination folder is updated when a change is detected on the origin folder.

## Configuration
Edit gruntfile.js
```js
files: {
  root: 'D:/workspace/project01/',
  origin: 'src/**/*',
  destination: 'target/'
},
```

## Usage
```sh
npm run keepInSync
```
