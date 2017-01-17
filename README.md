# Sync Folders
Keep two folders synchronized:

Whenever a change is detected on the origin folder, the destination folder is updated with the new changes.

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
npm run
```
