# Sync Folders
Keep two folders synchronized. The destination folder is updated when a change is detected on the origin folder.

## Configuration
Edit gruntfile.js
```js
files: {
  //root commun à l'origine et la destination
  root: 'D:/workspace/project01/'
  //source
  origin: 'src/',
  pattern: '**/*',
  //destination
  destination: 'target/'
}
```

## Usage
```sh
npm run keepInSync
```
