const path = require('path')
const fs = require('fs')
const parseArgs = require('./parseArgs')
const args = parseArgs(process.argv.slice(2)).options

//Check path to see if this directory is in it
let pathVars = process.env.PATH.split(';')
let cwd = process.cwd()
if(!pathVars.find(val=>val==cwd))
	console.log('Did not find this directory in PATH variable.'+
		'(You will have to change to this directory every time to execut all scripts in '+
		'this dir)')
/*
the rd files all follow the same setup and if you ssh into many devices this
script can generate shortcuts for you
*/
let { device, id_file, name } = args
//make sure all necessary arguments are provided to script
if(!device || !id_file || !name){
	!device && console.log('Provide a device formatted as <user>@<ip-address>')
	!id_file && console.log('Provide your id file! Use ssh-keygen on your remote'+
		' device if you do not have one')
	!name && console.log('Provide a name for your remote device')
	process.exit()
}
//make sure identity file is in directory
if(!fs.existsSync(id_file)){
	console.log(`${id_file} not found in current directory.`)
	process.exit()
}
console.log(args)
//generate text 
//all files will start with this
const strStart = `@echo off
set ID_FILE='${id_file}'
set DEVICE='${device}'
`
let cp2 = `${strStart}
scp -i %ID_FILE% -r %1 %DEVICE%:%2
`
let cpfrom = `${strStart}
scp -i %ID_FILE% -r %DEVICE%:%1 %2
`
let ssh = `${strStart}
ssh -i %ID_FILE% %DEVICE% 
`
//create commands
fs.writeFileSync('cp2'+name+'.bat', cp2);
fs.writeFileSync('cpfrom'+name+'.bat', cpfrom);
fs.writeFileSync(name+'.bat', ssh);
