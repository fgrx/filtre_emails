import CSVAnalyser from "../app";

describe(">>>>>>> app.ts", () => {
  const csvAnalyser = new CSVAnalyser(`./tests/files`);

  beforeEach(async () => {
    await csvAnalyser.analyse();
  });

  it("should return a list of emails", () => {
    expect(csvAnalyser.emails1).toHaveLength(4);
    expect(csvAnalyser.emails2).toHaveLength(3);
  });

  it("should return unique emails from source", () => {
    expect(csvAnalyser.uniquesEmails).toContain("dsfg.dfg@gmail.com");
    expect(csvAnalyser.uniquesEmails).toContain("gpods.vdouiffllon@gmail.com");
  });

  it("should return similar emails", async () => {
    csvAnalyser.duplicatedEmails; //?
    expect(csvAnalyser.duplicatedEmails).toContain("dfd.melffin@neuf.fr");
    expect(csvAnalyser.duplicatedEmails).toContain("didp.op@coucou.fr");
  });
});
