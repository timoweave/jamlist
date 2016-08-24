Polymer({
  is: 'jam-app',
  properties: {
    page: {
      type: String,
      reflectToAttribute: true,
      observer: '_pageChanged'
    }
  },
  observers: [
    '_routePageChanged(routeData.page)'
  ],

  _routePageChanged: function(page) {
    this.page = page || 'song-list';
  },

  _pageChanged: function(page) {
    // load page import on demand.
    this.importHref(
      this.resolveUrl('jam-' + page + '.html'), null, null, true);
  }

});

