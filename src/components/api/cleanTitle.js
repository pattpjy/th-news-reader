import dayjs from "dayjs";

class CleanTitle {
  constructor(titleObj, index) {
    this.key = index;
    this.title = titleObj.title;
    this.section = titleObj.section;
    this.abstract = titleObj.abstract;
    this.url = titleObj.short_url;
    this.publication_date = dayjs(titleObj.published_date).format("MM/DD/YYYY");
    try {
      this.thumbImg = titleObj.multimedia[2].url;
    } catch (err) {
      this.thumbImg = "/no-image-default.jpeg";
    }
  }
}
//change all this in to a function and return an object

export default CleanTitle;
