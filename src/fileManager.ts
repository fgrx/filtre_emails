const fs = require("fs").promises;

class FileManager {
  constructor() {}

  async findFilesInFolder(folder: string): Promise<string[]> {
    const res = await fs.readdir(folder);
    return res;
  }

  async read(file: string): Promise<string> {
    const data = await fs.readFile(file, "utf8");
    return data;
  }
}

export default FileManager;
