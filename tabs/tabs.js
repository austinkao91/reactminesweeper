(function (React) {

var Tabs = React.createClass({
  getInitialState: function () {
    return { activeArticle: 0 };
  },
  clickHandler: function(index) {
    this.setState({ activeArticle: index } );
  },
  render: function () {
    var self = this;
    // debugger;
    var activeArticle = this.props.articleList.filter(function(article, idx) {
      return this.state.activeArticle === idx;
    }.bind(this))[0];
    // debugger;

    return (
      <div>
        <ul className="titles">
        {
          this.props.articleList.map(function(article, idx){
            if( article === activeArticle) {
              return <li onClick={ self.clickHandler.bind(self,idx) } ><b>{article.title}</b></li>;
            } else {
              return <li onClick={ self.clickHandler.bind(self,idx) } >{article.title}</li>;
            }
          })
        }
        </ul>

        <div className="content">
          Content: {activeArticle.body}
        </div>
      </div>
    );
  }
});

var articleList = [
  { title: "Cats",
    body: "breakfast likes to hang out with markov and curie" },
  { title: "Dogs",
    body: "max likes to hang out with clifford"},
  { title: "Onwers",
    body: "Billy walked max 5 times today"}
];

React.render(
  <Tabs articleList={articleList}/>,
  document.body
);

})(window.React);
