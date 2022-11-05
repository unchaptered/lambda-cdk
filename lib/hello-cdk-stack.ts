import { Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export class HelloCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const queue = new Queue(this, 'HelloCdkQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    const s3Bucket = new Bucket(this, 'MyFirstbucket', {
      versioned: true,
      /*
       * When stack is destoryed, S3 bucket isn't destoryed(default).
       * So, this options must be true to build Pracitce App with AWS-CDK
       */
      removalPolicy:  RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });

  }
}
