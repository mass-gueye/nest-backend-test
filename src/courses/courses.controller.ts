import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() data: CreateCourseDto) {
    return this.coursesService.createCourse(data);
  }

  @Get()
  findAll() {
    return this.coursesService.getAllCourses();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.getCourseById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: CreateCourseDto) {
    return this.coursesService.updateCourse(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.deleteCourse(id);
  }
}
