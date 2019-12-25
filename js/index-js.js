$(document).ready(function(){

    var data = [];

    var iterTime = 75;
    var swapTime = 500;

    var updateClr = function (arr){

        for (var k = 0; k < arr.length; k++) {
            $('#dBlock' + k).attr("style", "background-color: rgb(" + arr[k] * 10 + ", " + (arr[k] * 15) + ", " + (arr[k] * 20) + ");");

        }

    }

    var sleep = function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    var fillArr = function(data){

        $('#dSet').html("");

        for (var i = 0; i < 15; i++) {

            $('#dSet').append("<li class='dSetElem' id='dBlock" + i + "'><p id='d" + i + "'></p></li>");
            data[i] = (Math.floor(Math.random(0) * 9) + 1);

        }

        updateClr(data);
        for (var i = 0; i < data.length; i++) {
            $('#d' + i).html(data[i]);
        }
    }

    fillArr(data, iterTime);

    var bubbleSort = async function(arr){

        iterTime = (500 - document.getElementById('iterSpeed').value) * 10;

        if (iterTime < 0) {
            iterTime = 0;
        }

        for (var i = 0; i < arr.length; i++) {

            $('#dBlock' + i).attr("style", "box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.38); border-bottom: solid 5px #ffdd59; background-color: rgb(" + arr[i] * 10 + ", " + (arr[i] * 15) + ", " + (arr[i] * 20) + ");");
            
            for (var j = 0; j < arr.length; j++) {

                iterTime = (500 - document.getElementById('iterSpeed').value) * 10;

                if (iterTime < 0) {
                    iterTime = 0;
                }

                if (j != i){
                    $('#dBlock' + j).attr("style", "border-bottom: solid 5px #0be881; background-color: rgb(" + arr[j] * 10 + ", " + (arr[j] * 15) + ", " + (arr[j] * 20) + ");");
                }

                if (arr[j] > arr[i]) {

                    var temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;

                    $('#dBlock' + j).attr("style", "border-bottom: solid 5px #ef5777; background-color: rgb(" + arr[j] * 10 + ", " + (arr[j] * 15) + ", " + (arr[j] * 20) + ");");

                    await sleep(swapTime);

                    $('#d' + i).html(arr[i]);
                    $('#d' + j).html(arr[j]);

                }

                await sleep(iterTime);
                if (j != i) {
                    $('#dBlock' + j).attr("style", "border-bottom: solid 5px #fff; background-color: rgb(" + arr[j] * 10 + ", " + (arr[j] * 15) + ", " + (arr[j] * 20) + ");");
                    
                    $('#dBlock' + i).attr("style", "box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.38); border-bottom: solid 5px #ffdd59; background-color: rgb(" + arr[i] * 10 + ", " + (arr[i] * 15) + ", " + (arr[i] * 20) + ");");
                }

            }

            updateClr(arr);

        }

    }

    var selectionSort = async function(arr) {

        iterTime = (500 - document.getElementById('iterSpeed').value) * 10;

        if(iterTime < 0) {
            iterTime = 0;
        }

        for (var i = 0; i < arr.length; i++) {

            $('#dBlock' + i).attr("style", "box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.38); border-bottom: solid 5px #ffdd59; background-color: rgb(" + arr[i] * 10 + ", " + (arr[i] * 15) + ", " + (arr[i] * 20) + ");");

            var minInd = i;
            for (var j = i + 1; j < arr.length; j++) {

                iterTime = (500 - document.getElementById('iterSpeed').value) * 10;

                if(iterTime < 0) {
                    iterTime = 0;
                }

                $('#dBlock' + j).attr("style", "border-bottom: solid 5px #0be881; background-color: rgb(" + arr[j] * 10 + ", " + (arr[j] * 15) + ", " + (arr[j] * 20) + ");");

                if (arr[j] < arr[minInd]) {
                    minInd = j;
                }

                await sleep(iterTime);

            }

            var temp = arr[minInd];
            arr[minInd] = arr[i];
            arr[i] = temp;

            await sleep(swapTime);

            $('#d' + i).html(arr[i]);
            $('#d' + minInd).html(arr[minInd]);

            updateClr(arr);

        }

    }

    $('#genVal').click(function(){
        fillArr(data);
    });
    $('#bubbleSort').click(function(){
        bubbleSort(data);
    })
    $('#selectSort').click(function(){
        selectionSort(data);
    })

});