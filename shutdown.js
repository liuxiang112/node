
// const shell = require('shelljs')

// shell.exec('shutdown -s')
// shell.echo('test message')
const child_preocess = require('child_process')

child_preocess.exec('shutdown /s /t 300')