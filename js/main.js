//指定DOM
var region = document.querySelector('#region');
var regionName = document.querySelector('.regionName');
var info = document.querySelector('.info');
var link = document.querySelectorAll('.link');

//監聽DOM
region.addEventListener('change', change, false);



//function
for (var i=0; i<link.length; i++){
    link[i].addEventListener('click',changZone,false);
}

function change() {
    var str = '';
    var records = data.result.records;
    for (var i = 0; i < records.length; i++) {
        if (region.value == records[i].Zone) {
            regionName.textContent = records[i].Zone

            var content =
                '<div class="contentBox">\
                    <div class="boxTop">\
                        <div class="boxInner">\
                            <div class="boxCover" style="background-image: url(' + records[i].Picture1 + ');">\
                            </div>\
                            <h3 class="left">'+ records[i].Name+'</h3>\
                            <h5 class="right">'+ records[i].Zone+'</h5>\
                        </div>\
                    </div>\
                    <div class="boxBottom">\
                        <p><img src="images/icons_clock.png">'+records[i].Opentime+'</p>\
                        <p><img src="images/icons_pin.png">'+records[i].Add+'</p>\
                        <p><img src="images/icons_phone.png" class="last">'+records[i].Tel+'</p>\
                        <span class="free"><img src="images/icons_tag.png">'+records[i].Ticketinfo+'</span>\
                    </div>\
                </div>';
            str += content;
        };
    };

    info.innerHTML = str;
}

function changZone(e){
    e.preventDefault()
    var str = '';
    var records = data.result.records;
    var href = this.getAttribute('href')
    for (var i=0 ; i<records.length; i++){
        if(href == records[i].Zone){
            var content =
                '<div class="contentBox">\
                    <div class="boxTop">\
                        <div class="boxInner">\
                            <div class="boxCover" style="background-image: url(' + records[i].Picture1 + ');">\
                            </div>\
                            <h3 class="left">'+ records[i].Name+'</h3>\
                            <h5 class="right">'+ records[i].Zone+'</h5>\
                        </div>\
                    </div>\
                    <div class="boxBottom">\
                        <p><img src="images/icons_clock.png">'+records[i].Opentime+'</p>\
                        <p><img src="images/icons_pin.png">'+records[i].Add+'</p>\
                        <p><img src="images/icons_phone.png" class="last">'+records[i].Tel+'</p>\
                        <span class="free"><img src="images/icons_tag.png">'+records[i].Ticketinfo+'</span>\
                    </div>\
                </div>';
            str += content;
        };
    };

    info.innerHTML = str;
}