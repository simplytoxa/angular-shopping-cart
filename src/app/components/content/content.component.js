class ContentController{
  constructor($http) {
    $http({
      method: 'GET',
      url: 'http://www.json-generator.com/api/json/get/bHwJUxxovC?indent=2'
    }).then(response => {
      this.list = response.data;
    });

  }
}

ContentController.$inject = ["$http"];


export const ContentComponent = {
  templateUrl: 'app/components/content/content.html',
  controller: ContentController
};
