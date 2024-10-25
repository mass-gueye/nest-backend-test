import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async createCourse(data: Prisma.CourseCreateInput) {
    try {
      return await this.prisma.course.create({ data });
    } catch (error) {
      throw new InternalServerErrorException('Failed to create course');
    }
  }

  async getCourseById(id: string) {
    try {
      const course = await this.prisma.course.findUnique({ where: { id } });
      if (!course) throw new NotFoundException('Course not found');
      return course;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve course');
    }
  }

  async getAllCourses() {
    try {
      return await this.prisma.course.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve courses');
    }
  }

  async updateCourse(id: string, data: Prisma.CourseUpdateInput) {
    try {
      const course = await this.prisma.course.findUnique({ where: { id } });
      if (!course) throw new NotFoundException('Course not found');

      return await this.prisma.course.update({ where: { id }, data });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to update course');
    }
  }

  async deleteCourse(id: string) {
    try {
      const course = await this.prisma.course.findUnique({ where: { id } });
      if (!course) throw new NotFoundException('Course not found');

      return await this.prisma.course.delete({ where: { id } });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to delete course');
    }
  }
}
