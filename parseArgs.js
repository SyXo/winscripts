
/*
Function to parse variables passed from terminal. Any variable starting with - is
considered an option. Everything else is an argument
	**** param args -> String to be parse
	**** param argLimit -> The total number of args to expect before giving a warning
	**** allowAbbrev -> obj.options can be accessed using the first letter of the key
	returns an Object {
		arg: [],
		options:{}
	}
*/
function parseArgs(args,argLimit,allowAbbrev){
	if(!argLimit)
		argLimit = 1
	let arguments =[],
		options = {}
	for (var i = 0;i<args.length;i++) {
		let arg = args[i]
		if(!arg.startsWith('-'))
			arguments.push(arg)
		else{
			arg = arg.split('-')[1]
			//if false Boolean value is passed then option is boolean value
			if(i+1>args.length || !args[i+1]){
				options[arg] = true
			}
			else{
				//if next arg starts with - then arg is boolean value
				if(args[i+1].startsWith('-'))
					options[arg] = true
				else{
					//next word is the value of the option
					options[arg]= args[i+1]
					i++
				}
			}
		}
	}
	if(arguments.length>argLimit)
		console.warn('There are more arguments than expected!')
	//allowAbbrev will create keys that contains just the first letter of the optionName
	if(allowAbbrev)
		Object.keys(options).forEach((key)=>options[key[0]]=options[key])
	return {
		args:arguments,
		options:options
	}
}
module.exports = parseArgs