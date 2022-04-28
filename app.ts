import FileManager from "./src/fileManager";
import EmailTester from "./src/emailTester";

class CSVAnalyser {
  public duplicatedEmails: Array<string>;
  public uniquesEmails: Array<string>;

  emails1: Array<string>;
  emails2: Array<string>;

  constructor(private folder: string) {
    this.emails1 = [];
    this.emails2 = [];

    this.duplicatedEmails = [];
    this.uniquesEmails = [];
  }

  async analyse() {
    const fileManager = new FileManager();

    const files = await fileManager.findFilesInFolder(this.folder);

    const text1 = await fileManager.read(`${this.folder}/${files[0]}`);
    const text2 = await fileManager.read(`${this.folder}/${files[1]}`);

    const emailTester = new EmailTester();

    this.emails1 = emailTester.findEmailsInText(text1);
    this.emails2 = emailTester.findEmailsInText(text2);

    this.duplicatedEmails = emailTester.findDuplicatesEmails(
      this.emails1,
      this.emails2
    );
    this.uniquesEmails = emailTester.findUniqueEmails(
      this.emails1,
      this.emails2
    );
  }
}

const csvAnalyser = new CSVAnalyser("./files");
csvAnalyser
  .analyse()
  .then((res) => {
    console.log("emails en doubles", csvAnalyser.duplicatedEmails);
    console.log("emails uniques", csvAnalyser.uniquesEmails);
  })
  .catch((error) => console.log(error));

export default CSVAnalyser;
