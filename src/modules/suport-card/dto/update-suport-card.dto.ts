import { PartialType } from '@nestjs/swagger';
import { CreateSuportCardDto } from './create-suport-card.dto';

export class UpdateSuportCardDto extends PartialType(CreateSuportCardDto) {}