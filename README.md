# Lambda CDK

This is template repo to build Service with `AWS CDK` as IaC.<br>

> It doesn't contain anything about AWS Services, except AWS CDK.<br>
> And AWS CDK is little dangerouse to use for AWS beginner.
> 
> So, If you want to use AWS IaC, please search a lot for you.
```cmd
1. Docs
    1.1. What is IaC?
    1.2. Prequisites.
    1.3. Get Started
2. Guides
    2.1. Useful commands
    2.2. Useful ExecutionPolicy
```

## 1. Docs

### 1.1. What is IaC?

IaC is a short abbreviation of **Infrastructure as Code**.<br>
If you use IaC Tool, you can create and manage Infrastructure Service.

```typescript
import { Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
export class HelloCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const queue = new Queue(this, 'HelloCdkQueue', {
      /* options */
    });
    const s3Bucket = new Bucket(this, 'MyFirstbucket', {
      /* options*/
    });
  }
}
```

---

### 1.2. Prequisites.

1. Configure aws account in your pc.
2. Install aws-cdk using npm as global.
3. (Optional) Configure ExecutionPolicy when you can't run cdk-cli in vsc.

> Once again, AWS Services give rise to PRICE to developer. <br>
> And AWS CDK can create AWS Services by one line command. <br>
> I think `this is very dangerous to beginner`.
> 
> So, please use AWS Services before using AWS CDK.
---

### 1.3. Get Started

```cmd
git clone https://github.com/unchaptered/serverless-application-prototype.git
git branch -m main
npm ci
```

```sh
cdk synth           # Create ./cdk.out/*.json
cdk diff            # Compare differences using ./cdk.out/*.json
cdk deploy          # Deploy or update infrastructure
cdk destory         # 
```

---

## 2. Guides

The `cdk.json` file tells the CDK Toolkit how to execute your app.

### 2.1. Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

- more command https://docs.aws.amazon.com/cdk/v2/guide/cli.html

### 2.2. Useful ExecutionPolicy

If you cannot call cdk-cli in vsc, you can Set-ExecutionPolicy.

```cmd
Set-ExecutionPolicy -ExecutionPolicy Remotesigned -Scope CurrentUser
```
