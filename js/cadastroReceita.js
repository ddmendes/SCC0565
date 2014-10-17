var uploader = document.getElementById('uploader');
   
  /**
   * UPLOAD SCRIPT 
   * This script uses the UploadAtClick library to upload files on a webserver folder
   * using a PHP script ("upload/upload.php")
   * Project homepage: http://code.google.com/p/upload-at-click/
   */
    upclick(
    {
      element: uploader,
      action: 'upload/upload.php', 
      onstart:
  function(filename)
  {

    //alert('Start upload: '+filename);
      oncomplete:
  function(response_data) 
  {
    // Check upload Status
    if (response_data != "FAIL") {              
    // Draw the picture into Canvas     
    // "response_data" contains the image file name returned from the PHP script
    displayPicture("upload/" + response_data);
    }
  }