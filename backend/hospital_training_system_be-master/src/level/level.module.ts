import { LevelService } from './level.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LevelController } from './level.controller';

@Module({
  imports: [PrismaModule],
  controllers: [LevelController],
  providers: [LevelService],
})
export class LevelModule {}
