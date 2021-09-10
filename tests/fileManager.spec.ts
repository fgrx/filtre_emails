import FileManager from "../src/fileManager";

describe(">>>>>>>>>>>File Manager", () => {
  const folder = "./tests/files";
  const file = `${folder}/1.csv`;

  const fileManager = new FileManager();

  it("should open a file", async () => {
    const result = await fileManager.read(file);
    expect(result).toContain("faire_la_paix_avec_son_heritage_familial");
  });

  it("should find files in folder", async () => {
    const result = await fileManager.findFilesInFolder(folder);
    expect(result).toContain("1.csv");
  });
});
