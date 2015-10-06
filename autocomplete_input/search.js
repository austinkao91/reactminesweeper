(function(React) {
var Search = React.createClass({
  getInitialState: function(){
    return {
      searchText: ""
    };
  },

  render: function() {
    var filteredNames = this.props.names;
    var searchText = this.state.searchText.trim().toLowerCase();
    filteredNames = filteredNames.filter(function(name) {
      return name.toLowerCase().match( searchText );
    });
    return (
      <div className='search-widget'>
        <input onChange={this.updateSearchText} type="text" value={this.state.searchText}></input>
        <ul>
          {
            filteredNames.map(function(name,idx) {
              return(
                <li key={idx}>{name}</li>
              );
            })
          }
        </ul>
      </div>
    );
  },

  updateSearchText: function(e) {
    this.setState({ searchText: e.target.value });
  }
});

var nameList = [
  "austin",
  "billy",
  "gizmo",
  "markov",
  "breakfast"
];

React.render(
  <Search names={nameList} />,
  document.body
);
})(window.React);
