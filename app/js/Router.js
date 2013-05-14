define([
  'joshlib!utils/woodman',
  'joshlib!vendor/backbone'
], function (woodman, Backbone) {
  var logger = woodman.getLogger('Router');

  var Router = Backbone.Router.extend({
    initialize: function(opt) {
      logger.info('initialize');
      this.appController = opt.appController;
      Backbone.Router.prototype.initialize.call(this);
    },

    setRoutes: function() {
      /**
      * WARNING : This configuration may become unstable.
      * Backbone.Router seems to rely on the order in
      * which the routes are defined to define their priority.
      * But, the routes are stored in an Object using keys —
      * meaning there is no actual order inside the object.
      * This mechanism actually relies on the JS engine
      * executing backbone, which although at the time
      * poses no problems could eventually become one.
      **/
      this.route('*path', 'default', this.defaultRoute);
      this.route('home', 'home', this.homeRoute);
      this.route('home/maps', 'maps', this.mapsRoute);
      this.route('home/live', 'live', this.liveRoute);
      this.route('conferences', 'conferences', this.conferencesRoute);
      this.route('discussions', 'discussions', this.discussionsRoute);
      this.route('about', 'about', this.aboutRoute);
    },

    defaultRoute: function() {
      logger.info('run default route');
      ga('send','pageview','#home');
      this.navigate('home', {
        trigger: true
      });
    },

    homeRoute: function () {
      logger.info('run home route');
      ga('send','pageview','#home');
      this.navigate('home', {
        trigger: true
      });
    },

    mapsRoute: function () {
      logger.info('run maps route');
      ga('send','pageview','#home/maps');
      this.navigate('#home/maps', {
        trigger: true
      });
    },

    liveRoute: function () {
      logger.info('run live route');
      ga('send','pageview','#home/live');
      this.navigate('#home/live', {
        trigger: true
      });
    },

    conferencesRoute: function () {
      logger.info('run conferences route');
      ga('send','pageview','#conferences');
      this.navigate('conferences', {
        trigger: true
      });
    },

    discussionsRoute: function () {
      logger.info('run discussions route');
      ga('send','pageview','#discussions');
      this.navigate('discussions', {
        trigger: true
      });
    },

    aboutRoute: function () {
      logger.info('run about route');
      ga('send','pageview','#about');
      this.navigate('about', {
        trigger: true
      });
    },

    /**
    * Routes define state objects which are then pushed
    * into the state stack.
    * params : URL parameters
    * viewOptions: object that's passed as param when
    * target view will be created or recovered
    **/
    // homeRoute: function() {
    //   logger.info('run home route');
    //   var stateObj = {
    //     params: {
    //       page: 'home'
    //     },
    //     viewOptions: {
    //       type: 'home',
    //       collection: new Backbone.Collection([
    //         new Backbone.Model({
    //           name: 'Home item !'
    //         })
    //       ]),
    //       itemTemplate: '<li><%=item.name%></li>'
    //     },
    //     depth: 0,
    //     title: 'Home Page !'
    //   };

    //   this.appController.setPageState(stateObj);
    // },

    // somePageRoute: function() {
    //   logger.info('run page route');
    //   var stateObj = {
    //     params: {
    //       page: 'page'
    //     },
    //     viewOptions: {
    //       type: 'someotherpage',
    //       collection: new Backbone.Collection([
    //         new Backbone.Model({
    //           name: 'Some Page item !'
    //         })
    //       ]),
    //       itemTemplate: '<li><%=item.name%></li>'
    //     },
    //     depth: 1,
    //     title: 'Some Other Page !'
    //   };

    //   this.appController.setPageState(stateObj);
    // }

    
  });

  return Router;
});