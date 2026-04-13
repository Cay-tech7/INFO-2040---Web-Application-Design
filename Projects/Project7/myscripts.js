

                PrintButton1 = new Image
                PrintButton2 = new Image
                logo1 = new Image
                logo2 = new Image
                    if (document.images) {
                        PrintButton1.src = "Background/PrintPage.png"
                        PrintButton2.src = "Background/PrintPageAlt.png"
                        logo1.src = "Images/ExtremeHoneymoonsLogo.png"
                        logo2.src = "Images/ExtremeHoneymoonsLogoAlt.png"
                    }


                    var imgArray = new Array(
                        'CoupleBike1Lg.jpg',
                        'CoupleHikingLg.jpg',
                        'SkiCouple3Lg.jpg',
                        'CoupleCampingLg.jpg'
                    );


                    var titleArray = new Array(
                        'Mountain Biking',
                        'Lovely Hike',
                        'Downhill Skiing',
                        'Camping in the Woods'    
                    );
                        
                    var imgPath = "Honeymoon/";
                    
                    function swapImage(imgID) {

                        var theImage = document.getElementById('theImage');
                        var textDiv = document.getElementById('bottomText');

                        var newImg;
                        var textTitle;

                        newImg = imgArray[imgID];
                        theImage.src = imgPath + newImg;

                        textTitle=titleArray[imgID];

                            textDiv.innerHTML = textTitle;
                    }
                        
                    function preloadImages() {		
                        for(var i = 0; i < imgArray.length; i++) {
                            var tmpImg = new Image;
                            tmpImg.src = imgPath + imgArray[i];
                        }
                    }
                    