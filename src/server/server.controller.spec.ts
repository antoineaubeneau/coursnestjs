import { Test, TestingModule } from '@nestjs/testing';
import * as assert from 'assert';
import { ApiController } from './server.controller';

describe('Api Controller', () => {
  let controller: ApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      imports: [],
    }).compile();

    controller = app.get<ApiController>(ApiController);
  });

  describe('generate', () => {
    it('should generate documentation', () => {
      const testData = '/*DOC This is a test comment */';
      const result = controller.generate(testData);
    });
  });

  describe('getAll', () => {
    it('should return "List of documents"', () => {
      const result = controller.getAll();
      assert.strictEqual(result, 'List of documents');
    });
  });
});
