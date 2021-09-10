import CSVAnalyser from "../app";

describe(">>>>>>> app.ts", () => {
  it("should return similar emails", async () => {
    const csvAnalyser = new CSVAnalyser(`./tests/files`);
    const result = await csvAnalyser.analyse();
    expect(result).toContain("sandrine.vouillon@gmail.com");
  });
});
