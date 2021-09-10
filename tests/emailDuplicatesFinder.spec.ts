import EmailDuplicatesFinder from "../src/emailDuplicatesFinder";

describe(">>>>>>>email Finder", () => {
  const emailFinder = new EmailDuplicatesFinder();
  const text = "bla bla bla toto@free.fr bisdiisd titi@gmail.com fifidi";
  const emails1 = ["toto@free.fr", "john@gmail.com", "lola@clubinternet.fr"];
  const emails2 = ["toto@free.fr", "lola@clubinternet.fr"];

  it("should return a list of email", () => {
    const res = emailFinder.findEmailsInText(text);
    expect(res).toContain("toto@free.fr");
    expect(res).toContain("titi@gmail.com");

    const test2 = emailFinder.findEmailsInText(
      "fsdfdsfvc d sfsdfdsfds fd@ fdsf/ fds. fds"
    );
    expect(test2.length).toBe(0);
  });

  it("should return duplicates email", () => {
    const res = emailFinder.findDuplicatesEmails(emails1, emails2);
    expect(res).toContain("toto@free.fr");
    expect(res).toContain("lola@clubinternet.fr");
  });
});
