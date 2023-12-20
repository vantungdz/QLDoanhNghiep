class SearchController {
  index(req, res) {
    res.send("SEARCH");
  }
}

module.exports = new SearchController();
