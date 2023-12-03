import AbstractSyntaxTree from "abstract-syntax-tree";
export default function parse(source)
{
    try {
        return AbstractSyntaxTree.parse(source)
    }catch(err) {
        console.log('.....')
    }
}