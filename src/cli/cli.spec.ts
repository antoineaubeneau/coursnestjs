import { mainCliFunction } from './cli';
import { jest } from '@jest/globals';

const mockCreateDocument = jest.fn();

jest.mock('./fs.mjs', () => ({ createDocument: mockCreateDocument }));

const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    throw new Error('Process exit');
});
const mockConsoleError = jest
    .spyOn(console, 'error')
    .mockImplementation(() => { });

describe('mainCliFunction', () => {
    beforeEach(() => {
        mockCreateDocument.mockClear();
        mockExit.mockClear();
        mockConsoleError.mockClear();
    });

    it('should call createDocument with the correct arguments', () => {
        const fakeArgs = [
            'node',
            'cli.ts',
            '--filepath',
            'exemple.txt',
            '--fileout',
            'sortie.md',
        ];
        process.argv = fakeArgs;

        try {
            mainCliFunction();
        } catch (error) { }

        expect(mockCreateDocument).toHaveBeenCalledWith('exemple.txt', 'sortie.md');
    });

    it('should exit with an error if no filepath is provided', () => {
        const fakeArgs = ['node', 'cli.ts'];
        process.argv = fakeArgs;

        expect(mainCliFunction).toThrowError('Process exit');
        expect(mockConsoleError).toHaveBeenCalledWith(
            expect.stringContaining('Le paramètre filepath est obligatoire'),
        );
    });
});
