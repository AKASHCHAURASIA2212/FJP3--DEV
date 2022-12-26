let fs = require('fs');

let path = require('path')

function treefn(dirpath) {

    if (dirpath == undefined) {
        console.log('Please enter a Valid command')
    }
    else {
        let doesExiest = fs.existsSync(dirpath);

        if (doesExiest == true) {
            treeHelper(dirpath, " ");
        } else {
            console.log("Path not Exiest");
        }
    }
}

function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile();

    if (isFile == true) {
        let fileName = path.basename(targetPath);
        console.log(indent + "├── " + fileName); // tree command symbol
    } else {
        let dirname = path.basename(targetPath);
        console.log(indent + "└── " + dirname);

        let children = fs.readdirSync(targetPath);
        // console.log(children)

        for (let i = 0; i < children.length; i++) {
            let childpath = path.join(targetPath, children[i]);
            treeHelper(childpath, indent + '\t');
        }
    }

}

module.exports={
    treeKey : treefn
}