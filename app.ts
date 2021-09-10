import FileManager from "./src/fileManager";
import EmailDuplicatesFinder from "./src/emailDuplicatesFinder";

class CSVAnalyser {
  constructor(private folder: string) {}

  async analyse() {
    const fileManager = new FileManager();

    const files = await fileManager.findFilesInFolder(this.folder);

    const text1 = await fileManager.read(`${this.folder}/${files[0]}`);
    const text2 = await fileManager.read(`${this.folder}/${files[1]}`);

    const emailDuplicateFinder = new EmailDuplicatesFinder();

    const emails1 = emailDuplicateFinder.findEmailsInText(text1);
    const emails2 = emailDuplicateFinder.findEmailsInText(text2);

    return emailDuplicateFinder.findDuplicatesEmails(emails1, emails2);
  }
}

const csvAnalyser = new CSVAnalyser("./files");
csvAnalyser.analyse().then((res) => console.log("emails en doubles", res));

export default CSVAnalyser;
