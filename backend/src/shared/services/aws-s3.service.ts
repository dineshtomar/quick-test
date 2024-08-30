import { Injectable, Logger } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as mime from 'mime-types';
import { UtilsService } from '../../_helpers/utils.service';
import { IFile } from '../../interfaces/IFile';
import { GeneratorService } from './generator.service';
import Constants from '../../common/constants/Constants'
import {ConfigService} from '@nestjs/config';
import { AllConfigType } from '../../config/config.type';
import { IAwsConfig } from 'src/interfaces/IAwsConfig';

@Injectable()
export class AwsS3Service {
    private readonly _s3: AWS.S3;
    private readonly bucketName: string;
    spacesEndpoint: any = null;

    constructor(
        private readonly configService: ConfigService<AllConfigType>,
        public generatorService: GeneratorService,
    ) {
        const options: AWS.S3.Types.ClientConfiguration = { apiVersion: '2010-12-01', 
        region: this.configService.getOrThrow('aws.bucketRegion', {infer: true})};
        this.spacesEndpoint = new AWS.Endpoint(this.configService.getOrThrow('aws.digitalOceanEndPoint', {infer: true}));
        const AwsS3Config : IAwsConfig = {
            accessKeyId: this.configService.getOrThrow('aws.accessKeyId', {infer: true}),
            secretAccessKey: this.configService.getOrThrow('aws.secretAccessKey', {infer: true}),
            bucketName: this.configService.getOrThrow('aws.bucketName', {infer: true})
        }
        options.credentials = AwsS3Config;
        options.endpoint = this.spacesEndpoint;
        this._s3 = new AWS.S3(options);
        this.bucketName = this.configService.getOrThrow('aws.bucketName', {infer: true});
        this.checkBucketExists(this.bucketName);


        const thisConfig = {
            AllowedHeaders:[Constants.AWS_S3_BUCKET_ALLOWED_HEADERS],
            AllowedMethods:[Constants.AWS_S3_BUCKET_ALLOWED_METHOD1],
            AllowedOrigins:[Constants.AWS_S3_BUCKET_ALLOWED_ORIGINS],
            ExposeHeaders:[],
            MaxAgeSeconds: Constants.AWS_S3_BUCKET_MAX_AGE_SECONDS
        };
        
        const corsRules = new Array(thisConfig);
        const corsParams = { Bucket: this.bucketName, CORSConfiguration: { CORSRules: corsRules } };     
        this._s3.putBucketCors(corsParams, (error) => {
            if (error) {                
                Logger.error(error);                
            }
        });
    }

    async uploadImage(file: IFile): Promise<any> {
        const fileName = this.generatorService.fileName(
            <string>mime.extension(file.mimetype),
        );
        const key = `images/${  fileName}`;
        const uploadData: any = {
            Bucket: this.bucketName,
            Body: file.buffer,
            ACL: 'public-read',
            Key: key,
        }
        if (file?.mimetype) uploadData.ContentType = file.mimetype;
        const response = await this._s3
            .upload(uploadData)
            .promise();
        return response;
    }
    
    async uploadPdf(file): Promise<string> {
        const fileName = file.originalname;
        const key = `pdfs/${  fileName}`;
        await this._s3.upload({
            Bucket: this.bucketName,
            Body: file.buffer,
            ACL: 'public-read',
            Key: key
        }).promise();
        return key;
    }

    checkBucketExists(
        bucketName: string
    ) {
       this._s3.listBuckets((error, data) => {
            let checkBucket;
            if(error) {
                Logger.error(error);
            }
            else if(data && data.Buckets) {
                const buckets = data.Buckets;
                checkBucket = buckets.find(
                    bucket => bucket.Name === bucketName
                );
            }

            if(!checkBucket) {
                this._s3.createBucket({ Bucket: bucketName }, UtilsService.handleError);
            }
        });
    }

    async generateSignedUrl(key: string, expires: number) {
         
        await this._s3.headObject({
            Bucket: this.bucketName,
            Key: key
        }).promise();
        const url = await this._s3.getSignedUrl(
            "getObject",
            {
                Bucket: this.bucketName,
                Key: key,
                Expires: expires
            }
        );
        return url;
    }

    async deleteFile(key:string){

        await this._s3.headObject({
            Bucket: this.bucketName,
            Key: key
        }).promise();

        await this._s3.deleteObject({Bucket: this.bucketName, Key:key}).promise()
    }
}
