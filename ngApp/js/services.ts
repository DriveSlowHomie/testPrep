namespace app.Services {

  export class SongService {
    public SongResource;

    constructor(
      private $resource: ng.resource.IResourceService
    ){
      this.SongResource = $resource('/routes/songs')
    }

    public create(song){
      console.log(`This is services: ${song}`)
      return this.SongResource.save(song).$promise
    }

    public read(){
      console.log("READMEEEEEE")
      return this.SongResource.query()
    }
  }

  angular.module('app').service('songService', SongService)

}
