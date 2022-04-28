class EmailTester {
  constructor() {}

  findEmailsInText(text: string): Array<string> {
    const emails = text.match(
      /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );

    if (emails) {
      return emails;
    } else {
      return [];
    }
  }

  findDuplicatesEmails(
    emails1: Array<string>,
    emails2: Array<string>
  ): Array<string> {
    return emails1.filter((email1) => {
      if (emails2.includes(email1)) return email1;
    });
  }

  findUniqueEmails(
    emailsSource: Array<string>,
    emailsToCompare: Array<string>
  ): Array<string> {
    const uniquesEmails = emailsSource.filter((email) => {
      if (!emailsToCompare.includes(email)) {
        return email;
      }
    });
    if (!uniquesEmails) return [];
    return uniquesEmails;
  }
}

export default EmailTester;
