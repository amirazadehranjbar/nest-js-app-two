import { PartialType, OmitType } from '@nestjs/swagger';
import { createBlogDto } from './createBlogDto';

export class UpdateBlogDto extends PartialType(createBlogDto) {}