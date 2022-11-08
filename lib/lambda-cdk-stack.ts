import { Stack, StackProps } from "aws-cdk-lib";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";


export class LambdaCdkStack extends Stack {

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const helloLambda = new Function(this, "HelloHandler", {
            runtime: Runtime.NODEJS_14_X,
            code: Code.fromAsset('lambda'),
            handler: 'hello.handler', // hello.js . handler
        });
    }

}