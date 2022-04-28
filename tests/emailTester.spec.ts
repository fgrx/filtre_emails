import EmailTester from "../src/emailTester";

describe(">>>>>>>email Finder", () => {
  const emailTester = new EmailTester();

  const emails1 = [
    "toto@free.fr",
    "john@gmail.com",
    "lola@clubinternet.fr",
    "houba@free.fr",
  ];
  const emails2 = ["toto@free.fr", "lola@clubinternet.fr"];

  it("should return a list of email", () => {
    const text = "bla bla bla toto@free.fr bisdiisd titi@gmail.com fifidi";
    const emailsFoundInText: Array<string> = emailTester.findEmailsInText(text);

    const emailToFind1 = "toto@free.fr";
    const emailToFind2 = "titi@gmail.com";
    expect(emailsFoundInText).toContain(emailToFind1);
    expect(emailsFoundInText).toContain(emailToFind2);
  });

  it("should not return any emails", () => {
    const stringWithNoEmails = "fsdfdsfvc d sfsdfdsfds fd@ fdsf/ fds. fds";

    const testWithNoEmails = emailTester.findEmailsInText(stringWithNoEmails);
    expect(testWithNoEmails.length).toBe(0);
  });

  it("should return duplicates email", () => {
    const duplicatedEmails = emailTester.findDuplicatesEmails(emails1, emails2);
    expect(duplicatedEmails).toContain(emails1[0]);
    expect(duplicatedEmails).toContain(emails1[2]);
  });

  it("should return unique emails", async () => {
    const uniqueEmails = emailTester.findUniqueEmails(emails1, emails2); //?
    expect(uniqueEmails).toContain(emails1[1]);
    expect(uniqueEmails).toContain(emails1[3]);
  });
});
