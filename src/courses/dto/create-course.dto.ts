import { IsString, IsNotEmpty, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({ description: 'The title of the course' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'A brief description of the course' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'The difficulty level of the course',
    enum: ['Débutant', 'Intermédiaire', 'Avancé'],
  })
  @IsString()
  @IsIn(['Débutant', 'Intermédiaire', 'Avancé'])
  level: string;
}
