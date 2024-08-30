import { ApiProperty } from "@nestjs/swagger";
import { 
    IsOptional, 
    IsString, 
    MaxLength,
    MinLength,
} from "class-validator";
import { OrgSubscriptionStatus } from "../../../common/enums/org-subscription-status";

export class UpdateOrganizationStatusDto {
    @MaxLength(50, { message: "subscriptionStatus max size can be 50" })
    @MinLength(2, { message: "subscriptionStatus size should be greater than 1" })
    @IsString({ message: "subscriptionStatus should be a string " })
    @IsOptional()
    @ApiProperty()
    subscriptionStatus: () => OrgSubscriptionStatus;
}