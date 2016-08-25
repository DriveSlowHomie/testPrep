namespace app.Controllers {
  export class HomeController {
    public song;
    public songs;

    constructor(
      private songService: app.Services.SongService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService
    ) {
      this.songs = this.songService.read();
    }

    // public get() {
    //   this.songs = this.songService.read();
    // }
    
    public submit() {
      // let list = {
      //   name: this.song.name
      // };

    this.songService.create(this.song).then((res) => {
    this.$state.go("Home");
    })
  }
}

  angular.module('app').controller('HomeController', HomeController);
}
