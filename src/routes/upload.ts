import * as AWS from "aws-sdk"

const spacesEndpoint = new AWS.Endpoint('nyc3.digitaloceanspaces.com');

const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: "RLNBMWMW4BZHR5SPKCRH",
    secretAccessKey: "ZgcSRd0/XWzzhWKk6rpXD4J9n22Jar//lWiYT2Sb0oQ"
});

s3.listBuckets(function(err: any,data: any){
    if (err) console.log(err,err.stack);
    else{
        console.log(data);
    };
});

var uploadFile = {
    Bucket: "ieee-forge",
    Key: "file.ext",
    Body: "The contents of the file.",
    ACL: "private",
    Metadata: {
        "x-amz-meta-my-key" : "your-value"
    }
};

s3.putObject(uploadFile, function(err,data)
{
    if(err) {console.log(err, err.stack);}
    else {console.log(data);}
});
// var params = {
//     Bucket: "ieee-forge",]
// lol i did
// how long was I gone lol
// not that long
// };

// s3.listObjects(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else {
//         console.log(data);
//     };
// });

//Remember to delete package.json script when you push

// Visual Studio Code
// Create a new node.js configuration, add -r ts-node/register to node args 
// and move the program to the args list (so VS Code doesn't look for outFiles).

// {
//     "type": "node",
//     "request": "launch",
//     "name": "Launch Program",
//     "runtimeArgs": [
//         "-r",
//         "ts-node/register"
//     ],
//     "args": [
//         "${workspaceFolder}/index.ts"
//     ]
// }
// Note: If you are using the --project <tsconfig.json> command line argument as per the Configuration Options,
// and want to apply this same behavior when launching in VS Code, add an "env" key into the launch configuration: "env": { "TS_NODE_PROJECT": "<tsconfig.json>" }.

// IntelliJ (and WebStorm)
// Create a new Node.js configuration and add -r ts-node/register to "Node parameters."

// Note: If you are using the --project <tsconfig.json> command line argument as per the Configuration Options,
// and want to apply this same behavior when launching in IntelliJ, specify under "Environment Variables": TS_NODE_PROJECT=<tsconfig.json>.