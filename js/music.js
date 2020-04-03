// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isAdmin: false,
      avatar: null,
      isLoggedIn: true
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Nsync", thumb: "nsync.jpg", vidsource: "scoobydoo.mp4", description: "Bye.Bye.Bye." },
    ],

    videotitle: "video title goes here",
    vidsource: "",
    videodescription: "video description here",

    showDetails: false
  },

  methods: {
    setUserPrefs() {
      // this is the preferences control, hit the api when ready (or use a component)
      console.log('set user prefs here');
    },

    userLogin(){
      //call the login route, or load the login component 
      console.log('do login / logout on click');

      //this is a ternary statement -> shorthand for if / else
      // the expression evaluates to true or false - if it's true, set the value equal to 
      // the left of the colon. If it's false, set the value equal to the right
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    showMovieDetails({name, vidsource, description}) {
      // console.log('show these details: ', movie);

      this.videotitle = name;
      this.vidsource = vidsource;
      this.videodescription = description;

      //make the movie detials show up
      this.showDetails = true;
    }
  }
});
