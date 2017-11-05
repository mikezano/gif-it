module.exports = {
	//url: 'mongodb://admin:admin@ds133281.mlab.com:33281/gif-sandbox'
	url: 'mongodb://localhost:27017/gif-sandbox',
	//url: 'mongodb://gifs:tuyxiTh9OeEURMOjyDbPJ5tBTynPMMmh5otUNW15D9VEbdzSyO9qAMkeTLhP09yZ1bkiC0OMhKhqySDFESfRRg==@gifs.documents.azure.com:10255/?ssl=true',
	mode: 'no-cors'
}

//Can't exceed 2MB on Documents in AZURE
//https://docs.microsoft.com/en-us/azure/cosmos-db/documentdb-resources#documents