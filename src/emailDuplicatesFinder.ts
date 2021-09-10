class EmailDuplicatesFinder {
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

  findDuplicatesEmails(emails1: Array<string>, emails2: Array<string>) {
    return emails1.filter((email1) => {
      if (emails2.includes(email1)) return email1;
    });
  }
}

export default EmailDuplicatesFinder;
