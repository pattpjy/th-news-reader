class CleanTitle {
  constructor(titleObj, index) {
    this.key = index;
    this.title = titleObj.title;
    this.section = titleObj.section;
    this.abstract = titleObj.abstract;
    this.url = titleObj.short_url;
    this.publication_date = titleObj.published_date; //dayjs
    try {
      this.thumbImg = titleObj.multimedia[2].url;
    } catch (err) {
      this.thumbImg = "no image";
    }
  }
}
//change all this in to a function and return an object

export default CleanTitle;
