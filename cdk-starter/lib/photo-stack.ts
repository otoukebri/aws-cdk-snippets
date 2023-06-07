import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";


interface PhotosHandlerStackProps extends StackProps{
  
}

export class PhotoHandlerStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }
}
