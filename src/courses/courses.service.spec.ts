import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

describe('CoursesService', () => {
  let service: CoursesService;
  let prisma: PrismaService;
  let config: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesService, PrismaService, ConfigService],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
    prisma = module.get<PrismaService>(PrismaService);
    config = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new course', async () => {
    const newCourse = { title: 'Test Course', description: 'Test Desc', level: 'Débutant' };
    prisma.course.create = jest.fn().mockResolvedValue(newCourse);
    expect(await service.createCourse(newCourse)).toEqual(newCourse);
  });

  it('should find a course by ID', async () => {
    const course = { id: '1', title: 'Test', description: 'Desc', level: 'Débutant' };
    prisma.course.findUnique = jest.fn().mockResolvedValue(course);
    expect(await service.getCourseById('1')).toEqual(course);
  });

  it('should throw NotFoundException if course not found', async () => {
    prisma.course.findUnique = jest.fn().mockResolvedValue(null);
    await expect(service.getCourseById('1')).rejects.toThrow();
  });
});
