class CleanTitle {
  constructor(titleObj) {
    this.id = Date.now();
    this.name = titleObj.title;
    this.section = titleObj.section;
    this.abstract = titleObj.abstract;
    this.url = titleObj.short_url;
    this.publication_date = titleObj.published_date;
    this.thumbImg = titleObj.multimedia[2].url || "Not Available";
  }
}

export default CleanTitle;
