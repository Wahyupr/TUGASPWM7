
const app = (() => {
// untuk menghubungkan antara constan app dengan yang ada di file index.php yaitu getImageName

  function getImageName(country) {
	  // fungsi ini dari penginisialisasian dari index.php agar saling terhung dengan data yang akan diambil 
		country	=	country.toLowerCase();
		var	promiseOfImageName	=	new	Promise(function(resolve,	reject)	{
				setTimeout(function()	{
						if	(country	===	'spain'	||	country	===	'chile'	||	country	===	'peru' )	{
								resolve(country	+	'.png');
						}	else	{
								reject(Error('Didn\'t	receive	a	valid	country	name!'));
						}
				},	1000);
		});
		/*membuat suatu perjanjian/promis dengan varable promiseOfImageName dengan fungsi perjanjian berhasil atau gagal 
		jika perjanjian tersebut berhasil atau terpenuhi , terpenuhi dari resolve(country + '.png' artinya inputan akan 
		di generat degan negara di tambah png yang artinya nama gambar jika gagal maka akan ditampilkan orror serta "'Didn\'t	receive	a	valid	country	name!" 
		*/
		console.log(promiseOfImageName);
		// dari fungsi diatas akan di tampilkan di console loge dengan promiseOfImageName
		return	promiseOfImageName;
		//kembali ke promiseOfImageName
  }		
   function isSpain(country) {

    // Optional - create and return a promise that resolves if input is "Spain"

  }

  function flagChain(country) {
	  
	return	getImageName(country)
	//mengambil gambar nama dengan country
	.catch(fallbackName)
	//jika gagal mengambil gambar  maka ke  fungsi falbackName 
	.then(fetchFlag)
	// jika benar akan fitch bendera 
	.then(processFlag)
	//memproses bendera 
	.then(appendFlag)
	.catch(logError);
	


  }

  function allFlags(promiseList) {

    // use promise.all

  }


  // call the allFlags function


  // use Promise.race


  /* Helper functions */

  function logSuccess(result) {
    console.log('Success!:\n' + result);
  }

  function logError(err) {
    console.log('Oh no!:\n' + err);
  }

  function returnFalse() {
    return false;
  }

  function fetchFlag(imageName) {
    return fetch('flags/' + imageName); 
  }

  function processFlag(flagResponse) {
    if (!flagResponse.ok) {
      throw Error('Bad response for flag request!'); 
    }
    return flagResponse.blob(); 
	// jika flagresponse nya ok atau benar maka data di ganti dengan bentuk blob
  }

  function appendFlag(flagBlob) {
    const flagImage = document.createElement('img');
    const flagDataURL = URL.createObjectURL(flagBlob);
    flagImage.src = flagDataURL;
    const imgContainer = document.getElementById('img-container');
    imgContainer.appendChild(flagImage);
    imgContainer.style.visibility = 'visible';
	// menampilkan bendera
  }

  function fallbackName() {
    return 'chile.png';
  }

  // Don't worry if you don't understand this, it's not part of Promises.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    getImageName: (getImageName),
    flagChain: (flagChain),
    isSpain: (isSpain),
    fetchFlag: (fetchFlag),
    processFlag: (processFlag),
    appendFlag: (appendFlag),
    allFlags: (allFlags)
  };

})();
