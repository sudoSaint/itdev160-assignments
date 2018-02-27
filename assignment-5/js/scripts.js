(function(){
  var data = [
    {
      name: 'emmet',
      description: 'Emmet is the number one code snippet tool.',
      author: 'emmitio',
      url: 'https://atom.io/packages/emmet',
      downloads: 1662209,
      stars: 2534,
      selector: 'p1'
    },
    {
      name: 'atom-beautify',
      description: 'The atom-beautify package will clean up your code.',
      author: 'Glavin001',
      url: 'https://atom.io/packages/atom-beautify',
      downloads: 4228040,
      stars: 4541,
      selector: 'p2'
    }
  ];

  function Package(data) {
      this.name = data.name;
      this.description = data.description;
      this.author = data.author;
      this.url = data.url;
      this.downloads = data.downloads;
      this.stars = data.stars;
      this.selector = data.selector;

      this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
      }

      this.getFormattedStars = function () {
        return this.stars.toLocaleString();
      }
    }

    var getEl = function (id) {
      return document.getElementById(id);
    };

    var writePackageInfo = function (package, selector){
      var nameEl = getEl(selector + '-name'),
      descEl = getEl(selector + '-description'),
      authorEl = getEl(selector + '-author');

      nameEl.textContent = package.name;
      descEl.textContent = package.description;
      authorEl.textContent = package.author;
    };

  // date
  var today = new Date();
  var dateEl = document.getElementById('date');
  dateEl.textContent = today.toDateString();

  // load packages and write info to page
  var emmet = new Package(data[0]);
  writePackageInfo(emmet, 'p1');

  for (var i = 0; i < data.legnth; i++){
    var package = new Package(data[i]);
    writePackageInfo(package, package.selector)
  }

  //var p1Name = document.getElementById('p1-name');
  //p1Name.textContent = emmet.name;

}());
