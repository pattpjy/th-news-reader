class CleanTitle {
  constructor(titleObj, index) {
    this.key = index;
    this.title = titleObj.title;
    this.section = titleObj.section;
    this.abstract = titleObj.abstract;
    this.url = titleObj.short_url;
    this.publication_date = titleObj.published_date; //dayjs
    this.thumbImg = titleObj.multimedia[2].url || "No Image"; //put image path
  }
}
//change all this in to a function and return an object

export default CleanTitle;
